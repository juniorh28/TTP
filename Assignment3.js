//1.Select section with an id without using querySelector
let part1 = document.getElementById("container")

//2. Select section with id using querySelector
let part2 = document.querySelector("container")

//3. Select all of the list items with a class of "second".
let part3 = document.getElementsByClassName("second")

//4. Select a list item with a class of third, but only the list item inside of the ol tag.
let part4 = document.getElementsByClassName("ol.third")

//5. Give the section with an id of container the text "Hello!".
let part5 = document.getElementById("container")
part5.innerHTML = "Hello!"

//6. Add the class main to the div with a class of footer.
let part6 = document.getElementsByClassName("div.footer").className += "main"

//7. Remove the class main on the div with a class of footer.
let part7 = part6.classList.remove("main")

//8. Create a new li element.
let part8 = document.createElement("LI")

//9. Give the li the text "four".
let part9 = document.createTextNode = "four"
part8.appendChild(part9)

//10. Append the li to the ul element.
let part10 = document.getElementsByTagName("ul").appendChild(part8);

//11. Loop over all of the lis inside the ol tag and give them a background color of "green".
let part11 = document.getElementsByTagName("ol li")

for (let i = 0; i < part11.length; i++) {
    part11[i].style.color = "green"
}

//12. Remove the div with a class of footer.
let part12 = document.getElementsByClassName("div.footer")
part12.removeChild(part12.firstChild)