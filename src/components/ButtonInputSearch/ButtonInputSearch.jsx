import React from 'react'
import {
    SearchOutlined,
  } from '@ant-design/icons';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ButtonInputSearch = (props) => {
    const {
        size, placeholder, 
        textButton, bordered, 
        backgroundColorInput = '#fff', 
        backgroundColorButton = 'rgba(100,40,48,255)', 
        colorButton = '#fff'
    } = props
  return (
    <div style={{display:'flex'}}>
        <InputComponent
            size={size} 
            placeholder={placeholder} 
            bordered={bordered}
<<<<<<< HEAD
            style={{backgroundColor: backgroundColorInput, borderRadius: '0px'}} 
            {...props}
=======
            style={{backgroundColor: backgroundColorInput, borderRadius: '0px'}}
            {...props} 
>>>>>>> 50250792de628ad99f16fb0485365c0ec4b8365c
        />
        <ButtonComponent 
            size={size} 
            icon={<SearchOutlined style={{color: colorButton}}/>} 
            styleButton={{backgroundColor: backgroundColorButton, borderRadius: '0px', border: !bordered && 'none'}}
            styleTextButton = {{color: colorButton}}
            textButton = {textButton}
        />         
    </div>
  )
}

export default ButtonInputSearch