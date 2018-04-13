/**
 * Carousel
 *
 * {@link} https://css-tricks.com/simple-swipe-with-vanilla-javascript/
 * @class Carousel
 */
class Carousel {
  constructor() {
    this.instance = document.querySelector('.carousel');
    this.imageCount = this.instance.children.length;
    this.xCoord = null;
    this.i = 0;
    this.locked = false;
    this.windowWidth;

    this.size();

    this.instance.style.setProperty('--n', this.imageCount);

    this.instance.addEventListener('mousedown', this.lock.bind(this));
    this.instance.addEventListener('touchstart', this.lock.bind(this));

    this.instance.addEventListener('mouseup', this.move.bind(this));
    this.instance.addEventListener('touchend', this.move.bind(this));

    this.instance.addEventListener('mousemove', this.drag.bind(this));
    this.instance.addEventListener('touchmove', this.drag.bind(this));

    this.instance.addEventListener('touchmove', event =>
      event.preventDefault()
    );

    window.addEventListener('resize', this.size);
  }

  /**
   * Updates the xCoord and toggles the smooth class.
   *
   * @param {object} event The event object.
   * @memberof Carousel
   */
  lock(event) {
    this.xCoord = this.unify(event).clientX;

    this.instance.classList.toggle('smooth', !(this.locked = true));
  }

  /**
   * Updates CSS variables to advance the carousel slide.
   *
   * @param {object} event The event object.
   * @memberof Carousel
   */
  move(event) {
    if (this.locked) {
      let dx = this.unify(event).clientX - this.xCoord,
        s = Math.sign(dx),
        f = +(s * dx / this.windowWidth).toFixed(2);

      if (
        (this.i > 0 || s < 0) &&
        (this.i < this.imageCount - 1 || s > 0) &&
        f > 0.2
      ) {
        this.instance.style.setProperty('--i', (this.i -= s));
        f = 1 - f;
      }
      this.instance.style.setProperty('--tx', '0px');
      this.instance.style.setProperty('--f', f);
      this.instance.classList.toggle('smooth', !(this.locked = false));
      this.xCoord = null;
    }
  }

  /**
   * Unifies the touch and mouse events
   *
   * @param {object} event The event object.
   * @returns
   * @memberof Carousel
   */
  unify(event) {
    return event.changedTouches ? event.changedTouches[0] : event;
  }

  /**
   * Prevents drag from activating browser forward / back.
   *
   * @param {object} event The event object.
   * @memberof Carousel
   */
  drag(event) {
    event.preventDefault();

    if (this.locked) {
      this.instance.style.setProperty(
        '--tx',
        `${Math.round(this.unify(event).clientX - this.xCoord)}px`
      );
    }
  }

  /**
   * Updates the window width.
   *
   * @memberof Carousel
   */
  size() {
    this.windowWidth = window.innerWidth;
  }
}

export default Carousel;
