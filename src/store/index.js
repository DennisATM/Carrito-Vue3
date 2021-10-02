import { createStore } from 'vuex'

export default createStore({
  state: {
    productos:[],
    productsOnCart:{},
  },
  mutations: {
    setProductos(state,payload){
      state.productos = payload
    },
    setAddProduct(state,payload){
      state.productsOnCart[payload.id]={...payload}
      console.log(state.productsOnCart)
    },
    setVaciarCarrito(state){
      state.productsOnCart={}
    },
    setAumentar(state,payload){
      state.productsOnCart[payload].cantidad=state.productsOnCart[payload].cantidad+1
    },
    setDisminuir(state,payload){
      state.productsOnCart[payload].cantidad=state.productsOnCart[payload].cantidad-1
      if (state.productsOnCart[payload].cantidad == 0){
        delete state.productsOnCart[payload]
      }
    }
  },
  actions: {
    async fetchData({commit}){
      try {
        const res= await fetch('api.json')
        const data= await res.json()
        commit('setProductos',data)
      } catch (error) {
        console.log(error)
      }
    },
    addToCart({commit,state},producto){
      state.productsOnCart.hasOwnProperty(producto.id)
      ? producto.cantidad=state.productsOnCart[producto.id].cantidad+1
      : producto.cantidad=1
      commit('setAddProduct',producto)
    }
  },
  getters:{
    totalCantidad(state){
      return Object.values(state.productsOnCart).reduce((acc,{cantidad})=>acc+cantidad,0)
    },
    totalPrecio(state){
      return Object.values(state.productsOnCart).reduce((acc,{cantidad,precio})=> acc+cantidad*precio,0)
    }
  },
  modules: {
  }
})
