export class Toggle {
  constructor (options) {
    this.config = Object.assign({
      attr: 'data-toggle',
      toggleContainer: '.toggle',
      toggleClass: 'active',
      onToggle: (btn, target, isToggled) => {},
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
    const { attr, toggleContainer, toggleClass, onToggle } = this.config
    const isToggleBtn = ev.target.matches(`[${attr}], [${attr}] *`)
    
    if (!isToggleBtn) 
      return    

    ev.preventDefault()

    const btn = ev.target.closest(`[${attr}]`)
    const toggleSelector = btn.getAttribute(attr)
    const toggleContainerEl = btn.closest(toggleContainer)
    const target = toggleContainerEl.querySelector(toggleSelector)
    target.classList.toggle(toggleClass)

    const isToggled = target.classList.contains(toggleClass)
    btn.setAttribute('aria-expanded', isToggled)
    onToggle(btn, target, isToggled)
  }
}