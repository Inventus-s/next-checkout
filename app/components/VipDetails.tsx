import { Box } from '@radix-ui/themes'
import React from 'react'
import VipTimer from './vipDetails/VipTimer'
import VipOffer from './vipDetails/VipOffer'
import VipDescription from './vipDetails/VipDescription'

const VipDetails = () => {
    return (
        <>
            <div id='one_time' className='mt-5 w-full p-[5px]' >
                <VipTimer />
                <VipOffer />
            </div>
            <VipDescription />
        </>
    )
}

export default VipDetails