const shops = [
    {   id: 'momo',
        name:'Momo Sushi',
        hours: {0 : [[15,00],[21,30]], 1 : [[11,30],[22,00]], 2 : [[11,30],[22,00]], 3 : [[11,30],[22,00]], 4 : [[11,30],[22,00]], 5 : [[11,30],[22,00]], 6 : [[11,30],[22,00]]},
        type: 'food',
        disclaimer: 'Pickup food at window',
        mapsLink: '',
    },
    {
        id: 'traderjoes',
        name:'Trader Joe\'s',
        hours: {0 : [[09,00],[19,00]], 1 : [[09,00],[19,00]], 2 : [[09,00],[19,00]], 3 : [[09,00],[19,00]], 4 : [[09,00],[19,00]], 5 : [[09,00],[19,00]], 6 : [[09,00],[19,00]]},
        type: 'grocery',
        disclaimer: 'Monitoring people and lines',
        mapsLink: '',
    },
    {
        id: 'pennypost',
        name:'Penny Post',
        hours: {0 : [[12,00],[17,00]], 1 : [[12,00],[17,00]], 2 : [[12,00],[17,00]], 3 : [[12,00],[17,00]], 4 : [[12,00],[17,00]], 5 : [[12,00],[17,00]], 6 : [[12,00],[17,00]]},
        type: 'retail',
        disclaimer: 'Limited number of people allowed',
        mapsLink: '',
    }
];

// const alxBizHours = {
//           'momo' :         {0 : [[15,00],[21,30]], 1 : [[11,30],[22,00]], 2 : [[11,30],[22,00]], 3 : [[11,30],[22,00]], 4 : [[11,30],[22,00]], 5 : [[11,30],[22,00]], 6 : [[11,30],[22,00]]},
//           'dunkin' :       {0 : [[06,00],[17,00]], 1 : [[06,00],[17,00]], 2 : [[06,00],[17,00]], 3 : [[06,00],[17,00]], 4 : [[06,00],[17,00]], 5 : [[06,00],[17,00]], 6 : [[06,00],[17,00]]},
//           'killer' :       {0 : [[07,00],[20,00]], 1 : [[07,00],[21,00]], 2 : [[07,00],[21,00]], 3 : [[07,00],[21,00]], 4 : [[07,00],[21,00]], 5 : [[07,00],[22,00]], 6 : [[07,00],[22,00]]},
//           'toast' :        {0 : [[08,00],[16,00]], 1 : [[08,00],[16,00]], 2 : [[08,00],[16,00]], 3 : [[08,00],[16,00]], 4 : [[08,00],[16,00]], 5 : [[08,00],[16,00]], 6 : [[08,00],[16,00]]},
//           'casa' :         {0 : [[00,00],[00,00]], 1 : [[00,00],[00,00]], 2 : [[00,00],[00,00]], 3 : [[00,00],[00,00]], 4 : [[00,00],[00,00]], 5 : [[00,00],[00,00]], 6 : [[00,00],[00,00]]},
//           'mishas' :       {0 : [[06,00],[20,30]], 1 : [[06,00],[20,30]], 2 : [[06,00],[20,30]], 3 : [[06,00],[20,30]], 4 : [[06,00],[20,30]], 5 : [[06,00],[20,30]], 6 : [[06,00],[20,30]]},
//           'cvs1' :         {0 : [[07,00],[23,00]], 1 : [[07,00],[23,00]], 2 : [[07,00],[23,00]], 3 : [[07,00],[23,00]], 4 : [[07,00],[23,00]], 5 : [[07,00],[23,00]], 6 : [[07,00],[23,00]]},
//           'cvs2' :         {0 : [[08,00],[22,00]], 1 : [[08,00],[22,00]], 2 : [[08,00],[22,00]], 3 : [[08,00],[22,00]], 4 : [[08,00],[22,00]], 5 : [[08,00],[22,00]], 6 : [[08,00],[22,00]]},
//           'wholefoods' :   {0 : [[07,00],[21,00]], 1 : [[07,00],[21,00]], 2 : [[07,00],[21,00]], 3 : [[07,00],[21,00]], 4 : [[07,00],[21,00]], 5 : [[07,00],[21,00]], 6 : [[07,00],[21,00]]},
//           'harristeeter' : {0 : [[07,00],[20,00]], 1 : [[07,00],[20,00]], 2 : [[07,00],[20,00]], 3 : [[07,00],[20,00]], 4 : [[07,00],[20,00]], 5 : [[07,00],[20,00]], 6 : [[07,00],[20,00]]},
//           'traderjoes' :   {0 : [[09,00],[19,00]], 1 : [[09,00],[19,00]], 2 : [[09,00],[19,00]], 3 : [[09,00],[19,00]], 4 : [[09,00],[19,00]], 5 : [[09,00],[19,00]], 6 : [[09,00],[19,00]]},
//           'bugsys' :   {0 : [[17,00],[23,30]], 1 : [[17,00],[23,30]], 2 : [[17,00],[23,30]], 3 : [[17,00],[23,30]], 4 : [[17,00],[23,30]], 5 : [[17,00],[23,30]], 6 : [[17,00],[23,30]]},
//           'pennypost' : {0 : [[12,00],[17,00]], 1 : [[12,00],[17,00]], 2 : [[12,00],[17,00]], 3 : [[12,00],[17,00]], 4 : [[12,00],[17,00]], 5 : [[12,00],[17,00]], 6 : [[12,00],[17,00]]}
//         };

// const displayName = {
//         'momo' : `Momo Sushi`,
//         'dunkin' : `Dunkin Donuts`,
//         'killer' : `Killer ESP`,
//         'toast' : `Toastique`,
//         'casa' : `Casa Rosada`,
//         'mishas' : `Misha's Coffee`,
//         'cvs1' : `CVS - King Street`,
//         'cvs2' : `CVS - Duke Street`,
//         'wholefoods' : `Whole Foods Market`,
//         'harristeeter' : `Harris Teeter`,
//         'traderjoes' : `Trader Joe's`,
//         'bugsys' : `Bugsy's Sports Bar`,
//         'pennypost' : `Penny Post`
//       };

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
        return hour.toString()+suffix;
    }

    return hour.toString()+':'+minute.toString()+suffix;
}

function generateWindows() {

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

const storesHtml = generateWindows();

Object.keys(storesHtml).forEach(storeType => document.getElementById(`${storeType}tab`).innerHTML = storesHtml[storeType]);

changeColor(shops);

setInterval(changeColor, 60*1000, shops);