import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import React from "react";

const tableRows = [
  {
    id: "ERR-1024",
    title: "JWT expired on refresh",
    tag: "Auth",
    status: "Resolved",
    date: "2025-08-12",
  },
  {
    id: "ERR-1025",
    title: "Prisma relation mismatch",
    tag: "DB",
    status: "Pending",
    date: "2025-08-13",
  },
  {
    id: "ERR-1026",
    title: "Rate limiter false positives",
    tag: "API",
    status: "In-Progress",
    date: "2025-08-14",
  },
  {
    id: "ERR-1027",
    title: "WebSocket reconnect loop",
    tag: "API",
    status: "Resolved",
    date: "2025-08-15",
  },
];

const page = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="secondary" className="rounded-xl">
            Filters
          </Button>
          <Tabs defaultValue="all">
            <TabsList className="rounded-xl">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="progress">In-Progress</TabsTrigger>
              <TabsTrigger value="resolved">Resolved</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <Button className="rounded-xl">
          <Plus className="h-4 w-4 mr-2" />
          New Error
        </Button>
      </div>

      <Card className="mt-4 rounded-2xl">
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Tag</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableRows.map((r) => (
                <TableRow
                  key={r.id}
                  className="hover:bg-zinc-900/5 dark:hover:bg-zinc-100/5"
                >
                  <TableCell className="font-mono text-xs">{r.id}</TableCell>
                  <TableCell className="font-medium">{r.title}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="rounded-xl">
                      {r.tag}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className="rounded-xl"
                      variant={r.status === "Resolved" ? "default" : "outline"}
                    >
                      {r.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs opacity-75">{r.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
