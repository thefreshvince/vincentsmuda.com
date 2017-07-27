/*

	DEVTOOLS

*/

// Grabs the devtools detector
import devtools_detect from 'devtools-detect';

// Get the scss variables
import scss_vars from '../data/_vars';

// Imports the resume object
import {Resume} from './_resume';

// Start our devtools class and export it
module.exports.DevTools = class DevTools {

	/**
	 * Constructs our class
	 */
  constructor (wrapper = null) {

    // Set the colors
    this.colors = {
      primary: scss_vars['color-primary'],
      secondary: scss_vars['color-secondary']
    };

    // Store the wrapper class
    this.wrapper_class = wrapper || 'main'

    // Set a reference to the wrapper
    this.wrapper = document.getElementById(this.wrapper_class);

    // Set the current state of the devtools
    this.is_open = false;

    // Set up the detect
    this.detect();

  }

	/**
	 * Logs the resume
	 */
  resume () {
    console.log(Resume);
  }

	/**
	 * Builds the banner
	 */
  banner () {
      console.clear();
      var string = '%c';
          string += '\n/====================================================================\\\n\n';
          string += '   __    __  _______    ______    ______    ______    __   ______\n';
          string += '  /\\ \\  / / /\\__  __\\  /\\  __ \\  /\\  ___\\  /\\  ___\\  /\\_\\ /\\  ___\\\n';
          string += '  \\ \\ \\/ /  \\///\\ \\//  \\ \\ \\ \\ \\ \\ \\ \\____ \\ \\  ___\\ \\/_/ \\ \\___  \\\n';
          string += '   \\ \\__/     /\\_____\\  \\ \\_\\ \\_\\ \\ \\_____\\ \\ \\_____\\      \\/\\_____\\\n';
          string += '    \\/_/      \\/_____/   \\/_/\\/_/  \\/_____/  \\/_____/       \\/_____/\n\n';
          string += '                                  Resume\n\n';
          string += '\\====================================================================/\n\n';
      console.log(
        string,
        'color:' + (
          this.is_open
            ? this.colors.secondary
            : this.colors.primary
        ) + ';'
      );
  }

  /**
   * Listens for when devtools are open
   */
  detect () {

    // Set the state off the bat
    this.setToolsState(devtools_detect.open);

    // Listen for changes and set the state
    window.addEventListener(
      'devtoolschange',
      e => this.setToolsState(e.detail.open)
    );

  }

  /**
   * Sets devtool state
   */
  setToolsState (open = null) {

    // Set the classlist add/remove
    let current_state = open === null ? devtools_detect.open : open,
        action = current_state?'add':'remove';

    // Add the class to the wrapper
    this.wrapper.classList[action](`${this.wrapper_class}--devtools-open`);

    // Store the current state
    this.is_open = current_state;

    // Rerender the banner and resume
    this.banner();
    this.resume();

  }

}
