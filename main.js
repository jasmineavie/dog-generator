const BREEDS_URL = ("https://dog.ceo/api/breeds/list/all")
const select = document.querySelector(".breeds")


fetch(BREEDS_URL)
.then(response => {
   return response.json();
}

)
.then(data => {

    const breedsObject = data.message;
    const breedsKeys = Object.keys(breedsObject)



    for(let i = 0; i < breedsKeys.length; i++) {
     const option = document.createElement("option")
     option.value = breedsKeys[i]
     option.innerText = breedsKeys[i]
    select.appendChild(option)


    }
})

select.addEventListener("change", )


/*.then(data => {
    const breedKeys = Object.keys(data.message)
}) */

/* .catch(err => {
    console.log(`error is ${err}`)
} ) */
