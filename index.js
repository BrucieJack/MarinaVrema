const ruBtn = document.querySelector(".RuLink");
const engBtn = document.querySelector(".EnLink");
const navBar = document.querySelector(".navbar-menu");
const navBarBottom = document.querySelector(".navbar-menu-bottom");
const aboutMe = document.querySelector(".aboutme-title");
const aboutMeText = document.querySelector(".aboutMe-text");
const gallery = document.querySelector(".title");

ruBtn.addEventListener("click", ruBtnHandleClick);
engBtn.addEventListener("click", engBtnHandleClick)

const navBarArr = [];
const navBarBottomArr = [];

const ruArr = ['Обо мне', 'Галерея', 'Контакты'];

const engArr = ['About me', 'Gallery', 'Contacts'];

const ruAboutMeText = `Меня зовут Марина fashion и lifestyle фотограф. Опыт работы в этой сфере 17 лет.
Создаю незабываемые фотографии, живые, наполненные смыслом и красотой.
Помогаю с позированием. 
Я создаю условия для творчества и реализую проект от начала и до конечного результата. Ваша задача- наслаждаться процессом, потому что превосходный результат гарантирован. 
Об этом позаботиться ваш фотопродюссер.`;

const engAboutMeText = `I'm Marina, fashion and lifestyle photographer. Experience of mine in this field is about 17 years. I create unforgettable, lively photos, filled with meaning and beauty. I'm helping with posing.
I create the conditions for creativity and implement the project from the beginning to the final result.
Your task is to enjoy the process, because an excellent result guaranteed.
Your photo producer will take care of this.`;


for(let i = 0; i < navBar.childElementCount; i++) {
    navBarArr.push(navBar.children[i])
}

for(let i = 0; i < navBarBottom.childElementCount; i++) {
    navBarBottomArr.push(navBarBottom.children[i])
}

function ruBtnHandleClick(e) {
    e.preventDefault()

    for(let i = 0; i < navBar.childElementCount; i++) {
        navBarArr[i].innerText = ruArr[i];
    }
    
    aboutMe.innerText = ruArr[0];

    gallery.innerText = ruArr[1];

    aboutMeText.innerText = ruAboutMeText;

    for(let i = 0; i < navBarBottom.childElementCount; i++) {
        navBarBottomArr[i].innerText = ruArr[i];
    }

}

function engBtnHandleClick(e) {
    e.preventDefault()

    for(let i = 0; i < navBar.childElementCount; i++) {
        navBarArr[i].innerText = engArr[i];
    }
    
    aboutMe.innerText = engArr[0];

    gallery.innerText = engArr[1];

    aboutMeText.innerText = engAboutMeText;

    for(let i = 0; i < navBarBottom.childElementCount; i++) {
        navBarBottomArr[i].innerText = engArr[i];
    }

}

