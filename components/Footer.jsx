'use client'

const Footer = () => {
  return (
    <footer className="min-h-[10vh] flex justify-center p-4 text-text text-md">
        © Dakota Grey Bradford {new Date().getFullYear()} | Built by&nbsp;<a className="text-text transition hover:text-primary underline" href='https://dakotagreybradford.dev' target="_blank" rel="noopener noreferrer">Dakota Grey Bradford</a> 
    </footer>
  )
}

export default Footer