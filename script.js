const topInput = document.getElementById("topInput");
const bottomInput = document.getElementById("bottomInput");
const topText = document.getElementById("topText");
const bottomText = document.getElementById("bottomText");

const memeImage = document.getElementById("memeImage");
const memeSelector = document.getElementById("memeSelector");

const randomBtn = document.getElementById("randomBtn");
const downloadBTn = document.getElementById("downlaodBtn");

// Live text update
topInput.addEventListener("input", () => {
    topText.innerText = topInput.value;
});

bottomInput.addEventListener("input", () => {
    bottomText.innerText = bottomInput.value;
});

// Change meme image
memeSelector.addEventListener("change", () => {
    memeImage.src = memeSelector.value;
});

// Random Meme
const memes = [
  "https://i.imgflip.com/1ur9b0.jpg",
  "https://i.imgflip.com/30b1gx.jpg",
  "https://i.imgflip.com/1ihzfe.jpg"
];

randomBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * memes.length);
    memeImage.src = memes[randomIndex];
});

// Download meme as image
downloadBTn.addEventListener("click", () => {
    html2canvas(document.getElementById("meme")).then(canvas => {
        const link = document.createdElement("a");
        link.download = "meme.png";
        link.href = canvas.toDataURL();
        link.click();
    });
});