'use client'

import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from "next/navigation"
import { useState } from 'react'

const page = async () => {
  const router = useRouter
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { data, error } = await supabase
  .from('users')
  .insert([
    { some_column: 'someValue', other_column: 'otherValue' },
  ])
  .select()

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email: username,
      password: password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`
      }
    })
    // POSSIBLY ADD TOAST FOR SIGN IN SUCCESS BEFORE REDIRECT
  
    router.push('/')
  }

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email: username,
      password: password
    })

    // ADD TOAST BEFORE REDIRECT FOR SUCCESS
    router.push('/')
  }

  return (
    <main className="min-h-[80vh] w-full flex flex-col justify-between items-center p-24">
      <form className="bg-background border border-text rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-text text-sm font-bold mb-2">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-text leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="mb-6">
            <label className="block text-text text-sm font-bold mb-2">
              Password
            </label>
            <input className="shadow appearance-none border border-background rounded w-full py-2 px-3 text-text mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={password} onChange={(e) => setPassword(e.target.value)} />
            <p className="text-text text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <button className="bg-primary hover:bg-primary text-text font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSignIn}>
              Sign In
            </button>
            <button className="bg-primary hover:bg-primary text-text font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSignUp}>
              Sign Up
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-text hover:text-primary" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
    </main>
  )
}

export default page