console.log('loading script...')

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];
function askquestion(){
    var question = document.querySelector('input').value;
    var h3 = document.querySelector('h3')
    h3.innerHTML='the question is:<h4>' + question +
    console.log('the answer is:', getAnswer)
}


function getAnswer(){
   return answer = lifesAnswers[Math.floor(Math.random()*lifesAnswers.length)]
}