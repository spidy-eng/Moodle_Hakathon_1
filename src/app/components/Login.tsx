import { useState } from 'react';
import { GraduationCap, User, Lock, ArrowRight } from 'lucide-react';

interface LoginProps {
  onLogin: (role: 'student' | 'teacher', name: string) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [role, setRole] = useState<'student' | 'teacher' | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role && email && password) {
      const name = email.split('@')[0];
      onLogin(role, name.charAt(0).toUpperCase() + name.slice(1));
    }
  };

  if (showForgotPassword) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                <Lock className="w-8 h-8 text-indigo-600" />
              </div>
              <h2 className="text-2xl text-gray-900">Reset Password</h2>
              <p className="text-gray-600 mt-2">Enter your email to receive reset instructions</p>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="your.email@university.edu"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition-colors"
              >
                Send Reset Link
              </button>

              <button
                type="button"
                onClick={() => setShowForgotPassword(false)}
                className="w-full text-indigo-600 hover:text-indigo-700"
              >
                Back to Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (!role) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg mb-6">
              <GraduationCap className="w-12 h-12 text-indigo-600" />
            </div>
            <h1 className="text-4xl text-gray-900 mb-2">Academic Portal</h1>
            <p className="text-xl text-gray-600">Select your role to continue</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() => setRole('student')}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-1 group"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <User className="w-10 h-10 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h2 className="text-2xl text-gray-900">Student</h2>
                <p className="text-gray-600 text-center">Access schedules, assignments, and study materials</p>
                <ArrowRight className="w-6 h-6 text-indigo-600 group-hover:translate-x-2 transition-transform" />
              </div>
            </button>

            <button
              onClick={() => setRole('teacher')}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-1 group"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                  <GraduationCap className="w-10 h-10 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <h2 className="text-2xl text-gray-900">Teacher</h2>
                <p className="text-gray-600 text-center">Manage classes, assignments, and student progress</p>
                <ArrowRight className="w-6 h-6 text-purple-600 group-hover:translate-x-2 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
              {role === 'student' ? (
                <User className="w-8 h-8 text-indigo-600" />
              ) : (
                <GraduationCap className="w-8 h-8 text-indigo-600" />
              )}
            </div>
            <h2 className="text-2xl text-gray-900">{role === 'student' ? 'Student' : 'Teacher'} Login</h2>
            <p className="text-gray-600 mt-2">Enter your credentials to access the portal</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="your.email@university.edu"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="button"
              onClick={() => setShowForgotPassword(true)}
              className="text-sm text-indigo-600 hover:text-indigo-700"
            >
              Forgot password?
            </button>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
            >
              Sign In
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => setRole(null)}
              className="w-full text-gray-600 hover:text-gray-700"
            >
              Change Role
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
