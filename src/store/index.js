import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import actions from './actions.js';
import mutations from './mutations.js';
import home from './modules/home';

export default new Vuex.Store({
    modules: {
        home
    },
    actions,
    mutations
});
