const Cart = (props) => {
    return (
        <div style={{ backgroundColor: 'pink' }}>
            <h3>Cart</h3>

            <ul>
            {props.inventory.map((item, index) => {
              
                if(!item.inCart) return null; //if inCart, do not show 
                return (
                    <li key={item._id} style={{display: 'flex', justifyContent: 'space-between'}}>
                        <p>{item.name}</p>
                        <p>Price {item.price}</p>
                        <button
                            onClick={() =>{ 
                                const copy = [...props.inventory]; //copy of the props.inventory array
                                item.inCart = !copy[index].inCart  //using the index invert the inCart value
                                props.setInventory(copy) //adjust the inventory property with that entire array
                            }}
                        >
                            add to inventory
                        </button>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default Cart;