const openn = '#a3e49b';
const closed = '#ff7a7a';

const restaurantHours = { // days of the week are integers, restaurant hours are in array form, feel free to add in another element if you want to make the yellow like Tim suggested, you'd have to add more logic but it wouldn't be hard
    "momo": {0 : [[10,00],[19,30]], 1 : [[10,00],[19,30]], 2 : [[10,00],[19,30]], 3 : [[10,00],[19,30]], 4 : [[10,00],[19,30]], 5 : [[10,00],[19,30]], 6 : [[10,00],[19,30]]},
    "casa": {0 : [[00,00],[00,00]], 1 : [[00,00],[00,00]], 2 : [[00,00],[00,00]], 3 : [[00,00],[00,00]], 4 : [[00,00],[00,00]], 5 : [[00,00],[00,00]], 6 : [[00,00],[00,00]]},
    "mishas": {0 : [[05,00],[19,30]], 1 : [[05,00],[19,30]], 2 : [[05,00],[19,30]], 3 : [[05,00],[19,30]], 4 : [[05,00],[19,30]], 5 : [[05,00],[19,30]], 6 : [[05,00],[19,30]]}
}

function formatDate(hours) {
    const time = new Date();
    time.setHours(hours[0]);
    time.setMinutes(hours[1]);
    return time;
};

const currentTime = new Date();

const currentHour = new Date().getHours();
const currentDay = new Date().getDay(); // the days of the week are zero indexed. 0 = sunday, 1 = monday,... 6 = saturdanodey

function changeColor() {
    for (let i = 0; i < Object.keys(restaurantHours).length; i++) { // this iterates over the keys of restaurantHours
        let restaurantID = Object.keys(restaurantHours)[i]; // if you name the id of the div for each restaurant the name of the key in the dicitonary, you can use the variable defined here to chage the color of that div
        // let openHour = restaurantHours[restaurantID][currentDay][0]; // this is calling the restaurantHours dictionary first by the key of the name of the restaurant and second by the key of the day of the week
        // let closedHour =  restaurantHours[restaurantID][currentDay][1]; //there are two of these because the array will always have 2 elements, the first is the open time and the second is the closed time
        const openHour = formatDate(restaurantHours[restaurantID][currentDay][0])
        const closedHour = formatDate(restaurantHours[restaurantID][currentDay][1])

        if (openHour <= currentTime && currentTime < closedHour) {
            // console.log(`document.getElementById(${restaurantID}).style.backgroundColor = openn`);
            document.getElementById(restaurantID).style.backgroundColor = openn;
        } else {
            // console.log(`document.getElementById(${restaurantID}).style.backgroundColor = closed`);
            document.getElementById(restaurantID).style.backgroundColor = closed;
        };
    };
};



changeColor(); // this will call the function initally idk how soon setinterval starts working
setInterval(changeColor, 1000 * 60);