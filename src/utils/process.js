function isEven(n) {
    return n % 2 === 0;
}

function isOdd(n) {
    return Math.abs(n % 2) === 1;
}

// Return an array with the music genre associated to the user
export function getUserGenre(data) {
    let userGenre = [];
    data.items.forEach(function (item) {
        let artistGenre = item.genres;
        artistGenre.forEach(function (genre) {
            if (userGenre.indexOf(genre) === -1) {
                userGenre.push(genre);
            }
        });
    });
    return userGenre;
}

// Return the coefficient associated to the user's sign
export function getUserCoef(userSign, signList) {
    let coef = 0;
    signList.forEach(function (sign) {
        if (sign.name === userSign) {
            coef = sign.coef;
        }
    });
    return coef;
}

// Return an array of object {name: "genre", value: "initial value * coef"} associated to the user's genre
export function getUserGenreValue(userGenre, userCoef, genreList) {
    let userGenreValue = [];
    let newValue = 0;
    userGenre.forEach(function (genre) {
        genreList.forEach(function (genreItem) {
            if (genreItem.name === genre) {
                newValue = Math.round(genreItem.value * userCoef);
                userGenreValue.push({
                    name: genre,
                    value: newValue
                });
            }
        });
    });
    return userGenreValue;
}

// Return the compatibility of an user based on his music genre list
export function getUserCompatibility(userGenreValue) {
    let userCompatibility = 0;
    userGenreValue.forEach(function (genre) {
        if (isEven(genre.value)) {
            userCompatibility += genre.value;
        }
        if (isOdd(genre.value)) {
            userCompatibility -= genre.value;
        }
    });
    userCompatibility = Math.abs(userCompatibility);
    return userCompatibility;
}

// Return the sign most compatible with the user
export function getUserSign(userCompatibility, userSign, signList) {
    var signIndex = 0;
    signList.forEach(function (sign, index) {
        if (sign.name === userSign) {
            signIndex = index;
        }
    });
    let tempList = [];
    let bestSign = '';
    signList[signIndex].compatibility.forEach(function (sign) {
        tempList.push(sign.value);
    });
    const closestSignValue = tempList.reduce((prev, curr) => {
        return Math.abs(curr - userCompatibility) < Math.abs(prev - userCompatibility)
            ? curr
            : prev;
    });
    signList.forEach(function (sign) {
        sign.compatibility.forEach(function (sign) {
            if (sign.value === closestSignValue) {
                bestSign = sign.name;
            }
        });
    });
    return bestSign;
}
