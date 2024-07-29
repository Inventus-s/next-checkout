import { Table } from "@radix-ui/themes"

const Cart = () => {
    const cartDetails = [
        { name: "Subtotal", price: 0.00, },
        { name: "Sales Tax", price: 0.00, },
        { name: "Shipping", price: 0.00, },
        { name: "Discount", price: 0.00, },
        { name: "Total", price: 0.00, },
        // Add more products here...
    ]
    return (
        <table className="w-full mt-5">
            <tbody>
                {cartDetails.map(({ name, price }, index) => (
                    <tr key={index} className="flex items-center justify-between">
                        <td className={`${name === 'Total' ? 'font-semibold text-xl mt-2' : 'text-sm'}`}>{name}</td>
                        <td className={`${name === 'Total' ? 'font-semibold text-xl mt-2' : 'text-sm'}`}>
                            {name === 'Total' ? (
                                <span className="text-sm font-normal mr-2">
                                    USD
                                </span>
                            ): ''}
                            ${price}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Cart