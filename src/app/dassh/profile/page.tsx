"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authClient } from "@/lib/auth-client";
import { logout } from "../layout";
import { redirect } from "next/navigation";


const Page = () => {
  const [ userAPI , setuserAPI] = useState("")
  const { data: session } = authClient.useSession();
  if(!session){
        redirect("/")
  }

    async function Submit(){
        console.log("data send" , userAPI)
        // call your backend here 
    } 
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Account Info </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={`${session?.user.image}`} />
                <AvatarFallback>PM</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <Label className="text-lg">Name</Label>
              <p className="text-sm text-neutral-500"> {session?.user.name}</p>
            </div>
            <div>
              <Label className="text-lg">Email</Label>
              <p className="text-sm text-neutral-500"> {session?.user.email}</p>
            </div>
            <div>
              <Label className="text-lg">Created at : </Label>
              <p className="text-sm text-neutral-500">
                {" "}
                {session?.user.createdAt.toDateString()}
              </p>
            </div>

            <Button onClick={logout} className="rounded-xl w-full">
              Logout
            </Button>
          </CardContent>
        </Card>

        <Card className=" rounded-2xl">
          <CardHeader>
            <CardTitle>API & Preferences</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label>Enter your own API </Label>
              <Input
              value={userAPI}
              onChange={(e)=>{setuserAPI(e.target.value)}}
              type="password" placeholder="sk-..." />
              <Button onClick={Submit} disabled className="rounded-xl w-full ">Save</Button>
            </div>
            <div>
              <CardContent className=" bg-blue-200/10 h-[8rem] rounded-xl p-4">
                <h1 className="text-lg">Note:</h1>
                <Label className="text-neutral-500 mt-2">
                     Unavailabel Right now
                </Label>
              </CardContent>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Page;
