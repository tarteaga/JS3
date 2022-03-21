const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const loader = document.getElementsByClassName("lds-circle")[0]

async function onRequestAwait() {
    try {
        //https://api.coingecko.com/api/v3/coins/bitcoin
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        const usersJson = await response.json()

        loader.style.display = "none"
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        printData(usersJson)
    } catch (error) {

        console.log(error)
    }
}

function printData(crypto) {
    const pName = document.getElementById("name")
    const price = document.getElementById("price")
    const image = document.getElementById("image")
    const priceChange = document.getElementById("priceChange")

    pName.textContent = crypto.name
    image.src = crypto.image.large
    price.textContent = `${crypto.market_data.current_price.eur}€`

    //
    if (crypto.price_change_24h > 0) {
        console.log("SUBIDO!")
        priceChange.src = "https://upload.wikimedia.org/wikipedia/commons/c/c0/Eo_circle_green_arrow-up.svg"
    } else if (crypto.price_change_24h == 0) {
        console.log("Se mantiene")
    } else {
        console.log("BAJADO!")
        priceChange.src = "https://upload.wikimedia.org/wikipedia/commons/b/b7/Eo_circle_red_arrow-down.svg"
    }


}

onRequestAwait()