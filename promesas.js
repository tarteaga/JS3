let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("OK");
        // o
        //reject(new Error("Ocurrió un error"));
    }, 2000);
});

const loader = document.getElementById('loader')

loader.style.display = 'none';
/*
promesa
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.log(err.message))
    .finally(function () {
        loader.style.display = 'none';
    })
*/

function resolveAfter2Seconds() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolved');

            //reject(new Error("Error fatal"));
        }, 2000);
    });
}

async function asyncCall() {
    try {
        console.log('calling');
        const result = await resolveAfter2Seconds();
        console.log(result);
        const result2 = await resolveAfter2Seconds();
        console.log(result2);
    } catch (error) {
        console.log(error);
    }
    // expected output: "resolved"
}

asyncCall();
