'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useShopStore } from '@/lib/store'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const login = useShopStore((state) => state.login)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Fake auth: just accept any email and password and log them in
    if (email && password) {
      // Create a fake user object, extracting a name from the email
      const name = email.split('@')[0].replace(/[^a-zA-Z]/g, ' ')
      const formattedName = name.charAt(0).toUpperCase() + name.slice(1)
      
      login({
        name: formattedName || 'User',
        email: email
      })
      
      router.push('/account')
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-light uppercase tracking-widest mb-2">Welcome Back</h1>
          <p className="text-gray-500 font-light text-sm">Please sign in to your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors font-light bg-transparent"
              placeholder="you@example.com"
            />
          </div>
          
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors font-light bg-transparent"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-black text-white text-sm font-medium uppercase tracking-widest hover:bg-gray-900 transition-colors mt-8"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center text-sm font-light text-gray-500">
          Don't have an account?{' '}
          <Link href="/register" className="text-black hover:underline font-medium">
            Register here
          </Link>
        </div>
      </div>
    </div>
  )
}
