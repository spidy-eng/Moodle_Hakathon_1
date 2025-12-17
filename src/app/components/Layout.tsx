import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, BookOpen, FileText, Bell, Settings, GraduationCap, Edit3 } from 'lucide-react';
import { ReactNode } from 'react';

interface LayoutProps {
  user: { role: 'student' | 'teacher'; name: string };
  onLogout: () => void;
  children: ReactNode;
}

export default function Layout({ user, children }: LayoutProps) {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', to: '/', icon: Home },
    { name: 'Schedule', to: '/schedule', icon: Calendar },
    { name: 'Materials', to: '/materials', icon: BookOpen },
    { name: 'Assignments', to: '/assignments', icon: FileText },
    { name: 'Announcements', to: '/announcements', icon: Bell },
    ...(user.role === 'teacher' ? [{ name: 'Teacher Panel', to: '/teacher-panel', icon: Edit3 }] : []),
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl text-gray-900">Academic Portal</h1>
              </div>
            </div>
          </div>

          <div className="mt-8 flex-grow flex flex-col">
            <nav className="flex-1 px-4 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={`group flex items-center px-4 py-3 rounded-xl transition-all ${
                      isActive(item.to)
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon
                      className={`mr-3 flex-shrink-0 h-5 w-5 ${
                        isActive(item.to) ? 'text-indigo-600' : 'text-gray-400'
                      }`}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="px-4 mt-4">
              <Link
                to="/profile"
                className={`group flex items-center px-4 py-3 rounded-xl transition-all ${
                  isActive('/profile')
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Settings className={`mr-3 flex-shrink-0 h-5 w-5 ${
                  isActive('/profile') ? 'text-indigo-600' : 'text-gray-400'
                }`} />
                Profile & Settings
              </Link>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 z-50">
        <div className="grid grid-cols-5 gap-1 p-2">
          {navigation.slice(0, 4).map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.to}
                className={`flex flex-col items-center py-2 px-1 rounded-lg ${
                  isActive(item.to) ? 'text-indigo-600' : 'text-gray-600'
                }`}
              >
                <Icon className="h-6 w-6 mb-1" />
                <span className="text-xs">{item.name.split(' ')[0]}</span>
              </Link>
            );
          })}
          <Link
            to="/profile"
            className={`flex flex-col items-center py-2 px-1 rounded-lg ${
              isActive('/profile') ? 'text-indigo-600' : 'text-gray-600'
            }`}
          >
            <Settings className="h-6 w-6 mb-1" />
            <span className="text-xs">Profile</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="lg:pl-72 flex flex-col min-h-screen">
        <main className="flex-1 pb-20 lg:pb-8">
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
