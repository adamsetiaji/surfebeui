import React from 'react'
import Layout from './components/layout/layout'
import StatsCard from './components/dashboard/stats-card'
import UsersTable from './components/dashboard/users-table'

function App() {
  return (
    <Layout>
      <div className="space-y-6">
        <StatsCard />
        <UsersTable />
      </div>
    </Layout>
  )
}

export default App