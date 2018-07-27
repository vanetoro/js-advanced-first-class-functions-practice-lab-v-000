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

function driversByRevenue(array){
  return array.slice().sort(function(a,b){
    return a.revenue - b.revenue
  })

}

function driversByName(array){
  return array.slice().sort(function(a,b){
    return a['name'].localeCompare(b['name']);
  })
}

function totalRevenue(array){
  array.reduce(function(0,revenue){
    console.log(revenue)
  }

}

function averageRevenue(){

}
