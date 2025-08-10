"use client"

import { X, TrendingUp, TrendingDown, RefreshCw, DollarSign, Users, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useEffect, useState } from "react"

interface RenewalsDashboardModalProps {
  onClose: () => void
}

const mrrData = [
  { month: "Jan", mrr: 10000 },
  { month: "Feb", mrr: 11000 },
  { month: "Mar", mrr: 12500 },
  { month: "Apr", mrr: 14000 },
  { month: "May", mrr: 16000 },
  { month: "Jun", mrr: 18500 },
  { month: "Jul", mrr: 21000 },
  { month: "Aug", mrr: 24000 },
  { month: "Sep", mrr: 27500 },
  { month: "Oct", mrr: 31000 },
  { month: "Nov", mrr: 35000 },
  { month: "Dec", mrr: 40000 },
]

const chartConfig = {
  mrr: {
    label: "MRR",
    color: "hsl(var(--chart-1))",
  },
}

export default function RenewalsDashboardModal({ onClose }: RenewalsDashboardModalProps) {
  const [showContent, setShowContent] = useState(false)
  const [mrrAnimationKey, setMrrAnimationKey] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100)
    const mrrInterval = setInterval(() => {
      setMrrAnimationKey((prevKey) => prevKey + 1)
    }, 4000)

    return () => {
      clearTimeout(timer)
      clearInterval(mrrInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
      <div
        className={`relative h-[95vh] w-[95vw] max-w-7xl transform overflow-hidden rounded-xl bg-[#FDFBF8] shadow-2xl transition-all duration-500 ease-out ${
          showContent ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200 sm:right-8 sm:top-8"
          aria-label="Close modal"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>

        <div className="relative z-10 flex h-full w-full flex-col p-4 md:p-8 lg:p-10 overflow-y-auto">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl text-center">
            Lorem Dashboard
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-6 sm:mb-8">
            <Card className="bg-white shadow-sm border-[#D8CFF0]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Lorem ipsum</CardTitle>
                <DollarSign className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold sm:text-2xl">$35,000</div>
                <p className="text-xs text-gray-500">+12.5% from last month</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-sm border-[#F3CDA2]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Consectetur</CardTitle>
                <DollarSign className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold sm:text-2xl">$420,000</div>
                <p className="text-xs text-gray-500">+15% from last year</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-sm border-[#D8CFF0]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Adipiscing</CardTitle>
                <RefreshCw className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold sm:text-2xl">92%</div>
                <p className="text-xs text-gray-500">+0.5% vs target</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-sm border-[#F3CDA2]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Elit</CardTitle>
                <TrendingDown className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold sm:text-2xl">3.2%</div>
                <p className="text-xs text-gray-500">-0.8% from last quarter</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-sm border-[#D8CFF0]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sed do</CardTitle>
                <TrendingUp className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold sm:text-2xl">$8,500</div>
                <p className="text-xs text-gray-500">+25% this month</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-sm border-[#F3CDA2]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Eiusmod</CardTitle>
                <Users className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold sm:text-2xl">$5,200</div>
                <p className="text-xs text-gray-500">New products sold</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1">
            <Card className="lg:col-span-2 bg-white shadow-sm border-[#D8CFF0]">
              <CardHeader>
                <CardTitle>Lorem over time</CardTitle>
              </CardHeader>
              <CardContent className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
                <ChartContainer config={chartConfig} className="h-full w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mrrData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="month" tickLine={false} axisLine={false} style={{ fontSize: "10px" }} />
                      <YAxis tickLine={false} axisLine={false} style={{ fontSize: "10px" }} />
                      <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                      <Line
                        key={mrrAnimationKey}
                        dataKey="mrr"
                        type="monotone"
                        stroke="hsl(var(--chart-1))"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                        isAnimationActive={true}
                        animationDuration={3000}
                        animationEasing="ease-out"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm border-[#F3CDA2]">
              <CardHeader>
                <CardTitle>Action Items</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start">
                  <CheckCircle className="h-3 w-3 flex-shrink-0 text-[#F3CDA2] mr-2 mt-1 sm:h-4 sm:w-4" />
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-3 w-3 flex-shrink-0 text-[#F3CDA2] mr-2 mt-1 sm:h-4 sm:w-4" />
                  <span>Consectetur adipiscing elit.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-3 w-3 flex-shrink-0 text-[#F3CDA2] mr-2 mt-1 sm:h-4 sm:w-4" />
                  <span>Sed do eiusmod tempor.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-3 w-3 flex-shrink-0 text-[#F3CDA2] mr-2 mt-1 sm:h-4 sm:w-4" />
                  <span>Ut enim ad minim veniam.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-3 w-3 flex-shrink-0 text-[#F3CDA2] mr-2 mt-1 sm:h-4 sm:w-4" />
                  <span>Duis aute irure dolor in reprehenderit.</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
