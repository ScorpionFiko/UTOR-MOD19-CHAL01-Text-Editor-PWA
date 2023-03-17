const butInstall = document.getElementById('buttonInstall');
// variable to hold the beforeinstallprompt event so that when the user cancels on the install, it is retriggered
let beforeInstallEvent;


window.addEventListener('beforeinstallprompt', (event) => {
    // prevents the event from popping the instsall dialogue until the user clicks on the install button
    event.preventDefault();
    beforeInstallEvent = event;
});

butInstall.addEventListener('click', async () => {
    // checks the beforeinstall event before showing the intall prompt to the user
    if (beforeInstallEvent) {
        // grabs user choice and if accepted, 
        // - installs the app, 
        // - changes the button text to installed
        // - removes the button after 2 seconds
        const userChoice = await beforeInstallEvent.prompt();
        if (userChoice.outcome === 'accepted') {
            butInstall.textContent = 'Installed!';
            setTimeout(() => { butInstall.style.display = "none"; }, 2000);
        }
    }
});

// outputs a prompt showing that the app is installed
window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
});