# demo-skeleton

Client-side skeleton for building medium-to-large scope demos. The primary intention is to increase the efficiency of *rapid prototyping* and to allow for ease of iterative changes based on feedback, potentially by other engineers. 

## Installation

`yarn install`

`jspm install`


## Run

`gulp run`

Runs the watch task for SCSS compilation and spins up a localhost.


## Setup

Update `app-X` in the SystemJS import statement on the `index.html` file to be either `app-angular` or `app-vue` depending on your framework du jour. 

`wget -E -H -k -K -p -e robots=off http://domain.com/page` will grab all static assets from a webpage.


## Additional Dependencies

Additional development dependencies can be installed via `yarn add [package name]`. Javascript dependencies can be installed via `jspm install [package name]` and then imported as an ES6 module.


## App

* Tiny skeletons are provided for an Angular app and a Vue app. Both of these frameworks were chosen for their utility as *rapid prototyping* tools. 
* Each tiny skeleton provides the bones for a basic app structure following conventions of the respective framework: an entry point, example component, and basic "store". Convention is for components to be "dumb" and read from the state that is updated by the store (a lazy man's Redux). 
* jspm integrates very, very well with SystemJS which provides out-of-the-box dynamic module loading and uses Babel for transpiling.

## Sass

* utilities.scss includes basic mixins for media queries and variable examples
* global.scss is meant to contain all necessary global overrides
