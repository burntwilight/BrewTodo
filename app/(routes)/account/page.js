'use client'

import { createClient } from "@supabase/supabase-js"
import { useRouter } from "next/navigation"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const handleSignIn = async () => {
  return
}

const handleSignUp = async () => {
  return
}

const page = () => {
  return (
    <main className="min-h-[80vh] w-full flex flex-col justify-between items-center p-24">
      <form class="bg-background shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-primary hover:bg-primary text-text font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSignIn}>
              Sign In
            </button>
            <a class="inline-block align-baseline font-bold text-sm text-text hover:text-primary" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
    </main>
  )
}

export default page