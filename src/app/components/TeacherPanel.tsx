import { useState } from 'react';
import { Plus, FileText, BookOpen, Bell, Calendar, Users, Send } from 'lucide-react';

export default function TeacherPanel() {
  const [activeTab, setActiveTab] = useState<'assignment' | 'material' | 'announcement' | 'test'>('assignment');

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Plus className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-2xl text-gray-900">Teacher Panel</h1>
            <p className="text-gray-600">Create and manage course content</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab('assignment')}
              className={`flex items-center gap-2 px-6 py-4 text-sm whitespace-nowrap transition-colors ${
                activeTab === 'assignment'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText className="w-5 h-5" />
              Create Assignment
            </button>
            <button
              onClick={() => setActiveTab('material')}
              className={`flex items-center gap-2 px-6 py-4 text-sm whitespace-nowrap transition-colors ${
                activeTab === 'material'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              Upload Material
            </button>
            <button
              onClick={() => setActiveTab('announcement')}
              className={`flex items-center gap-2 px-6 py-4 text-sm whitespace-nowrap transition-colors ${
                activeTab === 'announcement'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Bell className="w-5 h-5" />
              Send Announcement
            </button>
            <button
              onClick={() => setActiveTab('test')}
              className={`flex items-center gap-2 px-6 py-4 text-sm whitespace-nowrap transition-colors ${
                activeTab === 'test'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Calendar className="w-5 h-5" />
              Schedule Test
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Create Assignment Form */}
          {activeTab === 'assignment' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Select Course</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Data Structures (CS-301)</option>
                  <option>Database Systems (CS-402)</option>
                  <option>Web Development (CS-501)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Assignment Title</label>
                <input
                  type="text"
                  placeholder="e.g., Binary Search Tree Implementation"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Description</label>
                <textarea
                  rows={4}
                  placeholder="Provide detailed instructions for the assignment..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Due Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Total Points</label>
                  <input
                    type="number"
                    placeholder="100"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <input type="checkbox" id="send-email" className="w-5 h-5 rounded text-indigo-600" />
                <label htmlFor="send-email" className="text-sm text-blue-900">
                  Send email notification to all students
                </label>
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition-colors">
                <Send className="w-5 h-5" />
                Create Assignment
              </button>
            </div>
          )}

          {/* Upload Material Form */}
          {activeTab === 'material' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Select Course</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Data Structures (CS-301)</option>
                  <option>Database Systems (CS-402)</option>
                  <option>Web Development (CS-501)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Material Type</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Lecture Notes (PDF)</option>
                  <option>Presentation (PPT)</option>
                  <option>Video Tutorial</option>
                  <option>Reference Material</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Material Title</label>
                <input
                  type="text"
                  placeholder="e.g., Week 15 - Binary Trees"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Upload File</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-indigo-500 transition-colors cursor-pointer">
                  <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500">PDF, PPT, Video files up to 100MB</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <input type="checkbox" id="notify-students" className="w-5 h-5 rounded text-indigo-600" />
                <label htmlFor="notify-students" className="text-sm text-blue-900">
                  Notify students about new material
                </label>
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition-colors">
                <BookOpen className="w-5 h-5" />
                Upload Material
              </button>
            </div>
          )}

          {/* Send Announcement Form */}
          {activeTab === 'announcement' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Recipient Group</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>All Students</option>
                  <option>Data Structures (CS-301)</option>
                  <option>Database Systems (CS-402)</option>
                  <option>Web Development (CS-501)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Priority Level</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>General</option>
                  <option>Important</option>
                  <option>Urgent</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Announcement Type</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>General</option>
                  <option>Exam</option>
                  <option>Assignment</option>
                  <option>Event</option>
                  <option>Holiday</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  placeholder="e.g., Mid-term Exam Schedule"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Write your announcement message here..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <input type="checkbox" id="send-announcement-email" className="w-5 h-5 rounded text-indigo-600" />
                <label htmlFor="send-announcement-email" className="text-sm text-blue-900">
                  Send email notification
                </label>
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition-colors">
                <Send className="w-5 h-5" />
                Send Announcement
              </button>
            </div>
          )}

          {/* Schedule Test Form */}
          {activeTab === 'test' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Select Course</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Data Structures (CS-301)</option>
                  <option>Database Systems (CS-402)</option>
                  <option>Web Development (CS-501)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Test Type</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Mid-term Exam</option>
                  <option>Final Exam</option>
                  <option>Quiz</option>
                  <option>Practical Test</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Test Title</label>
                <input
                  type="text"
                  placeholder="e.g., Mid-term Examination"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Time</label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Duration (minutes)</label>
                  <input
                    type="number"
                    placeholder="90"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Total Marks</label>
                  <input
                    type="number"
                    placeholder="100"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Venue</label>
                <input
                  type="text"
                  placeholder="e.g., Main Auditorium"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Instructions</label>
                <textarea
                  rows={3}
                  placeholder="Add any special instructions for students..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <input type="checkbox" id="send-test-email" className="w-5 h-5 rounded text-indigo-600" />
                  <label htmlFor="send-test-email" className="text-sm text-blue-900">
                    Send email notification to students
                  </label>
                </div>
                <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl border border-orange-200">
                  <input type="checkbox" id="reminder" className="w-5 h-5 rounded text-orange-600" />
                  <label htmlFor="reminder" className="text-sm text-orange-900">
                    Set reminder notification 1 day before
                  </label>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition-colors">
                <Calendar className="w-5 h-5" />
                Schedule Test
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Reminder Alerts */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <Bell className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl text-gray-900">Upcoming Reminders</h2>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl">
            <Calendar className="w-5 h-5 text-orange-600" />
            <div className="flex-1">
              <p className="text-sm text-gray-900">Assignment deadline in 2 days</p>
              <p className="text-xs text-gray-600">Binary Search Tree - CS-301</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
            <Users className="w-5 h-5 text-blue-600" />
            <div className="flex-1">
              <p className="text-sm text-gray-900">23 submissions pending review</p>
              <p className="text-xs text-gray-600">Multiple courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
