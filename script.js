const search = function () {
  const cercato = document.getElementsByTagName('input')[0]
  return cercato.value
}
myQuery = ''
document.getElementById('filtra').addEventListener('click', function () {
  myQuery = search()
  console.log(myQuery)
  fetch('https://api.pexels.com/v1/search?query=' + myQuery, requestopt)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
    })
    .then((risultato) => {
      console.log(risultato)
      //

      document
        .getElementById('prima-img')
        .addEventListener('click', function () {
          let id = getRandomInt(risultato.photos.length)
          console.log(risultato.photos[id].photographer_id)
          const img = document.createElement('div')
          img.classList.add('col')
          img.innerHTML = `<div class="card"><img src="${risultato.photos[id].src.landscape}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">filtro ${myQuery}</h5>
        <h5 class="card-title">${risultato.photos[id].photographer}</h5>
        <p class="card-text">
          ${risultato.photos[id].alt}
        </p>
        <a onclick="hide(this)" id="seconda-img" class="btn btn-primary">nascondi</a>
        <a  id="det" href="dettaglio.html?artist=${risultato.photos[id].photographer_id}?filtro=${myQuery}" class="btn btn-primary">dettaglio</a>
      </div></div> `
          const card = document.getElementsByClassName('row')[0]
          card.appendChild(img)
        })
    })
    .catch()
})

myQuery2 = 'green'

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function hide(button) {
  button.closest('.col').style.display = 'none'
}

const request = new Headers({
  Authorization: 'hn1VRm1yOOqhsn6GxT65rM5UIilGwFndv2hTlTsSqzADbDa8wDGhzW9C',
})

let requestopt = {
  method: 'GET',
  headers: request,
}

fetch('https://api.pexels.com/v1/search?query=' + myQuery2, requestopt)
  .then((response) => {
    if (response.ok) {
      return response.json()
    }
  })
  .then((risultato) => {
    console.log(risultato)
    console.log(risultato.photos[0].src.landscape)
    document
      .getElementById('seconda-img')
      .addEventListener('click', function () {
        let id = getRandomInt(14)
        const img = document.createElement('div')
        img.classList.add('col')
        img.innerHTML = `<div class="card"><img src="${risultato.photos[id].src.landscape}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a onclick="hide(this)" id="seconda-img" class="btn btn-primary">nascondi</a>
      </div></div> `
        const card = document.getElementsByClassName('row')[1]
        card.appendChild(img)
      })
  })
  .catch()
