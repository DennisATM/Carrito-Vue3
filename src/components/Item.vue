<template>
   <tr>
        <th scope="row">{{items.id}}</th>
        <td>{{items.title}}</td>
        <td>{{items.cantidad}}</td>
        <td>
            <button class="btn btn-info btn-sm" @click="aumentar(items.id)">
                +
            </button>
            <button class="btn btn-danger btn-sm" @click="disminuir(items.id)">
                -
            </button>
        </td>
        <td>$ <span>{{items.precio * items.cantidad}}</span></td>
      </tr>
</template>

<script>
import {useStore} from 'vuex'
export default {
    props:{
        items:{},
    },
    setup(){
        const store=useStore()
        const aumentar = id =>{store.commit('setAumentar', id)}
        const disminuir = id =>{store.commit('setDisminuir', id)}
        return {aumentar,disminuir}
    }

}
</script>