import Link from 'next/link'
import { Bell, MessageSquare, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import JobMatches from '@/components/ui/job-matches'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-12 py-4 font-sans font-medium bg-white border-b">
        <div className="flex items-center space-x-6 gap-12">
          <Link href="/" className="text-2xl font-bold text-blue-600">Fury</Link>
          <nav className="hidden md:flex space-x-4 gap-6">
            <Link href="/discover" className="text-gray-400 hover:text-gray-900">Discover</Link>
            <Link href="/projects" className="text-gray-400 hover:text-gray-900">My Projects</Link>
            <Link href="/payments" className="text-gray-400 hover:text-gray-900">Payments</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <MessageSquare className="h-5 w-5 text-gray-600" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5 text-gray-600" />
          </Button>
          <div className="w-8 h-8 bg-gray-300 rounded-full" aria-label="User avatar" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Welcome Message */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-16 h-16 bg-gray-300 rounded-full" aria-label="User avatar" />
          <h1 className="text-3xl font-bold">Welcome back, Parik 👋</h1>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Earnings Card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Earnings This Month</CardTitle>
              <p className="text-sm text-gray-500">Your earnings this month compared to last month</p>
            </CardHeader>
            <CardContent>
              <div className="pt-32 text-4xl font-bold">$24,468</div>
              <p className="text-sm text-green-500">↑ 13% vs last month</p>
            </CardContent>
          </Card>

          {/* Active Projects Card */}
          <Card className="bg-white shadow-sm ">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">Your Active Projects</CardTitle>
              <p className="text-sm text-gray-400">Focus on acing these active jobs</p>
            </CardHeader>
            <CardContent className="font-bold pt-2">
              <div className=" space-y-2">
                <ProjectItem className="font-semibold" title="Creative Director for Pacific Co..." />
                <ProjectItem className="font-semibold" title="Ecommerce operations head fo..." />
                <ProjectItem className="font-semibold" title="Creative strategist for an intern..." />
              </div>
              <div className="mt-2 pt-2 border-t border-gray-200 text-center">
                <Button variant="link" className="p-0 h-auto font-normal text-gray-500 hover:text-gray-700">
                  View all projects
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Unreviewed Matches Card */}
          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">Unreviewed Matches</CardTitle>
              <p className="text-sm text-gray-400">We recommend you for these jobs</p>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="space-y-2">
                <ProjectItem title="Lead manager for operations a..." />
                <ProjectItem title="Quality assurance and A&B tes..." />
                <ProjectItem title="Copywriter and creative lead f..." />
              </div>
              <div className="mt-2 pt-2 border-t border-gray-200 text-center">
                <Button variant="link" className="p-0 h-auto font-normal text-gray-500 hover:text-gray-700">
                  View all matches
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick-box and Job Matches */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Quick-box */}
          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-0">
              <CardTitle className="text-xl font-bold">Quick-box</CardTitle>
              <p className="text-sm text-gray-400">A quick glance of your inbox</p>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                <div className='bg-gray-100 p-4 rounded-md'>
                <MessageItem name="Alexa Jones" time="12h ago" unread />
                </div>
                <div className='bg-gray-100 p-4 rounded-md'>
                <MessageItem name="John Schmidt" time="16h ago" />
                </div>
                <MessageItem name="Julius Lesiuk" time="2d ago" />
                <MessageItem name="Claire Dunphy" time="2d ago" />
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                <Button variant="link" className="p-0 h-auto font-normal text-gray-500 hover:text-gray-700">
                  Open my inbox
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Job Matches */}
          <JobMatches />
        </div>
      </main>
    </div>
  )
}

function ProjectItem({ title }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm font-medium text-gray-900">{title}</span>
      <ChevronRight className="h-5 w-5 text-gray-400" />
    </div>
  )
}

function MessageItem({ name, time }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" aria-label={`${name}'s avatar`} />
      <div className="flex-grow min-w-0">
        <p className="font-medium truncate">{name}</p>
        <p className="text-sm text-gray-500 truncate">sounds good, but we really need speed up the process...</p>
      </div>
      <span className="text-xs text-gray-400 flex-shrink-0">{time}</span>
    </div>
  )
}