import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import {z} from "zod"


const prompt_message = z.object({
    message: z.string().min(1 , "input must required").max(100 , "word limits exceeds")
})

export async function POST(req:NextRequest){

    const body = await req.json()
    
    const verifieddata = prompt_message.safeParse(body)
    if(!verifieddata.success){
        return NextResponse.json({
            "message":"Please send the Prompt "
        })
    }


    const openai = new OpenAI({
        apiKey: process.env.GEMINI_API_KEY,
        baseURL: process.env.BASEURL
    });

    try {
        
        const response = await openai.chat.completions.create({
            model: "gemini-2.0-flash",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                {
                    role: "user",
                    content: verifieddata.data.message ,
                },
            ],
        });
        
        return NextResponse.json({
            message:response.choices[0].message
        })
    } catch (error) {
        return NextResponse.json({
            message:"there is some error ",
            error
        })
    }
    
    
}