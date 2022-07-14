import React, {useState, useEffect, useSearchParams} from 'react';


function test (e) {
    let [searchParams, setSearchParams] = useSearchParams();
    let params = seralizeFormQuery(e.target)
    setSearchParams(params)

}

    export default function Products({ data }) {
        const [products, setProducts] = useState([]);
        const fetchProducts = async () => {
        const res = await fetch('/api/hello');
        const data = await res.json();
        console.log(data);
        setProducts(data);
        }
        useEffect(() => {
        fetchProducts();
        }, []);
        return (
            <div className="container">
                <main>
                    <h1>Search</h1>
                    <div className="products">
                        {products.map(item => (
                            <div key={item.id}>
                                <h2>Product: {item.title}</h2>
                                <p>Quanitity: {item.quantity}</p>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        );
    }