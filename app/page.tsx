"use client"
import { Box, Flex, Text } from '@radix-ui/themes'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { campaignQuery, isSameCampaignAndVariant } from '../checkout/common'
import Form from './Form'
import Cart from './components/Cart'
import CartProducts from './components/CartProducts'
import FormInput from './components/FormInput'
import VipDetails from './components/VipDetails'


export default function Home({ searchParams }: { searchParams: { cctester?: string; products?: string } }) {
    const { cctester, products } = searchParams;
    const [productList, setProductList] = useState([]);
    const [countriesList, setCountriesList] = useState([]);
    const [shipProfilesList, setShipProfilesList] = useState([]);
    const [cartData, setCartData] = useState<CartProduct[]>([]);
    let shippingMethod: { name: string; price: string }[] = [];
    let subTotal = 0;
    let salesTax = 0;
    let shipping = 0;
    let discount = 0;
    let total = 0;

    useEffect(() => {
        const response = campaignQuery().then((result) => {
            const { products: productList, countries, currencies, taxes, coupons, shipProfiles }: CampaignData = result;
            // setProductList(()=> result.products);
            const productsArray: string[] = products!.split(';');

            productsArray.forEach((item) => {
                const [productId, quantity] = item.split(":");
                const [productID, variantID = ''] = productId.split('.');

                if (productID) {
                    const campaignProduct = productList.filter(p => p.campaignProductId === Number(productID));
                    if (campaignProduct[0]) {
                        const product = campaignProduct[0];
                        let variants: Variant[] = [];
                        if (variantID) {
                            variants = product.variants.filter(v => v.variantDetailId === Number(variantID));
                        }
                        // console.log("variants", variants);
                        if (!isSameCampaignAndVariant(cartData, product, variants)) {
                            const data = {
                                campaignProductId: product.campaignProductId,
                                productName: product.productName,
                                productType: product.productType,
                                variantId: variants[0].variantDetailId,
                                price: variants[0] ? Number(variants[0].price) * Number(quantity) : Number(product.price) * Number(quantity),
                                imageUrl: variants[0] ? variants[0].imageUrl : product.imageUrl,
                                title: variants[0] ? variants[0].title : '',
                                productQty: quantity
                            }
                            setCartData((prev) => {
                                return [...prev, data];
                            })
                        }
                        subTotal += variants[0] ? Number(variants[0].price) * Number(quantity) : Number(product.price) * Number(quantity);
                        // console.log("cartData", cartData);
                    }
                }
            });
        });

    }, [])

    useEffect(() => {
        total = subTotal + salesTax + shipping + discount
    }, [cartData]);

    return (
        // Main Content
        <Flex width={"100%"} height={"100vh"} justify={'center'} >
            <div id='formRightSection' className='overflow-auto w-[75%] lg:w-1/2 p-10 text-[#8f8f8f] lg:text-right lg:border-r-[.5px] border-r-0 border-[#cfcfcf]' >
                {/* Express Checkout */}
                <p className='text-center mb-3' >Express checkout</p>
                <button className="w-full h-[50px] bg-[#fec43a] rounded flex items-center justify-center ">
                    <Image placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==' priority alt='paypal-image' src={'/images/payment/paypal.png'} width={"130"} height={"50"} className='w-auto h-full' />
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
                {/* CartData */}
                <CartProducts cartData={cartData} />
                <Flex gap={'5'} align={'center'} className='w-full' >
                    <FormInput placeholder='Discount Code' width='w-full mb-3' />
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

interface CartProduct {
    campaignProductId: number;
    productName: string;
    productType: string;
    variantId: number;
    price: number;
    imageUrl: string;
    title: string;
    productQty: string;
}

interface CartTable {
    name: string;
    price: number;
}

interface Product {
    campaignProductId: number;
    productName: string;
    productType: string;
    price: string;
    imageUrl: string;
    variants: Variant[];
    // Add other properties of a product
}

interface Variant {
    title: string;
    variantDetailId: number;
    price: string;
    imageUrl: string;
    // Add other properties of a variant
}

interface Country {
    code: string;
    name: string;
    // Add other properties of a country
}

interface Currency {
    code: string;
    symbol: string;
    // Add other properties of a currency
}

interface Tax {
    id: string;
    rate: number;
    // Add other properties of a tax
}

interface Coupon {
    code: string;
    discount: number;
    // Add other properties of a coupon
}

interface ShippingProfile {
    id: string;
    profileName: string;
    rules: { shipPrice: string }[];
    // Add other properties of a shipping profile
}

interface CampaignData {
    products: Product[];
    countries: Country[];
    currencies: Currency[];
    taxes: Tax[];
    coupons: Coupon[];
    shipProfiles: ShippingProfile[];
}

