import { LogosCoursera } from '@/components/logo'
import { Footer } from './_components/footer'
import { Header } from './_components/header'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="h-full">
      <Header />
      <main className="min-h-screen">
        <section
          className="jusify-center mx-auto flex max-w-7xl flex-col 
          items-center gap-16 px-8 py-8 lg:flex-row lg:items-start 
          lg:gap-20 lg:py-20"
        >
          <div
            className="flex flex-col items-center justify-center 
            gap-10 text-center lg:items-start lg:gap-14 lg:text-left"
          >
            <LogosCoursera />
            <h1 className="md:-md-4 flex flex-col items-center gap-3 text-4xl font-extrabold tracking-tight lg:items-start lg:text-6xl">
              <span className="relative">Ship your course website</span>
              <span className="relative">
                <span className="mr-4 md:mr-5">in days,</span>
                <span className="relative whitespace-nowrap">
                  <span
                    className="absolute -bottom-1 -left-2
                    -right-2 -top-1 -rotate-1 bg-neutral-content md:-bottom-0 md:-left-3
                    md:-right-3 md:-top-0"
                  ></span>
                  <span className="relative text-neutral">with CourseShip</span>
                </span>
              </span>
            </h1>
            <p className="text-lg leading-relaxed opacity-80">
              The NextJS boilerplate with all you need to build your online
              Course Platform.From idea to production in 5 minutes.
            </p>
            <div className="space-y-4">
              <Link href="/sign-in">
                <button className="btn btn-warning btn-wide">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
