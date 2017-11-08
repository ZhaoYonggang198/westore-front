import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/ProductList'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: ProductList
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product
    }
  ]
})
