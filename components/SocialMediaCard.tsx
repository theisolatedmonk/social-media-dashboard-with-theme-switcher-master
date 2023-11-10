import React from 'react'

type Props = {}


import iconUp from '@/public/images/icon-up.svg'
import iconDown from '@/public/images/icon-down.svg'
import iconFb from '@/public/images/icon-facebook.svg'
import iconInsta from '@/public/images/icon-instagram.svg'
import iconTwitter from '@/public/images/icon-twitter.svg'
import iconYt from '@/public/images/icon-youtube.svg'
import Image from 'next/image'

const socialMediaData = [
    {
        borderColor: 'bg-Facebook',
        socialIcon: iconFb,
        idName: '@nathanf',
        followers: '1987',
        statusIcon: iconUp,
        statusCount: 12,
        statusColor: 'text-LimeGreen',
        membershipType: 'FOLLOWERS'

    },
    {
        borderColor: 'bg-Twitter',
        socialIcon: iconTwitter,
        idName: '@nathanf',
        followers: '1044',
        statusIcon: iconUp,
        statusCount: 99,
        statusColor: 'text-LimeGreen',
        membershipType: 'FOLLOWERS'
    },
    {
        borderColor: 'bg-gradient-to-r from-[hsl(37,97%,70%)] to-[hsl(329,70%,58%)]',
        socialIcon: iconInsta,
        idName: '@realnathanf',
        followers: '11k',
        statusIcon: iconUp,
        statusCount: 1099,
        statusColor: 'text-LimeGreen',
        membershipType: 'FOLLOWERS'
    },
    {
        borderColor: 'bg-YouTube',
        socialIcon: iconYt,
        idName: 'Nathan F.',
        followers: '8239',
        statusIcon: iconDown,
        statusCount: 144,
        statusColor: 'text-BrightRed',
        membershipType: 'SUBSCRIBERS'
    },
]


export default function SocialMediaCard({ }: Props) {
    return (
        <div className="sm:grid-cols-4  sm:grid-rows-1 grid grid-cols-1 grid-rows-4 
       w-full  h-auto place-items-center gap-4 ">
            {socialMediaData.map((item, index) => (

                <div className={`${item.borderColor} text-sm h-[180px]  rounded-md  flex flex-col justify-end  w-full `}>
                    <div className="flex flex-col  dark:bg-DarkDesaturatedBlueCardBG bg-LightGrayishBlueCardBG w-full h-[170px] justify-between items-center p-4 rounded-md">
                        <div className="flex gap-2 items-center ">
                            <Image src={item.socialIcon} width={16} alt={''} />
                            <p className=" text-DesaturatedBlueText font-semibold text-sm  ">{item.idName}</p>
                        </div>
                        <div className="flex flex-col items-center gap-1 ">
                            <h3 className='text-4xl md:text-3xl font-bold dark:text-white text-black'>{item.followers}</h3>
                            <p className=" tracking-wider text-xs w-full text-DesaturatedBlueText text-center">{item.membershipType}</p>
                        </div>
                        <div className="flex gap-2 items-center font-semibold">
                            <Image src={item.statusIcon} alt={''} width={10} height={10} />
                            <p className={`${item.statusColor}`}>{item.statusCount} Today</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>

    )
}