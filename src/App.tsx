import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { ThemeProvider } from './components/ThemeProvider';
import { Login } from './screens/Login';
import { Dashboard } from './screens/Dashboard';
import { Shield, Lock } from 'lucide-react';

function AppContent() {
  const { user, authLoading } = useApp();

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#03050c] relative overflow-hidden font-sans transition-colors duration-500">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-200/40 dark:from-slate-900/40 via-slate-50 dark:via-[#03050c] to-slate-50 dark:to-[#03050c] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-500/10 dark:bg-cyan-500/10 blur-[100px] animate-pulse pointer-events-none"></div>

        <div className="flex flex-col items-center relative z-10 w-full max-w-sm px-6">
          {/* Logo/Icon Container */}
          <div className="relative w-24 h-24 mb-10 flex items-center justify-center">
            {/* Outer spinning ring */}
            <svg className="absolute inset-0 w-full h-full animate-spin-slow opacity-60" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" className="text-blue-500/20 dark:text-cyan-400/20" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
            
            {/* Middle spinning ring (reverse) */}
            <svg className="absolute inset-1 w-[88%] h-[88%] animate-spin-slow-reverse opacity-80" viewBox="0 0 100 100" style={{ margin: 'auto' }}>
              <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" className="text-indigo-500/40 dark:text-blue-500/40" strokeWidth="2" strokeDasharray="30 10" />
            </svg>

            {/* Inner pulsating glow */}
            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-600/20 dark:from-cyan-400/20 dark:to-blue-600/20 shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:shadow-[0_0_20px_rgba(34,211,238,0.3)] animate-pulse-fast"></div>
            
            {/* Core Icon Wrapper */}
            <div className="relative w-14 h-14 rounded-2xl bg-white dark:bg-[#03050c] border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] dark:shadow-[0_0_15px_rgba(6,182,212,0.5)] z-10 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 dark:from-cyan-500/20 dark:to-blue-600/20"></div>
              <Shield className="w-7 h-7 text-blue-600 dark:text-cyan-400 absolute drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" strokeWidth={1.5} />
              <Lock className="w-3 h-3 text-slate-800 dark:text-white absolute mt-2" strokeWidth={2.5} />
            </div>
          </div>

          {/* Loading Text */}
          <div className="relative w-full flex flex-col items-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-white mb-2 pb-1 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 via-blue-600 to-slate-800 dark:from-white dark:via-cyan-100 dark:to-white animate-text-shimmer">SAFE<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-cyan-400 dark:to-blue-500">NEST</span></h2>
            
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-cyan-400 animate-pulse"></div>
              <p className="text-blue-600/80 dark:text-cyan-400/80 font-mono tracking-[0.2em] text-xs uppercase relative overflow-hidden inline-block">
                Securing Connection
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400 dark:via-white to-transparent opacity-0 translate-x-[-100%] animate-[shimmer_2s_infinite]"></span>
              </p>
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-blue-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full h-1 bg-slate-200 dark:bg-white/[0.05] rounded-full overflow-hidden relative">
              <div className="absolute top-0 left-0 h-full w-[30%] bg-gradient-to-r from-transparent via-blue-500 to-indigo-600 dark:via-cyan-400 dark:to-blue-500 rounded-full animate-progress-indeterminate shadow-[0_0_10px_rgba(59,130,246,0.5)] dark:shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Login />;
  }

  return <Dashboard />;
}

export default function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ThemeProvider>
  );
}
