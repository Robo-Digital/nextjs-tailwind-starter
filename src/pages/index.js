import { Open_Sans as OpenSans } from 'next/font/google'

import Logo from '../assets/robodigital.svg'

const opensans = OpenSans({ subsets: ['latin'] })

const HomePage = () => (
  <div className="flex h-screen flex-col items-center justify-center gap-2 bg-gray-200">
    <div className="w-40">
      <Logo />
    </div>
    <div>
      <p className={opensans.className}>Next.js Tailwind Starter</p>
    </div>
  </div>
)

export default HomePage
