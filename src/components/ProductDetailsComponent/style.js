import { Col, Image, InputNumber } from "antd";
import styled from "styled-components";

export const WrapperStyleImageSmall = styled(Image)`
    height: 70px;
    width: 70px;
`

export const WrapperStyleColImage = styled(Col)`
    flex-basis: unset;
    display: flex;
`

export const WrapperStyleNameProduct = styled.h1`
    color: rgb(36, 36, 36);
    font-size: 24px;
    font-weight: 300;
    line-height: 32px;
    word-break: break-word;
`

export const WrapperStyleTextSell = styled.span`
    color: rgb(120, 120, 120);
    font-size: 15px;
    line-height: 24px;
`

export const WrapperPriceProduct = styled.div`
    color: rgb(250, 250, 250);
    border-radius: 4px;
`

export const WrapperTextProduct = styled.h1`
    font-size: 32px;
    line-height: 40px;
    margin-left: 8px;
    font-weight: 500;
    color: rgb(0, 0, 0);
    padding: 10px;
    margin-top: 10px;
    background-color: #f2f2f2;
`

export const WrapperAddressProduct = styled.div`
    span.address{
        text-decoration: underline;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    };
    span.change-address{
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        color: rgba(140,40,48,255);
    }
`

export const WrapperQuantityProduct = styled.div`
    display: flex;
    gap: 4px;
    align-item: center;
    width: 100px;
    border-radius: 4px;
    border: 1px solid #ccc
`

export const WrapperBtnQuantityProduct = styled.span`

`

export const WrapperInputNumber = styled(InputNumber)`
    &.ant-input-number.ant-input-number-sm{
        width: 40px;
        border-top: none;
        border-bottom: none;
        padding-top: 5px;
        &.ant-input-number-handler-wrap{
            display: none !important;
        }
    }
`