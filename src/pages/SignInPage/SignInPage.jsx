import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { Image } from 'antd'
import ImageLogo from '../../assets/images/Logo.png' 
import {EyeFilled, EyeInvisibleFilled} from '@ant-design/icons'

const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  return (
    <div style={{display: 'flex', alignItems:'center', justifyContent:'center', background:'rgba(0, 0, 0, 0.53)', height:'100vh'}}>
      <div style={{width: '800px', height:'445px', borderRadius: '6px', background: '#fff', display: 'flex'}}>
        <WrapperContainerLeft>
          <h1>Xin chào,</h1>
          <p>Đăng nhập hoặc tạo tài khoản</p>
          <InputForm style={{marginBottom: '10px'}} placeholder="abc@gmail.com"/>
          <div style={{position: 'relative'}}>
            <span
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >{
              isShowPassword ? (
                <EyeFilled/>
              ) : (
                <EyeInvisibleFilled />
              )
            }
            </span>
          </div>
          <InputForm placeholder="Password" type={isShowPassword ? "text" : "Password"}/>
          <ButtonComponent
            size={40} 
            styleButton={{
                backgroundColor: 'rgba(140,40,48,255)', borderRadius: '6px',
                height: '48px',
                width: '100%',
                margin: '26px 0 10px'
            }}
            styleTextButton = {{color: '#fff', fontSize:'15px', fontWeight: '500'}}
            textButton = {'Đăng nhập'}          
          ></ButtonComponent>
          <WrapperTextLight>Quên mật khẩu</WrapperTextLight>
          <p>Chưa có tài khoản? <WrapperTextLight>Tạo tài khoản</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight style={{background: 'rgb(216, 116, 124)'}}>
          <Image src={ImageLogo} preview={false} alt='ImageLogo' height="203px" width="203px" />
          <h2>Mua sắm tại đây</h2>
        </WrapperContainerRight>
      </div>
    </div> 
  )
}

export default SignInPage