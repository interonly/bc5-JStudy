//alert("Hello JS!")
console.log("Hello console")

var a = 7
let b = "hi"
const c = true
let d = null
let e = undefined
let names = ["Beknazar", "Emir", "Amantur"]
let profile = {
    "name": "Aziret",
    age: 24,
    code: "python",

}

console.log(a, b, c, d, e, NaN)
console.log(names)
console.log(names[1])
console.log(profile["name"], profile["age"], profile.code)

if (a > 5) {
    console.log("a more than five")
    console.log("end")
}

for (let i=0; i < names.length; i++) {
    console.log(names[i])
}

for (e in names) {
    console.log(e)
}

function sum_2(a, b) {
    let c = a + b
    return c
}

const mult_2 = (a, b) => a * b

console.log(sum_2(2, 2))
console.log(mult_2(2, 3))
