// shopnow button
// https://www.lyst.com/track/lead/${product_card.link_id


// let url =  `https://www.lyst.com/api/rothko/modules/product_feed/?url=https://www.lyst.com/shop/clothing/?page=2`

// let getData = async () =>{
//     let res = await fetch(url)
//     let data = await res.json()
//     console.log(data)
// }

// getData()

let data = {
    "id": 807279979,
    "uid": "AZUPAZR",
    "link_id": 807301446,
    "has_variant": false,
    "url": "/clothing/kenzo-tiger-classic-sweatshirt-84/",
    "slug": "kenzo-tiger-classic-sweatshirt-84",
    "gender": "F",
    "short_description": "Tiger Classic Sweatshirt - Black",
    "lead_url": "/track/lead/807301446/",
    "full_price_with_currency_symbol": "$264",
    "full_price_machine_readable_integer_string": "264",
    "sale_price_with_currency_symbol": "$158",
    "sale_price_machine_readable_integer_string": "158",
    "currency": "USD",
    "designer_name": "KENZO",
    "designer_slug": "kenzo",
    "retailer_name": "Coggles",
    "image_url": "https://cdna.lystit.com/200/250/tr/photos/coggles/cef6990e/kenzo-Black-Tiger-Classic-Sweatshirt.jpeg",
    "image_alt_text": "KENZO Tiger Classic Sweatshirt - Black",
    "icon_enabled": false,
    "is_affiliate": true,
    "affiliate_promo_url": null,
    "discount_info": "(40% off)",
    "sale_discount": 40,
    "in_stock": true,
    "overlay_enabled": true,
    "lead_enabled": true,
    "context_type": "feed-product",
    "show_offer_meta": true,
    "free_shipping": false,
    "on_promotion": false,
    "show_retailer_as_affiliate": true,
    "description": null,
    "exclusive_badge": null,
    "free_shipping_badge": null,
    "sale_badge": null,
    "use_lazy_images": true,
    "excluded_from_app": false,
    "app_deeplink_path": "/clothing/kenzo-tiger-classic-sweatshirt-84/",
    "koddi_tracking_url": null
};

localStorage.setItem("AllData", JSON.stringify(data))

let product_card = JSON.parse(localStorage.getItem("AllData"))
// console.log(product_card)


import display from "../components/displayDetails.js"
const ProductImages = document.querySelector('#ProductImages');
const productMainImage = document.querySelector('#productMainImage');
const productDetails = document.querySelector('#productDetails');

display(product_card, ProductImages, productMainImage, productDetails)



let fake = [
    {
        "id": 766948837,
        "uid": "YSVXFAS",
        "link_id": 766948838,
        "has_variant": false,
        "url": "/clothing/kenzo-tiger-embroidered-sweatshirt-blue-1/",
        "slug": "kenzo-tiger-embroidered-sweatshirt-blue-1",
        "gender": "F",
        "short_description": "Tiger Embroidered Sweatshirt Blue - Blue",
        "lead_url": "/track/lead/766948838/",
        "full_price_with_currency_symbol": "$291",
        "full_price_machine_readable_integer_string": "291",
        "sale_price_with_currency_symbol": "$144",
        "sale_price_machine_readable_integer_string": "144",
        "currency": "USD",
        "designer_name": "KENZO",
        "designer_slug": "kenzo",
        "retailer_name": "Tessuti UK",
        "image_url": "https://cdna.lystit.com/200/250/tr/photos/tessuti/4f7870d4/kenzo-Navy-Tiger-Embroidered-Sweatshirt-Blue.jpeg",
        "image_alt_text": "KENZO Tiger Embroidered Sweatshirt Blue",
        "icon_enabled": false,
        "is_affiliate": true,
        "affiliate_promo_url": null,
        "discount_info": "(50% off)",
        "sale_discount": 50,
        "in_stock": true,
        "overlay_enabled": true,
        "lead_enabled": false,
        "context_type": "feed-product",
        "show_offer_meta": true,
        "free_shipping": false,
        "on_promotion": false,
        "show_retailer_as_affiliate": true,
        "description": null,
        "exclusive_badge": null,
        "free_shipping_badge": null,
        "sale_badge": null,
        "use_lazy_images": false,
        "excluded_from_app": false,
        "app_deeplink_path": "/clothing/kenzo-tiger-embroidered-sweatshirt-blue-1/",
        "koddi_tracking_url": null
    },
    {
        "id": 786524695,
        "uid": "YGGWXQT",
        "link_id": 805213707,
        "has_variant": false,
        "url": "/clothing/kenzo-polyester-down-jacket-6/",
        "slug": "kenzo-polyester-down-jacket-6",
        "gender": "F",
        "short_description": "Polyester Down Jacket - Black",
        "lead_url": "/track/lead/805213707/",
        "full_price_with_currency_symbol": "$604.53",
        "full_price_machine_readable_integer_string": "605",
        "sale_price_with_currency_symbol": "$372",
        "sale_price_machine_readable_integer_string": "372",
        "currency": "USD",
        "designer_name": "KENZO",
        "designer_slug": "kenzo",
        "retailer_name": "Cettire",
        "image_url": "https://cdna.lystit.com/200/250/tr/photos/cettire/5adac132/kenzo-Black-Logo-Printed-Crewneck-T-shirt.jpeg",
        "image_alt_text": "KENZO Polyester Down Jacket - Black",
        "icon_enabled": false,
        "is_affiliate": true,
        "affiliate_promo_url": null,
        "discount_info": "(35% off)",
        "sale_discount": 35,
        "in_stock": true,
        "overlay_enabled": true,
        "lead_enabled": false,
        "context_type": "feed-product",
        "show_offer_meta": true,
        "free_shipping": false,
        "on_promotion": false,
        "show_retailer_as_affiliate": true,
        "description": null,
        "exclusive_badge": null,
        "free_shipping_badge": null,
        "sale_badge": null,
        "use_lazy_images": false,
        "excluded_from_app": false,
        "app_deeplink_path": "/clothing/kenzo-polyester-down-jacket-6/",
        "koddi_tracking_url": null
    },
    {
        "id": 835470961,
        "uid": "WFYZRDT",
        "link_id": 834893087,
        "has_variant": false,
        "url": "/clothing/kenzo-tiger-print-t-shirt-387/",
        "slug": "kenzo-tiger-print-t-shirt-387",
        "gender": "F",
        "short_description": "Tiger Print T-shirt - Blue",
        "lead_url": "/track/lead/834893087/",
        "full_price_with_currency_symbol": "$193.47",
        "full_price_machine_readable_integer_string": "193",
        "sale_price_with_currency_symbol": "$131",
        "sale_price_machine_readable_integer_string": "131",
        "currency": "USD",
        "designer_name": "KENZO",
        "designer_slug": "kenzo",
        "retailer_name": "Cettire",
        "image_url": "https://cdna.lystit.com/200/250/tr/photos/cettire/c455d7ef/kenzo-Blue-Tiger-Printed-Crewneck-T-shirt.jpeg",
        "image_alt_text": "KENZO Tiger Print T-shirt - Blue",
        "icon_enabled": false,
        "is_affiliate": true,
        "affiliate_promo_url": null,
        "discount_info": "(30% off)",
        "sale_discount": 30,
        "in_stock": true,
        "overlay_enabled": true,
        "lead_enabled": false,
        "context_type": "feed-product",
        "show_offer_meta": true,
        "free_shipping": false,
        "on_promotion": false,
        "show_retailer_as_affiliate": true,
        "description": null,
        "exclusive_badge": null,
        "free_shipping_badge": null,
        "sale_badge": null,
        "use_lazy_images": true,
        "excluded_from_app": false,
        "app_deeplink_path": "/clothing/kenzo-tiger-print-t-shirt-387/",
        "koddi_tracking_url": null
    }
];

function dis(data) {
    const relatedProduct = document.querySelector('#relatedProduct');
    data.forEach(function (elem) {
        const img = document.createElement('img');
        img.src = elem.image_url

        relatedProduct.append(img)
    })
}

dis(fake)
const wishLists = document.querySelector('#wishList');
wishLists.addEventListener("click",wishList)
function wishList(){
    window.location.href = "./track.html"
}