// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES
const messagesNotifications = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector("#message-search");

// THEME CUSTOMIZATION
const theme = document.querySelector("#theme")

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        menuItems.forEach(item => {
            item.classList.remove('active');
        })
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications') {
            document.querySelector('.notifications-popup').
            style.display = 'none';
            document.querySelector("#notifications .notification-count").
            style.display="block" ;
        } else {
            document.querySelector('.notifications-popup').
            style.display="block"; 
            document.querySelector("#notifications .notification-count").
            style.display="none" ;
        }
    })
})

// HIGHLIGHT MESSAGES

messagesNotifications.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 0.6rem var(--color-messages)';
    document.querySelector(".messages-count").
            style.display="none" ;
    setTimeout(() => {
         messages.style.boxShadow = 'none';
          document.querySelector(".messages-count").
            style.display="block" ;
    }, 2000);
})

// SEARCH MESSAGE
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = "flex";
        } else {
            user.style.display = "none";
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage)

// THEME CUSTOMIZATION