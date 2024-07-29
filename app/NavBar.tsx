import { Flex } from '@radix-ui/themes';
import Image from 'next/image';
import { GiShoppingBag } from "react-icons/gi";

const NavBar = ({brandLogo}: {brandLogo: string}) => {
    return (
        <Flex justify={"center"} align={"center"} className='border-b-[.5px] border-[#cfcfcf] ' >
            <div className='flex justify-between items-center px-[30px] py-[20px] w-full xl:w-[1024px] ' >
                <Image placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==' priority className='xs:w-[150px] sm:w-[auto]' alt='brand logo' width={200} height={30} src={brandLogo} />
                <GiShoppingBag color='#01be69' size={"20"}  />
            </div>
        </Flex>
    )
}

export default NavBar