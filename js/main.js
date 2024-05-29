//function activated when a user clicks the send button to read the user input field
function takeInput() {
    const userTextBar = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    const conversation = new analyzeInput();

    sendBtn.addEventListener("click", () => {
        if (userTextBar.value !== '') {
            createTextBlock(userTextBar.value, 'user');
            conversation.routeInput(userTextBar.value);
            userTextBar.value = '';
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            if (userTextBar.value !== '') {
                createTextBlock(userTextBar.value, 'user');
                conversation.routeInput(userTextBar.value);
                userTextBar.value = '';
            }
        }
    });
}

//function that returns the current hour:minutes am/pm to attach to each message
function getTime() {
    const currentDate = new Date();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    const amPm = currentHour >= 12 ? 'PM' : 'AM';

    if (currentMinute < 10) {
        currentMinute = '0' + currentMinute.toString()
    }
    currentHour %= 12;

    return `${currentHour}:${currentMinute} ${amPm}`;
}

//function that creates a text block when the user enters texts and presses send
function createTextBlock(text, user) {
    const outputScreen = document.getElementById('conversationOutput');
    const wrapper = document.createElement('div');
    const div = document.createElement('div');
    const timeStamp = document.createElement('p');
    const p = document.createElement('p');

    timeStamp.classList.add('text-xs', 'pl-3');
    timeStamp.innerHTML = getTime();
    outputScreen.appendChild(wrapper);
    wrapper.appendChild(div);

    if (user === 'user') {
        wrapper.classList.add('w-3/4', 'relative', 'mt-2', 'right-1/4');
        div.classList.add('flex', 'gray-background', 'text-black', 'rounded-3xl', 'p-2', 'pl-3');
        p.classList.add('user-entry')
    }
    else if (user === 'bot') {
        wrapper.classList.add('w-3/4', 'relative', 'mt-2');
        div.classList.add('p-2', 'pl-3', 'light-blue-background', 'rounded-3xl');
        p.classList.add('bot-entry')
    }

    div.appendChild(p)
    p.classList.add('text-entry');
    p.innerHTML = text;
    wrapper.appendChild(timeStamp);

    if (user === 'bot') {
        timeStamp.classList.add('text-end', 'pr-4');
    }

    outputScreen.scrollTop = outputScreen.scrollHeight;
}

function createButton(value, id, color) {
    const button = document.createElement('button');
    button.innerHTML = value;
    button.classList.add('py-2', 'px-7', 'border', 'black-border', 'rounded-3xl', 'relative', 'hover:cursor-pointer', color, 'text-black', 'hover:opacity-75');
    button.id = id;

    return button;
}

//function that creates yes or no options for creating a ticket on the user's behalf.
function createTicketOptions() {

    const outputScreen = document.getElementById('conversationOutput');
    const div = document.createElement('div');
    const yesBtn = createButton('Yes', 'yesBtn', 'gray-background');
    const noBtn = createButton('No', 'noBtn', 'gray-background');

    outputScreen.appendChild(div);
    div.classList.add('flex', 'gap-1', 'mt-2', 'mb-2', 'w-3/4', 'justify-center');
    div.appendChild(yesBtn);
    div.appendChild(noBtn);

    yesBtn.addEventListener('click', () => {
        generateTicket();
    }, {once: true});

    noBtn.addEventListener('click', () => {
        return null;
    }, {once: true});
}

//Function (will probably make this a class) that generates a user on behalf of the user FIXME
function generateTicket() {
    //FIX FUNCTION LATER
    console.log('Generating a ticket');
    getTranscript();
}


//function that cycles through all elements and gathers the values said by the user and the bot. This will be passed to the function that generates a ticket on the user's behalf.
function getTranscript() {
    const textEntries = document.getElementsByClassName('text-entry');

    for (let i = 0; i < textEntries.length; i++) {
        if (textEntries[i].classList.contains('user-entry')) {
            console.log(`User: ${textEntries[i].innerHTML}`)
        }
        else if (textEntries[i].classList.contains('bot-entry')) {
            console.log(`Bot: ${textEntries[i].innerHTML}`)
        }
    }
}

//Initialize starting message
createTextBlock('What can I help you with?', 'bot');
//Initialize user input handling
takeInput()