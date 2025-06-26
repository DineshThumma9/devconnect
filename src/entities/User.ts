import {z} from "zod";


export const UserRequest = z.object({

    username: z.string(),
    name: z.string(),
    email: z.string(),
    password: z.string(),
    profile_pic: z.string().optional()


})


export const UserResponse = z.object({

    name: z.string(),
    username: z.string(),
    email: z.string(),
    profile_pic: z.string().optional(),
})


