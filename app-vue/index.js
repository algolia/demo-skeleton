import Vue from 'vue/dist/vue.common.js';
import * as SearchStore from './search-store.js';
import * as ComponentExample from './components/component-example.js';

var app = new Vue({
    el: '#AlgoliaSearch',
    data: {
        local: SearchStore.store.state
    },
    components: {
        'component-example': ComponentExample.Child
    }
});