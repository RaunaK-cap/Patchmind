import {  z } from "zod";

export const managedataschema = z.object({
    userid :z.string().min(1 , "userid must required"),
    title : z.string().min(2 , "title must required "),
    codesnippet : z.string().min(2 , "snippet must required"),
    solution: z.string().min(2 , "solution must required"),
    status: z.string().min(1 , "status must required"),
    tag:z.string().min(1, "status must required")
})


export const LLM_prompt_message = z.object({
    message: z.string().min(1, "input must required").max(100, "word limits exceeds")
})