import Link from 'next/link'
import { headers, cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { toast } from "react-hot-toast"

const page = async (searchParams) => {

  const handleSignIn = async () => {
    'use server'
    return redirect('/auth/login')
  }

  const handleSignUp = async () => {
    'use server'
    return redirect('/auth/sign-up')
  }

  return (
    <main className="
      min-h-[80vh] 
      w-full 
      flex 
      flex-col 
      justify-between 
      items-center 
      p-24
    ">
      <Link
        href="/"
        className="absolute left-2 top-16 py-2 px-4 rounded-md no-underline text-text bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{' '}
        Back
      </Link>

      <form
        className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-text"
        onSubmit={handleSignIn ? handleSignIn : handleSignUp}
      >
        <label className="text-md text-text" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-background text-text border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md text-text" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-background text-text border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button className="
          bg-primary 
          rounded-md 
          px-4 
          py-2 
          text-foreground 
          mb-2 
          hover:-translate-y-1
          hover:shadow-lg
          hover:shadow-primary
          transition
        ">
          Sign In
        </button>
        <button
          formAction={handleSignUp}
          className="
            border 
            border-text/20 
            rounded-md 
            px-4 
            py-2 
            text-text 
            mb-2
            hover:-translate-y-1
            hover:shadow-lg
            hover:shadow-secondary
            transition            
        "
        >
          Sign Up
        </button>
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-text/10 text-text text-center">
            {searchParams.message}
          </p>
        )}
      </form>
    </main>
  )
}

export default page