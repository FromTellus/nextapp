import { useState, useEffect } from 'react';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [input, setInput] = useState('');
    const [search, setSearch] = useState([]);

    const fetchProducts = async () => {
        const res = await fetch('/api/hello');
        const data = await res.json();
        console.log(data);
        setProducts(data);
    }

    const searchThroughDataById = () => {
        console.log("enters");
        const idResults= products.find(item => item.id === input)
        console.log(idResults, "this is the results");
        const array = [idResults];
        console.log(array);
        setSearch(array);
        setInput("");
    }
    
    const changeHandler = (e) => {
        setInput(e.target.value);
    }

    useEffect(() => {

        fetchProducts();
    }, []);
    
    return (
        <div className="container">
            <main>
                <h1>Search</h1>
            <input 
                type="text" 
                placeholder="Enter id"
                id="name" 
                size="10"
                value={input}
                onChange={changeHandler}
                >
            </input>
            <button
                type="submit"
                onClick={searchThroughDataById}
                >submit
            </button>
            <div>{search.map(item => 
                <div key={item.id}>
                    <h2>Product: {item.title}</h2>
                    <p>Quanitity: {item.quantity}</p>
                    <p>Price: {item.price}</p>
                </div>)}
            </div>
        </main>
    </div>
    )
}
                    

    export default Products;