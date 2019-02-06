//M.S. Crosson    //prog86_typesOfAngles.js
//5 FEB 2019     //JSIntern

/* Task is to write a JS program to find the types of a given angle:
acute (<90 degrees); right (90 degrees); obtuse (91-179 degrees) or 
straight (180 degrees)  */


function typeAngle(num){

    var type = "";


    if (num < 0) {
        type = "impossible"
    } else if (num == 0) {
        type = "line"
    } else if (num < 90) {
        type = "acute"
    } else if (num == 90) {
        type = "right"
    } else if (num < 180) {
        type = "obtuse"
    } else if (num == 180) {
        type = "right"
    } else if (num > 180) {
        type = "impossible"
    }
    console.log(num + " degrees is a " + type + " angle.")
}

typeAngle(-5)
typeAngle(0)
typeAngle(9)
typeAngle(90)
typeAngle(105)
typeAngle(180)
typeAngle(200)