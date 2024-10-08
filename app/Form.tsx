
import { Box, Flex, Text } from '@radix-ui/themes'
import FormCheckBox from './components/FormCheckBox'
import FormInput from './components/FormInput'
import FormLabel from './components/FormLabel'
import FormSelect from './components/FormSelect'
import PaymentAccordion from './components/PaymentAccordion'

const Form = ({shipProfilesList}) => {
    // const options = [
    //     { label: 'Standard Shipping (3-5 Business Days)', value: 'Standard Shipping' },
    //     { label: 'Express Shipping (2-3 Business Days)', value: 'Express Shipping' },
    // ]
    // const [isChecked, setChecked] = useState(true);

    return (
        <form className='text-left mb-10' >
            {/* Contact */}
            <div className='mt-5'>
                <FormLabel label='Contact' />
                <FormInput width='w-full' placeholder='Email (For Order Confirmation)' />
                <FormInput width='w-full' placeholder='Phone (For Ship Tracking Confirmation)' />
                <Flex align={"center"} className='mt-3' gap={"2"} >
                    <FormCheckBox />
                    <Text className='text-black' >Email me with news and offers</Text>
                </Flex>
            </div>
            {/* Delivery */}
            <div className='mt-5'>
                <FormLabel label='Delivery' />
                {/* <FormSelect width='w-full' /> */}
                <Flex align={"center"} gap={"5"}>
                    <FormInput placeholder='First Name' width='w-1/2' />
                    <FormInput placeholder='Last Name' width='w-1/2' />
                </Flex>
                <FormInput placeholder='Address 1' width='w-full' />
                <FormInput placeholder='Address 2' width='w-full' />
                <Flex align={"center"} gap={"5"} >
                    <FormInput placeholder='Town / City' width='w-1/3' />
                    {/* <FormSelect width='w-1/3' /> */}
                    <FormInput placeholder='Postal Code' width='w-1/3' />
                </Flex>
                <Text as='p' className='text-black font-medium mt-5' >Shipping Method</Text>
                <FormSelect width='w-full' options={shipProfilesList} defaultValue={"Shipping Method"} />
            </div>
            {/* Payment */}
            <Box as='span' className='mt-5'>
                <FormLabel label='Payment' />
                <Text as='p' className='text-sm' >All transactions are secure and encrypted.</Text>
                <PaymentAccordion />
            </Box>
        </form>
    )
}

export default Form;