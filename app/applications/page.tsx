import { Plus } from 'lucide-react'

import Link from 'next/link'

export default function Page() {
  return (
    <div className="mx-auto flex max-w-[940px] flex-col gap-8">
      <h1 className="text-3xl font-bold leading-5">Websites</h1>
      <div
        className="mt-8 grid w-full grid-cols-1 gap-8 
        sm:grid-cols-2 lg:grid-cols-3"
      >
        <Link href="/applications/new" className="rounded-md bg-transparent">
          <div className="outline-2 outline-offset-2">
            <div
              className="flex min-h-[364px] w-[292px] 
              cursor-pointer flex-col items-center 
              justify-center gap-y-2 overflow-hidden
              rounded-lg border transition-all
            dark:border-neutral-700 dark:hover:shadow-white"
            >
              <Plus className="text-primary" />
              <p>Add a new website</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
