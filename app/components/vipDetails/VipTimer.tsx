import React from 'react'

const VipTimer = () => {
    return (
        <div className='p-3 bg-[#FFD439] border-0'>
            <div className='border-dashed border-[#FF0007] border-2 p-1' >
                <table className='w-full'>
                    <tbody className='w-full'>
                        <tr className='flex items-center justify-center gap-3 font-semibold'>
                            <td>00</td>
                            <td>:</td>
                            <td>25</td>
                        </tr>
                        <tr className='flex items-center justify-center gap-3 font-semibold'>
                            <td>Minutes</td>
                            <td>Seconds</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default VipTimer