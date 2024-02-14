// Resources:
// https://keycode.info/
// Lookup for the key code for the key you want to use.

document.querySelectorAll('.animated-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault()
    btn.classList.toggle('spin')
  })
  btn.addEventListener('keydown', e => {
    if (e.key === 's') { // The 's' is for 'spin'
      e.preventDefault()
      btn.click()
    }
  })
})
