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

const input = [];

app.post('/api/input', (req,res) => {
  input.push(req.body.newInput)

  input.reverse();
  res.status(200).send(input)

});

                  // WALL PAGE CODE//
//**************************************************//
// document is not defined ERROR with code below can't troubleshoot //

// document.querySelector("form").addEventListener("submit",addQuote);
// const message = document.querySelector('#message')

// function addQuote(event){
//     event.preventDefault();
//     let inputField = document.querySelector('input')
    
//     const quote = document.createElement('li')
    
//     const listQuote = document.createElement('span');
//     listQuote.textContent = inputField.value;
//     listQuote.addEventListener("click", crossOffQuote);
//     quote.appendChild(listQuote);

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "x";
//     deleteBtn.addEventListener("click", deleteQuote);
//     quote.appendChild(deleteBtn);


//     const list = document.querySelector("ul");
//     list.appendChild(quote);

//     message.textContent = `New quote added to the Wall.`
//     revealMessage()

//     inputField.value = ""
// }

// function deleteQuote(event){
//     revealMessage()
//     event.target.parentNode.remove();
// }

// function crossOffQuote(event){
//     event.target.classList.toggle("checked")
//     revealMessage()
// }
function revealMessage() {
    message.classList.remove('hide')
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}

//WALL PAGE CODE //




app.listen(4000, () => console.log("COMPLIMENTS initializing...... running on 4000"));

app.listen(4001, () => console.log("NOTCOMPLIMENT initializing...... running on 4001"));

app.listen(4002, () => console.log("FORTUNES initializing...... running on 4002"));

app.listen(4003, () => console.log("INPUTS initializing...... running on 4003"));