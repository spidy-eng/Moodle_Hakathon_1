import { useState } from 'react';
import { FileText, Clock, CheckCircle, AlertCircle, Upload, Eye, Edit } from 'lucide-react';

interface AssignmentsProps {
  role: 'student' | 'teacher';
}

export default function Assignments({ role }: AssignmentsProps) {
  const [activeTab, setActiveTab] = useState<'pending' | 'submitted' | 'graded'>('pending');

  const studentAssignments = {
    pending: [
      {
        title: 'Binary Search Tree Implementation',
        subject: 'Data Structures',
        dueDate: 'Dec 20, 2024',
        daysLeft: 3,
        points: 100,
        description: 'Implement BST with insert, delete, and search operations',
      },
      {
        title: 'Database Normalization Report',
        subject: 'Database Systems',
        dueDate: 'Dec 22, 2024',
        daysLeft: 5,
        points: 50,
        description: 'Normalize a given database schema up to 3NF',
      },
    ],
    submitted: [
      {
        title: 'React Component Design',
        subject: 'Web Development',
        submittedDate: 'Dec 16, 2024',
        status: 'Under Review',
        points: 75,
      },
    ],
    graded: [
      {
        title: 'Sorting Algorithms Analysis',
        subject: 'Data Structures',
        submittedDate: 'Dec 10, 2024',
        grade: '95/100',
        feedback: 'Excellent work! Well-documented code and thorough analysis.',
        points: 100,
      },
      {
        title: 'SQL Query Optimization',
        subject: 'Database Systems',
        submittedDate: 'Dec 8, 2024',
        grade: '88/100',
        feedback: 'Good approach but could improve indexing strategies.',
        points: 100,
      },
    ],
  };

  const teacherAssignments = [
    {
      title: 'Binary Search Tree Implementation',
      subject: 'Data Structures (CS-301)',
      dueDate: 'Dec 20, 2024',
      submitted: 42,
      total: 52,
      graded: 35,
    },
    {
      title: 'Database Normalization Report',
      subject: 'Database Systems (CS-402)',
      dueDate: 'Dec 22, 2024',
      submitted: 38,
      total: 48,
      graded: 30,
    },
    {
      title: 'React Component Design',
      subject: 'Web Development (CS-501)',
      dueDate: 'Dec 25, 2024',
      submitted: 48,
      total: 56,
      graded: 40,
    },
  ];

  if (role === 'teacher') {
    return (
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-gray-900 mb-2">Assignments Management</h1>
              <p className="text-gray-600">Track and grade student submissions</p>
            </div>
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors">
              <Edit className="w-5 h-5" />
              Create Assignment
            </button>
          </div>
        </div>

        {/* Assignments List */}
        <div className="space-y-4">
          {teacherAssignments.map((assignment, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg text-gray-900 mb-1">{assignment.title}</h3>
                  <p className="text-sm text-gray-600">{assignment.subject}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Due: {assignment.dueDate}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center p-3 bg-blue-50 rounded-xl">
                  <p className="text-2xl text-blue-600">{assignment.submitted}/{assignment.total}</p>
                  <p className="text-xs text-gray-600 mt-1">Submitted</p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-xl">
                  <p className="text-2xl text-green-600">{assignment.graded}</p>
                  <p className="text-xs text-gray-600 mt-1">Graded</p>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-xl">
                  <p className="text-2xl text-orange-600">{assignment.submitted - assignment.graded}</p>
                  <p className="text-xs text-gray-600 mt-1">Pending Review</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors">
                  <Eye className="w-4 h-4" />
                  View Submissions
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h1 className="text-2xl text-gray-900 mb-2">Assignments</h1>
        <p className="text-gray-600">View, submit, and track your assignments</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab('pending')}
              className={`flex-1 px-6 py-4 text-sm transition-colors ${
                activeTab === 'pending'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Pending ({studentAssignments.pending.length})
            </button>
            <button
              onClick={() => setActiveTab('submitted')}
              className={`flex-1 px-6 py-4 text-sm transition-colors ${
                activeTab === 'submitted'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Submitted ({studentAssignments.submitted.length})
            </button>
            <button
              onClick={() => setActiveTab('graded')}
              className={`flex-1 px-6 py-4 text-sm transition-colors ${
                activeTab === 'graded'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Graded ({studentAssignments.graded.length})
            </button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {activeTab === 'pending' && (
            <>
              {studentAssignments.pending.map((assignment, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-indigo-200 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg text-gray-900 mb-1">{assignment.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{assignment.subject}</p>
                      <p className="text-sm text-gray-700">{assignment.description}</p>
                    </div>
                    <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                      assignment.daysLeft <= 2 ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'
                    }`}>
                      <Clock className="w-4 h-4" />
                      <span>{assignment.daysLeft} days left</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>Due: {assignment.dueDate}</span>
                      <span>•</span>
                      <span>{assignment.points} points</span>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors">
                      <Upload className="w-4 h-4" />
                      Submit
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}

          {activeTab === 'submitted' && (
            <>
              {studentAssignments.submitted.map((assignment, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg text-gray-900 mb-1">{assignment.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{assignment.subject}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>Submitted: {assignment.submittedDate}</span>
                        <span>•</span>
                        <span>{assignment.points} points</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {assignment.status}
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}

          {activeTab === 'graded' && (
            <>
              {studentAssignments.graded.map((assignment, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg text-gray-900 mb-1">{assignment.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{assignment.subject}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>Submitted: {assignment.submittedDate}</span>
                        <span>•</span>
                        <span>{assignment.points} points</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-600 rounded-xl">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-lg">{assignment.grade}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Teacher's Feedback:</p>
                    <p className="text-sm text-gray-900 bg-gray-50 p-3 rounded-xl">{assignment.feedback}</p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
