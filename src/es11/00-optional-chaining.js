const users = {
    gndx: {
        country: "MX"
    },
    ana: {
        country: "CO"
    }
}
console.log(users?.bebeloper?.country);//no bloquea el codg¡igo solo nos da, undefined
//undefined

console.log(users.bebeloper.country);
//TypeError: Cannot read properties of undefined (reading 'country')
console.log(users.gndx.country);
//MX
console.log(users.gndx.age);
//undefined
