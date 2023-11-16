import { Navbar } from './navbar'

export default function ApplicationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar />
      <main
        className="flex h-full max-h-full w-full flex-1 flex-col
        items-center px-6 py-12 md:px-16"
      >
        <div
          className="flex h-full max-h-full w-full max-w-[1440px]
          flex-1 flex-col items-center p-0"
        >
          {children}
        </div>
      </main>
    </div>
  )
}
