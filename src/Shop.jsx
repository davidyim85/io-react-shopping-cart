import Inventory from "./Inventory";
import Cart from "./Cart";
import { useState } from "react";


const inventoryData = [
    { _id: 62345, name: 'Banana', price: 0.27, inCart: true },
    { _id: 22345, name: 'Avocado', price: 2, inCart: true },
    { _id: 82345, name: 'Yellow Onion', price: 0.5, inCart: false },
    { _id: 15345, name: 'English Cucumber', price: 1.5, inCart: false },
    { _id: 12445, name: 'Local Organic Free Range Eggs', price: 6, inCart: false },
    { _id: 12545, name: 'Milk', price: 2.79, inCart: false },
    { _id: 12745, name: 'Cauliflower Head', price: 3, inCart: false },
    { _id: 72345, name: 'Flour Tortillas', price: 3, inCart: false },
    { _id: 92345, name: 'Butter', price: 4, inCart: false },
    { _id: 16345, name: 'Cherry Tomatoes', price: 3, inCart: false },
    { _id: 52345, name: 'Cantaloupe', price: 3.29, inCart: false },
    { _id: 42345, name: 'Chicken Breast', price: 12, inCart: false },
    { _id: 32345, name: 'Whole Roasted Chicken', price: 10.99, inCart: false },
    { _id: 12645, name: 'Ground Beef', price: 9, inCart: false },
    { _id: 12945, name: 'Pasta Sauce', price: 2.49, inCart: false },
    { _id: 55555, name: 'Penne Rigate Pasta', price: 1.25, inCart: false },
    { _id: 13345, name: 'Spaghetti Pasta', price: 2, inCart: false },
    { _id: 12845, name: 'Ketchup ', price: 3.49, inCart: false },
    { _id: 19345, name: 'Yellow Mustard', price: 2.19, inCart: false },
    { _id: 18345, name: 'Mayonnaise', price: 4, inCart: false },
    { _id: 10002, name: 'Bread', price: 2, inCart: false },
    { _id: 17345, name: 'Peanut Butter', price: 4.19, inCart: false },
    { _id: 10001, name: 'Swiss Cheese', price: 3.99, inCart: false },
    { _id: 85325, name: 'Shredded Mozzarella', price: 4.19, inCart: false },
    { _id: 14345, name: 'Steelhead Trout Fillet', price: 11.99, inCart: false },
  ];




const Shop = () => {
    const [inventory, setInventory] = useState(inventoryData);
console.log(inventory)
    return (
        <div style={{ backgroundColor: 'skyblue', padding: '10px' }}>
            <h1>Shop</h1>
            <div style={{ display: "grid", gridTemplateColumns: 'auto auto' }}>
                <Inventory inventory={inventory} setInventory={setInventory}/>
                <Cart inventory={inventory} setInventory={setInventory}/>
            </div>

        </div >
    )
}

export default Shop;