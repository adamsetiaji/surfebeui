import React from 'react'
import { Play, Square, MoreVertical, Plus } from 'lucide-react'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const mockUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    balance: "$1,234.56",
    status: "active",
    messageBot: "Running",
    isRunning: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    balance: "$2,345.67",
    status: "inactive",
    messageBot: "Stopped",
    isRunning: false,
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert@example.com",
    balance: "$3,456.78",
    status: "active",
    messageBot: "Running",
    isRunning: true,
  }
]

const UsersTable = () => {
  const handleStartStop = (userId) => {
    console.log('Toggle start/stop for user:', userId)
  }

  const handleDelete = (userId) => {
    console.log('Delete user:', userId)
  }

  const handleEdit = (userId) => {
    console.log('Edit user:', userId)
  }

  const handleAddUser = () => {
    console.log('Add new user')
  }

  return (
    <Card className="col-span-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Users Management</CardTitle>
        <Button onClick={handleAddUser} className="flex items-center gap-2">
          <Plus size={16} />
          Add New User
        </Button>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">User</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Email</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Balance</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Message Bot</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                  <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground pr-6">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockUsers.map((user) => (
                  <tr key={user.id} className="border-b transition-colors hover:bg-muted/50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">ID: #{user.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm">{user.email}</div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm font-medium">{user.balance}</div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm">{user.messageBot}</div>
                    </td>
                    <td className="p-4">
                      <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                        ${user.isRunning 
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                        }`}>
                        {user.isRunning ? 'Active' : 'Inactive'}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className={user.isRunning ? 'text-red-600' : 'text-green-600'}
                          onClick={() => handleStartStop(user.id)}
                        >
                          {user.isRunning ? <Square size={16} /> : <Play size={16} />}
                        </Button>
                        
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical size={16} />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleEdit(user.id)}>
                              Edit User
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              className="text-red-600"
                              onClick={() => handleDelete(user.id)}
                            >
                              Delete User
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex items-center justify-between px-4 py-4 border-t">
            <div className="text-sm text-muted-foreground">
              Showing {mockUsers.length} users
            </div>
            <div className="flex items-center space-x-6 lg:space-x-8">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden h-8 w-8 p-0 lg:flex"
                >
                  1
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0"
                  disabled
                >
                  2
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0"
                  disabled
                >
                  3
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default UsersTable