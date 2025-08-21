"use client";
import { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  BarChart3,
  Logs,
  UserRoundPen,
  LayoutDashboard,
  Plus,
  BrainCogIcon,
  
  UserRoundIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Themetoggler } from "@/components/Theme-toggler";
import { redirect, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

import { ThemeProvider } from "@/components/theme-provider";

import { authClient } from "@/lib/auth-client";


import { ProfileDropdownClient } from "../Components/ProfiledropdownClient";

const sidebarItems = [
  {
    id: "dashboards",
    label: "Dashboards",
    icon: BarChart3,
    active: false,
    links: "/dassh",
  },
  {
    id: "issues",
    label: "Add Error",
    icon: LayoutDashboard,
    active: true,
    links: "/dassh/create",
  },
  {
    id: "my error",
    label: "My Error",
    icon: Logs,
    active: false,
    links: "/dassh/myerrors",
  },
  {
    id: "profile",
    label: "Profile",
    icon: UserRoundPen,
    active: false,
    links: "/dassh/profile",
  },
];

export async function logout() {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        redirect("/")
      },
    },
  });
}
export default function Dashboardlayout({ children }: { children: ReactNode }) {
 
  return (
    <>
      <div className=" flex h-screen bg-background font-sans ">
        <div
          className={
            "fixed left-0 top-0 h-screen z-30 w-52 border-r border-sidebar-border transition-all duration-300 "
          }
        >
          <div className="flex  items-center justify-center p-2 border-sidebar-border">
            <div className="flex items-center mt-2 ">
              <div
                onClick={() => redirect("/")}
                className="text-sm flex items-center gap-2"
              >
                <BrainCogIcon className="size-10 cursor-pointer text-blue-600" />
                <div>
                  <h2 className="text-lg"> PatchMind </h2>
                  <p className="text-sm dark:text-neutral-500 text-neutral-400">
                    Debug smarter
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-sidebar-foreground hover:bg-sidebar-accent"
            ></Button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 p-2 mt-5 mx-2">
            <div className="space-y-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className={cn(
                      "w-full justify-start gap-3 h-9 px-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    )}
                    onClick={() => {
                      redirect(`${item.links}`);
                    }}
                  >
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <div> {item.label}</div>
                  </Button>
                );
              })}
            </div>
          </nav>
        </div>

        <div className="flex-1 flex flex-col ml-52">
     
          <div className="sticky top-0 z-30 backdrop-blur flex justify-between supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-zinc-950/40 border-zinc-200/60 dark:border-zinc-800/60">
            <div className="flex items-center gap-3 px-4 md:px-6 h-16">
           
              <div className="relative flex w-full md:max-w-md gap-5">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-60" />
                <Input
                  placeholder="Search errors, tags, snippets…"
                  className="pl-9 pr-24 rounded-2xl"
                />
                <Button
                  onClick={() => redirect("/dassh/create")}
                  className="rounded-2xl hidden md:inline-flex"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  New Error
                </Button>
              </div>
            </div>
            
           
            <div className="flex items-center gap-4 px-4 md:px-6 h-16">
              <Themetoggler />
              <div>
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
        <DropdownMenuItem onClick={logout}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
              </div>
            </div>
          </div>
          <div className="flex-1 p-4">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </div>
        </div>
      </div>
    </>
  );
}
