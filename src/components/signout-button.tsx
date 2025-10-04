// src/components/ui/signout-button.tsx
'use client'

import { Button } from '@/components/ui/button'
import { signOut } from '@/utils/auth/actions' // Import action đăng xuất
import { LogOut } from 'lucide-react'

export default function SignOutButton() {
  return (
    // Sử dụng form để gọi Server Action
    <form action={signOut}>
      <Button variant="destructive" className="flex items-center space-x-2">
        <LogOut className="h-4 w-4 mr-2" /> Đăng xuất
      </Button>
    </form>
  )
}