"use client";
import { ReactNode } from "react";

import { useState } from "react";
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
  Menu,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Themetoggler } from "@/components/Theme-toggler";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { ThemeProvider } from "@/components/theme-provider";

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

export default  function dashboardlayout({ children }: { children: ReactNode }) {
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
              onClick={()=> redirect("/")}
              className="text-sm flex items-center gap-2">
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

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col ml-52">
          {/* Top Bar */}
          <div className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-zinc-950/40  border-zinc-200/60 dark:border-zinc-800/60">
            <div className="flex items-center gap-3 px-4 md:px-6 h-16">
              <button className="md:hidden p-2 rounded-xl hover:bg-zinc-900/5 dark:hover:bg-zinc-100/10">
                <Menu className="h-5 w-5" />
              </button>
              <div className="relative ml-auto md:ml-0 w-full md:max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-60" />
                <Input
                  placeholder="Search errors, tags, snippets…"
                  className="pl-9 pr-24 rounded-2xl"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                  <Badge variant="secondary" className="rounded-xl">
                    ⌘K
                  </Badge>
                </div>
              </div>
              <Button
                onClick={() => redirect("/dassh/create")}
                className="rounded-2xl hidden md:inline-flex"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Error
              </Button>
              <div>
               
              </div>
              <div className="">
                <Themetoggler />
              </div>
              <div className="ml-auto md:ml-0 flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>Profile</DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="gap-2">
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2">
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="gap-2 text-red-600">
                      Logout
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
