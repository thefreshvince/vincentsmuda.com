/*

	DEVTOOLS

*/

// Imports the resume object
import {Resume} from './_resume.js';

// Start our devtools class and export it
module.exports.DevTools = class DevTools {

	/**
	 * Constructs our class
	 */
  constructor () {}

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
      var string = '%c';
          string += '\n/====================================================================\\\n\n';
          string += '   __    __  _______    ______    ______    ______    __   ______\n';
          string += '  /\\ \\  / / /\\__  __\\  /\\  __ \\  /\\  ___\\  /\\  ___\\  /\\_\\ /\\  ___\\\n';
          string += '  \\ \\ \\/ /  \\///\\ \\//  \\ \\ \\ \\ \\ \\ \\ \\____ \\ \\  ___\\ \\/_/ \\ \\___  \\\n';
          string += '   \\ \\__/     /\\_____\\  \\ \\_\\ \\_\\ \\ \\_____\\ \\ \\_____\\      \\/\\_____\\\n';
          string += '    \\/_/      \\/_____/   \\/_/\\/_/  \\/_____/  \\/_____/       \\/_____/\n\n';
          string += '                                  Resume\n\n';
          string += '\\====================================================================/\n\n';
      console.log(string,'color:#8956a2;');
  }

}
