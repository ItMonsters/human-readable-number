module.exports = function toReadable(number) {
    const words20 = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const words100 = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number == 0) {
        return "zero";
    }
    if (number < 20) {
        return words20[number];
    }
    if (number >= 100 && number % 100 === 0) {
        return `${words20[Number.parseInt(number / 100)]} hundred`;
    }
    if (number >= 100 && number % 10 === 0) {
        return `${words20[Number.parseInt(number / 100)]} hundred ${
            words100[Number.parseInt((number % 100) / 10)]
        }`;
    }
    if (number >= 20 && number < 100 && number % 10 === 0) {
        return `${words100[Number.parseInt(number / 10)]}`;
    }

    if (number >= 20 && number < 100 && number % 10 !== 0) {
        return `${words100[Number.parseInt(number / 10)]} ${
            words20[number % 10]
        }`;
    }

    if (number >= 100 && number % 100 >= 20 && number % 100 !== 0) {
        return `${words20[Number.parseInt(number / 100)]} hundred ${
            words100[Number.parseInt((number % 100) / 10)]
        } ${words20[number % 10]}`;
    }
    if (number % 100 <= 20) {
        return `${words20[Number.parseInt(number / 100)]} hundred ${
            words20[Number.parseInt(number % 100)]
        }`;
    }
};
