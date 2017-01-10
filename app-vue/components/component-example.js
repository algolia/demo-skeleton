import * as SearchStore from './../search-store.js';

export const Child = {
    props: ['message'],
    template: '<div>{{message}}</div>',
    methods: {
        doSomething() {
            //SearchStore.store.updateStore();
        }
    }
}