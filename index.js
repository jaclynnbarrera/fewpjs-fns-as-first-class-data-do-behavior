/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(str) {
  let time = str.split(":")
  let hour = parseInt(time[0])

  if (hour < 13) {
    return "Good Morning"
  } else if (hour > 11 && hour < 18) {
    return "Good Afternoon"
  } else if (hour > 17) {
    return "Good Evening"
  }
}

function displayMessage(string) {
  document.getElementById("greeting").innerText = string
}