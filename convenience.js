const openn = '#a3e49b';
const closed = '#ff7a7a';

const restaurantHours = { // days of the week are integers, restaurant hours are in array form, feel free to add in another element if you want to make the yellow like Tim suggested, you'd have to add more logic but it wouldn't be hard
    "cvs1": {0 : [[06,00],[22,00]], 1 : [[06,00],[22,00]], 2 : [[06,00],[22,00]], 3 : [[06,00],[22,00]], 4 : [[06,00],[22,00]], 5 : [[06,00],[22,00]], 6 : [[06,00],[22,00]]},
    "cvs2": {0 : [[07,00],[21,00]], 1 : [[07,00],[21,00]], 2 : [[07,00],[21,00]], 3 : [[07,00],[21,00]], 4 : [[07,00],[21,00]], 5 : [[07,00],[21,00]], 6 : [[07,00],[21,00]]},
    "wholefoods": {0 : [[06,00],[20,00]], 1 : [[06,00],[20,00]], 2 : [[06,00],[20,00]], 3 : [[06,00],[20,00]], 4 : [[06,00],[20,00]], 5 : [[06,00],[20,00]], 6 : [[06,00],[20,00]]},
    "harristeeter": {0 : [[06,00],[19,00]], 1 : [[06,00],[19,00]], 2 : [[06,00],[19,00]], 3 : [[06,00],[19,00]], 4 : [[06,00],[19,00]], 5 : [[06,00],[19,00]], 6 : [[06,00],[19,00]]},
    "traderjoes": {0 : [[08,00],[18,00]], 1 : [[08,00],[18,00]], 2 : [[08,00],[18,00]], 3 : [[08,00],[18,00]], 4 : [[08,00],[18,00]], 5 : [[08,00],[18,00]], 6 : [[08,00],[18,00]]}
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