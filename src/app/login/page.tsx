import {  GalleryVerticalEnd,  } from "lucide-react"

import { LoginForm } from "@/components/login-form"
    

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-[#0f172a] relative">
  {/* Blue Radial Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
    }}
  />
     <div className="grid min-h-svh relative z-10 font-sans  bg-center bg-no-repeat">
      <div className="flex flex-col  p-6 md:p-10 bg-neutral-100/5 backdrop-blur-2xl">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium dark:text-white text-white ">
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
</div>
  )
}


