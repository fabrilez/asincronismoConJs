import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'

async function* fetchData(urlApi) {
   const response = await fetch(urlApi);
    yield await response.json();
}

fetchData(`${API}/products`).next().then(({ value, done }) => {
    const idProduct = value[0].id;
    console.log(value)
    console.log(idProduct)
    
    fetchData(`${API}/products/${idProduct}`).next().then(({ value, done }) => {
        const category = value.category.id;
        console.log(value.title)

        fetchData(`${API}/categories/${category}`).next().then( ({ value, done }) => {
            console.log(value.name)
        })
    })
})