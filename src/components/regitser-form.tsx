import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import CredtionalsButton from "@/components/CredtionalsButton.tsx";
import {useState} from "react";
import {register} from "@/api/authClient.ts";
import useAuthStore from "@/store/authStore.ts";
import {useNavigate} from "react-router-dom";
import useInitStore from "@/store/initStore.ts";




export function RegisterForm({
                                 className,
                                 ...props
                             }: React.ComponentProps<"form">) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const { setAccessToken, setRefreshToken } = useAuthStore();
    const { setUserEmail } = useInitStore();
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirm) {
            console.error("Passwords do not match");
            return;
        }

        try {
            const res = await register(username,password,email);
            if (res?.accessToken && res?.refreshToken) {
                setAccessToken(res.accessToken);
                setRefreshToken(res.refreshToken);
                setUserEmail(email);
                navigate("/app");
            } else {
                throw new Error("Registration failed");
            }
        } catch (err) {
            console.error("Register error:", err);
        }
    };

    return (
        <form onSubmit={handleRegister} className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Register your account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Enter your credentials to create a new account
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="username">Username</Label>
                    <Input
                        id="username"
                        type="text"
                        placeholder="user"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="confirm">Confirm Password</Label>
                    <Input
                        id="confirm"
                        type="password"
                        placeholder="confirm password"
                        required
                        onChange={(e) => setConfirm(e.target.value)}
                    />
                </div>
                <Button type="submit" className="w-full">
                    Submit
                </Button>
                <CredtionalsButton login_signup="signup" do_dont="Do have an account" route="/login" />
            </div>
        </form>
    );
}
