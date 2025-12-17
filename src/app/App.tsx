import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import Schedule from './components/Schedule';
import Materials from './components/Materials';
import Assignments from './components/Assignments';
import Announcements from './components/Announcements';
import Notifications from './components/Notifications';
import Profile from './components/Profile';
import TeacherPanel from './components/TeacherPanel';
import Layout from './components/Layout';

export default function App() {
  const [user, setUser] = useState<{ role: 'student' | 'teacher' | null; name: string } | null>(null);

  const handleLogin = (role: 'student' | 'teacher', name: string) => {
    setUser({ role, name });
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <BrowserRouter>
      <Layout user={user} onLogout={handleLogout}>
        <Routes>
          <Route 
            path="/" 
            element={
              user.role === 'student' 
                ? <StudentDashboard user={user} /> 
                : <TeacherDashboard user={user} />
            } 
          />
          <Route path="/schedule" element={<Schedule role={user.role} />} />
          <Route path="/materials" element={<Materials role={user.role} />} />
          <Route path="/assignments" element={<Assignments role={user.role} />} />
          <Route path="/announcements" element={<Announcements role={user.role} />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile user={user} onLogout={handleLogout} />} />
          {user.role === 'teacher' && (
            <Route path="/teacher-panel" element={<TeacherPanel />} />
          )}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
