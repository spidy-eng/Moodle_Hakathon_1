import { Bell, AlertCircle, Calendar, BookOpen, Mail } from 'lucide-react';

interface AnnouncementsProps {
  role: 'student' | 'teacher';
}

export default function Announcements({ role }: AnnouncementsProps) {
  const announcements = [
    {
      id: 1,
      title: 'Mid-term Exam Schedule Released',
      message: 'The mid-term examination schedule for all courses has been posted. Please check your schedule section for detailed timing and venue information.',
      author: 'Prof. Smith',
      date: '2 hours ago',
      priority: 'Important',
      type: 'Exam',
      icon: AlertCircle,
      color: 'bg-red-100 text-red-600 border-red-200',
      emailSent: true,
    },
    {
      id: 2,
      title: 'New Study Material Available',
      message: 'Lecture notes and reference materials for Week 15 have been uploaded to the Study Materials section. Includes PDFs and video tutorials.',
      author: 'Prof. Johnson',
      date: '5 hours ago',
      priority: 'General',
      type: 'Material',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-600 border-blue-200',
      emailSent: true,
    },
    {
      id: 3,
      title: 'Assignment Deadline Extended',
      message: 'Due to popular request, the deadline for Binary Search Tree implementation has been extended by 3 days. New due date: December 23, 2024.',
      author: 'Prof. Williams',
      date: '1 day ago',
      priority: 'General',
      type: 'Assignment',
      icon: Calendar,
      color: 'bg-green-100 text-green-600 border-green-200',
      emailSent: true,
    },
    {
      id: 4,
      title: 'Guest Lecture on AI Applications',
      message: 'Special guest lecture by Dr. Sarah Chen on "Real-world Applications of Artificial Intelligence" scheduled for December 21, 2024 at 2:00 PM in Auditorium Hall.',
      author: 'Department',
      date: '2 days ago',
      priority: 'General',
      type: 'Event',
      icon: Bell,
      color: 'bg-purple-100 text-purple-600 border-purple-200',
      emailSent: true,
    },
    {
      id: 5,
      title: 'Winter Break Notice',
      message: 'Classes will be suspended from December 25, 2024 to January 2, 2025 for winter break. Regular classes will resume on January 3, 2025.',
      author: 'Administration',
      date: '3 days ago',
      priority: 'General',
      type: 'Holiday',
      icon: Calendar,
      color: 'bg-orange-100 text-orange-600 border-orange-200',
      emailSent: true,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl text-gray-900 mb-2">Announcements</h1>
            <p className="text-gray-600">Stay updated with latest news and updates</p>
          </div>
          {role === 'teacher' && (
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors">
              <Bell className="w-5 h-5" />
              New Announcement
            </button>
          )}
        </div>
      </div>

      {/* Announcements List */}
      <div className="space-y-4">
        {announcements.map((announcement) => {
          const Icon = announcement.icon;
          return (
            <div
              key={announcement.id}
              className={`bg-white rounded-2xl p-6 shadow-sm border ${
                announcement.priority === 'Important' ? 'border-red-300' : 'border-gray-100'
              }`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`${announcement.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg text-gray-900">{announcement.title}</h3>
                    {announcement.priority === 'Important' && (
                      <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full flex-shrink-0">
                        Important
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                    <span>{announcement.author}</span>
                    <span>•</span>
                    <span>{announcement.date}</span>
                    {announcement.emailSent && (
                      <>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          <span>Email sent</span>
                        </div>
                      </>
                    )}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{announcement.message}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className={`${announcement.color} text-xs px-3 py-1 rounded-full border`}>
                  {announcement.type}
                </span>
                <button className="text-sm text-indigo-600 hover:text-indigo-700">
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State Example */}
      {announcements.length === 0 && (
        <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Bell className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg text-gray-900 mb-2">No announcements yet</h3>
          <p className="text-gray-600">Check back later for updates and news</p>
        </div>
      )}
    </div>
  );
}
