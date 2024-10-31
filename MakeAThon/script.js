// Dictionary of words mapped to emojis
const emojiDictionary = {
   
        "hello": "👋",
        "hi": "👋",
        "happy": "😊",
        "sad": "😢",
        "love": "❤️",
        "like": "👍",
        "dislike": "👎",
        "cat": "🐱",
        "dog": "🐶",
        "food": "🍕",
        "pizza": "🍕",
        "burger": "🍔",
        "coffee": "☕",
        "drink": "🥤",
        "water": "💧",
        "sun": "☀️",
        "moon": "🌙",
        "star": "⭐",
        "cloud": "☁️",
        "rain": "🌧️",
        "snow": "❄️",
        "fire": "🔥",
        "book": "📚",
        "computer": "💻",
        "phone": "📱",
        "car": "🚗",
        "bus": "🚌",
        "bicycle": "🚲",
        "airplane": "✈️",
        "train": "🚆",
        "walk": "🚶",
        "run": "🏃",
        "sleep": "😴",
        "dream": "💭",
        "home": "🏠",
        "work": "💼",
        "school": "🏫",
        "art": "🎨",
        "music": "🎶",
        "movie": "🎬",
        "party": "🎉",
        "gift": "🎁",
        "money": "💰",
        "heart": "💖",
        "friend": "👫",
        "family": "👨‍👩‍👧‍👦",
        "baby": "👶",
        "child": "🧒",
        "boy": "👦",
        "girl": "👧",
        "man": "👨",
        "woman": "👩",
        "old": "👴",
        "young": "👶",
        "smile": "😄",
        "cry": "😭",
        "laugh": "😂",
        "angry": "😠",
        "scared": "😱",
        "surprised": "😲",
        "shy": "😊",
        "thinking": "🤔",
        "sleepy": "😴",
        "sick": "🤒",
        "cool": "😎",
        "beautiful": "😍",
        "funny": "🤣",
        "congratulations": "🎉",
        "goodbye": "👋😢"
        // Add more as needed!
      };
      
    // Add more words and emojis here as needed
  
  
  // Function to translate text to emojis
  function translateToEmoji(text) {
    // Split the text into words
    const words = text.toLowerCase().split(" ");
    
    // Map each word to its emoji or keep the word if no emoji exists
    const translatedWords = words.map(word => emojiDictionary[word] ? emojiDictionary[word] : word);
  
    // Join the translated words into a single string
    return translatedWords.join(" ");
  }
  
  // Event listener for the translate button
  document.getElementById("translateButton").addEventListener("click", () => {
    // Get input text
    const inputText = document.getElementById("inputText").value;
  
    // Translate text to emojis
    const translatedText = translateToEmoji(inputText);
  
    // Display the translated text
    document.getElementById("outputText").textContent = translatedText;
  });
  
