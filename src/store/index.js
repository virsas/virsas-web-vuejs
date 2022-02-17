import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

// import example from './modules/example'

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
