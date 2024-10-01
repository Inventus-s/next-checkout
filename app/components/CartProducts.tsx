import { removeDuplicateProducts } from '@/checkout/common';
import Image from 'next/image'
import { useEffect, useState } from 'react';

interface CartProductsProps {
  cartData: CartProduct[];
}

const CartProducts = ({ cartData }: { cartData: CartProduct[] }) => {
  // console.log("cartData", JSON.stringify(cartData, null, 2))
  const [products, setProducts] = useState<CartProduct[]>([]);
  useEffect(() => {
    setProducts(() => {
      return removeDuplicateProducts(cartData)
    })
  }, [cartData])
  return (
    <table className='w-full text-sm'>
      <tbody>
        {Array.isArray(cartData) && (
          products.map(({ imageUrl, price, productName, productQty, title }, key) => (
            <tr key={key} className='mb-3' >
              <td className='w-[20%] relative ' >
                <Image className='border-solid border-[1px] border-[#ccc] rounded p-1 w-[70px]' src={imageUrl} height={'70'} width={'70'} alt="product-img" />
                <span className='absolute -top-1 left-[60px] w-5 h-5 flex place-content-center rounded-full bg-slate-700 text-white'>{productQty}</span>
              </td>
              <td className='w-[70%]'>
                <p>{productName}</p>
                <p>{title}</p>
              </td>
              <td className='w-[10%]'>${price}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}

export default CartProducts

interface CartProduct {
  campaignProductId: number;
  productName: string;
  productType: string;
  price: number;
  imageUrl: string;
  title: string;
  productQty: string;
}