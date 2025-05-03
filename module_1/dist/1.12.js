"use strict";
{
    //nullable types / unknown types
    const searchName = (value) => {
        if (value) {
            console.log('seearching');
        }
        else {
            console.log('There is nothing to search');
        }
    };
    searchName(null);
    // unknown typeof
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms-1`);
        }
        if (typeof value === 'string') {
            const [result, unit] = value.split(' ');
            console.log(result);
        }
    };
    getSpeedInMeterPerSecond('1000 kmh-1');
    //
}
