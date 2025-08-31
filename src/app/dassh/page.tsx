"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type React from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, BarChart3, TrendingUp, Sparkles, Activity } from "lucide-react";
import axios from "axios";
import { Badge } from "@/components/ui/badge";


interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

interface DBDATA {
  id: string;
  title: string;
  solution: string;
  codesnippet: string;
  tag: string;
  createdAt: string;
  status: string;
}

const Page = () => {
  const Router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const ref = useRef<HTMLDivElement>(null);
  const [ErrCount, setErrCount] = useState();
  const [dbdata, setdbdata] = useState<DBDATA[]>([]);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi, how can I help you ?", isUser: false },
  ]);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    async function fetchdata() {
      const response = await axios.post("/api/getdata", {
        id: session?.user.id,
      });
      setErrCount(response.data.data.length);
      setdbdata(response.data.data);  
    }


    if (session?.user?.id) {
      fetchdata();
    }
  }, [session?.user?.id]);

  if (isPending) return <> <div>
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 animate-pulse">
      
      <div className="grid grid-cols-1 gap-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <div className="bg-zinc-900 rounded-2xl p-4 space-y-4">
          <div className="h-5 w-32 bg-zinc-700 rounded"></div>
          <div className="h-3 w-48 bg-zinc-800 rounded"></div>
          <div className="h-16 w-16 bg-zinc-700 rounded-lg"></div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-4 space-y-4">
          <div className="h-5 w-40 bg-zinc-700 rounded"></div>
          <div className="flex gap-2">
            <div className="h-6 w-12 bg-zinc-700 rounded-full"></div>
            <div className="h-6 w-12 bg-zinc-700 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 rounded-2xl p-4 col-span-1 lg:col-span-2">
        <div className="h-5 w-40 bg-zinc-700 rounded mb-4"></div>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex justify-between items-center gap-4 border-b border-zinc-800 pb-2"
            >
              <div className="h-4 w-24 bg-zinc-700 rounded"></div>
              <div className="h-6 w-20 bg-zinc-800 rounded-full"></div>
              <div className="h-6 w-20 bg-zinc-700 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
      </div>

      <div className="bg-zinc-900 rounded-2xl p-4 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="h-5 w-40 bg-zinc-700 rounded"></div>
          <div className="h-3 w-56 bg-zinc-800 rounded"></div>
          <div className="h-10 w-full bg-zinc-800 rounded"></div>
        </div>
        <div className="flex mt-4 gap-2">
          <div className="flex-1 h-10 bg-zinc-800 rounded-xl"></div>
          <div className="h-10 w-10 bg-zinc-700 rounded-full"></div>
        </div>
      </div>

      
    </div>
    </div></>;
  if (!session) Router.push("/");

  const handleSendMessage = async () => {
    const prompt = inputValue.trim() ;
    if (!prompt) return;

    const userMsg: Message = {
      id: messages.length + 1,
      text: prompt,
      isUser: true,
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");

    try {
      const response_data = await axios.post("/api/llm", { message: prompt });
      const aiText = response_data.data?.message?.content ?? "API is not avialabel ";

      const llmMsg: Message = {
        id: userMsg.id + 1,
        text: aiText,
        isUser: false,
      };
      setMessages(prev => [...prev, llmMsg]);
    } catch {
      const errMsg: Message = {
        id: userMsg.id + 1,
        text: "Error calling AI",
        isUser: false,
      };
      setMessages(prev => [...prev, errMsg]);
    }
  };
 

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSendMessage();
  };

  

  return (
    <div className="min-h-[70vh] px-4 sm:px-6 lg:px-10 bg-gradient-to-br from-background via-background/95 to-muted/20 animate-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 border border-primary/20 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:scale-105">
            <BarChart3 className="w-6 h-6 text-primary" />
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse shadow-lg" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            
            Your Dashboard
          </h1>
          <p className="text-muted-foreground font-medium">
            Monitor and track your error solutions
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Card className="flex-1 group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-gradient-to-br from-blue-50 via-blue-100/80 to-blue-200/60 dark:from-blue-900/20 dark:via-blue-800/10 dark:to-blue-700/5">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 right-4 p-2 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 group-hover:scale-110 transition-transform duration-300">
                <Activity className="w-4 h-4 text-blue-600" />
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-blue-900 dark:text-blue-100 font-bold">
                  Solved Errors
                </CardTitle>
                <p className="text-xs text-blue-700/80 dark:text-blue-300/80 font-medium">
                  Number of errors you have solved:
                </p>
              </CardHeader>
              <CardContent className="h-[4rem] text-2xl relative z-10 flex items-center">
                <Badge
                  variant={"outline"}
                  className="text-2xl px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/40 dark:to-blue-800/20 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-600 shadow-sm hover:shadow-md transition-all duration-300 font-bold"
                >
                  {ErrCount}
                </Badge>
              </CardContent>
            </Card>

            <Card className="flex-1 group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-gradient-to-br from-amber-50 via-amber-100/80 to-amber-200/60 dark:from-amber-900/20 dark:via-amber-800/10 dark:to-amber-700/5">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 right-4 p-2 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-4 h-4 text-amber-600" />
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-lg text-amber-900 dark:text-amber-100 font-bold">
                  Most Frequent Errors
                </CardTitle>
                <p className="text-xs text-amber-700/80 dark:text-amber-300/80 font-medium">
                  Most Recent errors you have solved:
                </p>
              </CardHeader>
              <CardContent className="flex items-center gap-4 relative z-10">
                {dbdata.slice(0, 2).map((data) => (
                  <Badge
                    key={data.id}
                    className="px-4 py-2 bg-gradient-to-r from-amber-100 to-amber-100 dark:from-amber-900/60 dark:to-amber-800/40 text-amber-900 dark:text-amber-100 border-amber-300 dark:border-amber-600 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 font-medium"
                  >
                    {data.tag}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-[25rem] bg-gradient-to-br from-card via-card/98 to-muted/10 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="relative z-10 border-b border-border/20">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="font-bold text-lg">
                    Recent Errors
                  </CardTitle>
                  <p className="text-xs text-muted-foreground font-medium">
                    Your recent added errors ...
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="bg-gradient-to-r from-primary/10 to-primary/5 text-primary border-primary/30 font-medium"
                >
                  {dbdata.slice(0, 5).length} Total
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="relative z-10 p-0 mx-4">
              <Table>
                <TableCaption className="text-muted-foreground/60">
                  ............
                </TableCaption>
                <TableHeader>
                  <TableRow className="border-border/10 hover:bg-muted/20 transition-colors duration-300">
                    <TableHead className="font-bold">Title</TableHead>
                    <TableHead className="font-bold">Status</TableHead>
                    <TableHead className="font-bold">Tag</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dbdata.slice(0, 5).map((data, index) => (
                    <TableRow
                      key={data.id}
                      className="border-border/5 hover:bg-gradient-to-r hover:from-muted/15 hover:to-transparent transition-all duration-300 group/row"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-200 to-blue-700 animate-pulse" />
                          <Badge
                            variant={"outline"}
                            className="group-hover/row:border-primary/40 group-hover/row:text-primary transition-all duration-300 font-medium"
                          >
                            {data.title}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            data.status === "resolved" ? "default" : "secondary"
                          }
                          className={`${
                            data.status === "resolved"
                              ? "bg-gradient-to-r from-green-100 to-green-50 dark:from-green-900/40 dark:to-green-900/20 text-green-800 dark:text-green-200 border-green-300 dark:border-green-700"
                              : "bg-gradient-to-r from-yellow-100 to-yellow-50 dark:from-yellow-900/40 dark:to-yellow-900/20 text-yellow-800 dark:text-yellow-200 border-yellow-300 dark:border-yellow-700"
                          } transition-all duration-300 font-medium shadow-sm`}
                        >
                          {data.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className="transition-all duration-300 font-medium">
                          {data.tag}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col h-[37rem] group relative overflow-hidden border-0 shadow-2xl rounded-xl bg-gradient-to-br from-card via-card/98 to-accent/5 backdrop-blur-sm transition-all duration-500 hover:shadow-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="flex items-center justify-between p-4 border-b border-border/20 bg-gradient-to-r from-card/95 to-muted/10 backdrop-blur-sm relative z-10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="w-10 h-10 border-2 border-accent/20 shadow-lg">
                  <AvatarFallback className="bg-gradient-to-br from-accent/20 via-accent/15 to-accent/10 dark:text-white text-black font-bold">
                    AI
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-yellow-500 rounded-full animate-pulse shadow-lg" />
              </div>
              <div>
                <h2 className="font-semibold flex items-center gap-2">
                  Ask AI to Summarize
                  <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                </h2>
                <p className="text-sm text-muted-foreground font-medium">
                  Use AI to summarize all your errors
                </p>
              </div>
            </div>
          </div>

          <div
            ref={ref}
            className="flex-1 overflow-y-auto p-6 space-y-4 relative z-10"
          >
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isUser ? "justify-end" : "justify-start"
                } animate-in slide-in-from-bottom-4 duration-500`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`max-w-[75%] sm:max-w-xs lg:max-w-md px-4 py-3 text-sm rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 font-medium ${
                    message.isUser
                      ? "bg-gradient-to-br from-amber-100 via-amber-50 to-amber-100/80 text-amber-900 border border-amber-200 dark:from-amber-900/30 dark:via-amber-800/20 dark:to-amber-900/30 dark:text-amber-100 dark:border-amber-700"
                      : "bg-gradient-to-br from-muted via-muted/90 to-muted/80 text-foreground border border-border/40 backdrop-blur-sm"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-border/20 bg-gradient-to-r from-card/95 via-card/98 to-muted/5 backdrop-blur-sm relative z-10">
            <div className="flex items-center gap-3">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border-border/30 bg-background/90 backdrop-blur-sm focus:border-primary/50 focus:ring-primary/20 transition-all duration-300 rounded-xl shadow-sm font-medium"
              />
              <Button
                onClick={handleSendMessage}

                
                size="icon"
                className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 hover:from-primary/95 hover:via-primary/90 hover:to-primary/85 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
