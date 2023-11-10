import OverViewCard from '@/components/OverViewCard'
import SocialMediaCard from '@/components/SocialMediaCard'
import ToggleThemBtn from '@/components/ToggleThemBtn'
import Image from 'next/image'

export default function Home() {
  return (


    <div className=" fo">
      <div className="fixed left-0 top-0 min-h-screen w-full bg-white dark:bg-VeryDarkBlueBG -z-50 ">
        <div className="h-[250px] rounded-b-2xl bg-VeryPaleBlueTopBGPattern dark:bg-VeryDarkBlueBG"></div>
      </div>
      <div className="h-full"></div>
      <div className="  w-full h-screen px-10 sm:px-24 gap-x-4 items-center font-Inters xl:px-80">
        <div className="flex flex-col gap-4">

          <div className="flex w-full sm:flex-row flex-col justify-between gap-4 py-6 text-sm">
            <div className="flex flex-col">
              <h3 className='text-2xl font-bold dark:text-white text-black '>Social Media Dashboard</h3>
              <h1 className='dark:text-DesaturatedBlueText text-DarkGrayishBlueText font-semibold'>Total Followers: 23,004</h1>
            </div>
            <hr className='w-full sm:hidden' />
            <div className="flex justify-between sm:justify-center gap-2 items-center">
              <h1 className='dark:text-white text-DarkGrayishBlueText font-semibold'>Dark Mode</h1>
              <ToggleThemBtn />

            </div>
          </div>
          <SocialMediaCard />
          <OverViewCard />


        </div>

      </div>
    </div>

  )
}
