import angular from 'angular';

import SearchStore from './search-store.js';
import SearchComponentController, {searchComponentDirective} from './components/search-component.js';

export default angular
    .module('Algolia.AlgoliaSearch', [])
    .constant('APP_ID', 'Q71HM8430Y')
    .constant('API_KEY', '7f42b7cbd41474bf777414c24302d4a4')
    .constant('INDEX', 'best_buy')
    .service('searchStore', SearchStore)
    .controller('SearchComponentController', SearchComponentController)
    .directive('searchComponent', searchComponentDirective);

angular.bootstrap(document.getElementById("AlgoliaSearch"), ['Algolia.AlgoliaSearch']);