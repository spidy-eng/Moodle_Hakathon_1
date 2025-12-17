import { Calendar, FileText, Bell, Clock, TrendingUp, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StudentDashboardProps {
  user: { name: string };
}

export default function StudentDashboard({ user }: StudentDashboardProps) {
  const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const greeting = new Date().getHours() < 12 ? 'Good Morning' : new Date().getHours() < 18 ? 'Good Afternoon' : 'Good Evening';

  const stats = [
    { label: 'Upcoming Classes', value: '3', icon: Calendar, color: 'bg-blue-500' },
    { label: 'Pending Assignments', value: '5', icon: FileText, color: 'bg-orange-500' },
    { label: 'New Announcements', value: '2', icon: Bell, color: 'bg-green-500' },
  ];

  const todaySchedule = [
    { time: '09:00 AM', subject: 'Data Structures', room: 'Lab 301', color: 'border-l-blue-500' },
    { time: '11:00 AM', subject: 'Database Systems', room: 'Room 205', color: 'border-l-purple-500' },
    { time: '02:00 PM', subject: 'Web Development', room: 'Lab 102', color: 'border-l-green-500' },
  ];

  const recentAssignments = [
    { title: 'Binary Search Tree Implementation', subject: 'Data Structures', dueDate: 'Dec 20', status: 'pending' },
    { title: 'Database Normalization Report', subject: 'Database Systems', dueDate: 'Dec 22', status: 'pending' },
    { title: 'React Component Design', subject: 'Web Development', dueDate: 'Dec 18', status: 'late' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Greeting Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl mb-2">{greeting}, {user.name}!</h1>
            <p className="text-indigo-100">Welcome back to your academic dashboard</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl">
            <Clock className="w-5 h-5" />
            <span className="text-lg">{currentTime}</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} w-14 h-14 rounded-xl flex items-center justify-center`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Today's Schedule */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-gray-900">Today's Schedule</h2>
            <Link to="/schedule" className="text-sm text-indigo-600 hover:text-indigo-700">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {todaySchedule.map((item, index) => (
              <div key={index} className={`border-l-4 ${item.color} bg-gray-50 rounded-r-xl p-4`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900">{item.subject}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.room}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-900">{item.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Assignments */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-gray-900">Recent Assignments</h2>
            <Link to="/assignments" className="text-sm text-indigo-600 hover:text-indigo-700">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {recentAssignments.map((assignment, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-4 hover:border-indigo-200 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-gray-900 mb-1">{assignment.title}</p>
                    <p className="text-sm text-gray-600">{assignment.subject}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-1">{assignment.dueDate}</p>
                    <span className={`inline-block text-xs px-2 py-1 rounded-full ${
                      assignment.status === 'pending' 
                        ? 'bg-orange-100 text-orange-600' 
                        : 'bg-red-100 text-red-600'
                    }`}>
                      {assignment.status === 'pending' ? 'Pending' : 'Late'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/materials" className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm text-gray-700 text-center">Study Materials</span>
          </Link>
          <Link to="/schedule" className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-2">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm text-gray-700 text-center">View Schedule</span>
          </Link>
          <Link to="/assignments" className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-2">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm text-gray-700 text-center">Submit Assignment</span>
          </Link>
          <Link to="/notifications" className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-sm text-gray-700 text-center">View Progress</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
