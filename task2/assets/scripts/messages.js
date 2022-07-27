// Recursive function for checking if clicked on messages window
function findMessages(el) {
    if (el.id == 'messages') return true;
    else if (el.tagName == 'BODY') return false;
    else return findMessages(el.parentElement);
}

// Close the messages window
function closeMessages(el){
    el.style.transform = 'translateY(0)';
    el.style.opacity = '0';
    setTimeout(() => {
        el.style.display = 'none';
    }, 300);
}

// For closing the messages window when clicked anywhere else
document.addEventListener("click", (e) => {
    el = document.getElementById("messages");
    if (el.style.display == 'block'){
        if (!findMessages(e.target) && e.target.id != 'messages-btn') closeMessages(el);
    }
})

// Handle the messages button click
function messagesClick() {
    messages = document.getElementById("messages");

    // With animation and with the block gone
    if (messages.style.display == 'none'){
        messages.style.display = 'block';
        setTimeout(() => {
            messages.style.transform = 'translateY(10px)';
            messages.style.opacity = '1';
        }, 100);
    } else closeMessages(messages);

    // With animation, but the element just gets transparent
    // if (messages.style.opacity == '0'){
    //     messages.style.transform = 'translateY(10px)';
    //     messages.style.opacity = '1';
    // } else {
    //     messages.style.transform = 'translateY(0)';
    //     messages.style.opacity = '0';
    // }

    // Without animation, but the element has no hiding animation
    // messages = document.getElementById("messages");
    // if (messages.style.display == 'none'){
    //     messages.style.display = 'block';
    // } else {
    //     messages.style.display = 'none';
    // }
}
