const accountId = 144553
let accountEmail = "xyz@google.com"
var accountPassword = "12345"
accountCity = "jhansi"
let accountState

// variable value assigned in const not changed or not allowed
accountEmail= "abc@google.com"
accountPassword="321321"
accountCity="Bengaluru"

// prefer not to use var because of issue in block scope and functional scope 
console.table([accountId,accountEmail,accountPassword,accountPassword,accountState])