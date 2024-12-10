"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", desktop: 186, mobile: 80, tablet: 100 },
  { month: "February", desktop: 305, mobile: 200, tablet: 250 },
  { month: "March", desktop: 237, mobile: 120, tablet: 300 },
  { month: "April", desktop: 73, mobile: 190, tablet: 150 },
  { month: "May", desktop: 209, mobile: 130, tablet: 300 },
  { month: "June", desktop: 214, mobile: 140, tablet: 80 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  tablet: {
    label: "Tablet",
    color: "hsl(var(--chart-))",
  },
} 

export function LinearChart() {
  return (
    <Card className='h-fit'>
      <CardHeader>
        <CardTitle>Chart Title</CardTitle>
        {/* <CardDescription>January - December 2024</CardDescription> */}
      </CardHeader>
      <CardContent >
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="#FECC02"
              strokeWidth={2}
              dot={{
                fill: "#FECC02",
              }}
              activeDot={{
                r: 6,
              }}
            />
             <Line
              dataKey="mobile"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}
            />
             <Line
              dataKey="tablet"
              type="natural"
              stroke="#EB7C44"
              strokeWidth={2}
              dot={{
                fill: "#EB7C44",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>

        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {/* <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div> */}
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
