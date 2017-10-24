/**
 * Modal Scripts
 */
(function() {

	var components = document.querySelectorAll('.modal'),
		container = document.querySelector('.modal-container'),
		openedModal;

	/**
	 * Open the modal a modal.
	 * 
	 * @param {string}  instance  The modal to open.
	 */
	window.openModal = function(instance) {

		var modal    = document.querySelector('#' + instance),
			wrapper  = modal.parentElement,
			body     = document.querySelector('body');

		openedModal = modal;

		modal.classList.remove('is-hidden');
		wrapper.classList.remove('is-hidden');
		body.classList.add('modal-open');
	};

	/**
	 * Close currently open modal.
	 * 
	 * @param {string}  instance  The modal to close.
	 */
	function closeModal(instance) {

		var body = document.querySelector('body');

		body.classList.remove('modal-open');
		instance.classList.add('is-hidden');
		instance.parentElement.classList.add('is-hidden');

		setTimeout(function() {
			openedModal = '';
		}, 200);
	}

	/**
	 * Handles click events.
	 * 
	 * @param {any} event 
	 */
	function handleClickEvents(event) {

		var el = event.target;

		if ( el.classList.contains('button--close') || el.classList.contains('modal-container')) {
			closeModal(openedModal);
		}
	}

	/**
	 * Closes modal when ESC is presssed.
	 * 
	 * @param {any} event 
	 */
	function keyClose(event) {

		var key = event.keyCode;

		if (key === 27 && openedModal) {
			closeModal(openedModal);
		}
	}

	// Add event listeners to each instance of a modal.
	for (var i = 0; i < components.length; i++) {
		components[i].addEventListener('click', handleClickEvents);
	}

	container.addEventListener('click', handleClickEvents);
	document.addEventListener('keyup', keyClose);
})();
