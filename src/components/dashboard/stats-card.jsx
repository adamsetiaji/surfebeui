import React from 'react'
import { Users, Activity, DollarSign, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const statsData = [
  {
    title: "Total Users",
    value: "2,420",
    change: "+12.5%",
    icon: Users,
    trend: "up",
  },
  {
    title: "Active Users",
    value: "1,210",
    change: "+8.2%",
    icon: Activity,
    trend: "up",
  },
  {
    title: "Total Balance",
    value: "$45,230",
    change: "+24.5%",
    icon: DollarSign,
    trend: "up",
  },
  {
    title: "Success Rate",
    value: "92.8%",
    change: "+3.2%",
    icon: TrendingUp,
    trend: "up",
  },
]

const StatCard = ({ title, value, change, icon: Icon, trend }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs ${
          trend === 'up' ? 'text-green-600' : 'text-red-600'
        }`}>
          {change} from last month
        </p>
      </CardContent>
    </Card>
  )
}

const StatsCards = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statsData.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  )
}

export default StatsCards