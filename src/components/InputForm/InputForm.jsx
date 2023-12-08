import React, { useState } from 'react'
import { WrapperInput } from './style';

const InputForm = (props) => {
    const [valueInput, setValueInput] = useState('')
    const {placeholder = 'Nhập text', ...rests} = props
    return (
        <>
            <WrapperInput placeholder={placeholder} valueInput={valueInput} {...rests}/>
        </>
        
    )
}

export default InputForm