"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import {
  ArrowUpRight,
  BarChart3,
  Calendar,
  ChevronDown,
  Clock,
  MessageSquare,
  MoreHorizontal,
  Search,
  Settings,
  Star,
  TrendingUp,
  Users,
  Activity
} from "lucide-react"

export function DashboardPreview() {
  const [isInView, setIsInView] = useState(false)
  const controls = useAnimation()
  const [selectedTab, setSelectedTab] = useState("analytics")
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    setIsInView(true)

    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const chartData = [68, 46, 57, 75, 62, 80, 82, 65, 72, 90]
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, -0.01, 0.9],
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.div
      className="mx-auto max-w-5xl"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-6 py-4">
          <div className="flex items-center space-x-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="white" fillOpacity="0.9" />
                <circle cx="30" cy="50" r="20" fill="none" stroke="white" strokeWidth="4" />
                <circle cx="60" cy="50" r="25" fill="none" stroke="white" strokeWidth="4" />
              </svg>
            </div>
            <span className="font-semibold text-gray-900">Sampling Labs Dashboard</span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <span className="text-xs font-medium text-gray-500">{currentTime}</span>
            </div>
            <div className="h-8 w-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
              <Settings className="h-4 w-4 text-gray-500" />
            </div>
            <div className="h-8 w-8 rounded-full bg-gray-900 flex items-center justify-center">
              <span className="text-xs font-semibold text-white">SL</span>
            </div>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <div className="bg-white border-b border-gray-200 px-6">
          <div className="flex items-center space-x-6">
            <motion.button
              className={`flex items-center py-4 px-1 border-b-2 text-sm font-medium ${selectedTab === 'analytics' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              onClick={() => setSelectedTab('analytics')}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Analytics
            </motion.button>

            <motion.button
              className={`flex items-center py-4 px-1 border-b-2 text-sm font-medium ${selectedTab === 'conversations' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              onClick={() => setSelectedTab('conversations')}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Conversations
            </motion.button>

            <motion.button
              className={`flex items-center py-4 px-1 border-b-2 text-sm font-medium ${selectedTab === 'users' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              onClick={() => setSelectedTab('users')}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Users className="h-4 w-4 mr-2" />
              Users
            </motion.button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Analytics Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <motion.div
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-500" />
                </div>
                <div className="flex items-center text-xs font-medium text-green-500">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>+12.5%</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">2,847</div>
              <div className="text-sm text-gray-500">Total Conversations</div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="h-10 w-10 rounded-lg bg-purple-50 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-purple-500" />
                </div>
                <div className="flex items-center text-xs font-medium text-green-500">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>+8.3%</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">1.5m</div>
              <div className="text-sm text-gray-500">Avg. Response Time</div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="h-10 w-10 rounded-lg bg-orange-50 flex items-center justify-center">
                  <Star className="h-5 w-5 text-orange-500" />
                </div>
                <div className="flex items-center text-xs font-medium text-green-500">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>+5.2%</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">4.8/5</div>
              <div className="text-sm text-gray-500">Customer Satisfaction</div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center">
                  <Activity className="h-5 w-5 text-green-500" />
                </div>
                <div className="flex items-center text-xs font-medium text-green-500">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>+18.7%</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">92%</div>
              <div className="text-sm text-gray-500">Resolution Rate</div>
            </motion.div>
          </div>

          {/* Conversations Chart */}
          <motion.div
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6"
            variants={itemVariants}
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Conversation Trends</h3>
                <p className="text-sm text-gray-500">Last 10 days</p>
              </div>

              <div className="flex items-center space-x-2">
                <button className="flex items-center text-sm font-medium text-gray-500 bg-gray-50 hover:bg-gray-100 px-3 py-1 rounded-md">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Last 10 days</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>

                <button className="h-8 w-8 flex items-center justify-center rounded-md bg-gray-50 hover:bg-gray-100 text-gray-500">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="h-64 relative">
              <div className="absolute inset-0 flex items-end justify-between">
                {chartData.map((value, index) => (
                  <motion.div
                    key={index}
                    className="h-full flex flex-col justify-end items-center"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: '100%' }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <motion.div
                      className={`w-8 rounded-t-lg ${selectedTab === 'analytics' ? 'bg-blue-500' : selectedTab === 'conversations' ? 'bg-purple-500' : 'bg-green-500'}`}
                      initial={{ height: 0 }}
                      animate={{ height: `${value}%` }}
                      transition={{ duration: 0.7, delay: index * 0.05, ease: "easeOut" }}
                    />
                    <div className="text-xs text-gray-500 mt-2">{daysOfWeek[index]}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            className="bg-white rounded-xl shadow-sm border border-gray-100"
            variants={itemVariants}
          >
            <div className="flex justify-between items-center p-5 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>

              <div className="relative">
                <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search activity..."
                  className="pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="p-5 space-y-4">
              {[1, 2, 3].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden relative">
                    <Image
                      src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'women' : 'men'}/${index + 40}.jpg`}
                      alt="User avatar"
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-medium text-gray-900">
                        {index === 0 ? 'Sarah Johnson' : index === 1 ? 'Michael Chen' : 'Emma Wilson'}
                        <span className="text-gray-500 font-normal">
                          {index === 0
                            ? ' started a new conversation'
                            : index === 1
                            ? ' resolved a customer inquiry'
                            : ' left a 5-star rating'}
                        </span>
                      </p>
                      <span className="text-xs text-gray-400">{index === 0 ? '2m ago' : index === 1 ? '15m ago' : '32m ago'}</span>
                    </div>

                    <div className="mt-1 text-sm text-gray-500">
                      {index === 0
                        ? 'Topic: Product Integration Questions'
                        : index === 1
                        ? 'Related to: Account Settings'
                        : 'Feedback: "The AI agent was extremely helpful and efficient!"'}
                    </div>

                    <div className="mt-2 flex items-center space-x-2">
                      <button className="text-xs px-2 py-1 rounded bg-blue-50 text-blue-600 font-medium">View Details</button>
                      {index === 0 && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          New
                        </span>
                      )}
                      {index === 1 && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Resolved
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="pt-2 flex justify-center">
                <motion.button
                  className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View all activity
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
