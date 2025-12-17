import { User, Mail, Phone, MapPin, GraduationCap, Calendar, Bell, Lock, LogOut } from 'lucide-react';

interface ProfileProps {
  user: { role: 'student' | 'teacher'; name: string };
  onLogout: () => void;
}

export default function Profile({ user, onLogout }: ProfileProps) {
  const profileData = user.role === 'student' ? {
    name: user.name.charAt(0).toUpperCase() + user.name.slice(1),
    email: `${user.name}@university.edu`,
    phone: '+1 (555) 123-4567',
    department: 'Computer Science',
    semester: '7th Semester',
    rollNumber: 'CS-2021-156',
    enrollmentYear: '2021',
  } : {
    name: `Prof. ${user.name.charAt(0).toUpperCase() + user.name.slice(1)}`,
    email: `${user.name}@university.edu`,
    phone: '+1 (555) 987-6543',
    department: 'Computer Science',
    designation: 'Associate Professor',
    employeeId: 'FAC-2015-042',
    joiningYear: '2015',
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-indigo-600" />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl mb-2">{profileData.name}</h1>
            <p className="text-indigo-100 mb-1">{profileData.department} Department</p>
            <p className="text-indigo-200 text-sm">
              {user.role === 'student' ? profileData.semester : profileData.designation}
            </p>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl text-gray-900 mb-6">Personal Information</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Email Address</p>
              <p className="text-gray-900">{profileData.email}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Phone Number</p>
              <p className="text-gray-900">{profileData.phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">
                {user.role === 'student' ? 'Roll Number' : 'Employee ID'}
              </p>
              <p className="text-gray-900">
                {user.role === 'student' ? profileData.rollNumber : profileData.employeeId}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">
                {user.role === 'student' ? 'Enrollment Year' : 'Joining Year'}
              </p>
              <p className="text-gray-900">
                {user.role === 'student' ? profileData.enrollmentYear : profileData.joiningYear}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl text-gray-900 mb-6">Notification Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <p className="text-gray-900">Email Notifications</p>
                <p className="text-sm text-gray-600">Receive updates via email</p>
              </div>
            </div>
            <div className="w-12 h-6 bg-indigo-600 rounded-full relative cursor-pointer">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-gray-900">Deadline Reminders</p>
                <p className="text-sm text-gray-600">Get reminders before deadlines</p>
              </div>
            </div>
            <div className="w-12 h-6 bg-indigo-600 rounded-full relative cursor-pointer">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-900">Announcements</p>
                <p className="text-sm text-gray-600">Receive department announcements</p>
              </div>
            </div>
            <div className="w-12 h-6 bg-gray-300 rounded-full relative cursor-pointer">
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl text-gray-900 mb-6">Account Settings</h2>
        <div className="space-y-3">
          <button className="w-full flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Lock className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-gray-900">Change Password</p>
              <p className="text-sm text-gray-600">Update your account password</p>
            </div>
          </button>

          <button className="w-full flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-gray-900">Update Contact Information</p>
              <p className="text-sm text-gray-600">Modify your address and phone number</p>
            </div>
          </button>

          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors text-red-600"
          >
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <LogOut className="w-5 h-5 text-red-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-red-600">Logout</p>
              <p className="text-sm text-red-600/70">Sign out from your account</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
