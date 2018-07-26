// Code your solution in this file!
function logDriverNames(array){
  array.forEach(function(driver_name){
    console.log(driver_name.name);
  })
}

function logDriversByHometown(array, location){
  array.forEach(function(driver){
    if (driver.hometown == location){
      console.log(driver.name);
    }
  })
}

// function driversByRevenue(array){
//   array.sort
//   console.log(array)
// }
