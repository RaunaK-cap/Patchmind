import { auth } from "@/lib/auth";
import { prismaclient } from "@/lib/db";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export  async function DELETE(req:NextRequest){
    

    const body = await req.json()
    try {
        await prismaclient.trackingdata.delete({
            where:{
                id:body.id
            }
        })
        return NextResponse.json({
            message:"msg has been deleted "
        })
    } catch (error) {
        return NextResponse.json({
            message:" Error while deleting "
        })
    }
}