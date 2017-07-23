/**
 *  The main entry for the site
 */
import '../scss/styles.scss';
import {DevTools} from './partials/components/_devtools';
import {Wrapper} from './partials/components/_wrapper'

// instantiate our classes
const devtools = new DevTools(),
      wrapper = new Wrapper();

// Build the banner
// Build the resume
devtools.banner();
devtools.resume();

// Set the OS
// Set the loaded state
wrapper.setOS();
wrapper.setLoaded();
