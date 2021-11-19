const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortune = ["Sometimes, spilling ketchup on your favorite shirt means no more nice shirt today.",
					          "When it is cold out, wear something warm",
					          "One day you will look back on your life and think, 'Maybe I should have order the chicken.' Order the chicken.",
  ];

  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
  

});app.get("/api/notCompliment", (req, res) => {
  const notCompliment = ["Your eyebrows smell funny",
					          "Hey look.... made you look",
					          "knock knock...",
  ];

  let randomIndex = Math.floor(Math.random() * notCompliment.length);
  let randomnotCompliment = notCompliment[randomIndex];

  res.status(200).send(randomnotCompliment);
  
});


app.listen(4000, () => console.log("COMPLIMENTS initializing...... running on 4000"));

app.listen(4001, () => console.log("NOTCOMPLIMENT initializing...... running on 4001"));

app.listen(4002, () => console.log("FORTUNES initializing...... running on 4002"));
