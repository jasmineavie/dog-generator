const BREEDS_URL = ("https://dog.ceo/api/breeds/list/all")


fetch(BREEDS_URL)
.then(response => {
   return response.json()
}

)
.then(data => {
    console.log(data.message)
    const breedsObject = data.message
    const breedsKeys = Object.keys(breedsObject)
    console.log(breedsKeys)
})

.catch(err => {
    console.log(`error is ${err}`)
} )
