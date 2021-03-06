const infoForOldTownShops = [
    // "A" 
    {
        id: 'lucia',
        name:'a la Lucia',
        hours: {0 : [[16,00],[19,30]], 1 : [[16,00],[19,30]], 2 : [[16,00],[19,30]], 3 : [[16,00],[19,30]], 4 : [[16,00],[19,30]], 5 : [[16,00],[20,30]], 6 : [[16,00],[20,30]]},
        type: 'food',
        disclaimer: 'Delivery and Carry out',
        mapsLink: 'https://goo.gl/maps/mUjPzeqz13Zm6S598',
    },
    {
        id: 'alxcupcake',
        name:'Alexandria Cupcake',
        hours: {0 : [[11,30],[19,30]], 1 : [[11,30],[19,30]], 2 : [[11,30],[19,30]], 3 : [[11,30],[19,30]], 4 : [[11,30],[19,30]], 5 : [[11,30],[19,30]], 6 : [[11,30],[19,30]]},
        type: 'food',
        disclaimer: 'Carry out only',
        mapsLink: 'https://goo.gl/maps/KrfmjYpaJWkTtSZDA',
    },
    {
        id: 'aslin',
        name:'Aslin Beer Company',
        hours: {0 : [[11,00],[20,00]], 1 : [[11,00],[20,00]], 2 : [[11,00],[20,00]], 3 : [[11,00],[20,00]], 4 : [[11,00],[20,00]], 5 : [[11,00],[20,00]], 6 : [[11,00],[20,00]]},
        type: 'food',
        disclaimer: 'Order online for pickup/delivery',
        mapsLink: 'https://goo.gl/maps/UC7NxEJGgJcPeKyWA',
    },
    {
        id: 'augies',
        name:'Augie\'s Mussel House',
        hours: {0 : [[00,00],[00,00]], 1 : [[00,00],[00,00]], 2 : [[00,00],[00,00]], 3 : [[00,00],[00,00]], 4 : [[00,00],[00,00]], 5 : [[00,00],[00,00]], 6 : [[00,00],[00,00]]},
        type: 'food',
        disclaimer: 'Closed for COVID19',
        mapsLink: 'https://goo.gl/maps/XvLQaGPLNqFeHidC8',
    },
    // "B"
    {
        id: 'bastille',
        name:'Bastille',
        hours: {0 : [[16,00],[19,30]], 1 : [[00,00],[00,00]], 2 : [[16,00],[19,30]], 3 : [[16,00],[19,30]], 4 : [[16,00],[19,30]], 5 : [[16,00],[19,30]], 6 : [[16,00],[19,30]]},
        type: 'food',
        disclaimer: 'Curbside Delivery & Carry out',
        mapsLink: 'https://g.page/bastilleva?share',
    },
    {
        id: 'blackwall',
        name:'Blackwall Hitch',
        hours: {0 : [[00,00],[00,00]], 1 : [[00,00],[00,00]], 2 : [[00,00],[00,00]], 3 : [[00,00],[00,00]], 4 : [[00,00],[00,00]], 5 : [[00,00],[00,00]], 6 : [[00,00],[00,00]]},
        type: 'food',
        disclaimer: 'Closed for COVID19',
        mapsLink: 'https://goo.gl/maps/vdfdG8gyRDhjrWrF7',
    },
    {
        id: 'brabo',
        name:'Brabo',
        hours: {0 : [[00,00],[00,00]], 1 : [[00,00],[00,00]], 2 : [[00,00],[00,00]], 3 : [[00,00],[00,00]], 4 : [[00,00],[00,00]], 5 : [[00,00],[00,00]], 6 : [[00,00],[00,00]]},
        type: 'food',
        disclaimer: 'Closed for COVID19',
        mapsLink: 'https://g.page/BugsysPizza?share',
    },
    {
        id: 'bugsys',
        name:'Bugsy\'s Pizza',
        hours: {0 : [[17,00],[23,30]], 1 : [[17,00],[23,30]], 2 : [[17,00],[23,30]], 3 : [[17,00],[23,30]], 4 : [[17,00],[23,30]], 5 : [[17,00],[23,30]], 6 : [[17,00],[23,30]]},
        type: 'food',
        disclaimer: 'Delivery and Online Ordering',
        mapsLink: 'https://g.page/BugsysPizza?share',
    },
    {
        id: 'buzz',
        name:'Buzz Bakeshop',
        hours: {0 : [[08,00],[20,00]], 1 : [[08,00],[20,00]], 2 : [[08,00],[20,00]], 3 : [[08,00],[20,00]], 4 : [[08,00],[20,00]], 5 : [[08,00],[20,00]], 6 : [[08,00],[20,00]]},
        type: 'food',
        disclaimer: 'Delivery and Online Ordering',
        mapsLink: 'https://goo.gl/maps/oKzcP3Xrv4Xp4euq5',
    },
    // "C"
    {
        id: 'casa',
        name:'Casa Rosada',
        hours: {0 : [[00,00],[00,00]], 1 : [[00,00],[00,00]], 2 : [[00,00],[00,00]], 3 : [[00,00],[00,00]], 4 : [[00,00],[00,00]], 5 : [[00,00],[00,00]], 6 : [[00,00],[00,00]]},
        type: 'food',
        disclaimer: 'Closed for COVID-19',
        mapsLink: 'https://goo.gl/maps/iXVzzPFWwGQxFDek7',
    },
    {
        id: 'chadwicks',
        name:'Chadwicks',
        hours: {0 : [[11,00],[21,00]], 1 : [[11,00],[21,00]], 2 : [[11,00],[21,00]], 3 : [[11,00],[21,00]], 4 : [[11,00],[21,00]], 5 : [[11,00],[21,00]], 6 : [[11,00],[21,00]]},
        type: 'food',
        disclaimer: 'Delivery and Curbside Pickup',
        mapsLink: 'https://goo.gl/maps/fpSUtinmPqejK1sR9',
    },
    {
        id: 'charthouse',
        name:'Chart House',
        hours: {0 : [[11,00],[20,00]], 1 : [[11,00],[20,00]], 2 : [[11,00],[20,00]], 3 : [[11,00],[20,00]], 4 : [[11,00],[20,00]], 5 : [[11,00],[20,00]], 6 : [[11,00],[20,00]]},
        type: 'food',
        disclaimer: 'Delivery and Curbside Pickup',
        mapsLink: 'https://goo.gl/maps/52XXSmCeWjYdyd2z9',
    },
    {
        id: 'cheesetique',
        name:'Cheesetique',
        hours: {0 : [[10,00],[20,00]], 1 : [[12,00],[20,00]], 2 : [[12,00],[20,00]], 3 : [[12,00],[20,00]], 4 : [[12,00],[20,00]], 5 : [[12,00],[20,00]], 6 : [[10,00],[20,00]]},
        type: 'food',
        disclaimer: 'Delivery and Curbside Pickup',
        mapsLink: 'https://goo.gl/maps/igEG9TFbumabFX2ZA',
    },
    {
        id: 'chopshop',
        name:'Chop Shop Tacp',
        hours: {0 : [[10,00],[20,00]], 1 : [[11,00],[20,00]], 2 : [[11,00],[20,00]], 3 : [[11,00],[20,00]], 4 : [[11,00],[20,00]], 5 : [[11,00],[20,00]], 6 : [[10,00],[20,00]]},
        type: 'food',
        disclaimer: 'Delivery and Curbside Pickup | High-risk meals 3-5pm',
        mapsLink: 'https://goo.gl/maps/wjRXeefktrqSP4Po8',
    },
    {
        id: 'cvs1',
        name:'CVS on King St',
        hours: {0 : [[07,00],[23,00]], 1 : [[07,00],[23,00]], 2 : [[07,00],[23,00]], 3 : [[07,00],[23,00]], 4 : [[07,00],[23,00]], 5 : [[07,00],[23,00]], 6 : [[07,00],[23,00]]},
        type: 'grocery',
        disclaimer: 'Limited number of people allowed',
        mapsLink: 'https://goo.gl/maps/BevyaPp3j5Vm6LHfA',
    },
    {
        id: 'cvs2',
        name:'CVS on Duke St',
        hours: {0 : [[08,00],[22,00]], 1 : [[08,00],[22,00]], 2 : [[08,00],[22,00]], 3 : [[08,00],[22,00]], 4 : [[08,00],[22,00]], 5 : [[08,00],[22,00]], 6 : [[08,00],[22,00]]},
        type: 'grocery',
        disclaimer: 'Limited number of people allowed',
        mapsLink: 'https://goo.gl/maps/TLZL8PeYX56BeMSe9',
    },
    // "D"
    {
        id: 'dairy',
        name:'The Dairy Godmother',
        hours: {0 : [[12,00],[20,00]], 1 : [[12,00],[20,00]], 2 : [[00,00],[00,00]], 3 : [[12,00],[20,00]], 4 : [[12,00],[20,00]], 5 : [[12,00],[20,00]], 6 : [[12,00],[20,00]]},
        type: 'food',
        disclaimer: 'Orders at front door',
        mapsLink: 'https://goo.gl/maps/Kc9tJETrUTvvqfaY7',
    },
    {
        id: 'oconnell',
        name:'Daniel O\'Connell\'s',
        hours: {0 : [[12,30],[18,30]], 1 : [[00,00],[00,00]], 2 : [[00,00],[00,00]], 3 : [[00,00],[00,00]], 4 : [[00,00],[00,00]], 5 : [[12,30],[18,30]], 6 : [[12,30],[18,30]]},
        type: 'food',
        disclaimer: 'Happy Hour and Carry out',
        mapsLink: 'https://goo.gl/maps/heJVjGyGkp77gaGy5',
    },
    {
        id: 'delias',
        name:'Delia\s Mediterranean Grill',
        hours: {0 : [[11,00],[22,00]], 1 : [[11,00],[22,00]], 2 : [[11,00],[22,00]], 3 : [[11,00],[22,00]], 4 : [[11,00],[22,00]], 5 : [[11,00],[22,00]], 6 : [[11,00],[22,00]]},
        type: 'food',
        disclaimer: 'Delivery and Carry out',
        mapsLink: 'https://goo.gl/maps/DcTWQ4NsMQ66Sucw5',
    },
    {
        id: 'dolci',
        name:'Dolci Gelati',
        hours: {0 : [[07,00],[21,00]], 1 : [[07,00],[21,00]], 2 : [[07,00],[21,00]], 3 : [[07,00],[21,00]], 4 : [[07,00],[21,00]], 5 : [[07,00],[22,00]], 6 : [[07,00],[22,00]]},
        type: 'food',
        disclaimer: 'Order ahead online',
        mapsLink: 'https://goo.gl/maps/ABEhD2tscmjAdinz7',
    },
    {
        id: 'dunkin',
        name:'Dunkin Donuts',
        hours: {0 : [[06,00],[17,00]], 1 : [[06,00],[17,00]], 2 : [[06,00],[17,00]], 3 : [[06,00],[17,00]], 4 : [[06,00],[17,00]], 5 : [[06,00],[17,00]], 6 : [[06,00],[17,00]]},
        type: 'food',
        disclaimer: 'Limited number of people allowed',
        mapsLink: 'https://goo.gl/maps/NJdAoGXoKLPeCXbk8',
    },
    // "E"
    {
        id: 'elizabeths',
        name:'Elizabeth\'s Counter',
        hours: {0 : [[07,00],[19,00]], 1 : [[07,00],[12,00]], 2 : [[07,00],[12,00]], 3 : [[07,00],[19,00]], 4 : [[07,00],[19,00]], 5 : [[07,00],[19,00]], 6 : [[07,00],[19,00]]},
        type: 'food',
        disclaimer: 'Order online for pickup | Uber Eats',
        mapsLink: 'https://g.page/elizabethscounter?share',
    },
    {
        id: 'evening',
        name:'Evening Star Cafe',
        hours: {0 : [[11,00],[21,00]], 1 : [[11,00],[21,00]], 2 : [[11,00],[21,00]], 3 : [[11,00],[21,00]], 4 : [[11,00],[21,00]], 5 : [[11,00],[21,00]], 6 : [[11,00],[21,00]]},
        type: 'food',
        disclaimer: 'Delivery and Wine delivery',
        mapsLink: 'https://goo.gl/maps/xyMBTJ2e6DyKKG3q6',
    },
    // "F"
    {
        id: 'fishmarket',
        name:'Fish Market',
        hours: {0 : [[12,00],[20,00]], 1 : [[16,00],[20,00]], 2 : [[16,00],[20,00]], 3 : [[16,00],[20,00]], 4 : [[16,00],[20,00]], 5 : [[12,00],[20,00]], 6 : [[12,00],[20,00]]},
        type: 'food',
        disclaimer: 'Carry out and Curbside pickup',
        mapsLink: 'https://goo.gl/maps/7eoMq7j687dqWfju6',
    },
    {
        id: 'fontaine',
        name:'Fontaine Caffe',
        hours: {0 : [[13,00],[20,00]], 1 : [[13,00],[20,00]], 2 : [[13,00],[20,00]], 3 : [[13,00],[20,00]], 4 : [[13,00],[20,00]], 5 : [[13,00],[20,00]], 6 : [[13,00],[20,00]]},
        type: 'food',
        disclaimer: 'Carry out and Curbside pickup',
        mapsLink: 'https://goo.gl/maps/n327YXwXfeGo2w4w9',
    },
    // "G"
    // "H"
    {
        id: 'hardtimes',
        name:'Hard Times Cafe',
        hours: {0 : [[11,00],[23,00]], 1 : [[11,00],[23,00]], 2 : [[11,00],[23,00]], 3 : [[11,00],[23,00]], 4 : [[11,00],[23,00]], 5 : [[11,00],[23,00]], 6 : [[11,00],[23,00]]},
        type: 'food',
        disclaimer: 'Takeout only',
        mapsLink: 'https://goo.gl/maps/ALBSdxyWHFbiU4h89',
    },
    {
        id: 'hautedogs',
        name:'Haute Dogs & Fries',
        hours: {0 : [[11,00],[21,00]], 1 : [[11,00],[21,00]], 2 : [[11,00],[21,00]], 3 : [[11,00],[21,00]], 4 : [[11,00],[21,00]], 5 : [[11,00],[21,00]], 6 : [[11,00],[21,00]]},
        type: 'food',
        disclaimer: 'Delivery and Takeout',
        mapsLink: 'https://goo.gl/maps/vGprbdRCYrz38k3Z8',
    },
    {
        id: 'holycow',
        name:'Holy Cow',
        hours: {0 : [[11,30],[21,00]], 1 : [[11,30],[21,00]], 2 : [[11,30],[21,00]], 3 : [[11,30],[21,00]], 4 : [[11,30],[21,00]], 5 : [[11,30],[21,00]], 6 : [[11,30],[21,00]]},
        type: 'food',
        disclaimer: 'Curbside pickup and online',
        mapsLink: 'https://goo.gl/maps/wDCF7vLiNxqMi8v58',
    },
    {
        id: 'hopsshine',
        name:'Hops N Shine',
        hours: {0 : [[11,30],[20,30]], 1 : [[11,30],[20,30]], 2 : [[11,30],[20,30]], 3 : [[11,30],[20,30]], 4 : [[11,30],[20,30]], 5 : [[11,30],[20,30]], 6 : [[11,30],[23,00]]},
        type: 'food',
        disclaimer: 'Curbside pickup and online',
        mapsLink: 'https://g.page/HopsNShine?share',
    },
    {
        id: 'harristeeter',
        name:'Harris Teeter',
        hours: {0 : [[07,00],[20,00]], 1 : [[07,00],[20,00]], 2 : [[07,00],[20,00]], 3 : [[07,00],[20,00]], 4 : [[07,00],[20,00]], 5 : [[07,00],[20,00]], 6 : [[07,00],[20,00]]},
        type: 'grocery',
        disclaimer: 'Monitoring people and lines',
        mapsLink: 'https://goo.gl/maps/iZA3822aGpW6Rrvf7',
    },
    // "I"
    // "J"
    // "K"
    {
        id: 'killer',
        name:'Killer ESP',
        hours: {0 : [[07,00],[20,00]], 1 : [[07,00],[21,00]], 2 : [[07,00],[21,00]], 3 : [[07,00],[21,00]], 4 : [[07,00],[21,00]], 5 : [[07,00],[22,00]], 6 : [[07,00],[22,00]]},
        type: 'food',
        disclaimer: 'Limited number of people allowed',
        mapsLink: 'https://goo.gl/maps/EoPRYzFVaKsXq4Z4A',
    },
    // "L"
    // "M"
    {
        id: 'mishas',
        name:'Misha\'s Coffee Roasters',
        hours: {0 : [[06,00],[20,30]], 1 : [[06,00],[20,30]], 2 : [[06,00],[20,30]], 3 : [[06,00],[20,30]], 4 : [[06,00],[20,30]], 5 : [[06,00],[20,30]], 6 : [[06,00],[20,30]]},
        type: 'food',
        disclaimer: 'Limited number of people allowed',
        mapsLink: 'https://goo.gl/maps/eyvr4zoPUabP4j5M6',
    },
    {   
        id: 'momo',
        name:'Momo Sushi',
        hours: {0 : [[15,00],[21,30]], 1 : [[11,30],[22,00]], 2 : [[11,30],[22,00]], 3 : [[11,30],[22,00]], 4 : [[11,30],[22,00]], 5 : [[11,30],[22,00]], 6 : [[11,30],[22,00]]},
        type: 'food',
        disclaimer: 'Pickup food at window',
        mapsLink: 'https://g.page/momosushicafe?share',
    },
    // "N"
    {   
        id: 'nasime',
        name:'Nasime',
        hours: {0 : [[00,00],[00,00]], 1 : [[12,30],[19,30]], 2 : [[12,30],[19,30]], 3 : [[12,30],[19,30]], 4 : [[12,30],[19,30]], 5 : [[12,30],[19,30]], 6 : [[12,30],[19,30]]},
        type: 'food',
        disclaimer: 'Delivery and Pickup',
        mapsLink: 'https://goo.gl/maps/zKM9JCeRQB9Uc3Ui6',
    },
    // "O"
    // "P"
    {
        id: 'pennypost',
        name:'Penny Post',
        hours: {0 : [[12,00],[17,00]], 1 : [[12,00],[17,00]], 2 : [[12,00],[17,00]], 3 : [[12,00],[17,00]], 4 : [[12,00],[17,00]], 5 : [[12,00],[17,00]], 6 : [[12,00],[17,00]]},
        type: 'retail',
        disclaimer: 'Limited number of people allowed',
        mapsLink: 'https://goo.gl/maps/MCSGFy4WNonkkDKp8',
    },
    // "Q"
    // "R"
    // "S"
    // "T"
    {
        id: 'toast',
        name:'Toastique',
        hours: {0 : [[08,00],[16,00]], 1 : [[08,00],[16,00]], 2 : [[08,00],[16,00]], 3 : [[08,00],[16,00]], 4 : [[08,00],[16,00]], 5 : [[08,00],[16,00]], 6 : [[08,00],[16,00]]},
        type: 'food',
        disclaimer: 'Limited number of people allowed',
        mapsLink: 'https://goo.gl/maps/B9MVwj4RAWpYSwpk6',
    },
    {
        id: 'traderjoes',
        name:'Trader Joe\'s',
        hours: {0 : [[09,00],[19,00]], 1 : [[09,00],[19,00]], 2 : [[09,00],[19,00]], 3 : [[09,00],[19,00]], 4 : [[09,00],[19,00]], 5 : [[09,00],[19,00]], 6 : [[09,00],[19,00]]},
        type: 'grocery',
        disclaimer: 'Monitoring people and lines',
        mapsLink: 'https://goo.gl/maps/sZtNRNxcDNfpBDpp9',
    },
    // "U"
    // "V"
    // "W"
    {
        id: 'wholefoods',
        name:'Whole Foods Market',
        hours: {0 : [[07,00],[21,00]], 1 : [[07,00],[21,00]], 2 : [[07,00],[21,00]], 3 : [[07,00],[21,00]], 4 : [[07,00],[21,00]], 5 : [[07,00],[21,00]], 6 : [[07,00],[21,00]]},
        type: 'grocery',
        disclaimer: 'Monitoring people and lines',
        mapsLink: 'https://goo.gl/maps/efyTkhwRQiDA7mcX7',
    }
    // "X"
    // "Y"
    // "Z"
];