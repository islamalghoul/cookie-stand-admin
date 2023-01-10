import './globals.css'
import ThemeWrapper from './components/context/theme'
import {AuthWrapper} from './components/context/auth'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      < ThemeWrapper>

    <AuthWrapper>
      <body >{children}</body>
      </AuthWrapper>
    </ThemeWrapper>
    </html>
  )
}
