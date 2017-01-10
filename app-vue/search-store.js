import algoliasearch from 'algoliasearch';

export const config = {
    APP_ID: 'Q71HM8430Y',
    API_KEY: '7f42b7cbd41474bf777414c24302d4a4',
    INDEX: 'best_buy'
}

export const client = algoliasearch(config.APP_ID, config.API_KEY);
export const currentIndex = client.initIndex(config.INDEX);

export let store = {
    state: {
        message: 'Lorem Ipsum'
    },
    updateStore() {
        //this.state.message = "";
    }
}