<<<<<<< HEAD
import React, { useEffect } from 'react'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
=======
import React, { useEffect, useRef, useState } from 'react'
>>>>>>> 50250792de628ad99f16fb0485365c0ec4b8365c
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import slider1 from '../../assets/images/banner1.jpg'
import slider2 from '../../assets/images/banner2.jpg'
import slider3 from '../../assets/images/banner3.jpg'
import CardComponent from '../../components/CardComponent/CardComponent'
import { useQuery } from '@tanstack/react-query'
import * as ProductService from '../../services/ProductService'
import { useSelector } from 'react-redux'
<<<<<<< HEAD
import { useState } from 'react'
import Loading from '../../components/LoadingComponent/Loading'
import { useDebounce } from '../../hooks/useDebounce'

const HomePage = () => {
  const searchProduct = useSelector((state) => state?.product?.search)
  const searchDebounce = useDebounce(searchProduct, 1000)
  const [loading, setLoading] = useState(false)
  const [limit, setLimit] = useState(6)
  // const [page, setLimit] = useState(6)
  const [typeProducts, setTypeProducts] = useState([])
  const arr = ['Dia nhac', 'Loa', 'Mam dia', 'Day']

  const fetchAllProduct = async (context) => {
    console.log('context', context)
    const limit = context?.queryKey && context?.queryKey[1]
    const search = context?.queryKey && context?.queryKey[2]
    const res = await ProductService.getAllProduct(search, limit)

    return res
  }

  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct()
    if(res?.status === 'OK') {
      setTypeProducts(res?.data)
    }
  }

  const { isLoading, data: products, isPreviousData } = useQuery(['products', limit, searchDebounce], fetchAllProduct, { retry: 3, retryDelay: 1000, keepPreviousData: true })

  useEffect(() => {
    fetchAllTypeProduct()
  }, [])
=======

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

>>>>>>> 50250792de628ad99f16fb0485365c0ec4b8365c

  return (
    <Loading isLoading={isLoading || loading}>
      <div style={{ width: '1270px', margin: '0 auto' }}>
        <WrapperTypeProduct>
          {typeProducts.map((item) => {
            return (
              <TypeProduct name={item} key={item} />
            )
          })}
        </WrapperTypeProduct>
      </div>
      <div className='body' style={{ width: '100%', backgroundColor: '#efefef', }}>
        <div id="container" style={{ height: '1500px', width: '1270px', margin: '0 auto' }}>
          <SliderComponent arrImages={[slider1, slider2, slider3]} />
          <WrapperProducts>
<<<<<<< HEAD
                {products?.data?.map((product) => {
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
                  id={product._id}
                />
                  )
                })
              }
=======
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
>>>>>>> 50250792de628ad99f16fb0485365c0ec4b8365c
          </WrapperProducts>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <WrapperButtonMore
              textButton={isPreviousData ? 'Load more' : "Xem thêm"} type="outline" styleButton={{
                border: '1px solid rgb(11, 116, 229)', color: `${products?.total === products?.data?.length ? '#ccc' : 'rgb(11, 116, 229)'}`,
                width: '240px', height: '38px', borderRadius: '4px'
              }}
              disabled={products?.total === products?.data?.length || products?.totalPage === 1}
              styleTextButton={{ fontWeight: 500, color: products?.total === products?.data?.length && '#fff' }}
              onClick={() => setLimit((prev) => prev + 6)}
            />
          </div>
        </div>
      </div>
    </Loading>
  )
}
export default HomePage 