const names1 = [];
const names2 = ["Peter"];
const names3 = ["Jacob", "Alex"];
const names4 = ["Max", "John", "Mark"];
const names5 = ["Alex", "Jacob", "Mark", "Max", "Drill", "Fedor"];

function likes(names) {
    let i = 0;
    
    do {
        if (names.length === 1) {
            return `${names[0]} likes this`
        }

        if (names.length === 2) {
            return `${names[0]} and ${names[1]} like this`
        }

        if (names.length === 3) {
            return `${names[0]}, ${names[1]} and ${names[2]} like this`
        }

        if (names.length >= 4) {
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
        }

        return `no one likes this`

    } while (i < names.length)
}

likes(names1);