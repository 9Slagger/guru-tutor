import Swal from 'sweetalert2'
import { push } from 'connected-react-router'
import axios from 'axios'
import {
  CREATE_ORDER,
  CREATE_ORDER_SUCESS,
  CREATE_ORDER_FAILURE,
  FETCH_ONE_ORDER,
  FETCH_ONE_ORDER_FAILURE,
  FETCH_ONE_ORDER_SUCESS,
  FETCH_ORDER,
  FETCH_ORDER_FAILURE,
  FETCH_ORDER_SUCESS,
  CONFIRM_ORDER,
  CONFIRM_ORDER_FAILURE,
  CONFIRM_ORDER_SUCESS
} from './type'
import { api } from './api'
import { VerifyAuth } from './AuthActions'

export const createOrder = userid => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: CREATE_ORDER })
    axios
      .get(`${api}/restricted/order?iduser=${userid}`, {
        headers: { Authorization: token }
      })
      .then(response => {
        dispatch(VerifyAuth())
        dispatch({
          type: CREATE_ORDER_SUCESS,
          payload: response.data
        })
        dispatch(push('/myorder'))
        Swal({
          type: 'success',
          title: 'สั่งซื้อ สำเร็จ!'
        })
      })
      .catch(error => {
        dispatch({
          type: CREATE_ORDER_FAILURE
        })
        Swal({
          type: 'error',
          title: 'สั่งซื้อ ล้มเหลว!'
        })
        console.log(error)
      })
  }
}

export const fetchOneOrder = idorder => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: FETCH_ONE_ORDER })
    axios
      .get(`${api}/restricted/orderone?idorder=${idorder}`, {
        headers: { Authorization: token }
      })
      .then(response => {
        dispatch({
          type: FETCH_ONE_ORDER_SUCESS,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({ type: FETCH_ONE_ORDER_FAILURE })
        console.log(error)
      })
  }
}

export const fetchOrder = () => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: FETCH_ORDER })
    axios
      .get(`${api}/restricted/orders`, {
        headers: { Authorization: token }
      })
      .then(response => {
        dispatch({
          type: FETCH_ORDER_SUCESS,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({ type: FETCH_ORDER_FAILURE })
        console.log(error)
      })
  }
}

export const ConfirmOrder = orderid => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: CONFIRM_ORDER })
    axios
      .get(`${api}/restricted/ooo?idorder=${orderid}`, {
        headers: { Authorization: token }
      })
      .then(response => {
        dispatch(VerifyAuth())
        dispatch({
          type: CONFIRM_ORDER_SUCESS,
          payload: response.data
        })
        dispatch(push('/myorder'))
        Swal({
          type: 'success',
          title: 'ยืนยันออเดอร์สำเร็จ !',
          text: `ออเดอร์ ${orderid}`
        })
      })
      .catch(error => {
        dispatch({
          type: CONFIRM_ORDER_FAILURE
        })
        Swal({
          type: 'error',
          title: 'ยืนยันออเดอร์ล้มเหลว !',
          text: `${error.response.data.message && error.response.data.message}`
        })
        console.log(error.response)
      })
  }
}
