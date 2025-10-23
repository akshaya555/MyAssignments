let browser = "Chrome";

function checkBrowserVersion(timeOut, callback) {
  console.log("Waiting for 2 seconds..."); //printed before the timeout
  setTimeout(() => {
    console.log("Checking the version");
    callback("141.0.7390.124"); // call the callback AFTER timeout
  }, timeOut);
}

function version(browserVersion) {
  console.log("The version of the browser is " + browserVersion);
}

checkBrowserVersion(2000, version);
