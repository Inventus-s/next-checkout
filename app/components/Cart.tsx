interface CartDetail{
    cartDetails: CartTable[]
}

const Cart: React.FC<CartDetail> = ({cartDetails}) => {
    console.log("cartDetails", cartDetails);
    
    return (
        <table className="w-full mt-5">
            <tbody>
                {cartDetails.map(({ name, price }, index) => (
                    <tr key={index} className="flex items-center justify-between">
                        <td className={`${name === 'Total' ? 'font-semibold text-xl mt-2' : 'text-sm'}`}>{name}</td>
                        <td className={`${name === 'Total' ? 'font-semibold text-xl mt-2' : 'text-sm'} ${name === "Subtotal" ? 'font-semibold' : ''}`}>
                            {name === 'Total' ? (
                                <span className="text-sm font-normal mr-2">
                                    USD
                                </span>
                            ) : ''}
                            {name === 'Discount' ? (
                                <>(-${price.toFixed(2)})</>
                            ) : (
                                <>${price.toFixed(2)}</>
                            )}

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Cart

interface CartTable {
    name: string;
    price: number;
}