const quotes = [
    {
        quote: "절대 포기하지 말자",
        auther: "Jaekyu"
    },
    {
        quote: "Stop thinking, Just do it!",
        auther: "Benedict Cumberbatch"
    },
    {
        quote: "Never complain, never explain. Resist the temptation to defend yourself or make excuses.",
        auther: "Brian Tracy"
    },
    {
        quote : "It doesn't matter where you are coming from. All that matters is where you are going.",
        auther: "Brian Tracy"
    },
    {
        quote : "All successful people men and women are big dreamers. They imagine what their future could be, ideal in every respect, and then they work every day toward their distant vision, that goal or purpose.",
        auther: "Brian Tracy"
    },
    {
        quote : "Excellence/Perfection is not a destination; it is a continuous journey that never ends.",
        auther: "Brian Tracy"
    },
    {
        quote : "Every minute you spend in planning saves 10 minutes in execution; this gives you a 1,000 percent Return on Energy!",
        auther: "Brian Tracy"
    },
    {
        quote : "Never say anything about yourself you don't want to come true",
        auther: "Brian Tracy"
    }
]

const quote = document.querySelector("#quote span:first-child");
const auther = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[parseInt(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
auther.innerText = todaysQuote.auther;

