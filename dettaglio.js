const addressBarContent = new URLSearchParams(location.search)
console.log(addressBarContent)

const artist = addressBarContent.get('artist')
console.log(artist)

const filtro = new URLSearchParams(location.search)
console.log(filtro)

const filtroapp = addressBarContent.get('filtro')
console.log(filtroapp)

const request = new Headers({
  Authorization: 'hn1VRm1yOOqhsn6GxT65rM5UIilGwFndv2hTlTsSqzADbDa8wDGhzW9C',
})

let requestopt = {
  method: 'GET',
  headers: request,
}
