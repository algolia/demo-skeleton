import _ from 'lodash';
import algoliasearch from 'algoliasearch';

class SearchStore {
    
    static get $inject() {
        return ['APP_ID', 'API_KEY', 'INDEX'];
    }
    
    constructor(APP_ID, API_KEY, INDEX, $rootScope, $sce) {
        this._APP_ID = APP_ID;
        this._API_KEY = API_KEY;
        this._INDEX = INDEX;

        this._client = algoliasearch(this._APP_ID, this._API_KEY);
        this._currentIndex = this._client.initIndex(this._INDEX);
    }

}

export default SearchStore;