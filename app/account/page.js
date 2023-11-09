import Link from 'next/link'
import { headers, cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
// import { toast } from "react-hot-toast"


const page = async (searchParams) => {

  const signIn = async (formData) => {
    'use server'

    const email = formData.get('email')
    const password = formData.get('password')
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      // toast.error(error.message)
      return redirect('/account?message=Could not authenticate user log in')
    }

    // toast.success('Successfully signed in!')
    return redirect('/')
  }

  const signUp = async (formData) => {
    'use server'

    const origin = headers().get('origin')
    const email = formData.get('email')
    const password = formData.get('password')
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    })

    if (error) {
      toast.error(error.message)
      return redirect('/account?message=Could not authenticate user signup')
    } 

    toast.success("Success! Check email to continue sign in process.")
    return redirect('/account?message=Check email to continue sign in process')  
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
      <h1 className='text-text animate-in font-bold text-2xl'>Please sign in or sign up</h1>
      <form
        className="animate-in-slow flex-1 flex flex-col w-full justify-center gap-2 text-text"
        action={signIn}
      >
        <label className="text-md text-text" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-background text-text border mb-6"
          name="email"
          id='email'
          placeholder="you@example.com"
          required
          autoComplete='email'
        />
        <label className="text-md text-text" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-background text-text border mb-6"
          type="password"
          id='password'
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
          formAction={signUp}
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