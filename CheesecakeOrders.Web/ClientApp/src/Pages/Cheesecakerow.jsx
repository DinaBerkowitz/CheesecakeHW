

import { Link } from 'react-router-dom'
import dayjs from "dayjs";

const Cheesecakerow = ({ order }) => {
    const { name, email, base, toppings, specialRequest, quantity, deliveryDate, total, id } = order;
    return <tr>
        <td>
            <Link to={`/orderdetails/${id}`}>
                {name} - {email}
            </Link>
        </td>
        <td>{base}</td>
        <td>{toppings}</td>
        <td>{specialRequest}</td>
        <td>{quantity} </td>
        <td  className='card-text fs-5'>{dayjs(deliveryDate).format("MM/DD/YYYY")}</td>
        <td>{total}</td>
    </tr>
}

export default Cheesecakerow;