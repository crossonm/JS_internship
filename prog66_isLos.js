//M.S. Crosson    //prog66_isLos
//31 JAN 2019     //JSIntern

/* Task is to write a JS program to return the name of a given city if and only
if the city name begins with 'Los' or 'New'; otherwise, return blank
*/

function isLosOrNew(city) {
    first3 = city.substring(0,3)
    if ((first3 == "Los") || (first3 == "New")) {
        return city
    } else {
        return ""
    }
}

returnValue = isLosOrNew("Cincinnatti")
console.log(returnValue)
returnValue = isLosOrNew("New Orleans")
console.log(returnValue)
returnValue = isLosOrNew("Los Alamos")
console.log(returnValue)
