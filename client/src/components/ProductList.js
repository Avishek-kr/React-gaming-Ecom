import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function ProductList() {
  const [products, setProducts] = React.useState([])
  React.useEffect(() => {
    axios.get('/api/products')
    .then(res=> res.data.products)
    .then(products => setProducts(products))
  },[])

  return products.map(product=>(
    <ProductItem key={product.id} product={product} />
  ))
}

function ProductItem({product}) {
  const {category,background, name, sku, price, image, description, description_long, currency} = product
  return (
    <div className="p-4 md:w-1/3">
      <div className=" h-full border-2 border-gray-800 rounded-lg overflow-hidden">
      <div className="image_container">
       <Link to={`/${product.id}`}><img
          className="lg:h-96 md:h-36 w-full object-contain object-center" 
          style={{backgroundImage:product.background}}
          src={image}
          alt={name}
        />
        </Link>
      </div>
        
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
            {category}
          </h2>
          <h1 className="title-font text-lg font-medium text-white mb-3">
            {name}
          </h1>
          <p className="leading-relaxed mb-3">{description}</p>
          <div className="flex items-center flex-wrap ">
          <Link to={`/${product.id}`}
            className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
              See More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
              </Link>
            <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-lg pr-3 py-1 border-gray-800 font-bold">
              {price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
