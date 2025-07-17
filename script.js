let mode = 'love'; // default

document.getElementById("loveBtn").onclick = () => {
  mode = 'love';
  document.getElementById("loveBtn").classList.add("active");
  document.getElementById("friendBtn").classList.remove("active");
};

document.getElementById("friendBtn").onclick = () => {
  mode = 'friend';
  document.getElementById("friendBtn").classList.add("active");
  document.getElementById("loveBtn").classList.remove("active");
};

function checkCompatibility() {
  const sign1 = document.getElementById("sign1").value;
  const sign2 = document.getElementById("sign2").value;
  const result = document.getElementById("result");

  if (!sign1 || !sign2) {
    result.textContent = "Please select both zodiac signs.";
    return;
  }

  const loveMessages = [
    "Their hearts beat as one in cosmic rhythm. Love flows naturally 💖.",
    "Deep emotional connection and passion surround this couple 💫.",
    "Strong attraction, but love needs understanding 🌹.",
    "Soulmates in the stars! Romance is written in destiny 💘.",
    "With care and communication, this love can blossom beautifully 🌸."
  ];

  const friendMessages = [
    "These signs make wonderful friends — supportive and loyal 🤝.",
    "They balance each other out perfectly in friendship 🧩.",
    "Fun, laughter, and good vibes — a great match! 😄",
    "Their bond is full of trust and great conversations ☕.",
    "They may differ, but together they grow 🌱."
  ];

  const score = Math.floor(Math.random() * 41) + 60; // 60% - 100%
  const msg =
    mode === "love"
      ? loveMessages[Math.floor(Math.random() * loveMessages.length)]
      : friendMessages[Math.floor(Math.random() * friendMessages.length)];

  const emoji = mode === "love" ? "💘" : "🤝";

  result.innerHTML = `<strong>${sign1} & ${sign2}</strong> have a ${mode} compatibility of <strong>${score}%</strong>. ${msg} ${emoji}`;
}
