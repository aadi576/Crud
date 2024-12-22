import React from 'react';
import { Menu, Home, Settings, User, Bell } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Menu className="h-6 w-6 text-gray-500" />
              <span className="ml-3 text-xl font-semibold text-gray-900">Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <User className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          {[
            { title: 'Total Users', value: '2,543', change: '+12.5%' },
            { title: 'Revenue', value: '$45,234', change: '+8.2%' },
            { title: 'Active Projects', value: '12', change: '+3' },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
              <div className="mt-2 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                <span className="ml-2 text-sm font-medium text-green-600">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
          <div className="bg-white shadow rounded-lg">
            <ul className="divide-y divide-gray-200">
              {[
                { user: 'John Doe', action: 'completed task', time: '2 hours ago' },
                { user: 'Jane Smith', action: 'created project', time: '4 hours ago' },
                { user: 'Mike Johnson', action: 'uploaded file', time: '6 hours ago' },
              ].map((activity, index) => (
                <li key={index} className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                      <p className="text-sm text-gray-500">{activity.action}</p>
                    </div>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;