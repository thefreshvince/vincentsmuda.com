/**
 *	WRAPPER
 */

module.exports.Wrapper = class Wrapper {

	/**
	 *	Set up our vars
	 */
	constructor () {

		// Set the wrapper class
		this.base_class = 'main';

		// Store the main element
		this.el = document.getElementById(this.base_class);

	}

	/**
	 *	Sets the opperating system as a class
	 */
	setOS () {

		// Set the mac class on the body
		if(
		  navigator.userAgent &&
		  ~navigator.userAgent.indexOf('Mac OS X')
		) this.el.classList.add('browser--osx');

	}

	/**
	 *	Adds a loaded state to the wrapper
	 */
	setLoaded () {

		// Set the timeout
		setTimeout(
		  () => this.el
		    .classList
		    .add(`${this.base_class}--loaded`),
		  1000
		);

	}

};
