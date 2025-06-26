import {z} from "zod";
import {UserResponse} from "@/entities/User.ts";



export const ProjectRequestSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    techRequirements: z.array(z.string()).min(1, "At least one tech requirement is required"),
    isPrivate: z.boolean().optional().default(false),
    githubLink: z.string().url("Invalid GitHub link").optional(),

});

export const ProjectResponse = z.object({
    title:z.string(),
    description:z.string(),
    techRequirements: z.array(z.string()).min(1, "At least one tech requirement is required"),
    githubLink: z.string().url("Invalid GitHub link").optional(),
    currentContributers:z.array(UserResponse).optional()

})

export type ProjectRequest = z.infer<typeof ProjectRequestSchema>;
