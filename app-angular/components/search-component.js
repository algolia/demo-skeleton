export function searchComponentDirective() {
    return {
        restrict: 'AE',
        controller: 'SearchComponentController',
        controllerAs: 'searchComponentController',
        bindToController: true,
        link: link
    };

    function link(scope, element, attrs, controller) {
        
    }
}

class SearchComponentController {

    static get $inject() {
        return ['searchStore'];
    }

    constructor(searchStore) {
        this._searchStore = searchStore;
    }

}

export default SearchComponentController;