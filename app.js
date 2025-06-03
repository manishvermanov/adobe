const carousel = document.querySelector('.anime-carousel');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

const card = document.querySelector('.anime-card');
const cardStyle = getComputedStyle(card);
const cardWidth = card.offsetWidth + parseInt(cardStyle.marginRight); // card width + gap

rightBtn.addEventListener('click', () => {
  carousel.classList.add('active');
  carousel.scrollLeft += cardWidth;
  setTimeout(() => carousel.classList.remove('active'), 300);
});

leftBtn.addEventListener('click', () => {
  carousel.classList.add('active');
  carousel.scrollLeft -= cardWidth;
  setTimeout(() => carousel.classList.remove('active'), 300);
});


  // <!-- char ends/ explore starts -->

const quotes1 = [
  {
    text: "I'm gonna be King of the Pirates!",
    meta: "— Monkey D. Luffy, One Piece<br><em>Episode 1 — \"I'm Luffy! The Man Who's Gonna Be King of the Pirates!\"</em>"
  },
  {
    text: "Power comes in response to a need, not a desire.",
    meta: "— Goku, Dragon Ball Z<br><em>Frieza Saga — Episode 92: \"Transformation\"</em>"
  }
];

const quotes2 = [
  {
    text: "A lesson without pain is meaningless.",
    meta: "— Edward Elric, Fullmetal Alchemist: Brotherhood<br><em>Episode 64 — \"Journey's End\"</em>"
  },
  {
    text: "Forgetting is like a wound. The wound may heal, but it has already left a scar.",
    meta: "— Monkey D. Luffy, One Piece<br><em>Episode 223 — \"Zoro Bares His Fangs!\"</em>"
  }
];

let index1 = 0;
let index2 = 0;

function typeWriterEffect(id, quoteArray, quoteIndex) {
  const quoteTextElement = document.getElementById(`quote-text-${id}`);
  const quoteMetaElement = document.getElementById(`quote-meta-${id}`);
  const quote = quoteArray[quoteIndex];

  quoteTextElement.innerHTML = '';
  quoteMetaElement.innerHTML = '';

  let charIndex = 0;

  function typeText() {
    if (charIndex < quote.text.length) {
      quoteTextElement.innerHTML += quote.text.charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 80); // speed for main quote
    } else {
      // Start typing the metadata after quote finishes
      typeMeta();
    }
  }

  let metaIndex = 0;
  let strippedMeta = quote.meta.replace(/<br>/g, "\n").replace(/<[^>]*>/g, ""); // remove html for typing

  function typeMeta() {
    if (metaIndex < strippedMeta.length) {
      quoteMetaElement.innerText += strippedMeta.charAt(metaIndex);
      metaIndex++;
      setTimeout(typeMeta, 30); // speed for meta
    } else {
      quoteMetaElement.innerHTML = quote.meta; // replace plain with HTML version
    }
  }

  typeText();
}


function cycleTypewriter1() {
  typeWriterEffect(1, quotes1, index1);
  index1 = (index1 + 1) % quotes1.length;
}

function cycleTypewriter2() {
  typeWriterEffect(2, quotes2, index2);
  index2 = (index2 + 1) % quotes2.length;
}

setInterval(cycleTypewriter1, 10000);
setInterval(cycleTypewriter2, 10000);

// Start immediately
cycleTypewriter1();
cycleTypewriter2();