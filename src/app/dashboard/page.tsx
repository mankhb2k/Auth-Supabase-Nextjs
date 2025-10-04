// src/app/dashboard/page.tsx
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import SignOutButton from '@/components/signout-button'

export default async function DashboardPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    // Trường hợp dự phòng, middleware sẽ bắt hầu hết các trường hợp này
    redirect('/login') 
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome, {user.email}!</h1>
      <p className="mt-4">This is a protected route!</p>
      <SignOutButton />
    </div>
  )
}