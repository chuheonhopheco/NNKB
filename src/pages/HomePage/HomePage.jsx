import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import CardComponent from '../../components/CardComponent/CardComponent'

const HomePage = () => {
  const arr = ['Loa', 'Dia nhac', 'Day']
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
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
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