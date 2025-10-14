// if-else statements check
let browserName ="firefox"
if (browserName =="chrome"){
    console.log("Launching Chrome browser...")
}else {console.log("Launching default browser...")}

// switch statemen check
let testType = "smoke"
switch(testType){
    case "regression": console.log("Running Regression Tests..."); break;
    case "smoke": console.log("Running Smoke Tests..."); break;
    case "sanity": console.log("Running Sanity Tests..."); break;
    default: console.log("Running Default Smoke Tests...")
}