import React from 'react';
import { FiActivity, FiUsers, FiFileText, FiDollarSign, FiBarChart2, FiCalendar, FiTrendingUp } from 'react-icons/fi';

const AdminDashboard = () => {
    // Mock data
    const stats = [
        { title: "Total Visitors", value: "12.8K", change: "+12%", icon: <FiActivity className="text-blue-400" />, color: "bg-blue-900/30" },
        { title: "Total Users", value: "2,340", change: "+8.2%", icon: <FiUsers className="text-purple-400" />, color: "bg-purple-900/30" },
        { title: "Blog Posts", value: "142", change: "+24%", icon: <FiFileText className="text-green-400" />, color: "bg-green-900/30" },
        { title: "Revenue", value: "$14,280", change: "+18.5%", icon: <FiDollarSign className="text-amber-400" />, color: "bg-amber-900/30" }
    ];

    const recentBlogs = [
        { title: "The Future of Web Development", views: "12.4K", status: "Published", date: "2 hours ago" },
        { title: "Dark Mode UI Design Patterns", views: "8.7K", status: "Published", date: "1 day ago" },
        { title: "State Management in Next.js", views: "5.2K", status: "Draft", date: "2 days ago" },
        { title: "CSS Grid vs Flexbox", views: "3.8K", status: "Published", date: "3 days ago" }
    ];

    const activities = [
        { user: "Alex Morgan", action: "published a new blog", time: "10 min ago" },
        { user: "Taylor Swift", action: "commented on 'Web Development'", time: "25 min ago" },
        { user: "John Doe", action: "updated profile settings", time: "1 hour ago" },
        { user: "Emma Watson", action: "created a new draft", time: "2 hours ago" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 md:p-8">
            <div className="max-w-full mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
                        <p className="text-gray-400 mt-2">Welcome back, Admin! Here's what's happening today.</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center space-x-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                            />
                            <svg
                                className="w-5 h-5 text-gray-500 absolute left-3 top-2.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="relative">
                                <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-gray-900 bg-red-500" />
                                </button>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">A</div>
                                <div>
                                    <p className="text-white text-sm font-medium">Admin User</p>
                                    <p className="text-gray-400 text-xs">Administrator</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className={`${stat.color} p-5 rounded-xl border border-gray-800`}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-gray-400 text-sm">{stat.title}</p>
                                    <h3 className="text-2xl font-bold text-white mt-1">{stat.value}</h3>
                                </div>
                                <div className="p-3 rounded-lg bg-gray-800/50">
                                    {stat.icon}
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-green-400 text-sm flex items-center">
                                    <FiTrendingUp className="mr-1" /> {stat.change} from last month
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Charts and Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Main Chart */}
                    <div className="lg:col-span-2 bg-gray-800/30 border border-gray-700 rounded-xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-white">Traffic Overview</h2>
                            <div className="flex space-x-2">
                                <button className="px-3 py-1 text-sm bg-gray-700 rounded-lg text-white">Week</button>
                                <button className="px-3 py-1 text-sm bg-indigo-600 rounded-lg text-white">Month</button>
                                <button className="px-3 py-1 text-sm bg-gray-700 rounded-lg text-white">Year</button>
                            </div>
                        </div>

                        {/* Chart Placeholder */}
                        <div className="h-80 flex items-center justify-center">
                            <div className="text-center">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-48 h-48 rounded-full border-8 border-dashed border-gray-700 animate-spin-slow" />
                                    </div>
                                    <FiBarChart2 className="w-16 h-16 mx-auto text-indigo-500" />
                                </div>
                                <p className="mt-4 text-gray-400">Traffic data visualization</p>
                            </div>
                        </div>
                    </div>

                    {/* Recent Blogs */}
                    <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-white">Recent Blogs</h2>
                            <button className="text-indigo-400 hover:text-indigo-300 text-sm">View All</button>
                        </div>

                        <div className="space-y-4">
                            {recentBlogs.map((blog, index) => (
                                <div key={index} className="p-4 bg-gray-800/20 rounded-lg hover:bg-gray-800/40 transition">
                                    <div className="flex justify-between">
                                        <h3 className="font-medium text-white">{blog.title}</h3>
                                        <span className={`text-xs px-2 py-1 rounded-full ${blog.status === 'Published' ? 'bg-green-900/30 text-green-400' : 'bg-amber-900/30 text-amber-400'}`}>
                                            {blog.status}
                                        </span>
                                    </div>
                                    <div className="flex justify-between mt-3">
                                        <div className="flex items-center text-gray-400 text-sm">
                                            <FiActivity className="mr-1" /> {blog.views} views
                                        </div>
                                        <div className="text-gray-500 text-sm">
                                            {blog.date}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Recent Activity */}
                    <div className="lg:col-span-2 bg-gray-800/30 border border-gray-700 rounded-xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-white">Recent Activity</h2>
                            <button className="text-indigo-400 hover:text-indigo-300 text-sm">View All</button>
                        </div>

                        <div className="space-y-4">
                            {activities.map((activity, index) => (
                                <div key={index} className="flex items-start p-4 hover:bg-gray-800/20 rounded-lg transition">
                                    <div className="mr-4 mt-1">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                                            <span className="text-white font-bold">{activity.user.charAt(0)}</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white">
                                            <span className="font-medium">{activity.user}</span> {activity.action}
                                        </p>
                                        <p className="text-gray-500 text-sm mt-1">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-white">Calendar</h2>
                            <button className="text-indigo-400 hover:text-indigo-300 text-sm">Add Event</button>
                        </div>

                        {/* Calendar Placeholder */}
                        <div className="bg-gray-800/20 rounded-xl p-4 mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <button className="text-gray-400 hover:text-white">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <span className="text-white font-medium">June 2025</span>
                                <button className="text-gray-400 hover:text-white">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            <div className="grid grid-cols-7 gap-2 text-center">
                                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                    <div key={day} className="text-gray-500 text-sm py-1">{day}</div>
                                ))}

                                {/* Calendar days - simplified for demo */}
                                {[...Array(35)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`py-2 rounded-lg ${i === 18
                                                ? 'bg-indigo-600 text-white'
                                                : i > 20 && i < 25
                                                    ? 'bg-gray-700/50'
                                                    : 'hover:bg-gray-700/50 cursor-pointer'
                                            }`}
                                    >
                                        {i < 28 ? i - 2 : ''}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Upcoming Events */}
                        <div>
                            <h3 className="font-bold text-white mb-4">Upcoming Events</h3>
                            <div className="space-y-3">
                                <div className="flex items-center p-3 bg-gray-800/20 rounded-lg">
                                    <div className="mr-3 w-2 h-10 bg-indigo-500 rounded-full"></div>
                                    <div>
                                        <p className="text-white font-medium">Team Meeting</p>
                                        <p className="text-gray-500 text-sm">10:00 AM - 11:30 AM</p>
                                    </div>
                                </div>
                                <div className="flex items-center p-3 bg-gray-800/20 rounded-lg">
                                    <div className="mr-3 w-2 h-10 bg-green-500 rounded-full"></div>
                                    <div>
                                        <p className="text-white font-medium">Content Planning</p>
                                        <p className="text-gray-500 text-sm">2:00 PM - 3:30 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;