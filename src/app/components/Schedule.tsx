import { Calendar, Clock, MapPin, Users } from 'lucide-react';

interface ScheduleProps {
  role: 'student' | 'teacher';
}

export default function Schedule({ role }: ScheduleProps) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
  const schedule = {
    Monday: [
      { time: '09:00 - 10:30', subject: 'Data Structures', room: 'Lab 301', color: 'bg-blue-500', students: role === 'teacher' ? 52 : undefined },
      { time: '11:00 - 12:30', subject: 'Database Systems', room: 'Room 205', color: 'bg-purple-500', students: role === 'teacher' ? 48 : undefined },
    ],
    Tuesday: [
      { time: '10:00 - 11:30', subject: 'Web Development', room: 'Lab 102', color: 'bg-green-500', students: role === 'teacher' ? 56 : undefined },
      { time: '02:00 - 03:30', subject: 'Software Engineering', room: 'Room 301', color: 'bg-orange-500', students: role === 'teacher' ? 45 : undefined },
    ],
    Wednesday: [
      { time: '09:00 - 10:30', subject: 'Data Structures', room: 'Lab 301', color: 'bg-blue-500', students: role === 'teacher' ? 52 : undefined },
      { time: '01:00 - 02:30', subject: 'Database Systems', room: 'Room 205', color: 'bg-purple-500', students: role === 'teacher' ? 48 : undefined },
    ],
    Thursday: [
      { time: '11:00 - 12:30', subject: 'Web Development', room: 'Lab 102', color: 'bg-green-500', students: role === 'teacher' ? 56 : undefined },
      { time: '03:00 - 04:30', subject: 'Software Engineering', room: 'Room 301', color: 'bg-orange-500', students: role === 'teacher' ? 45 : undefined },
    ],
    Friday: [
      { time: '09:00 - 10:30', subject: 'Data Structures Lab', room: 'Lab 301', color: 'bg-blue-500', students: role === 'teacher' ? 52 : undefined },
      { time: '11:00 - 12:30', subject: 'Project Work', room: 'Lab 102', color: 'bg-indigo-500', students: role === 'teacher' ? 60 : undefined },
    ],
  };

  const upcomingEvents = [
    { date: 'Dec 20', title: 'Mid-term Exam - Data Structures', type: 'Exam', color: 'bg-red-100 text-red-600' },
    { date: 'Dec 22', title: 'Project Presentation', type: 'Event', color: 'bg-blue-100 text-blue-600' },
    { date: 'Dec 25', title: 'Winter Break Begins', type: 'Holiday', color: 'bg-green-100 text-green-600' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl text-gray-900 mb-2">Academic Schedule</h1>
            <p className="text-gray-600">Your weekly timetable and upcoming events</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-xl">
            <Calendar className="w-5 h-5 text-indigo-600" />
            <span className="text-indigo-600">Week 15</span>
          </div>
        </div>
      </div>

      {/* Weekly Timetable */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl text-gray-900 mb-6">Weekly Timetable</h2>
        <div className="grid gap-6">
          {days.map((day) => (
            <div key={day} className="border-l-4 border-indigo-500 pl-4">
              <h3 className="text-gray-900 mb-3">{day}</h3>
              <div className="space-y-3">
                {schedule[day as keyof typeof schedule].map((class_item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className={`${class_item.color} w-2 h-12 sm:w-1 sm:h-full rounded-full hidden sm:block`} />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <p className="text-gray-900">{class_item.subject}</p>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{class_item.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{class_item.room}</span>
                            </div>
                            {role === 'teacher' && class_item.students && (
                              <div className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                <span>{class_item.students} students</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl text-gray-900 mb-6">Upcoming Events & Tests</h2>
        <div className="space-y-3">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-indigo-200 transition-colors">
              <div className="flex-shrink-0 w-16 text-center">
                <p className="text-2xl text-gray-900">{event.date.split(' ')[1]}</p>
                <p className="text-xs text-gray-600">{event.date.split(' ')[0]}</p>
              </div>
              <div className="flex-1">
                <p className="text-gray-900">{event.title}</p>
              </div>
              <span className={`${event.color} text-xs px-3 py-1 rounded-full`}>
                {event.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
