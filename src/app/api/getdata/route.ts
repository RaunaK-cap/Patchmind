import { prismaclient } from "@/lib/db"

import { NextRequest, NextResponse } from "next/server"

export async  function GET(){    
        try{
            const data = await prismaclient.trackingdata.findMany({
               
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