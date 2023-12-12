import { Badge, Button, Col, Popover } from 'antd'
import React, { useState } from 'react'
import { WrapperContentPopup, WrapperHeader, WrapperHeaderAccount, WrapperHeaderCart, WrapperHeaderText } from './style'
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as UserService from '../../services/UserService'
import { resetUser } from '../../redux/slides/userSlide'
//import Loading from '../LoadingComponent/Loading';

const HeaderComponent = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  //const [loading, setLoading] = useState(false);
  const handleNavigateLogin = () => {
    navigate('/sign-in')
  } 
  console.log('user', user)


  const handleLogout = async () => {
    //setLoading(true)
    await UserService.logoutUser()
    dispatch(resetUser())
    //setLoading(false)
  }
  const content = (
    <div>
      <WrapperContentPopup onClick={handleLogout}>Đăng Xuất</WrapperContentPopup>
      <WrapperContentPopup onClick={() => navigate('/profile-user')}>Thông tin người dùng</WrapperContentPopup>
    </div>
  );
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>VinylHanoi</Col>
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
            {user?.name ? (
              <>
              <Popover content={content} trigger="click">
                <div style={{cursor: 'pointer'}}>{user.name}</div> 
              </Popover>
              </>
            ) : (
              <div onClick={handleNavigateLogin} style={{cursor: 'pointer'}}>
                <WrapperHeaderText>Đăng nhập / Đăng ký</WrapperHeaderText>
                <div>
                  <WrapperHeaderText>Tài khoản</WrapperHeaderText>
                  <CaretDownOutlined />
                </div>           
              </div>
            )}     
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