import axios from 'axios'

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '' : 'http://127.0.0.1:5000'
})

export function getProductList () {
  return service({
    url: 'westore/api/products'
  })
}

export function getProduct (id) {
  return service({
    url: 'westore/api/products/' + id
  })
}
