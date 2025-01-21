"use client"

import { Pie, PieChart } from "recharts"

import {
  // Card,
  // CardContent,
  CardDescription,
  // CardFooter,
  // CardHeader,
  // CardTitle,
} from "@/components/ui/card"
const Card = dynamic(() =>
  import("@/components/ui/card").then((mod) => mod.Card)
);
const CardContent = dynamic(() =>
  import("@/components/ui/card").then((mod) => mod.CardContent)
);
const CardFooter = dynamic(() =>
  import("@/components/ui/card").then((mod) => mod.CardFooter)
);
const CardHeader = dynamic(() =>
  import("@/components/ui/card").then((mod) => mod.CardHeader)
);
const CardTitle = dynamic(() =>
  import("@/components/ui/card").then((mod) => mod.CardTitle)
);
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import DatePicker from "react-datepicker"
import { FaCalendarDays } from "react-icons/fa6";
import { useState } from "react"
import dynamic from "next/dynamic";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  // { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  // other: {
  //   label: "Other",
  //   color: "hsl(var(--chart-5))",
  // },
} 

{/*  */}

export function PieChartComponent() {

  const [date, setDate] = useState(new Date())

  return (
    <Card className="flex flex-col w-full lg:h-[370px] xl:h:[400px] ">
      <CardHeader className="flex flex-col md:flex-row items-center justify-between pb-0">
        <CardTitle>Pie Chart - Donut</CardTitle>
        <div className="flex w-fit rounded-md border border-customGray items-center justify-center text-textPrimary">
          <FaCalendarDays color="#9C9BA6" className="m-2"/>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            showTimeSelect={false}
            dateFormat="yyyy-MM-dd"
            className="w-20"
          />
        </div>
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        {/* <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div> */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: chartConfig.chrome.color }}
            ></span>
            <span className="text-[12px]">Chrome</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: chartConfig.safari.color }}
            ></span>
            <span className="text-[12px]">Safari</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: chartConfig.firefox.color }}
            ></span>
            <span className="text-[12px]">Firefox</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: chartConfig.edge.color }}
            ></span>
            <span className="text-[12px]">Edge</span>
          </div>
          {/* <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: chartConfig.other.color }}
            ></span>
            <span className="text-[12px]">Other</span>
          </div> */}
        </div>
        <div className="leading-none text-muted-foreground">
          Result for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
