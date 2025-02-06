const messages = [
    "chắc chắn chưa dạ?",
    "thsu chắc chắn chưaaa??",
    "chắc chắn rui í?",
    "thui mà....",
    "nghĩ kĩ iiiii!",
    "từ chối nữa là anh bùn í...",
    "siu bùn íii",
    "siu siu siu siu bùnnn",
    "thui được rui",
    "còn lâu mới choooo! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}