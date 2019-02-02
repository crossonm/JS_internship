/* assignment is to reproduce the '99 Bottles of Beer' program from
Headfirst JavaScript. Self-imposed difficulty: to do it without 
referring to the book. */

container = prompt("It's lame Mad Libs! Give me a container.")
thing = prompt("Now give me a thing small enough to fit in the container.")
theLocation = prompt("How about a location?")
num1 = Number(prompt("Lastly, how about a number?"))

 while (num1 > 1) {
    document.write("♫	" + num1  + " " + container + "s of " + thing +"s on the " + theLocation +"<br>")
    document.write(num1 + " " + container + "s of " + thing + "s" +"  ♪ <br>")
    document.write("♫	Take one down, pass it around" +"<br>")
    document.write(num1 + " " + container + "s of " + thing + "s" +"  ♪ <br>")
    document.write("<br>")
    num1 = num1 - 1
}

if (num1 == 1) {
    document.write("♫	" + num1  + " " + container + " of " + thing +"s on the " + theLocation +"  ♪ <br>")
    document.write(num1 + " " + container + " of " + thing + "s" +"<br>")
    document.write("♫	Take one down, pass it around" +"<br>")
    document.write(num1 + " " + container + " of " + thing + "s" +"   ♪ <br>")
    document.write("<br>")
}
