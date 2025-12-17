import { Users, FileText, Bell, Clock, BookOpen, TrendingUp, Calendar, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TeacherDashboardProps {
  user: { name: string };
}

export default function TeacherDashboard({ user }: TeacherDashboardProps) {
  const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const greeting = new Date().getHours() < 12 ? 'Good Morning' : new Date().getHours() < 18 ? 'Good Afternoon' : 'Good Evening';

  const stats = [
    { label: 'Total Students', value: '156', icon: Users, color: 'bg-blue-500' },
    { label: 'Pending Reviews', value: '23', icon: FileText, color: 'bg-orange-500' },
    { label: 'Upcoming Classes', value: '4', icon: Calendar, color: 'bg-green-500' },
    { label: 'Active Courses', value: '3', icon: BookOpen, color: 'bg-purple-500' },
  ];

  const todayClasses = [
    { time: '09:00 AM', subject: 'Data Structures (CS-301)', students: 52, room: 'Lab 301' },
    { time: '11:00 AM', subject: 'Database Systems (CS-402)', students: 48, room: 'Room 205' },
    { time: '02:00 PM', subject: 'Web Development (CS-501)', students: 56, room: 'Lab 102' },
  ];

  const pendingReviews = [
    { student: 'John Doe', assignment: 'BST Implementation', submitted: '2 hours ago', course: 'Data Structures' },
    { student: 'Jane Smith', assignment: 'Database Design', submitted: '5 hours ago', course: 'Database Systems' },
    { student: 'Mike Johnson', assignment: 'React Components', submitted: '1 day ago', course: 'Web Development' },
  ];

  const upcomingReminders = [
    { type: 'deadline', message: 'Assignment deadline in 2 days', course: 'Data Structures', icon: AlertCircle },
    { type: 'test', message: 'Mid-term exam scheduled', course: 'Database Systems', icon: Bell },
    { type: 'material', message: 'Upload lecture notes', course: 'Web Development', icon: BookOpen },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Greeting Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl mb-2">{greeting}, Prof. {user.name}!</h1>
            <p className="text-purple-100">Here's what's happening with your classes today</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl">
            <Clock className="w-5 h-5" />
            <span className="text-lg">{currentTime}</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        {/* Today's Classes */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-gray-900">Today's Classes</h2>
            <Link to="/schedule" className="text-sm text-indigo-600 hover:text-indigo-700">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {todayClasses.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-4 hover:border-indigo-200 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-gray-900">{item.subject}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.room}</p>
                  </div>
                  <span className="text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                    {item.time}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>{item.students} students</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Reviews */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-gray-900">Pending Reviews</h2>
            <Link to="/assignments" className="text-sm text-indigo-600 hover:text-indigo-700">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {pendingReviews.map((review, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-4 hover:border-indigo-200 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-gray-900">{review.student}</p>
                    <p className="text-sm text-gray-600 mt-1">{review.assignment}</p>
                    <p className="text-xs text-gray-500 mt-1">{review.course}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-600">{review.submitted}</p>
                    <button className="mt-2 text-xs text-indigo-600 hover:text-indigo-700">
                      Review
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reminders & Quick Actions */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Reminders */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl text-gray-900 mb-4">Upcoming Reminders</h2>
          <div className="space-y-3">
            {upcomingReminders.map((reminder, index) => {
              const Icon = reminder.icon;
              return (
                <div key={index} className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{reminder.message}</p>
                    <p className="text-xs text-gray-600 mt-1">{reminder.course}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/teacher-panel" className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-2">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm text-gray-700 text-center">Create Assignment</span>
            </Link>
            <Link to="/teacher-panel" className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-2">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm text-gray-700 text-center">Upload Materials</span>
            </Link>
            <Link to="/teacher-panel" className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-2">
                <Bell className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-gray-700 text-center">Send Announcement</span>
            </Link>
            <Link to="/assignments" className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-sm text-gray-700 text-center">View Progress</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
