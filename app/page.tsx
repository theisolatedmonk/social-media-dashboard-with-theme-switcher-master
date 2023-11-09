import OverViewCard from '@/components/OverViewCard'
import SocialMediaCard from '@/components/SocialMediaCard'
import ToggleThemBtn from '@/components/ToggleThemBtn'
import Image from 'next/image'

export default function Home() {
  return (


    <div className="">
      <div className="fixed left-0 top-0 min-h-screen w-full bg-white dark:bg-VeryDarkBlueBG -z-50">
        <div className="h-[250px] rounded-b-2xl bg-VeryPaleBlueTopBGPattern dark:bg-VeryDarkBlueBG"></div>
      </div>
      <div className="h-full"></div>
      <div className="  w-full h-screen p-4 Sm:px-24 items-center font-Inters">
        <div className="flex flex-col gap-4">

          <div className="flex w-full sm:flex-row flex-col justify-between gap-4">
            <div className="flex flex-col">
              <h3>Social Media Dashboard</h3>
              <h1>Total Followers: 23,004</h1>
            </div>
            <hr className='w-full sm:hidden' />
            <div className="flex justify-between sm:justify-center bg-red-400">
              <h1>Dark Mode</h1>
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
