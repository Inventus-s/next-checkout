import Image from 'next/image'

interface CartProductsProps {
  cartData: CartProduct[];
}

const CartProducts: React.FC<CartProductsProps> = ({ cartData }) => {
  return (
    <table className='w-full text-sm'>
      <tbody>
        {cartData.map((value, key) => (
          <tr key={key} className='mb-3' >
            <td className='w-[20%] relative ' >
              <Image className='border-solid border-[1px] border-[#ccc] rounded p-1 w-[70px]' src={`${value.imageUrl}`} height={'70'} width={'70'} alt="" />
              <span className='absolute -top-1 left-[60px] w-5 h-5 flex place-content-center rounded-full bg-slate-700 text-white'>{value.productQty}</span>
            </td>
            <td className='w-[70%]'>
              <p>{value.productName}</p>
              <p>{value.title}</p>
            </td>
            <td className='w-[10%]'>${value.price}</td>
          </tr>
        ))}
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