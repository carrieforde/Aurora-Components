import Utilities from '../../utilities';

class Menu {
  constructor(selector) {
    this.selector = selector;
    this.instance = document.querySelector(selector);
    this.keyCodes = new Utilities().keyCodes;
    this.items = Array.from(this.instance.children);
    this.firstItem = this.items[0];
    this.lastItem = this.items[this.items.length - 1];
    this.firstChars = [];

    this.init();
    this.instance.addEventListener(
      'keydown',
      this.handleKeydownEvent.bind(this)
    );
  }

  /**
   * Sets up the menubar.
   *
   * @memberof Menu
   */
  init() {
    this.items.forEach((item, index) => {
      if (index > 0) {
        item.firstElementChild.setAttribute('tabindex', '-1');
      }

      if (item.children.length >= 2) {
        item.classList.add('menu__item--has-children');
      }

      this.firstChars.push(item.textContent.trim()[0]);
    });
  }

  /**
   * Handles keydown events.
   *
   * @param {object} event The event object.
   * @returns {boolean} Whether an action was carried out.
   * @memberof Menu
   */
  handleKeydownEvent(event) {
    const target = event.target,
      listItem = target.parentElement,
      key = event.key,
      code = event.keyCode;

    let newTarget;

    switch (code) {
      case this.keyCodes.RIGHT:
        if (listItem === this.lastItem) {
          newTarget = this.firstItem.firstElementChild;
        } else {
          newTarget = listItem.nextElementSibling.firstElementChild;
        }
        break;

      case this.keyCodes.LEFT:
        if (target.parentElement === this.firstItem) {
          newTarget = this.lastItem.firstElementChild;
        } else {
          newTarget = listItem.previousElementSibling.firstElementChild;
        }
        break;

      case this.keyCodes.HOME:
        event.preventDefault();
        newTarget = this.firstItem.firstElementChild;
        break;

      case this.keyCodes.END:
        event.preventDefault();
        newTarget = this.lastItem.firstElementChild;
        break;

      default:
        this.setByFirstChar(target, key);
        return false;
    }

    this.updateTargets(target, newTarget);
    return true;
  }

  /**
   * Updates the menubar targets.
   *
   * @param {string} oldTarget The old menu item target.
   * @param {string} newTarget The new menu item target.
   * @memberof Menu
   */
  updateTargets(oldTarget, newTarget) {
    const listItem = oldTarget.parentElement;

    oldTarget.setAttribute('tabindex', '-1');
    newTarget.setAttribute('tabindex', '0');
    newTarget.focus();

    if (listItem.classList.contains('menu__item--has-children')) {
      oldTarget.setAttribute('aria-expanded', 'false');
    }
    if (
      newTarget.parentElement.classList.contains('menu__item--has-children')
    ) {
      newTarget.setAttribute('aria-expanded', 'true');
    }
  }

  /**
   * Sets new menu target based on first character of menu item name.
   *
   * @param {string} oldTarget The previous menu item.
   * @param {string} key The key character pressed.
   * @returns {boolean} Whether the key matches the first char of a menu item.
   * @memberof Menu
   */
  setByFirstChar(oldTarget, key) {
    let index, newTarget;

    if (this.firstChars.indexOf(key.toUpperCase()) === -1) {
      return false;
    } else {
      index = this.firstChars.indexOf(key.toUpperCase());
    }

    newTarget = this.items[index];

    this.updateTargets(oldTarget, newTarget);

    return true;
  }
}

export default Menu;
