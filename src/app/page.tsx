"use client"
import { Themetoggler } from "@/components/Theme-toggler";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";


export default function Home() {
  return (
    <div className="font-sans grid  items-center justify-items-center relative top-24 gap-2">
      <Themetoggler/>
     <Button onClick={()=> redirect("/login")}> Get started </Button>
    </div>
  );
}
