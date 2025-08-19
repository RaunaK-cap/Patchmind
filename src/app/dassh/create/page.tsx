"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FilePlus2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const createErrorSchema = z.object({
  title: z.string().min(2, "title must required"),
  Description: z.string().min(2, "Description must Required"),
  codesnippet: z.string().min(2, "Codesnippet must required"),
  solution: z.string().min(2, "Solution must required"),
  tags: z.string().min(1, "Tag must required"),
  Status: z.string().min(1, "Status must required"),
});

export default function MonitoringDashboard() {
  const form = useForm<z.infer<typeof createErrorSchema>>({
    resolver: zodResolver(createErrorSchema),
    defaultValues: {
      title: "",
      Description: "",
      codesnippet: "",
      solution: "",
      tags: "",
      Status: "",
    },
  });

  const onsubmit = async (values:z.infer<typeof createErrorSchema>)=>{
      console.log(values)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 ">
        <Form {...form} >
          <form onSubmit={form.handleSubmit(onsubmit)}>

   
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FilePlus2 className="h-5 w-5 text-blue-500" />
              Add New Error
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className=" h-25">
                  <FormLabel>Title</FormLabel>
                  <FormControl className="space-y-2">
                    <Input
                      placeholder="e.g., NextAuth session undefined on SSR"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <FormField
                control={form.control}
                name="codesnippet"
                render={({ field }) => (
                  <FormItem className=" h-25">
                    <FormLabel> Error Code </FormLabel>
                    <FormControl className="space-y-2">
                      <textarea
                        rows={6}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Error code that you have got "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
              <FormField
                control={form.control}
                name="Description"
                render={({ field }) => (
                  <FormItem className=" h-25">
                    <FormLabel> Description </FormLabel>
                    <FormControl className="space-y-2">
                      <textarea
                        rows={6}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="What happened ? "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="solution"
                render={({ field }) => (
                  <FormItem className=" h-25">
                    <FormLabel> Solution/Fix </FormLabel>
                    <FormControl className="space-y-2">
                      <textarea
                        rows={4}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Steps to reproduce / solutions "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="space-y-2">
                {/* <Label>Tags</Label>
              <Input placeholder="auth, prisma, websocket" /> */}

                <FormField
                  control={form.control}
                  name="tags"
                  render={({ field }) => (
                    <FormItem className=" h-25">
                      <FormLabel> Tags </FormLabel>
                      <FormControl className="space-y-2">
                        <Input
                          placeholder="auth, prisma, websocket"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="Status"
                  render={({ field }) => (
                    <FormItem className="space-y-4">
                      <FormLabel> Status </FormLabel>
                      <FormControl className="space-y-2">
                        <select
                          className="w-full rounded-md border border-input bg-background px-2 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 "
                          {...field}
                        >
                          <option value="pending">⏰ Pending</option>
                          <option value="progress">🔄 In-Progress</option>
                          <option value="resolved">✅ Resolved</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              </div>
            </div>
            <div className="flex  gap-2">
              <Button type="submit" className="rounded-2xl">Save</Button>
              <Button variant="secondary" className="rounded-2xl">
                Ask AI
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
</Form>

        <Card className="rounded-2xl ">
          <CardHeader>
            <CardTitle>Tips</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-3">
            <p>• Keep titles short and searchable.</p>
            <p>• Link commits, PRs, and docs for faster recall.</p>
            <p>
              • Mark as <b>Resolved</b> only after verifying in prod.
            </p>
            <div className="pt-2">
              <Label className="mb-1 block">Quality of Repro Steps</Label>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: "76%" }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
  );
}
