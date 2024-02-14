import {Switch} from './switch'

// Resources:
// https://keycode.info/
// Lookup for the key code for the key you want to use.

setTimeout(() => {
  document.getElementById('asyncBtnContainer').innerHTML += `
    <button id="pizzaBtn" class="warning animated-btn" data-switch="zoom">
      <span class="target">🍕</span>
    </button>
  `
}, 3000)

const switchBtns = new Switch()

// Global click listener -- moved to Switch class
/*
document.addEventListener('click', ev => {
  const isAnimatedBtn = ev.target.matches('.animated-btn, .animated-btn *')
  
  if (!isAnimatedBtn) 
  return

ev.preventDefault()

const btn = ev.target.closest('.animated-btn')
btn.classList.toggle('spin')
})

// Global keydown listener -- moved to Switch class
document.addEventListener('keydown', ev => {
  const isAnimatedBtn = ev.target.matches('.animated-btn')
  
  if (!isAnimatedBtn) 
    return

  if (ev.key === 's') { // The 's' is for 'spin'
    ev.preventDefault()
    ev.target.click()
  }
})
*/
