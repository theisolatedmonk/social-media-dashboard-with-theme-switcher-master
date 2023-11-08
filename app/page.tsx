import SocialMediaCard from '@/components/SocialMediaCard'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="  bg-LimeGreen w-full h-screen p-4 Sm:px-24 items-center font-Inters">
      <div className="flex flex-col gap-4">

        <div className="flex w-full sm:flex-row flex-col justify-between gap-4">
          <div className="flex flex-col">
            <h3>Social Media Dashboard</h3>
            <h1>Total Followers: 23,004</h1>
          </div>
          <hr className='w-full sm:hidden' />
          <div className="flex justify-between sm:justify-center bg-red-400">
            <h1>Dark Mode</h1>
            <h1>Toggle Button</h1>

          </div>
        </div>
        <SocialMediaCard />
      </div>

    </div>
  )
}
