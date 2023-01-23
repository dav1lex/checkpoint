// # JS exercise
// Do:
//     FIRST, create a <form> with one input field (Task), a label for this input and one button (Add).
//     THEN, on submit of the form, gather user's input, turn JS data into JSON data, and save to Local
//     Storage in the form of an Array of Strings,
// AND create a <h3>  tag and display the tasks as a list,
//     AND reset/empty the task input (so that the user can enter a new task).
// NOW, make sure that when the user adds another task, it is added to the Array of Strings in Local Storage.
//     Use:
// addEventListener
// destructuring
// JSON.stringify
// localStorage

let arr = [];

let input = document.getElementById('tinput');
const submit = document.getElementById('submit');

submit.addEventListener("click", () => {
    arr.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(arr))

    const el = document.createElement("h3");
    el.innerHTML = input.value;
    document.body.appendChild(el);
    input.value  = ""

    console.log(localStorage.getItem("tasks"))
})



