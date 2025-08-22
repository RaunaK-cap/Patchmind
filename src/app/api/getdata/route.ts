import { prismaclient } from "@/lib/db"

import { NextRequest, NextResponse } from "next/server"

export async  function POST(req:NextRequest){   
    const body = await req.json() 

    if(!body.id){
        return NextResponse.json({
            message:"userid not found . please try again"
        })
    }
        try{
            const data = await prismaclient.trackingdata.findMany({
                where:{ userid : body.id}
               
            })
            return NextResponse.json({
                messgae:"your all data ",
                data
            })
        }catch(e){
            return NextResponse.json({
                message:"there's error ",

            })
        }
    return   
}