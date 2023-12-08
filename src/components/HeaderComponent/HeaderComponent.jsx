import { Badge, Col } from 'antd'
import React from 'react'
import { WrapperHeader, WrapperHeaderAccount, WrapperHeaderCart, WrapperHeaderText } from './style'
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>Logo</Col>
        <Col span={12}>
          <ButtonInputSearch
            placeholder="input search text"
            bordered = {false}
            size= "large"
            textButton="Tìm kiếm"
          />
        </Col>
        <Col span={6} style={{ display: 'flex', gap: '20px'}}>
          <WrapperHeaderAccount>
            <UserOutlined style={{fontSize: '30px'}}/>
            <div>
              <WrapperHeaderText>Đăng nhập / Đăng ký</WrapperHeaderText>
              <div>
                <WrapperHeaderText>Tài khoản</WrapperHeaderText>
                <CaretDownOutlined />
              </div>           
            </div>
          </WrapperHeaderAccount>
          <WrapperHeaderCart>
            <Badge count={4} size ="small">
              <ShoppingCartOutlined style={{fontSize: '30px', color:'white'}}/>
            </Badge>
            <WrapperHeaderText style={{alignItems: 'center', display: 'flex'}}>Giỏ hàng</WrapperHeaderText>
          </WrapperHeaderCart>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent