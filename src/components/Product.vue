<template>
  <b-container>
    <b-carousel style="text-shadow: 1px 1px 2px #333"
            controls
            indicators
            backgroud="#ababab"
            :interval="4000"
            img-width="1024"
            img_height="480"
            v-model="slide"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd">
        <b-carousel-slide v-for="picture in product.pictures" :img-src="picture.uri">
        </b-carousel-slide>
    </b-carousel>
    <div>

      <span>{{ product.brandName }}</span>

    </div>
    <b-row style="margin: 20px">
      <b-col col="12">
        <span style="text-align: center;"><S>€{{product.price}}</S></span>  <span style="font-weight: bold">{{(product.discount*10).toFixed(1)}}折</span>&nbsp;&nbsp;&nbsp;<span>€{{(product.price*product.discount).toFixed(1)}}</span>
      </b-col>
    </b-row>
    <b-row>
      <span style="font-weight: bold;">尺寸库存</span>

    </b-row>
    <b-row>
       <table class="table-sm table-bordered quantity">
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
    </b-row>
    <hr>
    <b-row>
      <span style="font-weight: bold;">商品描述</span>

    </b-row>
    <b-row>
       {{product.description}}
    </b-row>
    <hr>
    <b-row>
      <span style="font-weight: bold;">海外直发：预计{{product.transport.duration.min}}至{{product.transport.duration.max}}到达</span>

    </b-row>

    <b-row>
       {{product.transport.description}}
    </b-row>
    <hr>
    <b-row>
      <span style="font-weight: bold;">品牌：{{product.brandName}}</span>

    </b-row>
    <hr>
    <b-row>
      <span style="font-weight: bold;">产品图片</span>

    </b-row>
    
      <b-img v-for="picture in product.pictures" fluid-grow :src="picture.uri">
      </b-img>
    
  </b-container>
</template>

<script>
import {getProduct} from '../Products'
export default {
  name: 'Product',
  props: ['id'],
  data () {
    return {
      isLoading: false,
      product: undefined
    }
  },
  created () {
    getProduct(this.$route.params.id).then(res => {
      if (res.status === 200) {
        this.product = res.data
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
