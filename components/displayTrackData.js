
let displayTrack = (data, main) => {

    const divAfterSaved = document.createElement('div');
    divAfterSaved.id = "divAfterSaved"
    divAfterSaved.innerText = "Create your wishlist from across 12,000 stores in one place. We'll send you an alert when your favorite products go on sale or come back in stock."

    const appendWishItems = document.createElement('div');
    appendWishItems.id = "appendWishItems"

    const itemBox = document.createElement('div');
    itemBox.setAttribute("class", "itemBox")

    const img = document.createElement('img');
    img.setAttribute("class", "img")
    img.src = data.image_url

    const removeButton = document.createElement('button');
    removeButton.innerText = "X"
    removeButton.setAttribute("class", "removeButton")
    removeButton.addEventListener("click", removeItem)
    function removeItem() {
        data = ""
        window.localStorage.removeItem("trackDeals")
        window.location.reload()
    }

    const brand = document.createElement('h3');
    brand.setAttribute("class", "brand")

    brand.innerText = data.designer_name;

    const detail = document.createElement('p');
    detail.setAttribute("class", "detail")
    detail.innerText = data.short_description

    const priceDiv = document.createElement('div');
    priceDiv.setAttribute("class", "priceDiv")

    const oldPrice = document.createElement('p');
    oldPrice.setAttribute("class", "oldPrice")
    oldPrice.innerText = data.full_price_with_currency_symbol

    const price = document.createElement('p');
    price.setAttribute("class", "price")
    price.innerText = data.sale_price_with_currency_symbol

    const off = document.createElement('p');
    off.setAttribute("class", "off")
    off.innerHTML = data.discount_info

    priceDiv.append(oldPrice, price, off)

    const retailerDiv = document.createElement('div');
    retailerDiv.setAttribute("class", "retailerDiv")

    const linkIcon = document.createElement('p');
    linkIcon.innerHTML = `<i class="fa-solid fa-link"></i>`

    const retailerName = document.createElement('p');
    retailerName.setAttribute("class", "retailerName")
    retailerName.innerText = data.retailer_name

    retailerDiv.append(linkIcon, retailerName)

    itemBox.append(img, removeButton, brand, detail, priceDiv, retailerDiv)

    appendWishItems.append(itemBox)

    main.append(divAfterSaved, appendWishItems)

}

export default displayTrack