const titles = ["FOKSIT"];
const descriptions = ["Jelajahi dunia dengan informasi terbaik dan pengalaman luar biasa!"];

let titleIndex = 0, titleCharIndex = 0;
let descIndex = 0, descCharIndex = 0;
let isDeletingTitle = false;
let isDeletingDesc = false;

const titleElement = document.getElementById("title");
const descElement = document.getElementById("description");

function typeEffectTitle() {
    const currentTitle = titles[titleIndex];

    if (isDeletingTitle) {
        titleCharIndex--;
    } else {
        titleCharIndex++;
    }

    titleElement.textContent = currentTitle.substring(0, titleCharIndex);

    if (!isDeletingTitle && titleCharIndex === currentTitle.length) {
        setTimeout(() => isDeletingTitle = true, 3000);
    } else if (isDeletingTitle && titleCharIndex === 0) {
        isDeletingTitle = false;
        titleIndex = (titleIndex + 1) % titles.length;
    }

    setTimeout(typeEffectTitle, isDeletingTitle ? 50 : 100);
}

function typeEffectDesc() {
    const currentDesc = descriptions[descIndex];

    if (isDeletingDesc) {
        descCharIndex--;
    } else {
        descCharIndex++;
    }

    descElement.textContent = currentDesc.substring(0, descCharIndex);

    if (!isDeletingDesc && descCharIndex === currentDesc.length) {
        setTimeout(() => isDeletingDesc = true, 2500);
    } else if (isDeletingDesc && descCharIndex === 0) {
        isDeletingDesc = false;
        descIndex = (descIndex + 1) % descriptions.length;
    }

    setTimeout(typeEffectDesc, isDeletingDesc ? 50 : 100);
}

// Jalankan efek mengetik untuk judul & penjelasan
typeEffectTitle();
typeEffectDesc();