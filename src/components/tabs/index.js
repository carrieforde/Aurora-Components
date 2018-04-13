class Tabs {
  constructor() {
    this.items = Array.from(document.querySelectorAll('.tabs__button'));
    this.firstItem = this.items[0];
    this.lastItem = this.items[this.items.length - 1];
    this.keyCodes = Object.freeze({
      END: 35,
      HOME: 36,
      LEFT: 37,
      RIGHT: 39
    });

    this.init();
  }

  /**
   * Set the active tab and panel, add the event listeners.
   *
   * @memberof Tabs
   */
  init() {
    const panelID = this.firstItem.getAttribute('aria-controls');

    let panel = document.getElementById(panelID);

    this.firstItem.setAttribute('aria-selected', 'true');
    this.firstItem.removeAttribute('tabindex');
    this.firstItem.classList.add('tabs__button--active');
    panel.removeAttribute('hidden');
    panel.classList.add('tabs__panel--active');

    document.addEventListener('click', this.handleClickEvents.bind(this));
    document.addEventListener('keyup', this.handleKeyupEvents.bind(this));
  }

  /**
   * Gets current tab and target tab info and passes info onto action methods.
   *
   * @param {string} target The tab to be activated.
   * @memberof Tabs
   */
  showTabContent(target) {
    const component = target.closest('.tabs'),
      panelID = target.getAttribute('aria-controls'),
      currentTab = component.querySelector('.tabs__button--active'),
      currentContent = component.querySelector('.tabs__panel--active'),
      newContent = document.getElementById(panelID);

    this.deactivateTab(currentTab, currentContent);

    this.activateTab(target, newContent);
  }

  /**
   * Deactivates an active tab and panel.
   *
   * @param {string} tab The tab to deactivate.
   * @param {string} panel The panel to deactivate.
   * @memberof Tabs
   */
  deactivateTab(tab, panel) {
    tab.setAttribute('aria-selected', 'false');
    tab.classList.remove('tabs__button--active');
    panel.classList.remove('tabs__panel--active');
    panel.setAttribute('hidden', 'true');
  }

  /**
   * Activates an inactive tab and panel.
   *
   * @param {string} tab The tab to activate.
   * @param {string} panel The pane to activate.
   * @memberof Tabs
   */
  activateTab(tab, panel) {
    tab.setAttribute('aria-selected', 'true');
    tab.classList.add('tabs__button--active');
    panel.classList.add('tabs__panel--active');
    panel.removeAttribute('hidden');
  }

  /**
   * Handles the click events.
   *
   * @param {object} event The event object.
   * @return {boolean} Whether a subsequent action was carried out.
   * @memberof Tabs
   */
  handleClickEvents(event) {
    const target = event.target;

    if (target && target.classList.contains('tabs__button')) {
      this.showTabContent(target);
      return true;
    }

    return false;
  }

  /**
   * Navigates between tabs using the keyboard.
   *
   * @param {any} event The event object.
   * @returns {boolean} Whether a subsequent action was carried out.
   * @memberof Tabs
   */
  handleKeyupEvents(event) {
    const key = event.keyCode,
      target = event.target;

    let newTarget;

    switch (key) {
      case this.keyCodes.RIGHT:
        if (target === this.lastItem) {
          newTarget = this.firstItem;
        } else {
          newTarget = target.nextElementSibling;
        }

        newTarget.focus();
        this.showTabContent(newTarget);
        return true;

      case this.keyCodes.LEFT:
        if (target === this.firstItem) {
          newTarget = this.lastItem;
        } else {
          newTarget = target.previousElementSibling;
        }

        newTarget.focus();
        this.showTabContent(newTarget);
        return true;

      case this.keyCodes.HOME:
        newTarget = this.firstItem;
        newTarget.focus();
        this.showTabContent(newTarget);
        return true;

      case this.keyCodes.END:
        newTarget = this.lastItem;
        newTarget.focus();
        this.showTabContent(newTarget);
        return true;

      default:
        return false;
    }
  }
}

export default Tabs;
