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
  // ChartContainer,
  ChartLegend,
  ChartTooltip,
  // ChartTooltipContent,
} from "@/components/ui/chart"
import dynamic from "next/dynamic"
const ChartContainer = dynamic(() =>
  import("@/components/ui/chart").then((mod) => mod.ChartContainer)
);
const ChartTooltipContent = dynamic(() =>
  import("@/components/ui/chart").then((mod) => mod.ChartTooltipContent)
);
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
    color: "#FECC02",
  },
  mobile: {
    label: "Mobile",
    color: "#006AA7",
  },
  tablet: {
    label: "Tablet",
    color: "#EB7C44",
  },
} 

export function LinearChart() {
  return (
    <Card className='lg:h-[370px]'>
      <div className="lg:h-[370px]">
        <CardHeader className="lg:h-[15%]">
          <CardTitle>Chart Title</CardTitle>
          {/* <CardDescription>January - December 2024</CardDescription> */}
        </CardHeader>
        <CardContent className="py-0  lg:h-[70%] ">
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
              className=""
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
                stroke="#006AA7"
                strokeWidth={2}
                dot={{
                  fill: "#006AA7",
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
        <CardFooter className="flex flex-col items-start gap-2 text-sm lg:h-[15%] pt-0">
          {/* <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div> */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: chartConfig.desktop.color }}
              ></span>
              <span className="text-[12px]">Desktop</span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: chartConfig.mobile.color }}
              ></span>
              <span className="text-[12px]">Mobile</span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: chartConfig.tablet.color }}
              ></span>
              <span className="text-[12px]">Tablet</span>
            </div>
          </div>

          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </div>
    </Card>
  )
}
