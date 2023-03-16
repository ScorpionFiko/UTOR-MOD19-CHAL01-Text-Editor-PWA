const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';


});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async (event) => {
    const OK = await event.prompt();
    if (OK) {
        butInstall.setAttribute('disabled', true);
        butInstall.textContent = 'Installed!';
    }
});
// TODO: Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => { 
    event.alert('Successfully installed!');
    console.log('👍', 'appinstalled', event);
});
