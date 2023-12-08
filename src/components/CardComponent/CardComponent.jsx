import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import {StarFilled} from '@ant-design/icons'

const CardComponent = () => {
  return (
    <WrapperCardStyle
        hoverable
        headStyle={{width: '200px', height: '200px'}}
        style={{ width: 200 }}
        bodyStyle={{padding: '10px'}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
        <StyleNameProduct>Iphone</StyleNameProduct>
        <WrapperReportText>
            <span style={{marginRight: '4px'}}>
                <span>4.96</span> <StarFilled style={{fontSize: '10px', color: 'yellow'}}/>
            </span>
            <WrapperStyleTextSell>| Da ban 1000+</WrapperStyleTextSell>
        </WrapperReportText>
        <WrapperPriceText>
            1.000.000đ
            <WrapperDiscountText>-5%</WrapperDiscountText>
        </WrapperPriceText>
  </WrapperCardStyle>
  )
}

export default CardComponent