const accountId=14453
let accountEmail="hitesh@google.com"
var accountPasword="12345"
accountCity="Jaipur"
let accountState;
// accountId=2 // not allowed
console.log(accountId);
accountEmail="hc@hc.com"
accountPasword="23232"
accountCity="lucknow"
console.log(accountId);
console.table([accountId,accountEmail,accountPasword,accountCity,accountState])
/*
prefer not to use var
beaucse of issue in block scope and fucntional scope
*/