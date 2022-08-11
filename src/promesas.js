const promesa = new Promise((resolve, reject) => {
    resolve('Todo correcto')
})

const cows = 15;

const countCows = new Promise((resolve, reject) => {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farms`)
    }else {
        reject("without cows enoght")
    }
});

countCows.then((response) => {
    console.log(response)
})
    .catch((error) => {
        console.log(error)
    })
    .finally(() => console.log('finally'))

