const Discord = require('discord.js');
const bot = new Discord.Client();

const adamisms = [
  `WHATS UP BUTTHOLES`,
  `@here Hey WHO WANNA PLAY GAEMZ?!??`,
  `nostalgia is a double edged sword, it pisses you off when you're not satisfied but it also fills you up with joy on silly nonsense...`,
  `BUT IT'S YOUR GODAMN NERDS JOB TO TELL ME THAT I'M A FUCKN TOOL IDIOT`,
  `hehe`,
  `your ears make you look like a Hippogriph`,
  `GREAT SPACE BATTLES`,
  `EARLY SHOWINGS ARE CHEAPER YOU JEW FUCK`,
  `Blangonga is the big white monkey that is fucking hard as balls.`,
  `In soviet Russia Zarya butt fucks YOU!!`,
  `sweeeeeeeet`,
  `/giphy charlie work\nfuck`,
  `Hybrid DANK WEED`,
  `THIS AINT CASABLANCA BITCHES but i like this movie and i like casablanca, so fuck you" -Adam Hickey's official review`,
  `Judd you are a CUNT... a... a. ..CUNT... a CONTINUING source if inspiration`,
  `Talking about final Fantasy and no one mentions how Sabin SUPLEXED A MOTHER FUCKING TRAIN?!?! shame on you nerds.....`,
  `loser\nhahaha`,
  `i'm in what paypal you want, money or Bj's`,
  `IMAGINE ALL THE STUPID SHIT I COULD ADD TO THESE CONVERSATIONS!!`,
  `NERDGASM!!!!`,
  `PICS OF BOOBIES OR IT DIDNT HAPPEN`,
  `GO @Netgazernine WAY TO NOT DIE!!!!!!!`,
  `BABY METAL:metal::astonished::metal:`,
  `weekend of Pokemon and Stardew Valley here I come`,
  `Want plaaaaaaay`,
  `SEVEN DAYS BOYS`,
  `FUUUUUUUUUUUUUUUUCK`,
  `Wat`,
  `METAPHORE`,
  `i'd still be shameless and have a stash of stolen props cause i'm a CUNT`,
  `@here so who's got a dry dick needing sucked that wants to give me a ride?!`,
  `gubu dudu, you mean butt face?`,
  `Jesse is the female equivalent to satyrs`,
  `Funeral? Who are we killing? If it's me I'd be OK with that`,
  `Who is that, Terry Schiavo?`,
  `It slices, it dices, it makes your imperial dick hard`,
  `HEY DUMBASSES!!! YOU GUYS ARE THE BEST!!!`,
  `MERRY CHRISTMAS YOU SHIT POTS!!!`,
  `I LITERALLY THINK HIGHLY OF YOU!!!`,
  `GOOD LUCK you stupid dummy GARBAGE MEN`,
  `Also Walter says HI`,
  `I transformed into a dog and had sex`,
  `Happy chinese new year... the year of the COCK!`,
  `Whoa, it's like really bright out you guys...`,
  `i'm gonna make a quick cup of tea then i'll be back`,
  `DONT GIVE A SHIT I'LL SLEEP ON A HOMELESS PERSON`,
  `Sitting in a vinegar based brine flavored with dill for 8 months?`,
  `I had a dream that we we're all baseball players on a team and Tyler was the pitcher and he tucked his jeans way down into his big long socks up to his Knickerbockers and I was the shitty catcher and we lost the game cause I missed running down a tag up third base for some reason, also our locker room was in a video rental store...`,
  `WHAT'S UP PROFESSIONAL BONER ACCEPTERS!`,
  `FUCK YOU NERDS I AM THE BEST`,
  `I HAVE FFFFIIIINNNNAAALLLLYYYY`,
  `UNLOCKED ALL THE SHIPS IN FTL`,
  `SUCK ON MY STUPID SALAMI AUTISM!]`,
  `adam!\nFuck me`,
  `I'm gonna save that for later :kissing_heart::eggplant::eggplant::eggplant:`,
  `It's 56FFF or GTFO`,
  `what the fuck did you just say?!`,
  `that better not be some insult to my FUTUTE FUCKING WIAFUUUUU`
];

let availableAdamisms = [];

const getRandomMessage = () => {
  if(!availableAdamisms.length)
    availableAdamisms = adamisms.slice(0);

  const index = getRandomIndex(availableAdamisms);
  return availableAdamisms.splice(index, 1)[0];
};

const getRandomIndex = (arr) => {
  return Math.floor(Math.random()*arr.length);
};

bot.on('message', msg => {
  if(msg.content.startsWith("!adam")) {
    msg.channel.sendMessage(getRandomMessage());
  }
});

bot.on('ready', () => {
  console.log('ready');
});

bot.login(process.env.token);
