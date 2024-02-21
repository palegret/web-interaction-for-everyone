import { Toggle } from './toggle'

// Toggles
const toggles = new Toggle()

// Tabs
const tabs = new Toggle({
  attr: 'data-tab',
  toggleContainer: '.tabs',
  single: true,
  singleContainer: '.tabs',
  expandOnly: true,
})
