'use client'
import Image from 'next/image'
import React from 'react'
import FormCheckBox from '../FormCheckBox'
import { Text } from '@radix-ui/themes'
import Link from 'next/link'

const VipOffer = () => {
    return (
        <table className='bg-[#FFD439]'>
            <tbody>
                <tr className='flex gap-2 p-2'>
                    <td>
                        <Image id='pulse1' alt='left-arrow' src={'/images/vip/right.png'} width={22} height={13} className='min-w-[30px] h-auto' />
                    </td>
                    <td>
                        <FormCheckBox />
                    </td>
                    <td>
                        <Text as='p'size={'1'} className='font-semibold' >
                            Claim 10% OFF my order TODAY + Free S&H (Save $4.95) + Brow Charm VIP. This offer expires once you leave the page! I am 18 years or older and agree to the <Link href={'#'} className='text-[#0d6efd]' >Terms And Conditions Privacy Policy</Link>.
                        </Text>
                    </td>
                    <td>
                    <Image id='pulse1' alt='left-arrow' src={'/images/vip/left.png'} width={22} height={13} className='min-w-[30px] h-auto' />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default VipOffer