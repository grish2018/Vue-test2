import Vue from 'vue'
import Vuex from 'vuex'
import imageData from './modules/imageData'

Vue.use(Vuex)
export default new Vuex.Store({

    modules: {
        imageData
    }
})