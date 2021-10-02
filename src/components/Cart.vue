<template>
  <div class="my-5">
      <h4>Carrito de compras</h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Acción</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody id="items">
          <Item 
          v-for="item of items" :key="item.id" :items=item
          />
        </tbody>
        <tfoot>
          <tr id="footer-carrito">
            <th scope="row" v-if="Object.values(items).length===0" colspan="5">Carrito vacío - comience a comprar!</th>
            <Footer v-else/>    
          </tr>
        </tfoot>
      </table>
      
      <div class="row" id="cards"></div>
    </div>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'
import Item from '../components/Item.vue'
import Footer from './Footer.vue'
export default {
  components:{
    Item,
    Footer,
    },
  setup(){
    const store=useStore()
    const items=computed(()=>store.state.productsOnCart)
    return {items}
  }
}
</script>

<style>

</style>