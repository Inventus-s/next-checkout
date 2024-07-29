import { Box, Flex, Radio, Text } from "@radix-ui/themes"
import Image from "next/image"
import { useState } from "react"
import FormInput from "./FormInput"
import FormSelect from "./FormSelect"

const PaymentAccordion = () => {
    const [isCollapsed, setCollapsed] = useState(false)
    return (
        <div className="mt-3">
            <Box as="div">
                <h2>
                    <button onClick={() => setCollapsed(false)} type="button" className="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3">
                        <Flex align={'center'} gap={'3'}>
                            <Radio name="payment" value="1" size={'3'} checked={!isCollapsed} className="mr-3" />
                            <span>Credit Card</span>
                        </Flex>
                        <Image alt="creditCard-Options" src={'/images/payment/cards.png'} width={150} height={28} className="w-auto md:w-[150px] " />
                    </button>
                </h2>
                {!isCollapsed &&
                    (<div className="p-5 border border-b-0 border-gray-200 bg-[#f4f4f4]" >
                        <FormInput placeholder="Card Number" width="w-full" />
                        <Flex gap={'5'}>
                            <FormSelect width="w-1/3 appearance-none" />
                            <FormSelect width="w-1/3 appearance-none" />
                            <FormInput placeholder="CVV Code" width="w-1/3" />
                        </Flex>
                    </div>)
                }
            </Box>

            <Box as="div">
                <h2>
                    <button onClick={() => setCollapsed(true)} type="button" className="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3">
                        <Flex align={'center'} gap={'3'}>
                            <Radio name="payment" value="1" size={'3'} checked={isCollapsed} className="mr-3" />
                            <span>PayPal</span>
                        </Flex>
                        <Image alt="creditCard-Options" src={'/images/payment/pp-btn.png'} width={100} height={28} className="w-auto md:w-[100px] " />
                    </button>
                </h2>
                {isCollapsed &&
                    (<div className="p-5 border border-gray-200 bg-[#f4f4f4]">
                        <button type="submit" className="w-full h-[50px] bg-[#fec43a] rounded-full flex items-center justify-center ">
                            <Image alt='paypal-image' src={'/images/payment/paypal.png'} width={"130"} height={"50"} className='w-auto h-full' />
                        </button>
                        <Text as='p' className='text-sm text-center mt-3' >Email and Phone required for Shipping and Order confirmation.</Text>
                    </div>)
                }
            </Box>

            {!isCollapsed &&
                (<button type="submit" className="w-full mt-5 h-[50px] bg-black rounded text-white">
                    Pay Now
                </button>)
            }

        </div>
    )
}

export default PaymentAccordion