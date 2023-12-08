import React from 'react'
import ProductDetailsComponent from '../../components/ProductDetailsComponent/ProductDetailsComponent'

const ProductDetailsPage = () => {
  return (
    <div style={{padding: '0 120px', background: '#efefef', height:'1000px'}}>
      <h3 style={{margin: '0'}}>Trang chủ</h3>
      <div>
        <ProductDetailsComponent/>
      </div>
      
    </div>
  )
}

export default ProductDetailsPage