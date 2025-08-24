"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const Page = () => {
  const Router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const ref = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi, how can I help you today?", isUser: false },
    { id: 2, text: "Hey, I'm having trouble with my account.", isUser: true },
    { id: 3, text: "What seems to be the problem?", isUser: false },
    { id: 4, text: "I can't log in.", isUser: true },
  ]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [messages]);

  if (isPending) return <></>;

  if (!session) Router.push("/");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputValue,
        isUser: true,
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSendMessage();
  };

  return (
    <div className="min-h-[70vh] px-4 sm:px-6 lg:px-10 animate-in slide-in-from-bottom-4 duration-600">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center lg:text-left">
        📊 Your Dashboard
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Card className="flex-1 dark:bg-blue-300 dark:text-black bg-blue-200 text-black hover:scale-105 transition-all">
              <CardHeader>
                <CardTitle>Solved Errors</CardTitle>
                <p className="text-xs text-gray-600">Number of errors you have solved:</p>
              </CardHeader>
              <CardContent className="h-[4rem]">
              </CardContent>
            </Card>

            <Card className="flex-1 dark:bg-amber-100 dark:text-black bg-amber-100 text-black hover:scale-105 transition-all">
              <CardHeader>
                <CardTitle className="text-lg">Most Frequent Errors</CardTitle>
                <p className="text-xs  text-gray-500 ">Most frequent errors you've solved:</p>
              </CardHeader>
              <CardContent >
              </CardContent>
            </Card>
          </div>

          <Card className="dark:bg-pink-400/20 h-[25rem] dark:text-white bg-neutral-100 text-black hover:scale-102 transition-all">
            <CardHeader>
              <CardTitle>Recent Errors</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Your recent added errors ...</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col h-[37rem] bg-neutral-200 dark:bg-amber-200/10 rounded-xl border dark:border-neutral-800 animate-in slide-in-from-bottom-4 duration-600 delay-200">
          
          <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold">Ask AI to Summarize</h2>
                <p className="text-sm text-gray-400">
                  Use AI to summarize all your errors
                </p>
              </div>
            </div>
          </div>

          
          <div
            ref={ref}
            className="flex-1 overflow-y-auto p-6 space-y-4 "
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isUser ? "justify-end" : "justify-start"
                } animate-in slide-in-from-bottom-4 duration-600`}
              >
                <div
                  className={`max-w-[75%] sm:max-w-xs lg:max-w-md px-4 py-2 text-sm rounded-2xl ${
                    message.isUser
                      ? "bg-amber-100 text-gray-900"
                      : "bg-gray-700 text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          
          <div className="p-2 border-t border-neutral-100 dark:border-neutral-800">
            <div className="flex items-center gap-2 px-4 py-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border-neutral-200 focus:ring-0 focus:outline-none"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                variant="ghost"
                className="rounded-full w-8 h-8 text-gray-400 hover:text-white hover:bg-gray-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind keyframes for animation */}
      
    </div>
  );
};

export default Page;
