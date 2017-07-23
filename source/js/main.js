// General imports
import '../scss/styles.scss';
import {DevTools} from './partials/components/_devtools';

// instantiate the devtools
const devtools = new DevTools();

// Set the elements
let el_main = document.getElementById('main');

// Build the banner
devtools.banner();

// Build the resume
devtools.resume();

// Set the mac class on the body
if(
  navigator.userAgent &&
  ~navigator.userAgent.indexOf('Mac OS X')
) el_main.classList.add('browser--osx');

// Set the timeout
setTimeout(
  () => el_main
    .classList
    .add('loaded'),
  1000
);
