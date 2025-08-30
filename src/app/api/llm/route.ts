import { prismaclient } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { LLM_prompt_message } from "../../../../zodschema/managedata";
import { headers } from "next/headers"
import { auth } from "@/lib/auth";

export async function POST(req: NextRequest) {

    const session = await auth.api.getSession({
        headers: await headers() 
    })
    

    const DBdata = await prismaclient.trackingdata.findMany({
        where:{
            userid:session?.user.id
        },      
        take: 2,
        select: {
            title: true,
            solution: true,
            tag: true,
            status: true,
            createdAt: true
        }

    })

    console.log(DBdata)

    const userdata = JSON.stringify(DBdata)

    const body = await req.json()

    const verifieddata = LLM_prompt_message.safeParse(body)
    
    if (!verifieddata.success) {
        return NextResponse.json({
            "message": "Please send the Prompt "
        })
    }
    
    const openai = new OpenAI({
        
        apiKey:body.User_API ? body.User_API: process.env.GEMINI_API_KEY,
        baseURL: process.env.BASEURL 
    });

    const LLM_Role = ` you're assistant of my project called patchmind, which simply tracks your errors that you have solved yet so that you won't forget frquently , The Role of your is too give answer to user based on user data , you will recieve user data along with question and based on that you've to answer it and keep your answer in shorter way , so here your data : ${userdata}, so whenever user ask anything related to his data you gotta give answer based  user data in point wise. if you dont find any data then simple data is not present and  don't give to much context.keep in mind don't send this context things to user `
    try {

        const response = await openai.chat.completions.create({
            model: "gemini-2.0-flash",
            messages: [
                { role: "system", content: LLM_Role },
                {
                    role: "user",
                    content: verifieddata.data.message,
                },
            ],
        });

        return NextResponse.json({
            message: response.choices[0].message
        })
    } catch (error) {
        return NextResponse.json({
            message: "there is some error ",
            error
        })
    }


}