"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const errorData = [
  { name: "Auth Errors", count: 24 },
  { name: "Database Errors", count: 18 },
  { name: "Network Errors", count: 12 },
  { name: "UI Bugs", count: 30 },
];

const solvedTrend = [
  { day: "Mon", solved: 5 },
  { day: "Tue", solved: 9 },
  { day: "Wed", solved: 4 },
  { day: "Thu", solved: 11 },
  { day: "Fri", solved: 7 },
  { day: "Sat", solved: 6 },
  { day: "Sun", solved: 3 },
];

const COLORS = ["#0088FE", "#FF8042", "#00C49F", "#FFBB28"];
const Page = () => {
  const Router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  
  if (isPending) {
    return <> </>;
  }

  if (!session) {
    Router.push("/");
  }

  return (
    <div className="min-h-screen bg-gray-950 p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">📊 Debugging Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Solved Errors Trend */}
        <div>
          <Card className="bg-gray-900 border border-gray-800">
            <CardHeader>
              <CardTitle>Solved Errors Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={solvedTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="day" stroke="#aaa" />
                  <YAxis stroke="#aaa" />
                  <Tooltip />
                  <Bar dataKey="solved" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Most Frequent Errors */}
        <div>
          <Card className="bg-gray-900 border border-gray-800">
            <CardHeader>
              <CardTitle>Most Frequent Errors</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={errorData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="count"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {errorData.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
