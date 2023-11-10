
const signUp = async (formData, supabase) => {
    const email = formData.get('email')
    const password = formData.get('password')


    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    })

    if (error) {
      // toast.error(error.message)
      return error
    }

    const result = true

    // toast.success("Success! Check email to continue sign in process.")
    return result
}

export default signUp