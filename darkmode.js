console.log('loading')

function switchColourScheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.remove('w3-light-grey')
        document.body.classList.add('w3-black')
    } else {
        document.body.classList.remove('w3-black')
        document.body.classList.add('w3-light-grey')
    }
}

// Event to detect changes to auto dark/light mode
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    switchColourScheme()
});

// Apply colour mode on inital load
document.addEventListener("DOMContentLoaded", function() {
    switchColourScheme()
    console.log('loaded')
})