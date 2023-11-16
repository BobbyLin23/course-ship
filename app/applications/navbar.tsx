import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav className="h-24 w-full border-b dark:border-neutral-700">
      <div
        className="mx-auto flex h-full max-w-6xl items-center justify-between 
        px-4"
      >
        <div className="flex items-center gap-x-4">
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
          <p className="hidden text-2xl font-semibold lg:block">CourseShip</p>
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  )
}
