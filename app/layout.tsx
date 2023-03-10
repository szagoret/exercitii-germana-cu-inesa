import './globals.css'
import Header from "app/components/Header";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
  return (
      <html lang="en" data-theme="light" className="scroll-smooth">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head/>
      <body>
      <Header/>
      {children}
      </body>
      </html>
  )
}
