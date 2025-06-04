const { document, dom } = require('./helpers')
//const { expect } = require('chai')
require ('../index.js') 

// Sample test suite for JavaScript event handling
describe('Handling Events with JavaScript', () => {
  let changeColorButton
  let resetColorButton
  let textInput
  let keyPressDisplay
  let textInputDisplay

  beforeEach(() => {
    changeColorButton = document.getElementById('changeColorButton')
    resetColorButton = document.getElementById('resetColorButton')
    textInput = document.getElementById('textInput')
    keyPressDisplay = document.getElementById('keyPressDisplay')
    textInputDisplay = document.getElementById('textInputDisplay')
  })

  it('should select the changeColorButton element', () => {
    expect(changeColorButton).not.toBeNull()
  })

  it('should select the resetColorButton element', () => {
    expect(resetColorButton).not.toBeNull()
  })

  it('should select the textInput element', () => {
    expect(textInput).not.toBeNull()
  })

  it('should display the key pressed by the user', () => {
    // Simulate key press
    const event = new dom.window.KeyboardEvent('keydown', { key: 'A' })
    document.dispatchEvent(event)

    // Check if the keyPressDisplay has been updated
    expect(keyPressDisplay.textContent).toContain('A')
  })

  it('should display user input in real-time', () => {
    // Simulate user input
    textInput.value = 'Hello'
    const event = new dom.window.Event('input')
    textInput.dispatchEvent(event)

    // Check if the textInputDisplay has been updated
    expect(textInputDisplay.textContent).toContain('Hello')
  })
})
