const createCookieKeyInput = document.querySelector('#create_cookie_key')
const createCookieValueInput = document.querySelector('#create_cookie_value')

const readCookieKeyInput = document.querySelector('#read_cookie_key')
const readCookieValueInput = document.querySelector('#read_cookie_value')

const createBtn = document.querySelector('.create-block button')
const readBtn = document.querySelector('.read-block button')

const handonModelInput = document.querySelector('#handon_model')
const handJsObjectInput = document.querySelector('#handon_js_object')
const handJsJsonInput = document.querySelector('#handon_js_json')

const cardRenderScope = document.querySelector('.cards-block .row')

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

handonModelInput.value =
`[{
  name: '商品名稱',
  imgUrl: '商品連結',
  content: '商品內文'
}]`

// 請複製以下片段
/*
[{
  name: '商品名稱',
  imgUrl: 'https://picsum.photos/300/200/?random=10',
  content: '商品內文'
},{
  name: '商品名稱',
  imgUrl: 'https://picsum.photos/300/200/?random=10',
  content: '商品內文'
},{
  name: '商品名稱',
  imgUrl: 'https://picsum.photos/300/200/?random=10',
  content: '商品內文'
},{
  name: '商品名稱',
  imgUrl: 'https://picsum.photos/300/200/?random=10',
  content: '商品內文'
},{
  name: '商品名稱',
  imgUrl: 'https://picsum.photos/300/200/?random=10',
  content: '商品內文'
}]
*/

function covertStringToObject () {
  return eval(handJsObjectInput.value)
}

handJsObjectInput.addEventListener('input', () => {
  handJsJsonInput.value = JSON.stringify(covertStringToObject(), null, 4)

  Cookies.set('cardList', JSON.stringify(JSON.stringify(covertStringToObject())))
  
  cardRenderScope.innerHTML = ''
  
  covertStringToObject().forEach(el => {
    cardRenderScope.innerHTML +=
    `
    <div class="col-12 col-md-3">
      <div class="card">
        <img alt="" src="${el.imgUrl}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${el.name}</h5>
          <p class="card-text">${el.content}</p>
        </div>
      </div>
    </div>
    `
  })

})