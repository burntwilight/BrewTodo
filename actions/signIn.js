
const signIn = async (formData, supabase) => {
    const email = formData.get('email')
    const password = formData.get('password')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      // toast.error(error.message)
      return error
    }

    const result = true

    // toast.success('Successfully signed in!')
    return result
}

export default signIn