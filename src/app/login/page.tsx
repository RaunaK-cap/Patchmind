import {  GalleryVerticalEnd,  } from "lucide-react"

import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh  font-sans bg-[url('/loginpt.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col  p-6 md:p-10 bg-neutral-100/5 backdrop-blur-2xl">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            PatchMind.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      
    </div>
  )
}

// {<div className="flex flex-col-1 items-center justify-center relative top-64  ">
//   <div>
//     <div className="flex items-center gap-5">
//     <h2 className="text-[90px] font-bold text-white"> PatchMind </h2>
//     {/* <LucideBrainCircuit className="text-white size-25"/> */}
//     </div>
//     <h2 className="text-[20px] font-semibold "> Let us To.. </h2>
//     <div className="flex items-center gap-5">
//     <h2 className="text-[40px] font-semibold "> Manage your  </h2>
//     <h2 className="text-white font-semibold   text-[60px]"> Errors</h2>
//     </div>
//   </div>
// </div>}
