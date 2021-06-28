import { createStore } from 'vuex'
import employess from './modules/employess'
const store=createStore({
    modules:{
        employess,
    }
});
 
export default store;