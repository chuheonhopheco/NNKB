import axios from "axios"
import { axiosJWT } from "./UserService"

<<<<<<< HEAD
export const getAllProduct = async (search, limit) => {
    let res = {}
    if (search?.length > 0) {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getAllProduct?filter=name&filter=${search}&limit=${limit}`)
    } else {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getAllProduct?limit=${limit}`)
=======
export const getAllProduct = async (search) => {
    let res = {}
    if(search.length > 0 ) {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getAllProduct?filter=name&filter=${search}`)
    }else{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getAllProduct`)
>>>>>>> 50250792de628ad99f16fb0485365c0ec4b8365c
    }
    return res.data
}

export const createProduct = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/product/create`, data)
    return res.data
} 
export const getOneProduct = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getOneProduct/${id}`)
    return res.data
}

export const updateProduct = async (id, access_token, data) => {
    const res = await axiosJWT.put(`${process.env.REACT_APP_API_URL}/product/update/${id}`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const deleteProduct = async (id, access_token) => {
    const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/product/deleteProduct/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const deleteManyProduct = async (data, access_token,) => {
    const res = await axiosJWT.post(`${process.env.REACT_APP_API_URL}/product/delete-many`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const getProductType = async (type, page, limit) => {
    if (type) {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getAllProduct?filter=type&filter=${type}&limit=${limit}&page=${page}`)
        return res.data
    }
}

export const getAllTypeProduct = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all-type`)
    return res.data
}
