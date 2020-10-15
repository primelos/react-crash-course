import React from 'react'
import Seo from '../../seo'
import products from "../../data/products.json"

import Product from './product'




export default function ProductsPage() {
    return (
        <>
            <Seo title='Out Products' />
            <h1>Stuff we sell!</h1>
            <div className="prodcuts">
                {products.map((product) => (
                    <Product {...product} />
                ) )}
            </div>
        </>
    )
}
