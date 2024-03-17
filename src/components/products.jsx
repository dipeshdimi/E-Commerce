import {useState, useEffect} from 'react'
import ProductCard from './subcomponents/productCard';

export default function Products({category, searchKey}) {
    // const url = "https://fakestoreapi.com/products/" + (category==="all" ? "" : ("category/"+category));
    const url = "https://fakestoreapi.com/products";
    const [prods, setProds] = useState([]);

    const fetchInfo = () => {
        return fetch(url)
        .then((res) => res.json())
        .then((d) => setProds(d))
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <section className='content'>
            <h2>Men&apos;s & Women&apos;s Fashion</h2>
            <div className="products">
            {prods.map(prod =>
                (category==="all" || prod.category===category) && (prod.title.toLowerCase()).includes(searchKey.toLowerCase()) && 
                <ProductCard key={prod.id} prod={prod}/>
            )}
            </div>
      </section>
    );
}