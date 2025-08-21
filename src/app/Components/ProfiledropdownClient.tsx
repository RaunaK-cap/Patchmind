"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { authClient } from "@/lib/auth-client"
import { UserRoundIcon } from "lucide-react"
import { redirect, useRouter } from "next/navigation"


export function ProfileDropdownClient() {

  const Router = useRouter()

  async function Logout(){
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          Router.push("/"); // redirect to login page
        },
      },
    });
  }
    
  return (
    <DropdownMenu  >
      <DropdownMenuTrigger className="rounded-full p-5 "   asChild>
        <Button variant="secondary">
          <UserRoundIcon/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={()=> redirect("/dassh/profile")}>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuItem 
        onClick={()=> redirect("/dassh/profile")}
        >API</DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={Logout}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


