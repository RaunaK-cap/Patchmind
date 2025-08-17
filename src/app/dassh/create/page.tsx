"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FilePlus2, Clock, CheckCircle2 } from "lucide-react"

export default function MonitoringDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FilePlus2 className="h-5 w-5"/>
            Add New Error
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Title</Label>
            <Input placeholder="e.g., NextAuth session undefined on SSR" />
          </div>
          <div className="space-y-2">
            <Label>Description (supports Markdown)</Label>
            <textarea 
              rows={6} 
              placeholder="What happened? Steps to reproduce, logs, stacktrace…"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <div className="space-y-2">
            <Label>Proposed Solution / Fix</Label>
            <textarea 
              rows={4} 
              placeholder="Root cause + fix notes…"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="space-y-2">
              <Label>Tags</Label>
              <Input placeholder="auth, prisma, websocket" />
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <option value="pending">⏰ Pending</option>
                <option value="progress">🔄 In-Progress</option>
                <option value="resolved">✅ Resolved</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label>Attach</Label>
              <Input type="file" className="cursor-pointer" />
            </div>
          </div>
          <div className="flex gap-2">
            <Button className="rounded-2xl">Save</Button>
            <Button variant="secondary" className="rounded-2xl">Ask AI</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card className="rounded-2xl ">
        <CardHeader>
          <CardTitle>Tips</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-3">
          <p>• Keep titles short and searchable.</p>
          <p>• Link commits, PRs, and docs for faster recall.</p>
          <p>• Mark as <b>Resolved</b> only after verifying in prod.</p>
          <div className="pt-2">
            <Label className="mb-1 block">Quality of Repro Steps</Label>
            <div className="w-full bg-secondary rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '76%' }}></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
