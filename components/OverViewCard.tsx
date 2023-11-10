import Image from 'next/image'
import React from 'react'

import iconUp from '@/public/images/icon-up.svg'
import iconDown from '@/public/images/icon-down.svg'
import iconFb from '@/public/images/icon-facebook.svg'
import iconInsta from '@/public/images/icon-instagram.svg'
import iconTwitter from '@/public/images/icon-twitter.svg'
import iconYt from '@/public/images/icon-youtube.svg'

const OverviewData = [
    {
        socialIcon: iconFb,
        Name: 'Page View',
        normalCounrt: 87,
        statusIcon: iconUp,
        progressPercentage: 3,
        statusColor: 'text-LimeGreen'
    },
    {
        socialIcon: iconFb,
        Name: 'Likes',
        normalCounrt: 52,
        statusIcon: iconDown,
        progressPercentage: 2,
        statusColor: 'text-BrightRed'
    },
    {
        socialIcon: iconInsta,
        Name: 'Likes',
        normalCounrt: '5462',
        statusIcon: iconUp,
        progressPercentage: 2257,
        statusColor: 'text-LimeGreen'
    },
    {
        socialIcon: iconInsta,
        Name: 'Likes',
        normalCounrt: '52k',
        statusIcon: iconUp,
        progressPercentage: 1375,
        statusColor: 'text-LimeGreen'
    },
    {
        socialIcon: iconTwitter,
        Name: 'Retweets',
        normalCounrt: 117,
        statusIcon: iconUp,
        progressPercentage: 303,
        statusColor: 'text-LimeGreen'
    },
    {
        socialIcon: iconTwitter,
        Name: 'Retweets',
        normalCounrt: 507,
        statusIcon: iconUp,
        progressPercentage: 553,
        statusColor: 'text-LimeGreen'
    },
    {
        socialIcon: iconYt,
        Name: 'Likes',
        normalCounrt: 107,
        statusIcon: iconDown,
        progressPercentage: 107,
        statusColor: 'text-BrightRed',
    },
    {
        socialIcon: iconYt,
        Name: 'Likes',
        normalCounrt: 1407,
        statusIcon: iconDown,
        progressPercentage: 12,
        statusColor: 'text-BrightRed',
    },
]


type Props = {}

export default function OverViewCard({ }: Props) {
    return (
        <div className='flex flex-col gap-4'>
            <h3 className='text-2xl font-bold dark:text-white text-DarkGrayishBlueText'>OverView - Today</h3>
            <div className="sm:grid-cols-4  sm:grid-rows-1 grid grid-cols-1 grid-rows-4 
         w-full  h-auto place-items-center gap-4  py-5 ">
                {OverviewData.map((item, index) => (
                    <div className="flex flex-col dark:bg-DarkDesaturatedBlueCardBG bg-LightGrayishBlueCardBG text-black justify-center p-4 rounded-md gap-6 h-32
                      w-full  ">
                        <div className='flex justify-between p-2 items-center'>
                            <p className="text-sm text-DesaturatedBlueText font-semibold">{item.Name}</p>
                            <Image src={item.socialIcon} alt={''} />
                        </div>
                        <div className="flex justify-between">
                            <p className="font-bold text-3xl md:text-xl dark:text-white text-black">{item.normalCounrt}</p>
                            <div className={`flex items-center font-semibold ${item.statusColor}`}>
                                <Image src={item.statusIcon} alt={''} />
                                <p className="">{item.progressPercentage}%</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}