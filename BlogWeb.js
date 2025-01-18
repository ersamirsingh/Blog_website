// For Fonts Animation

const ani = document.getElementsByClassName("animotion");
const data1 = ani[0].textContent; 
const data2 = ani[1].textContent;

function animateText(element, text, delay, callback) {
    let render = "";
    let index = 0;

    const interval = setInterval(() => {
        render += text[index];
        element.textContent = render; 
        index++;

        if (index >= text.length) {
            clearInterval(interval);
            if (callback) callback();
        }
    }, delay);
}

animateText(ani[0], data1, 100, () => {});
animateText(ani[1], data2, 100);



//For studio page
function formatText(command) {
    document.execCommand(command, false, null);
}

function addHeading(tag) {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const heading = document.createElement(tag);
        heading.textContent = range.toString();
        range.deleteContents();
        range.insertNode(heading);
    }
}



//For calendar page

function addGoal() {
    const dateInput = document.getElementById('goal-date');
    const goalList = document.getElementById('goal-list');
    const dateValue = dateInput.value;

    if (dateValue) {
        const listItem = document.createElement('li');
        listItem.textContent = `Goal set for: ${new Date(dateValue).toLocaleDateString()}`;
        goalList.appendChild(listItem);
        dateInput.value = '';
    } else {
        alert('Please select a date for your goal.');
    }
}

document.getElementById("login-btn").addEventListener('click',()=>{
    window.location.href = "LoginOrSignup.html";
})

document.getElementById("signup-btn").addEventListener('click',()=>{
    window.location.href = "LoginOrSignup.html";
})

document.getElementById("about").addEventListener('click', ()=>{
    window.location.href = "About.html";
})

document.getElementById('instagram').addEventListener('click', ()=>{
    location.href = "instagram.com";
})

document.getElementById('facebook').addEventListener('click', ()=>{
    location.href = "www.facebook.com";
})

document.getElementById('x').addEventListener('click', ()=>{
    location.href = "x.com";
})

document.getElementById('page2-section-btn').addEventListener('click', ()=>{
    window.location.href = "Studio.html";
})