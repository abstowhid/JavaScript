function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            return 'Sunday';
        case 2:
            return 'Monday';
        case 3:
            return 'Tuesday';
        case 4:
            return 'Wednesday';
        case 5:
            return 'Thursday';
        case 6:
            return 'Friday';
        case 7:
            return 'Saturday';
        default:
            return 'Invalid day number';
    }
}

console.log(getDayName(3)); // Output: Tuesday
console.log(getDayName(7)); // Output: Saturday
console.log(getDayName(10)); // Output: Invalid day number
// ! it was also possible without function but in real-world code there is no use of that.
// * important that here i used return instead break, if i don't use return then must i use the break statement

//

// * here is a break with multiple case additionally
function getSeason(month) {
    let season;

    switch (month) {
        case 'December':
        case 'January':
        case 'February':
            season = 'Winter';
            break;
        case 'March':
        case 'April':
        case 'May':
            season = 'Spring';
            break;
        case 'June':
        case 'July':
        case 'August':
            season = 'Summer';
            break;
        case 'September':
        case 'October':
        case 'November':
            season = 'Autumn';
            break;
        default:
            season = 'Invalid month';
    }

    return season;
}

console.log(getSeason('January')); // Output: Winter
console.log(getSeason('June')); // Output: Summer
console.log(getSeason('November')); // Output: Autumn
console.log(getSeason('Hello')); // Output: Invalid month
