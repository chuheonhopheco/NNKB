import { Col, Image, Row } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/HinhSP/dia1.jpg'
import imageProductSmall from '../../assets/images/HinhSP/dia2.2.jpg'
import { WrapperAddressProduct, WrapperBtnQuantityProduct, WrapperInputNumber, WrapperPriceProduct, WrapperQuantityProduct, WrapperStyleColImage, WrapperStyleNameProduct, WrapperStyleTextSell, WrapperTextProduct} from './style'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import {StarFilled, PlusOutlined, MinusOutlined} from '@ant-design/icons'

const ProductDetailsComponent = () => {
    const onChange = () => {}
  return (
    <Row style={{padding: '16px', background:'#fff', borderRadius: '4px'}}>
        <Col span={10} style={{borderRight: '1px solid #e5e5e5', paddingRight: '8px'}}>
            <Image style={{width: '664px', height:'500px'}} src={imageProduct} alt='image product' preview={false}/>
            <Row style={{paddingTop: '10px', justifyContent:'space-between'}}>
                <WrapperStyleColImage span={4}>
                    <Image style={{width: '90px', height:'90px'}} src={imageProductSmall} alt='image small' preview={false}/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <Image style={{width: '90px', height:'90px'}} src={imageProductSmall} alt='image small' preview={false}/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <Image style={{width: '90px', height:'90px'}} src={imageProductSmall} alt='image small' preview={false}/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <Image style={{width: '90px', height:'90px'}} src={imageProductSmall} alt='image small' preview={false}/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <Image style={{width: '90px', height:'90px'}} src={imageProductSmall} alt='image small' preview={false}/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <Image style={{width: '90px', height:'90px'}} src={imageProductSmall} alt='image small' preview={false}/>
                </WrapperStyleColImage>
            </Row>
        </Col>
        <Col span={14} style={{paddingLeft:'10px'}}>
            <WrapperStyleNameProduct>Dia 1</WrapperStyleNameProduct>
            <div>
                <StarFilled style={{fontSize: '10px', color: 'yellow'}}/>
                <StarFilled style={{fontSize: '10px', color: 'yellow'}}/>
                <StarFilled style={{fontSize: '10px', color: 'yellow'}}/>
                <WrapperStyleTextSell> | Da ban 1000+</WrapperStyleTextSell>
            </div>
            <WrapperPriceProduct>
                <WrapperTextProduct>200.000đ</WrapperTextProduct>
            </WrapperPriceProduct>
            <WrapperAddressProduct>
                <span> Giao đến </span>
                <span className='address'>235 Hoàng Quốc Việt</span> -
                <span className='change-address'> Đổi địa chỉ </span>
            </WrapperAddressProduct>
            <div style={{margin:'10px 0 20px', padding:'10px 0',borderTop:'1px solid #e5e5e5', borderBottom:'1px solid #e5e5e5'}}>
                <div style={{marginBottom: '20px'}}>Số lượng</div>
                <WrapperQuantityProduct>
                    <WrapperBtnQuantityProduct>
                        <ButtonComponent style={{border: 'none', padding: 'unset'}} icon={<MinusOutlined  style={{color: '#000', fontSize:"20px"}}/>} />  
                    </WrapperBtnQuantityProduct>                    
                    <WrapperInputNumber defaultValue={1} onChange={onChange} size='small'/>
                    <WrapperBtnQuantityProduct>
                        <ButtonComponent style={{border: 'none', padding: 'unset'}} icon={<PlusOutlined  style={{color: '#000', fontSize:"px"}} />} />  
                    </WrapperBtnQuantityProduct>
                </WrapperQuantityProduct>               
            </div>
            <div style={{display: 'flex', alignItems:'center', gap:'12px'}}>
                <ButtonComponent
                    size={40} 
                    styleButton={{
                        backgroundColor: 'rgba(140,40,48,255)', borderRadius: '6px',
                        height: '48px',
                        width: '220px',
                    }}
                    styleTextButton = {{color: '#fff', fontSize:'15px', fontWeight: '500'}}
                    textButton = {'Chọn mua'}
                ></ButtonComponent>
                <ButtonComponent
                    size={40} 
                    styleButton={{
                        backgroundColor: '#fff', borderRadius: '6px',
                        height: '48px',
                        width: '220px',
                        border: '1px solid rgb(13, 92, 182)'
                    }}
                    styleTextButton = {{color: 'rgb(13, 92, 182)', fontSize:'15px', fontWeight: '500'}}
                    textButton = {'Mua trả sau'}
                ></ButtonComponent>
                </div>
        </Col>
    </Row>
  )
}

export default ProductDetailsComponent