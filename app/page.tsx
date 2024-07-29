'use client'
import { Box, Flex, Text } from '@radix-ui/themes'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from "next/navigation"
import Form from './Form'
import { checkUrlProduct } from './checkout'
import Cart from './components/Cart'
import FormInput from './components/FormInput'
import VipDetails from './components/VipDetails'


export default function Home() {
    // Check URL Products
    const searchParams = useSearchParams();
    checkUrlProduct(searchParams);


    return (
        // Main Content
        <Flex width={"100%"} height={"100vh"} justify={'center'} >
            <div id='formRightSection' className='overflow-auto w-[75%] lg:w-1/2 p-10 text-[#8f8f8f] lg:text-right lg:border-r-[.5px] border-r-0 border-[#cfcfcf]' >
                {/* Express Checkout */}
                <p className='text-center mb-3' >Express checkout</p>
                <button className="w-full h-[50px] bg-[#fec43a] rounded flex items-center justify-center ">
                    <Image priority alt='paypal-image' src={'/images/payment/paypal.png'} width={"130"} height={"50"} className='w-auto h-full' />
                </button>
                <Box as='span' className='mt-10'>
                    <p className='relative z-10 text-center w-[60px] bg-white m-auto' >OR</p>
                    <hr className='relative -top-3.5 -z-10 h-[2px] bg-[#cfcfcf]' />
                </Box>
                <Form />
                <hr className='h-[2px] bg-[#cfcfcf]' />
                {/* Footer */}
                <footer className='mt-10'>
                    <Text color='red' as='p' className='text-left text-xs'>
                        By proceeding to Shipping updates you agree to Privacy Policy and consent to receive recurring SMS/texts for order confirmations, exclusive offers and early access to new products. You don&apos;t need to consent to continue to purchase. You can unsubscribe at any time. Standard message and data rates apply. View Privacy Policy and TOS
                    </Text>
                    <Flex className='text-black text-sm mt-5' align={'center'} justify={'center'} gap={'2'}>
                        <Link href={'#'} className='hover:underline'>Terms & Conditions</Link> |
                        <Link href={'#'} className='hover:underline'>Shipping Policy</Link> |
                        <Link href={'#'} className='hover:underline'>Refund Policy</Link> |
                        <Link href={'#'} className='hover:underline'>Privacy Policy</Link>
                    </Flex>
                </footer>
            </div>
            <div id='formRightSection' className='w-[40%] hidden lg:w-1/2 lg:block overflow-auto p-10'>
                <Flex gap={'5'} align={'center'} className='w-full h-fit' >
                    <FormInput placeholder='Discount Code' width='w-full mt-0' />
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-6 py-2.5">Apply</button>
                </Flex>
                {/*Cart Table */}
                <Cart />
                {/* Vip Box */}
                <VipDetails />
            </div>
        </Flex>
    )
}