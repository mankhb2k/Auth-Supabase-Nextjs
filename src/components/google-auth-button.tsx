'use client'

import { createClient } from '@/utils/supabase/client'
import { Button } from '@/components/ui/button'
import { FcGoogle } from 'react-icons/fc' // Cần cài thêm react-icons

export function SignInWithGoogleButton() {
  const supabase = createClient()

  const auth_callback_url=`${process.env.SITE_URL}/auth/callback`

  const handleSignIn = async () => {
    // Chuyển hướng người dùng về trang /dashboard sau khi đăng nhập thành công
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: auth_callback_url,
      },
    })
  }

  return (
    <Button onClick={handleSignIn} variant="outline" className="w-full">
      <FcGoogle className="mr-2 h-4 w-4" /> Sign In with Google
    </Button>
  )
}