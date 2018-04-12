/**
 * Accordion functionality.
 *
 * @class Accordion
 */
class Accordion {
  constructor() {
    this.items = Array.from(document.querySelectorAll('.accordion__item'));
    this.firstItem = this.items[0];
    this.lastItem = this.items[this.items.length - 1];
    this.keyCodes = Object.freeze({
      RETURN: 13,
      ESC: 27,
      SPACE: 32,
      END: 35,
      HOME: 36,
      UP: 38,
      DOWN: 40
    });

    this.bindEvents();
  }

  /**
   * Expands an accordion panel.
   *
   * @param {string} toggle The toggle button element.
   * @memberof Accordion
   */
  activatePanel(toggle) {
    const parent = toggle.parentElement.parentElement;

    toggle.setAttribute('aria-expanded', 'true');
    parent.classList.add('accordion__item--expanded');
  }

  /**
   * Collapses an accordion panel.
   *
   * @param {string} toggle The toggle button element.
   * @memberof Accordion
   */
  deactivatePanel(toggle) {
    const parent = toggle.parentElement.parentElement;

    toggle.setAttribute('aria-expanded', 'false');
    parent.classList.remove('accordion__item--expanded');
  }

  /**
   * Determines which method to fire based on target.
   *
   * @param {object} event The event object.
   * @returns {boolean} Whether a subsequent action was fired.
   * @memberof Accordion
   */
  handleClickEvent(event) {
    const target = event.target.closest('.toggle');

    if (target && target.getAttribute('aria-expanded') === 'false') {
      this.activatePanel(target);
      return true;
    }

    if (target && target.getAttribute('aria-expanded') === 'true') {
      this.deactivatePanel(target);
      return true;
    }
  }

  /**
   * Determines which method to fire based on target and keypress.
   *
   * @param {object} event The event object.
   * @returns {boolean} Whether a subsequent action was fired.
   * @memberof Accordion
   */
  handleKeydownEvent(event) {
    const key = event.keyCode,
      target = event.target,
      listItem = target.parentElement.parentElement;

    let newTarget;

    switch (key) {
      case this.keyCodes.DOWN:
        event.preventDefault();

        if (listItem !== this.lastItem) {
          newTarget = listItem.nextElementSibling.querySelector('.toggle');
        } else {
          newTarget = this.firstItem.querySelector('.toggle');
        }
        newTarget.focus();
        return true;

      case this.keyCodes.UP:
        event.preventDefault();

        if (listItem !== this.firstItem) {
          newTarget = listItem.previousElementSibling.querySelector('.toggle');
        } else {
          newTarget = this.lastItem.querySelector('.toggle');
        }
        newTarget.focus();
        return true;

      case this.keyCodes.HOME:
        event.preventDefault();

        newTarget = this.firstItem.querySelector('.toggle');
        newTarget.focus();
        return true;

      case this.keyCodes.END:
        event.preventDefault();

        newTarget = this.lastItem.querySelector('.toggle');
        newTarget.focus();
        return true;

      default:
        return false;
    }
  }

  /**
   * Binds the accordion events to the page.
   *
   * @memberof Accordion
   */
  bindEvents() {
    document.addEventListener('click', this.handleClickEvent.bind(this));
    document.addEventListener('keydown', this.handleKeydownEvent.bind(this));
  }
}

export default Accordion;
