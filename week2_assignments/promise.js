let dataFromDatabase = new Promise(function (resolve, reject) {
  console.log("Fetching data from Database, Please wait...");

  const data = true;

  setTimeout(() => {
    if (data === true) {
      resolve("Data fetched successfully!"); // success
    } else {
      reject("Data not Found!"); // failure
    }
  }, 3000);
});

//calling the promise here
dataFromDatabase
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.error(errorMessage);
  });
