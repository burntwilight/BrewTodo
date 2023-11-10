'use client'

import signIn from "@/actions/signIn"
import signUp from "@/actions/signUp"

const Form = async ({searchParams}, {supabase}) => {

    const signInFormAction = (formData, supabase) => {
        signIn(formData)
        return
    }

    const signUpFormAction = (formData, supabase) => {
        signUp(formData)
        return
    }
    
    return (
        <form
        className="animate-in-slow flex-1 flex flex-col w-full justify-center gap-2 text-text"
        action={signInFormAction}
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
        minLength={6}
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
        hover:shadow-secondary
        transition
        ">
        Sign In
        </button>
        <button
        formAction={signUpFormAction}
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
    )
}

export default Form