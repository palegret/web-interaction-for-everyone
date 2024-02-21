export class Toggle {
  constructor (options) {
    this.config = Object.assign({
      attr: 'data-toggle',
      toggleContainer: '.toggle',
      toggleClass: 'active',
      single: false,
      singleContainer: undefined,
      expandOnly: false,
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
    const { 
      attr, 
      toggleContainer, 
      toggleClass, 
      single, 
      singleContainer,
      expandOnly, 
      onToggle 
    } = this.config
    
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

    if (expandOnly && !isToggled && !this.collapsingSingleSiblings) 
      return

    // Collapse siblings if possible
    if (isToggled && single) {
      // Get single container
      let singleContainerEl = singleContainer ? btn.closest(singleContainer) : document

      // Collapse siblings within single container
      const singleSiblings = singleContainerEl.querySelectorAll(`[${attr}][aria-expanded="true"]`)
      
      singleSiblings.forEach(activeBtn => {
        this.collapsingSingleSiblings = true
        activeBtn.click()
        this.collapsingSingleSiblings = false
      })
    }

    btn.setAttribute('aria-expanded', isToggled)
    onToggle(btn, target, isToggled)
  }
}
