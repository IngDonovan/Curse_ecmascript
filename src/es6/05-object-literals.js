//enahced object literals

//antes
function newUser00(user, age, country) {
    return {
        user: user,
        age: age,
        country: country,
    }
}

//despues
function newUser(user, age, country, unicID) {
    return {
        user,
        age,
        country,
        id: unicID,
    }
}

console.log(newUser("gndx", 34, "MX", 1));