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

const openn = '#a3e49b';
const closed = '#ff7a7a';

const alxBizHours = {
          'momo' :         {0 : [[15,00],[21,30]], 1 : [[11,30],[22,00]], 2 : [[11,30],[22,00]], 3 : [[11,30],[22,00]], 4 : [[11,30],[22,00]], 5 : [[11,30],[22,00]], 6 : [[11,30],[22,00]]},
          'dunkin' :       {0 : [[06,00],[17,00]], 1 : [[06,00],[17,00]], 2 : [[06,00],[17,00]], 3 : [[06,00],[17,00]], 4 : [[06,00],[17,00]], 5 : [[06,00],[17,00]], 6 : [[06,00],[17,00]]},
          'killer' :       {0 : [[07,00],[20,00]], 1 : [[07,00],[21,00]], 2 : [[07,00],[21,00]], 3 : [[07,00],[21,00]], 4 : [[07,00],[21,00]], 5 : [[07,00],[22,00]], 6 : [[07,00],[22,00]]},
          'toast' :        {0 : [[08,00],[16,00]], 1 : [[08,00],[16,00]], 2 : [[08,00],[16,00]], 3 : [[08,00],[16,00]], 4 : [[08,00],[16,00]], 5 : [[08,00],[16,00]], 6 : [[08,00],[16,00]]},
          'casa' :         {0 : [[00,00],[00,00]], 1 : [[00,00],[00,00]], 2 : [[00,00],[00,00]], 3 : [[00,00],[00,00]], 4 : [[00,00],[00,00]], 5 : [[00,00],[00,00]], 6 : [[00,00],[00,00]]},
          'mishas' :       {0 : [[06,00],[20,30]], 1 : [[06,00],[20,30]], 2 : [[06,00],[20,30]], 3 : [[06,00],[20,30]], 4 : [[06,00],[20,30]], 5 : [[06,00],[20,30]], 6 : [[06,00],[20,30]]},
          'cvs1' :         {0 : [[07,00],[23,00]], 1 : [[07,00],[23,00]], 2 : [[07,00],[23,00]], 3 : [[07,00],[23,00]], 4 : [[07,00],[23,00]], 5 : [[07,00],[23,00]], 6 : [[07,00],[23,00]]},
          'cvs2' :         {0 : [[08,00],[22,00]], 1 : [[08,00],[22,00]], 2 : [[08,00],[22,00]], 3 : [[08,00],[22,00]], 4 : [[08,00],[22,00]], 5 : [[08,00],[22,00]], 6 : [[08,00],[22,00]]},
          'wholefoods' :   {0 : [[07,00],[21,00]], 1 : [[07,00],[21,00]], 2 : [[07,00],[21,00]], 3 : [[07,00],[21,00]], 4 : [[07,00],[21,00]], 5 : [[07,00],[21,00]], 6 : [[07,00],[21,00]]},
          'harristeeter' : {0 : [[07,00],[20,00]], 1 : [[07,00],[20,00]], 2 : [[07,00],[20,00]], 3 : [[07,00],[20,00]], 4 : [[07,00],[20,00]], 5 : [[07,00],[20,00]], 6 : [[07,00],[20,00]]},
          'traderjoes' :   {0 : [[09,00],[19,00]], 1 : [[09,00],[19,00]], 2 : [[09,00],[19,00]], 3 : [[09,00],[19,00]], 4 : [[09,00],[19,00]], 5 : [[09,00],[19,00]], 6 : [[09,00],[19,00]]},
          'bugsys' :   {0 : [[17,00],[23,30]], 1 : [[17,00],[23,30]], 2 : [[17,00],[23,30]], 3 : [[17,00],[23,30]], 4 : [[17,00],[23,30]], 5 : [[17,00],[23,30]], 6 : [[17,00],[23,30]]},
          'pennypost' : {0 : [[12,00],[17,00]], 1 : [[12,00],[17,00]], 2 : [[12,00],[17,00]], 3 : [[12,00],[17,00]], 4 : [[12,00],[17,00]], 5 : [[12,00],[17,00]], 6 : [[12,00],[17,00]]}
        };

const displayName = {
        'momo' : `Momo Sushi`,
        'dunkin' : `Dunkin Donuts`,
        'killer' : `Killer ESP`,
        'toast' : `Toastique`,
        'casa' : `Casa Rosada`,
        'mishas' : `Misha's Coffee`,
        'cvs1' : `CVS - King Street`,
        'cvs2' : `CVS - Duke Street`,
        'wholefoods' : `Whole Foods Market`,
        'harristeeter' : `Harris Teeter`,
        'traderjoes' : `Trader Joe's`,
        'bugsys' : `Bugsy's Sports Bar`,
        'pennypost' : `Penny Post`
      };
    
const currentTime = new Date();
const currentHour = currentTime.getHours();
const currentDay = currentTime.getDay();

function formatDate(hours) {
    const time = new Date();
          time.setHours(hours[0]);
          time.setMinutes(hours[1]);
    return time;
};

function generateWindows(businessesAndHours, displayName) {
    const bizID = Object.keys(businessesAndHours),
          displayID = Object.keys(displayName),
          humanHours = {
        '[0,0]' : '12am', '[0,30]' : '12:30am',
        '[1,0]' : '1am', '[1,30]' : '1:30am',
        '[2,0]' : '2am', '[2,30]' : '2:30am',
        '[3,0]' : '3am', '[3,30]' : '3:30am',
        '[4,0]' : '4am', '[4,30]' : '4:30am',
        '[5,0]' : '5am', '[5,30]' : '5:30am',
        '[6,0]' : '6am', '[6,30]' : '6:30am',
        '[7,0]' : '7am', '[7,30]' : '7:30am',
        '[8,0]' : '8am', '[8,30]' : '8:30am',
        '[9,0]' : '9am', '[9,30]' : '9:30am',
        '[10,0]' : '10am', '[10,30]' : '10:30am',
        '[11,0]' : '11am', '[11,30]' : '11:30am',
        '[12,0]' : '12pm', '[12,30]' : '12:30pm',
        '[13,0]' : '1pm', '[13,30]' : '1:30pm',
        '[14,0]' : '2pm', '[14,30]' : '2:30pm',
        '[15,0]' : '3pm', '[15,30]' : '3:30pm',
        '[16,0]' : '4pm', '[16,30]' : '4:30pm',
        '[17,0]' : '5pm', '[17,30]' : '5:30pm',
        '[18,0]' : '6pm', '[18,30]' : '6:30pm',
        '[19,0]' : '7pm', '[19,30]' : '7:30pm',
        '[20,0]' : '8pm', '[20,30]' : '8:30pm',
        '[21,0]' : '9pm', '[21,30]' : '9:30pm',
        '[22,0]' : '10pm', '[22,30]' : '10:30pm',
        '[23,0]' : '11pm', '[23,30]' : '11:30pm', 
    };

    function divCreator(divArray, shop) {  
        divArray.push(`<div id="${shop.id}" class="store w-node-c664a0cf5efb-def45619">
                    <h4 class="heading">${shop.name}</h4>
                    <p class="paragraph">Hours:<br>
                    S: ${humanHours['['+businessesAndHours[shop.id][0][0].toString()+']']} - ${humanHours['['+businessesAndHours[shop.id][0][1].toString()+']']}<br>
                    M: ${humanHours['['+businessesAndHours[shop.id][1][0].toString()+']']} - ${humanHours['['+businessesAndHours[shop.id][1][1].toString()+']']}<br>
                    T: ${humanHours['['+businessesAndHours[shop.id][2][0].toString()+']']} - ${humanHours['['+businessesAndHours[shop.id][2][1].toString()+']']}<br>
                    W: ${humanHours['['+businessesAndHours[shop.id][3][0].toString()+']']} - ${humanHours['['+businessesAndHours[shop.id][3][1].toString()+']']}<br>
                    T: ${humanHours['['+businessesAndHours[shop.id][4][0].toString()+']']} - ${humanHours['['+businessesAndHours[shop.id][4][1].toString()+']']}<br>
                    F: ${humanHours['['+businessesAndHours[shop.id][5][0].toString()+']']} - ${humanHours['['+businessesAndHours[shop.id][5][1].toString()+']']}<br>
                    S: ${humanHours['['+businessesAndHours[shop.id][6][0].toString()+']']} - ${humanHours['['+businessesAndHours[shop.id][6][1].toString()+']']}<br>
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

function changeColor(businessesAndHours) {
    for (let i = 0; i < Object.keys(businessesAndHours).length; i++) {
        let bizID = Object.keys(businessesAndHours)[i];
        const openHour = formatDate(businessesAndHours[bizID][currentDay][0]),
              closedHour = formatDate(businessesAndHours[bizID][currentDay][1]);
        if (openHour <= currentTime && currentTime < closedHour) {
            console.log(`document.getElementById(${bizID}).style.backgroundColor = openn`);
            try {
                document.getElementById(bizID).style.backgroundColor = openn;
            } catch(e) {
                console.log(bizID, e)
            };
        } else {
            console.log(`document.getElementById(${bizID}).style.backgroundColor = closed`);
            try{
                document.getElementById(bizID).style.backgroundColor = closed;
            } catch(e) {
                console.log(bizID, e)
            };
        };
    };
};
// console.log(generateWindows(alxBizHours, displayName))


const storesHtml = generateWindows(alxBizHours, displayName);

// document.getElementById('foodtab').innerHTML = storesHtml.food;

Object.keys(storesHtml).forEach(storeType => document.getElementById(`${storeType}tab`).innerHTML = storesHtml[storeType]);


changeColor(alxBizHours);
setInterval(changeColor, 60*1000, alxBizHours);