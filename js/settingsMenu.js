function settingsMenu () {
    const gear = document.getElementById('settingsGear')
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
        }
        else {
            sliderContainer.classList.remove('justify-start');
            sliderContainer.classList.add('justify-end');
            sliderContainer.classList.remove('bg-gray-300');
            sliderContainer.classList.add('light-blue-background');
        }
    })
}

//intializing the settings menu
settingsMenu()