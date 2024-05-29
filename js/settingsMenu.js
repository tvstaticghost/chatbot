function settingsMenu () {
    const gear = document.getElementById('settingsGear');
    const menuWindow = document.getElementById('menuWindow');
    const sliderContainer = document.getElementById('sliderContainer');
    const slider = document.getElementById('slider');

    gear.addEventListener('mouseover', () => {
        gear.classList.remove('rotate-icon-back')
        gear.classList.add('rotate-icon')
    })

    gear.addEventListener('mouseout', () => {
        gear.classList.remove('rotate-icon')
        gear.classList.add('rotate-icon-back')
    })

    gear.addEventListener('click', () => {
        menuWindow.classList.toggle('hidden');
    });

    sliderContainer.addEventListener('click', () => {
        if (sliderContainer.classList.contains('justify-end')) {
            sliderContainer.classList.remove('justify-end');
            sliderContainer.classList.add('justify-start');
            sliderContainer.classList.remove('light-blue-background');
            sliderContainer.classList.add('bg-gray-300');
            toggleDarkMode('off');
        }
        else {
            sliderContainer.classList.remove('justify-start');
            sliderContainer.classList.add('justify-end');
            sliderContainer.classList.remove('bg-gray-300');
            sliderContainer.classList.add('light-blue-background');
            toggleDarkMode('on');
        }
    })
}

//fix this function
function toggleDarkMode(state) {
    const header = document.getElementById('chatHeader');
    const outputScreen = document.getElementById('conversationOutput');
    const gear = document.getElementById('settingsGear');

    if (state === 'off') {
        document.body.classList.remove('text-slate-100');
        document.body.classList.add('text-black');
        header.classList.remove('blue-background');
        header.classList.add('bg-white');
        header.classList.add('border-2', 'border-black');
        gear.classList.remove('white-filter');
        outputScreen.classList.remove('blue-background');
        outputScreen.classList.add('bg-gray-300');
    }
    else {
        document.body.classList.remove('text-black');
        document.body.classList.add('text-slate-100');
        header.classList.remove('bg-white');
        header.classList.add('blue-background');
        header.classList.remove('border-2', 'border-black');
        gear.classList.add('white-filter');
        outputScreen.classList.remove('bg-gray-300');
        outputScreen.classList.add('blue-background');
    }
}

//intializing the settings menu
settingsMenu()