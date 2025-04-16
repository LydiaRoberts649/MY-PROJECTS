const vibes = [
    { text: "You are unstoppable today!", emoji: "🚀", color: "#ffeaa7" },
    { text: "Breathe. You’re doing great. 🌸", emoji: "🌸", color: "#fab1a0" },
    { text: "Good things are coming your way!", emoji: "✨", color: "#ffeaa7" },
    { text: "Smile — you’ve got this! 😎", emoji: "😎", color: "#dfe6e9" },
    { text: "You’re a shining star! 🌟", emoji: "🌟", color: "#fdcb6e" },
    { text: "The world is better with you in it! 💖", emoji: "💖", color: "#ecccff" },
  ];
  
  function generateVibe() {
    const randomIndex = Math.floor(Math.random() * vibes.length);
    const vibe = vibes[randomIndex];
  
    document.getElementById("vibeText").textContent = vibe.text;
    document.getElementById("emoji").textContent = vibe.emoji;
    document.getElementById("vibeBox").style.backgroundColor = vibe.color;
  }
  