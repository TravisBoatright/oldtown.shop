function formatDate(hours) {
    const time = new Date();
          time.setHours(hours[0]);
          time.setMinutes(hours[1]);
    return time;
};

function formatTime(time) {
    let hour = time[0]
    let minute = time[1]
    let suffix = 'am';
    if (hour > 12) {
        suffix = 'pm';
        hour -= 12;
    }

    if (minute === 0) {
        return hour.toString() + suffix;
    }
        return hour.toString() + ':' + minute.toString() + suffix;
}

function generateWindows(shops) {

    function divCreator(divArray, shop) {  
        divArray.push(`<div id="${shop.id}" class="store w-node-c664a0cf5efb-def45619">
            <h4 class="heading">${shop.name}</h4>
                <p class="paragraph">Hours:<br>     
                    S: ${formatTime(shop.hours[0][0])} - ${formatTime(shop.hours[0][1])}<br>
                    M: ${formatTime(shop.hours[1][0])} - ${formatTime(shop.hours[1][1])}<br>
                    T: ${formatTime(shop.hours[2][0])} - ${formatTime(shop.hours[2][1])}<br>
                    W: ${formatTime(shop.hours[3][0])} - ${formatTime(shop.hours[3][1])}<br>
                    T: ${formatTime(shop.hours[4][0])} - ${formatTime(shop.hours[4][1])}<br>
                    F: ${formatTime(shop.hours[5][0])} - ${formatTime(shop.hours[5][1])}<br>
                    S: ${formatTime(shop.hours[6][0])} - ${formatTime(shop.hours[6][1])}<br>
                <br>${shop.disclaimer}</p>
            </div>`);
    }

    const foodDivs = [];
    const groceryDivs = [];
    const retailDivs = [];

    for (const shop of shops) {
        if (shop.type === 'food') {
            divCreator(foodDivs, shop);
        } else if (shop.type === 'grocery') {
            divCreator(groceryDivs, shop);
        } else {
            divCreator(retailDivs, shop);
        }
    }

    return  {
        food: foodDivs.join(''),
        grocery: groceryDivs.join(''),
        retail: retailDivs.join('')
    };
}

function changeColor(shops) {

    const currentTime = new Date();
    const currentDay = currentTime.getDay();

    for (const shop of shops) {

        const openHour = formatDate(shop.hours[currentDay][0])
        const closedHour = formatDate(shop.hours[currentDay][1])

        if (openHour <= currentTime && currentTime < closedHour) {
            document.getElementById(shop.id).style.backgroundColor = '#a3e49b';
        } else {
            document.getElementById(shop.id).style.backgroundColor = '#ff7a7a';
        }
    }

}

const storesHtml = generateWindows(infoForOldTownShops);

Object.keys(storesHtml).forEach(storeType => document.getElementById(`${storeType}tab`).innerHTML = storesHtml[storeType]);

changeColor(infoForOldTownShops);

setInterval(changeColor, 60*1000, infoForOldTownShops);