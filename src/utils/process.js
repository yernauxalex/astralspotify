function isEven(n) {
    return n % 2 === 0;
}

function isOdd(n) {
    return Math.abs(n % 2) === 1;
}

export function userGenre(data) {
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

export function userCompatibility(userGenre, genreList) {
    let userCompatibility = 0;
    userGenre.forEach(function (genre) {
        genreList.forEach(function (genreList) {
            if (genreList.name === genre) {
                if (isEven(genreList.value)) {
                    userCompatibility += genreList.value;
                } else if (isOdd(genreList.value)) {
                    userCompatibility -= genreList.value;
                }
            }
        });
    });
    userCompatibility = Math.abs(userCompatibility);
    console.log('userCompatibility', userCompatibility);
    return userCompatibility;
}

export function userSign(userCompatibility, userSign, signList) {
    var signIndex = 0
    signList.forEach(function (sign, index) {
        if (sign.name === userSign) {
            signIndex = index;
        }
    })
    let tempList = []
    let bestSign = ''
    signList[signIndex].compatibility.forEach(function (sign) {
        tempList.push(sign.value);
    });
    const closestSignValue = tempList.reduce((prev, curr) => {
        return (Math.abs(curr - userCompatibility) < Math.abs(prev - userCompatibility) ? curr : prev);
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







