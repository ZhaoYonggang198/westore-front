<template>
  <b-container>
    
  </b-container>
</template>

<script>
import {getProductList} from '../Products'
export default {
  name: 'Product',
  props: ['id']
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
