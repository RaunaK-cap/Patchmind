
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import React from "react";
import { auth } from "@/lib/auth";
import { prismaclient } from "@/lib/db";
import { headers } from "next/headers";



const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})

  const errors  = await prismaclient.trackingdata.findMany({
    where:{
      userid:session?.user.id
    }
  });
  


  return (
    <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {errors.map((error ) => (
        <Card key={error.id} className="rounded-lg h-[30rem] p-2 overflow-x-hidden ">
          <CardHeader >
            <CardTitle className="text-2xl font-bold"> {error.title}</CardTitle>
            <div className="flex flex-col mt-2 ">
            <p className="font-semibold text-sm"> Solution: </p>
            <p className="text-sm mt-2 px-5">{error.solution}</p>
            </div>
          </CardHeader>
          <CardContent className="">
            <div
              className=" dark:bg-yellow-200/5 bg-neutral-800 p-2  h-[80rem]  rounded-lg text-sm overflow-y-hidden overflow-x-hidden "
              style={{
                maxHeight: "16rem",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              <SyntaxHighlighter
                
                language="javascript"
                style={vscDarkPlus}
                customStyle={{
                  height:300,
                  margin: 4,
                  padding: 5,
                  fontSize: "1rem",
                  background: "transparent",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  overflowX: "visible",
                  font:"bold",// prevent X scroll
                }}
                wrapLongLines={true}
              >
                {error.codesnippet}
              </SyntaxHighlighter>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <Badge> {error.tag}</Badge>
            </div>

            {/* Status + Button */}
            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-4">
              <Badge
                className={`${
                  error.status === "Resolved"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {error.status}
              </Badge>
              <Badge>
                {error.createdAt.toLocaleDateString("en-US")}
              </Badge>

              </div>
              <div className="flex items-center ">
                <Button size="sm" variant="outline">
                  Delete
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default page;
