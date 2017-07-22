// General imports
import '../scss/styles.scss';
import {DevTools} from './partials/components/_devtools';

// instantiate the devtools
const devtools = new DevTools();

// Build the banner
devtools.banner();

// Build the resume
devtools.resume();
