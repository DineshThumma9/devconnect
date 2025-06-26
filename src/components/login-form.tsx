import {cn} from "@/lib/utils.ts"
import {Button} from "@/components/ui/button.tsx"
import {Input} from "@/components/ui/input.tsx"
import {Label} from "@/components/ui/label.tsx"
import CredtionalsButton from "@/components/CredtionalsButton.tsx";
import {useState} from "react";
import {loginUser} from "@/api/authClient.ts";
import {useNavigate} from "react-router-dom";
import useInitStore from "@/store/initStore.ts";
import useAuthStore from "@/store/authStore.ts";


export function LoginForm({ className, ...props }: React.ComponentProps<"form">) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAccessToken, setRefreshToken } = useAuthStore();
    const { setUserEmail } = useInitStore();
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await loginUser({ email, password });
            if (res.success) {
                setAccessToken(res.data.accessToken);
                setRefreshToken(res.data.refreshToken);
                setUserEmail(email);
                navigate("/app");
            } else {
                throw new Error("Login failed");
            }
        } catch (err) {
            console.error("Login error:", err);
        }
    };

    return (
        <form onSubmit={handleLogin} className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Login to your account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Enter your email below to login to your account
                </p>
            </div>
            <div className="grid gap-6">
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
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                    </div>
                    <Input
                        id="password"
                        type="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                        Forgot your password?
                    </a>
                </div>
                <Button type="submit" className="w-full">
                    Submit
                </Button>
                <CredtionalsButton login_signup="login" do_dont="Don't have an account?  " route="/register" />
            </div>
        </form>
    );
}
