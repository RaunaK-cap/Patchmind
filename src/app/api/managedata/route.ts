import { NextRequest, NextResponse } from "next/server";
import { managedataschema } from "../../../../zodschema/managedata";
import { prismaclient } from "@/lib/db";
 // path to your Better Auth server instance
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function POST(req:NextRequest ){
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })

    console.log(session) //will add this later on 

    const data = await req.json()
    const verifieddata = managedataschema.safeParse(data)
    if(!verifieddata.success){
        return NextResponse.json({
            message:"Enter valid syntax. please try again"
        })
    }
    console.log(verifieddata.data)
    try{
        await prismaclient.trackingdata.create({
            data:{
                userid:verifieddata.data.userid,
                title:verifieddata.data.title,
                solution:verifieddata.data.solution,
                codesnippet:verifieddata.data.codesnippet,
                status:verifieddata.data.status,
                tag:verifieddata.data.tag,   
            }
        })
        return NextResponse.json({
            message:"data has been stored successfully .."
        })
    }catch(error){
        console.log(error)
                return NextResponse.json({
                    message:"there's error , please try again "
                })
    }
    
} 