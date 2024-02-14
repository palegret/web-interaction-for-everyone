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

const jiggleBtns = new Switch({
  attr: 'data-jiggle',
  onSwitch: (btn, isSwitched) => {
    btn.querySelector('.target').textContent = isSwitched ? '😬' : '🌯'
    const message = isSwitched ? `Commence t' jigglin'!` : `Jigglin's done.`
    console.log(message)
  }
})
