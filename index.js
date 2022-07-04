// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES
const messagesNotifications = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector("#message-search");

// ========= THEME CUSTOMIZATION =========
const theme = document.querySelector("#theme")
const themeModal = document.querySelector(".customize-theme")

// FONTS
const fontSizes = document.querySelectorAll(".choose-size span")
var root = document.querySelector(":root")

// PRIMARY COLOR
const colorPalette = document.querySelectorAll(".choose-color span")

// BACKGROUND
const bg1 = document.querySelector(".bg-1")
const bg2 = document.querySelector(".bg-2")
const bg3 = document.querySelector(".bg-3")
// =======================================

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
theme.addEventListener('click', () => {
    themeModal.style.display = "grid"
})

themeModal.addEventListener('click', (e) => {
    if(e.target.classList.contains('customize-theme')) {
        themeModal.style.display = "none"
    }
})

// FONTS
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        let fontSize;
        removeSizeSelector();
        size.classList.toggle('active');
        if (size.classList.contains("font-size-1")) {
            fontSize = "10px";
            root.style.setProperty("--sticky-top-left", "5.4rem");
            root.style.setProperty("--sticky-top-right", "5.4rem");
        } else if (size.classList.contains("font-size-2")) {
            fontSize = "13px";
            root.style.setProperty("--sticky-top-left", "5.4rem");
            root.style.setProperty("--sticky-top-right", "-7rem");
        } else if (size.classList.contains("font-size-3")) {
            fontSize = "16px";
            root.style.setProperty("--sticky-top-left", "-2rem");
            root.style.setProperty("--sticky-top-right", "-17rem");
        } else if (size.classList.contains("font-size-4")) {
            fontSize = "19px";
            root.style.setProperty("--sticky-top-left", "-5rem");
            root.style.setProperty("--sticky-top-right", "-25rem");
        } else if (size.classList.contains("font-size-5")) {
            fontSize = "22px";
            root.style.setProperty("--sticky-top-left", "-10rem");
            root.style.setProperty("--sticky-top-right", "-33rem");
        }
        document.querySelector("html").style.fontSize = fontSize;
    })
})

// PRIMARY COLOR
const removeColorSelector = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active')
    })
}
colorPalette.forEach(colorPicker => {
    colorPicker.addEventListener('click', () => {
        let primaryHue;
        if(colorPicker.classList.contains("color-1")) {
            primaryHue = 252;
        } else if(colorPicker.classList.contains("color-2")) {
            primaryHue = 52;
        } else if(colorPicker.classList.contains("color-3")) {
            primaryHue = 352;
        } else if(colorPicker.classList.contains("color-4")) {
            primaryHue = 152;
        } else if(colorPicker.classList.contains("color-5")) {
            primaryHue = 202;
        } 
        removeColorSelector()
        colorPicker.classList.add('active')
        root.style.setProperty('--color-primary-hue', primaryHue);
    })
})

// BACKGROUND
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty('--color-light-lightness', lightColorLightness);
    root.style.setProperty('--color-white-lightness', whiteColorLightness);
    root.style.setProperty('--color-dark-lightness', darkColorLightness);
}

bg1.addEventListener('click', () => {
    darkColorLightness = "17%";
    whiteColorLightness = "100%";
    lightColorLightness = "95%";

    // window.location.reload();

    // active class
    bg1.classList.add('active')
    bg2.classList.remove('active')
    bg3.classList.remove('active')

    changeBG();
})

bg2.addEventListener('click', () => {
    darkColorLightness = "95%";
    whiteColorLightness = "20%";
    lightColorLightness = "15%";

    // active class
    bg1.classList.remove('active')
    bg2.classList.add('active')
    bg3.classList.remove('active')

    changeBG();
})

bg3.addEventListener('click', () => {
    darkColorLightness = "95%";
    whiteColorLightness = "10%";
    lightColorLightness = "0%";

    // active class
    bg1.classList.remove('active')
    bg2.classList.remove('active')
    bg3.classList.add('active')

    changeBG();
})