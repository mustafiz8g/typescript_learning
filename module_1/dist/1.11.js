"use strict";
var _a, _b;
{
    //
    // ternary operator || optional chaining || nullish coalescing operator
    const age = 25;
    if (age >= 18) {
        console.log('adult');
    }
    else {
        console.log('not adult');
    }
    const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
    //    console.log({isAdult})
    //nullish coalescing operator
    // null / undefined ----> decision making
    const isAuthenticated = '';
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';
    console.log({ result1, result2 });
    const user = {
        name: 'Mustafizur',
        address: {
            city: 'mym',
            road: "awesome road",
            presentAdress: 'my town'
        }
    };
    const permanentAdress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAdress) !== null && _b !== void 0 ? _b : 'No Permanent Adress';
    console.log({ permanentAdress });
    //
}
