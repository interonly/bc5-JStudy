const addOne = e => {
    const numberElement = document.getElementsByTagName("h1")[0]
    numberElement.textContent = Number(numberElement.textContent) + 1
}

const btn = document.getElementsByTagName("button")[0]
btn.addEventListener("click", addOne)
