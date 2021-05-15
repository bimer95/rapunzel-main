export function priceJobPost() {
    const $listJobPost = document.querySelectorAll("#jobPost")
    const $jobPostPrice = document.querySelector("#jobPostPrice")
    console.log($listJobPost)
    let sum = 0.0
    $listJobPost.forEach(value => {
        if (value.checked === true){
            const currency = value.dataset.currency
            const price = value.dataset.price
            sum += parseFloat(price)
        }
    })
    const currencyR = '$'
    $jobPostPrice.innerHTML = 'Post a Job - ' + currencyR + sum
}