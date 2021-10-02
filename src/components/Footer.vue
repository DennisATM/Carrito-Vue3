<template>
  <th scope="row" colspan="2">Total productos</th>
        <td>{{totalCantidad}}</td>
        <td>
            <button class="btn btn-danger btn-sm" @click="vaciar" id="vaciar-carrito">
                vaciar todo
            </button>
        </td>
        <td class="font-weight-bold">$ <span>{{totalPrecio}}</span></td>
</template>

<script>
import { computed } from '@vue/reactivity'
import {useStore} from 'vuex'
export default {
    setup(){
        const store=useStore()
        const totalCantidad=computed(()=> store.getters.totalCantidad)
        const totalPrecio=computed(()=> store.getters.totalPrecio)
        const vaciar=()=>{store.commit('setVaciarCarrito')}
        return {totalCantidad,totalPrecio,vaciar}
    }
}
</script>

<style>

</style>