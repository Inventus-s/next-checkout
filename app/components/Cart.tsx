import { useEffect, useState } from "react"

interface CartDetail {
    cartDetails: CartTable[]
}

const Cart = ({ subTotal }: { subTotal: number }) => {
    const [cartTable, setCartTable] = useState([
        { name: "Subtotal", price: 0.0 },
        { name: "Sales Tax", price: 0.0 },
        { name: "Shipping", price: 0.0 },
        { name: "Discount", price: 0.0 },
        { name: "Total", price: 0.0 },
        // Add more products here...
    ])
    useEffect(() => {
        setCartTable((prev) => {
            return prev.map((table) => {
                if (table.name === "Subtotal") {
                    return { ...table, price: subTotal }
                }
                return table;
            })
        })
    }, [subTotal])
    const cartDetails = cartTable

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