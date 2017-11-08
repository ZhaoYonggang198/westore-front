<template>
  <b-container>
    <div v-for="(product, key) in products"  v-if="key % 2 == 0" :key="product.id">
      <b-row >
        <b-col cols="6"  >
          <router-link :to="{path: 'product/'+ product.id}"><b-img :src="product.pictures[0].uri" fluid :alt="product.description" ></b-img></router-link>
        </b-col>
        <b-col cols="6" v-if="key+1 < products.length">
          <router-link :to="'/product/' + products[key+1].id"><b-img :src="products[key+1].pictures[0].uri" fluid :alt="products[key+1].description" ></b-img></router-link>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6"  >
          <span>{{ product.brandName }}</span>
        </b-col>
        <b-col cols="6" v-if="key+1 < products.length">
          <span>{{ products[key+1].brandName }}</span>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6"  >
          <span><S>€{{product.price}}</S></span>  <span style="font-weight: bold">{{(product.discount*10).toFixed(1)}}折</span>&nbsp;&nbsp;&nbsp;<span>€{{(product.price*product.discount).toFixed(1)}}</span>
        </b-col>
        <b-col cols="6" v-if="key+1 < products.length">
          <span><S>€{{products[key+1].price}}</S></span>  <span style="font-weight: bold">{{(products[key+1].discount*10).toFixed(1)}}折</span>&nbsp;&nbsp;&nbsp;<span>€{{(products[key+1].price*products[key+1].discount).toFixed(1)}}</span>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6"  >
          <table class="table-sm table-bordered quantity" style="margin:  0px auto">
            <tbody>
              <tr>
                <td v-for="(quantity, size) in product.quantity">
                  {{quantity}}
                </td>
              </tr>
              <tr>
                <td v-for="(quantity, size) in product.quantity" class="quantity-size">
                  <span>{{size}}</span>
                </td>
              </tr>
            </tbody>
           </table>
        </b-col>
        <b-col cols="6" v-if="key+1 < products.length">
          <table class="table-sm table-bordered quantity" style="margin:  0px auto">
            <tbody>
              <tr>
                <td v-for="(quantity, size) in products[key+1].quantity">
                  {{quantity}}
                </td>
              </tr>
              <tr>
                <td v-for="(quantity, size) in products[key+1].quantity" class="quantity-size">
                  <span>{{size}}</span>
                </td>

              </tr>
            </tbody>
          </table>
        </b-col>
      </b-row>            
    </div>
    
  </b-container>
</template>

<script>
import {getProductList} from '../Products'
export default {
  name: 'ProductList',
  data () {
    return {
      isLoading: false,
      products: []
    }
  },
  created () {
    getProductList({}).then(res => {
      if (res.status === 200) {
        this.products = res.data.products
      }
      console.log(res)
      this.isLoading = true
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.front-page{
  height: 700px;
  background-color: white;
  overflow: hidden;
}

.quantity{
  font-size:10px;
  padding: 0px;
}

.quantity-size{
  font-weight: bold;
  color: white;
  background-color: #ffc107;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
