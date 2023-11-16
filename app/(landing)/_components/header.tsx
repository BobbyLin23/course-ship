import Link from 'next/link'

export const Header = () => {
  return (
    <header
      className="mx-auto flex max-w-7xl items-center bg-base-100 
      px-8 py-5"
    >
      <a
        className="cursor-pointer p-2 text-xl font-semibold 
        transition hover:text-neutral-300"
      >
        CourseShip
      </a>
      <div className="flex w-full items-center gap-4 pl-12 md:gap-12 md:pl-24">
        <Link href="/price">
          <p className="hover:underline">Price</p>
        </Link>
        <Link href="/demo">
          <p className="hover:underline">Demo</p>
        </Link>
      </div>
    </header>
  )
}
