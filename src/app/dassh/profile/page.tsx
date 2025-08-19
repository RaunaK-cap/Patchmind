import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <div>
                <div className="font-semibold">Raunak</div>
                <div className="text-sm opacity-70">raunak@patchmind.dev</div>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Display Name</Label>
              <Input defaultValue="Raunak" />
            </div>
            <div className="space-y-2">
              <Label>Workspace</Label>
              <Input defaultValue="PatchMind" />
            </div>
            <Button className="rounded-xl w-full">Save</Button>
          </CardContent>
        </Card>
        <Card className="md:col-span-2 rounded-2xl">
          <CardHeader>
            <CardTitle>API & Preferences</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>OpenAI API Key</Label>
              <Input type="password" placeholder="sk-..." />
              <Button variant="secondary" className="rounded-xl">
                Test Connection
              </Button>
            </div>
            <div className="space-y-2">
              <Label>Dark Mode</Label>
              <div className="flex items-center gap-2">
                
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label>Export Data</Label>
              <div className="flex gap-2">
                <Button className="rounded-xl" variant="secondary">
                  JSON
                </Button>
                <Button className="rounded-xl" variant="secondary">
                  CSV
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
