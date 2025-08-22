"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

interface ErrorData {
  id: string;
  title: string;
  solution: string;
  codesnippet: string;
  tag: string;
  createdAt: string;
  status: string;
}

const Page = () => {
  const { data: session } = authClient.useSession();
  const [errors, setErrors] = useState<ErrorData[]>([]);
  const [loading, setLoading] = useState(true);

  if(!session){
    redirect("/")
  }

  useEffect(() => {
    if (session?.user?.id) {
      fetchErrors();
    }
  }, [session?.user?.id]);

  const fetchErrors = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/getdata", {
        id: session?.user.id
      });
      setErrors(response.data.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrors([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete("/api/delete", {
        data: { id: id }
      });
      // Refresh the data after deletion
      fetchErrors();
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  

  return (
    <span className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {loading? (<div className="flex items-center justify-center relative left-[30rem] top-80 ">
        <h1 className="text-lg"> Getting data ... </h1>
      </div>):
      " "
      }

      {errors.map((error) => (
        <Card
          key={error.id}
          className="relative backdrop-blur-md border border-white/10 shadow-xl rounded-2xl hover:scale-[1.01] transition-all"
        >
          <CardContent className="overflow-auto no-scrollbar">
            <h1 className="text-xl font-bold dark:text-white">{error.title}</h1>

            <div className="flex flex-col mt-2">
              <p className="font-semibold text-sm">Solution:</p>
              <p className="text-sm mt-2 px-5">{error.solution}</p>
            </div>

            <div
              className="dark:bg-yellow-200/5 bg-neutral-800 p-2 rounded-lg text-sm overflow-auto no-scrollbar"
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
                  height: 300,
                  margin: 2,
                  padding: 5,
                  fontSize: "1rem",
                  background: "transparent",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
                wrapLongLines={true}
              >
                {error.codesnippet}
              </SyntaxHighlighter>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 justify-between">
              <Badge className="bg-yellow-400/20 text-yellow-900 dark:text-white">
                {error.tag}
              </Badge>
              <Badge className="text-gray-400 bg-yellow-400/10">
                {new Date(error.createdAt).toLocaleDateString("en-US")}
              </Badge>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-4 justify-between items-center text-sm">
                <Badge
                  className={`${
                    error.status === "Resolved"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {error.status}
                </Badge>

                <Button
                  onClick={() => handleDelete(error.id)}
                  variant={"outline"}
                  size={"sm"}
                >
                  Delete
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </span>
  );
};

export default Page;