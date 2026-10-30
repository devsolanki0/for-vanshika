const welcome = document.getElementById("welcome");
const content = document.getElementById("content");
const openLetter = document.getElementById("openLetter");

openLetter.addEventListener("click", () => {
  welcome.classList.add("hidden");
  content.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
  sprinkle(window.innerWidth / 2, 160, 28);
});

function sprinkle(originX = window.innerWidth / 2, originY = window.innerHeight / 2, amount = 18) {
  const icons = ["♡", "✧", "✦", "♥", "✨", "🌸"];
  for (let i = 0; i < amount; i++) {
    const item = document.createElement("span");
    item.className = "particle";
    item.textContent = icons[Math.floor(Math.random() * icons.length)];
    item.style.left = `${originX + (Math.random() - 0.5) * 170}px`;
    item.style.top = `${originY + (Math.random() - 0.5) * 80}px`;
    item.style.fontSize = `${12 + Math.random() * 18}px`;
    item.style.setProperty("--x", `${(Math.random() - 0.5) * 180}px`);
    document.body.appendChild(item);
    setTimeout(() => item.remove(), 1800);
  }
}

document.getElementById("sparkleButton").addEventListener("click", (event) => {
  sprinkle(event.clientX || window.innerWidth / 2, event.clientY || 120, 30);
});

const breathButton = document.getElementById("breatheButton");
const breathCircle = document.getElementById("breathCircle");
const breathLabel = document.getElementById("breathLabel");
const breathText = document.getElementById("breathText");
let breathing = false;

breathButton.addEventListener("click", () => {
  if (breathing) return;
  breathing = true;
  breathButton.textContent = "You've got this, queen ♡";
  const steps = [
    { label: "inhale", text: "Breathe in gently… you're allowed to slow down.", scale: true, duration: 4000 },
    { label: "hold softly", text: "Hold for a tiny moment. Nothing needs solving right now.", scale: true, duration: 2000 },
    { label: "exhale", text: "Let it out slowly. You only need to get through this breath.", scale: false, duration: 5000 }
  ];
  let index = 0;
  const runStep = () => {
    const step = steps[index];
    breathLabel.textContent = step.label;
    breathText.textContent = step.text;
    breathCircle.classList.toggle("breathing", step.scale);
    setTimeout(() => {
      index++;
      if (index < steps.length) runStep();
      else {
        breathing = false;
        breathButton.textContent = "Let's do one more ♡";
        breathText.textContent = "Well done, queen. One breath at a time is enough.";
        sprinkle(window.innerWidth / 2, window.innerHeight * 0.65, 12);
      }
    }, step.duration);
  };
  runStep();
});

const loveMessages = [
  "Official reminder: you are a limited edition, not someone to be taken for granted. 👑",
  "You don't have to glow every day. Rest is part of your magic. 🌷",
  "Sending you a pocket full of hugs, courage, and tiny sparkles. ♡",
  "Your future self is going to be so proud of how gently you got through this. ✨",
  "Queen, please drink some water and give that lovely heart a little kindness. 💗"
];
document.getElementById("loveButton").addEventListener("click", (event) => {
  const message = loveMessages[Math.floor(Math.random() * loveMessages.length)];
  document.getElementById("loveMessage").textContent = message;
  sprinkle(event.clientX || window.innerWidth / 2, event.clientY || window.innerHeight * 0.8, 24);
});

// Keep empty photo frames visible until the matching image file is added.
document.querySelectorAll(".photo-frame img").forEach((img) => {
  img.addEventListener("load", () => {
    img.previousElementSibling.style.visibility = "hidden";
  });
});


// A gentle reminder from the grown-up you to the younger you.
const hugButton = document.getElementById('hugButton');
const hugResponse = document.getElementById('hugResponse');
if (hugButton && hugResponse) {
  hugButton.addEventListener('click', () => {
    hugResponse.textContent = '🫂 Imagine wrapping little-you in the gentlest hug and saying: “You never had to be perfect to be loved. I am here with you. We will take this one day at a time.” 🤍';
    sprinkle(window.innerWidth / 2, window.innerHeight * 0.6, 12);
  });
}
