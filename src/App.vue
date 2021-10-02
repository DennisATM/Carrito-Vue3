<template>
<div class="container mw-100">
  <h1>Carrito</h1>
  <hr>
  <div class="row">
    <div class="col-4">
      <Cart />
    </div>
    <div class="col-8">
        <h4>Cards</h4>
      <div class="row">
        <Card
          v-for='producto of productos' :key='producto.id' :producto="producto"
        />
      </div>
    </div>
  </div>
</div>
</template>


<script>
import {useStore} from 'vuex'
import {onMounted, computed} from 'vue'
import Card from './components/Card.vue'
import Cart from './components/Cart.vue'
export default{
  name:'App',
  components:{
    Card,
    Cart,
  },
  setup(){
    const store = useStore();
    onMounted( ()=> {
      store.dispatch('fetchData');
    });
    const productos=computed(()=> store.state.productos);
    //const carrito = computed(()=> store.state.productsOnCart);
    
    return {productos}
  }
}
</script>