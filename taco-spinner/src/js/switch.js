export class Switch {
  constructor(options) {
    // Configure component
    this.config = Object.assign({
      attr: 'data-switch',
      onSwitch: (btn, isSwitched) => {},
    }, options)

    // Initialize component
    this.init()

    return this
  }

  init() {
    document.addEventListener('click', this.switch.bind(this))
    document.addEventListener('keydown', this.key.bind(this))
  }

  /**
   * Flip the switch on click.
   * @param {MouseEvent} ev
   * @return {void}
   */
  switch(ev) {
    const { attr, onSwitch } = this.config
    const isAnimatedBtn = ev.target.matches(`[${attr}], [${attr}] *`)

    if (!isAnimatedBtn)
      return

    ev.preventDefault()

    const btn = ev.target.closest(`[${attr}]`)
    const switchClass = btn.getAttribute(attr)
    btn.classList.toggle(switchClass)

    const isSwitched = btn.classList.contains(switchClass)
    onSwitch(btn, isSwitched)
  }

  /**
   * Flip the switch on keydown.
   * @param {KeyboardEvent} ev
   * @return {void}
   */
  key(ev) {
    const { attr, onSwitch } = this.config
    const isAnimatedBtn = ev.target.matches(`[${attr}]`)

    if (!isAnimatedBtn)
      return

    if (ev.key === 's') { // The 's' is for 'switch'
      ev.preventDefault()
      ev.target.click()
    }
  }
}
