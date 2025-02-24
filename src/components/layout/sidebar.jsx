import React from 'react'
import { Home, Users, Settings, Bot } from 'lucide-react'

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/' },
    { icon: Users, label: 'Users', href: '/users' },
    { icon: Bot, label: 'Bots', href: '/bots' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ]

  return (
    <div className="fixed inset-y-0 left-0 bg-indigo-700 w-64 text-white">
      {/* Logo */}
      <div className="flex items-center p-6">
        <div className="w-8 h-8 bg-white rounded-lg"></div>
        <span className="ml-3 text-xl font-bold">Surfebe UI</span>
      </div>

      {/* Navigation */}
      <nav className="mt-6 px-3">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center px-4 py-3 text-gray-100 hover:bg-indigo-800 rounded-lg transition-colors mb-1"
          >
            <item.icon className="w-5 h-5" />
            <span className="ml-3">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* User Profile */}
      <div className="absolute bottom-0 w-full p-6 border-t border-indigo-800">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-white rounded-full"></div>
          <div className="ml-3">
            <p className="font-medium">Admin User</p>
            <p className="text-sm text-indigo-200">admin@surfebe.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar