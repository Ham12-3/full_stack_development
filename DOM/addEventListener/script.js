// Select the button element 


const btnClickEl = document.getElementById("clickButton")


function addEvent() {
    alert("You clicked me!")

}
btnClickEl.addEventListener("click", addEvent )

btnClickEl.addEventListener("dblclick", function() {
    alert("You clicked me!")
})

btnClickEl.addEventListener("mouseover", function() {
    alert("You clicked me!")
})

btnClickEl.addEventListener("mouseout", function() {
    alert("You clicked me!")
}
)


// onfocus onblur and onchange 
const inputEl = document.getElementById("input")

inputEl.addEventListener("focus", function() {
    console.log("focus")
}
)

inputEl.addEventListener("blur", function() {
    console.log("blur")
}
)


inputEl.addEventListener("change", function() {

    console.log("change")
}
)


// onsubmit 
const formEl = document.getElementById("form")

formEl.addEventListener("submit", function(event) {
    event.preventDefault()
    console.log("submit")
}
)