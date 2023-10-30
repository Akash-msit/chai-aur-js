const accountId = 1234
let accountEmail = "akash@google.com"
var accountPassword = 123321


let accountState; //we declared that variable but not assigned any value;

//accountId =23 can't modify that value cause we assign a const.
accountCity = "Kolkata"

/*
    Prefer not to use var
    Because of issue in block scope and functional scope
*/

//console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])