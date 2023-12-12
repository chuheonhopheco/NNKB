import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {routes} from './routes'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import { isJsonString } from './utils'
import { jwtDecode } from 'jwt-decode'
import * as UserService from './services/UserService'
import {useDispatch, useSelector} from 'react-redux'
import { updateUser } from './redux/slides/userSlide'
import axios from 'axios'


export function App() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  useEffect(() => {
    const {storageData, decoded} = handleDecoded()
      if(decoded?.id){
        handleGetOneUser(decoded?.id, storageData)
      }  
    console.log('storageData', storageData)
  }, [])

  axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
  

  const handleDecoded = () => {
    let storageData = localStorage.getItem('access_token')
    let decoded = {}
    if(storageData && isJsonString(storageData)){
      storageData = JSON.parse(storageData)
      decoded = jwtDecode(storageData)
    }
    return {decoded, storageData}
  }

  UserService.axiosJWT.interceptors.request.use(async (config) => {
    const currentTime = new Date()
    const {decoded} = handleDecoded()
    if(decoded?.exp < currentTime.getTime() / 1000){
      const data = await UserService.refreshToken()
      config.headers['token'] = `Bearer ${data?.access_token}`
    }
    return config;
  }, (err) => {
    return Promise.reject(err);
  })

  const handleGetOneUser = async (id, token) => {
    const res = await UserService.getOneUser(id, token)
    dispatch(updateUser({...res?.data, access_token: token}))
    console.log('res', res)
  }

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            const ischeckAuth = !route.isPrivate || user.isAdmin
            const Layout = route.isShowHeader ? DefaultComponent : Fragment
            return (
              <Route key={route} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              }/>
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App