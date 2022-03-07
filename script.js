const createCookieKeyInput = document.querySelector('#create_cookie_key')
const createCookieValueInput = document.querySelector('#create_cookie_value')

const readCookieKeyInput = document.querySelector('#read_cookie_key')
const readCookieValueInput = document.querySelector('#read_cookie_value')

const createBtn = document.querySelector('.create-block button')
const readBtn = document.querySelector('.read-block button')

function createCookie () {
  const key = createCookieKeyInput.value
  const value = createCookieValueInput.value

  Cookies.set(key, value)
}

function readCookie () {
  const key = readCookieKeyInput.value

  const value = Cookies.get(key)

  readCookieValueInput.value = value
}

createBtn.addEventListener('click', () => { createCookie() })
readBtn.addEventListener('click', () => { readCookie() })