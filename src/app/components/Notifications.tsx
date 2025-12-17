import { Bell, Check, Mail, Calendar, FileText, BookOpen, AlertCircle } from 'lucide-react';

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      type: 'assignment',
      title: 'New assignment posted',
      message: 'Binary Search Tree Implementation - Due Dec 20',
      time: '10 minutes ago',
      read: false,
      icon: FileText,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      id: 2,
      type: 'email',
      title: 'Email notification sent',
      message: 'Mid-term exam schedule has been emailed to all students',
      time: '2 hours ago',
      read: false,
      icon: Mail,
      color: 'bg-green-100 text-green-600',
    },
    {
      id: 3,
      type: 'reminder',
      title: 'Assignment deadline reminder',
      message: 'React Component Design is due in 24 hours',
      time: '5 hours ago',
      read: false,
      icon: AlertCircle,
      color: 'bg-orange-100 text-orange-600',
    },
    {
      id: 4,
      type: 'material',
      title: 'New study material uploaded',
      message: 'Week 15 lecture notes are now available',
      time: '1 day ago',
      read: true,
      icon: BookOpen,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      id: 5,
      type: 'grade',
      title: 'Assignment graded',
      message: 'Sorting Algorithms Analysis - Score: 95/100',
      time: '1 day ago',
      read: true,
      icon: Check,
      color: 'bg-green-100 text-green-600',
    },
    {
      id: 6,
      type: 'event',
      title: 'Upcoming event',
      message: 'Guest lecture on AI Applications - Dec 21 at 2:00 PM',
      time: '2 days ago',
      read: true,
      icon: Calendar,
      color: 'bg-indigo-100 text-indigo-600',
    },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl text-gray-900 mb-2">Notifications</h1>
            <p className="text-gray-600">{unreadCount} unread notifications</p>
          </div>
          <button className="text-sm text-indigo-600 hover:text-indigo-700">
            Mark all as read
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <div
              key={notification.id}
              className={`bg-white rounded-2xl p-5 shadow-sm border transition-colors ${
                notification.read 
                  ? 'border-gray-100' 
                  : 'border-indigo-200 bg-indigo-50/30'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`${notification.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h3 className="text-gray-900">{notification.title}</h3>
                    {!notification.read && (
                      <div className="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0 mt-2" />
                    )}
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{notification.message}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">{notification.time}</span>
                    {!notification.read && (
                      <button className="text-xs text-indigo-600 hover:text-indigo-700">
                        Mark as read
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Email Notification Settings */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl text-gray-900 mb-4">Email Notification Settings</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-900">Assignment notifications</span>
            </div>
            <div className="w-12 h-6 bg-indigo-600 rounded-full relative cursor-pointer">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-900">Announcement updates</span>
            </div>
            <div className="w-12 h-6 bg-indigo-600 rounded-full relative cursor-pointer">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-900">Schedule reminders</span>
            </div>
            <div className="w-12 h-6 bg-gray-300 rounded-full relative cursor-pointer">
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
