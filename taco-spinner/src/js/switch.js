export class Switch {
  constructor(options) {
    // Configure component
    this.config = Object.assign({
      attr: 'data-switch',
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
    const { attr } = this.config  
    const isAnimatedBtn = ev.target.matches(`[${attr}], [${attr}] *`)

    if (!isAnimatedBtn) 
      return

    ev.preventDefault()

    const btn = ev.target.closest(`[${attr}]`)
    btn.classList.toggle(btn.getAttribute(attr))
  }

  /**
   * Flip the switch on keydown.
   * @param {KeyboardEvent} ev
   * @return {void}
   */
  key(ev) {
    const { attr } = this.config  
    const isAnimatedBtn = ev.target.matches(`[${attr}]`)

    if (!isAnimatedBtn) 
      return
  
    if (ev.key === 's') { // The 's' is for 'spin'
      ev.preventDefault()
      ev.target.click()
    }
  }
}
