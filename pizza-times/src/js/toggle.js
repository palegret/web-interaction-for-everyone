export class Toggle {
  constructor (options) {
    this.config = Object.assign({
    }, options)

    this.init()

    return this
  }

  init () {
    document.addEventListener('click', this.toggle.bind(this))
  }

  /**
   * Toggle a target element
   * @param {MouseEvent} ev - Click event
   */
  toggle (ev) {
  }
}