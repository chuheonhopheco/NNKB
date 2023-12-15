import React, { useEffect, useRef, useState } from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { useQuery } from '@tanstack/react-query'
import * as ProductService from '../../services/ProductService'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const searchProduct = useSelector((state) => state?.product?.search)
  const refSearch = useRef()
  const [stateProducts, setStateProducts] = useState([])
  const arr = ['Loa', 'Dia nhac', 'Day']
  const fetchAllProduct = async (search) => {
    //if(search.length > 0) {
    const res = await ProductService.getAllProduct(search)
    if(search?.length > 0){
      setStateProducts(res?.data)
    }else{
      return res
    }
  }

  useEffect(() => {
    if (refSearch.current){
      fetchAllProduct(searchProduct)
    }
    refSearch.current = true
  },[searchProduct])

  const { isLoading, data: products } = useQuery(['products'], { queryFn: fetchAllProduct, retry: 3, retryDelay: 1000 });

  useEffect(() => {
    console.log('products', products)
    if (products?.data?.length > 0){
      setStateProducts(products?.data)
    }
  },[products])


  return (
    <>
      <div style={{width: '1270px', margin:'0 auto'}}>  
        <WrapperTypeProduct>
          {arr.map((item) => {
            return(
              <TypeProduct name ={item} key = {item}/>
            )
          })}   
        </WrapperTypeProduct>  
      </div>
      <div className='body' style={{width: '100%', backgroundColor:'#efefef'}}>
        <div id='container' style={{backgroundColor: '#efefef', margin: '0 auto', height: '1000px', width: '100%'}}>
          <SliderComponent arrImages = {[banner1, banner2, banner3]}/>
          <WrapperProducts>
            {stateProducts?.map((product) => {
              console.log('product', product)
                return (
                  <CardComponent 
                    key={product._id} 
                    countInStock={product.countInStock} 
                    description={product.description} 
                    image={product.image} 
                    name={product.name} 
                    price={product.price}
                    rating={product.rating}
                    type={product.type}
                    selled={product.selled}
                    discount={product.discount}
                  />
                )
              })}
          </WrapperProducts>
              <div style={{width:'100%', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                <WrapperButtonMore textButton = "Xem thêm" type="outline" styleButton={{
                  border:  '1px solid rgb(11, 116, 229)', color: 'rgb(11, 116, 229)',
                  width: '240px', height: '38px', borderRadius: '4px'
                }}
                styleTextButton={{ fontWeight: 500}} />
              </div>
        </div>
      </div>
             
    </>
    
  )
}

export default HomePage