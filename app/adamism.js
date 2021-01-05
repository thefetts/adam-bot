const Sequelize = require('sequelize');

module.exports = class Adamism {
  constructor(dbUri) {
    const sequelize = new Sequelize(dbUri);
    sequelize.query(`
CREATE TABLE IF NOT EXISTS adamism (
  id int(11) NOT NULL,
  message text COLLATE utf8_unicode_ci,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL
);

INSERT INTO adamism (message) VALUES
('WHATS UP BUTTHOLES'),
('@here Hey WHO WANNA PLAY GAEMZ?!??'),
('nostalgia is a double edged sword, it pisses you off when you''re not satisfied but it also fills you up with joy on silly nonsense...'),
('BUT IT''S YOUR GODAMN NERDS JOB TO TELL ME THAT I''M A FUCKN TOOL IDIOT'),
('hehe'),
('your ears make you look like a Hippogriph'),
('GREAT SPACE BATTLES'),
('EARLY SHOWINGS ARE CHEAPER YOU JEW FUCK'),
('Blangonga is the big white monkey that is fucking hard as balls.'),
('In soviet Russia Zarya butt fucks YOU!!'),
('sweeeeeeeet'),
('/giphy charlie work\\r\\nfuck'),
('Hybrid DANK WEED'),
('THIS AINT CASABLANCA BITCHES but i like this movie and i like casablanca, so fuck you" -Adam Hickey''s official review'),
('Judd you are a CUNT... a... a. ..CUNT... a CONTINUING source if inspiration'),
('Talking about final Fantasy and no one mentions how Sabin SUPLEXED A MOTHER FUCKING TRAIN?!?! shame on you nerds.....'),
('loser\\r\\nhahaha'),
('i''m in what paypal you want, money or Bj''s'),
('IMAGINE ALL THE STUPID SHIT I COULD ADD TO THESE CONVERSATIONS!!'),
('NERDGASM!!!!'),
('PICS OF BOOBIES OR IT DIDNT HAPPEN'),
('GO @Netgazernine WAY TO NOT DIE!!!!!!!'),
('BABY METAL:metal::astonished::metal:'),
('weekend of Pokemon and Stardew Valley here I come'),
('Want plaaaaaaay'),
('SEVEN DAYS BOYS'),
('FUUUUUUUUUUUUUUUUCK'),
('Wat'),
('METAPHORE'),
('i''d still be shameless and have a stash of stolen props cause i''m a CUNT'),
('@here so who''s got a dry dick needing sucked that wants to give me a ride?!'),
('gubu dudu, you mean butt face?'),
('Jesse is the female equivalent to satyrs'),
('Funeral? Who are we killing? If it''s me I''d be OK with that'),
('Who is that, Terry Schiavo?'),
('It slices, it dices, it makes your imperial dick hard'),
('HEY DUMBASSES!!! YOU GUYS ARE THE BEST!!!'),
('MERRY CHRISTMAS YOU SHIT POTS!!!'),
('I LITERALLY THINK HIGHLY OF YOU!!!'),
('GOOD LUCK you stupid dummy GARBAGE MEN'),
('Also Walter says HI'),
('I transformed into a dog and had sex'),
('Happy chinese new year... the year of the COCK!'),
('Whoa, it''s like really bright out you guys...'),
('i''m gonna make a quick cup of tea then i''ll be back'),
('DONT GIVE A SHIT I''LL SLEEP ON A HOMELESS PERSON'),
('Sitting in a vinegar based brine flavored with dill for 8 months?'),
('I had a dream that we we''re all baseball players on a team and Tyler was the pitcher and he tucked his jeans way down into his big long socks up to his Knickerbockers and I was the shitty catcher and we lost the game cause I missed running down a tag up third base for some reason, also our locker room was in a video rental store...'),
('WHAT''S UP PROFESSIONAL BONER ACCEPTERS!'),
('FUCK YOU NERDS I AM THE BEST'),
('I HAVE FFFFIIIINNNNAAALLLLYYYY'),
('UNLOCKED ALL THE SHIPS IN FTL'),
('SUCK ON MY STUPID SALAMI AUTISM!]'),
('adam!\\r\\nFuck me'),
('I''m gonna save that for later :kissing_heart::eggplant::eggplant::eggplant:'),
('It''s 56FFF or GTFO'),
('what the fuck did you just say?!'),
('that better not be some insult to my FUTUTE FUCKING WIAFUUUUU'),
('Oh fuck m÷eeeeee'),
('My dick is always on my mind'),
('what'),
('TAKE YOUR EXELENT TALENT AND BLONE FUCKING HAIRS BACK THE FUCK OUTTA HERE'),
('MORE THAN HILTER HATED JEWS IS MY HATRED'),
('JOHN YOU''RE OUT OF YOU''RE ELEMENT'),
('oooooh nintendo is a BITCH'),
('J his O = Japanese his Orchestra'),
('Peen has the need, the need ...for Vageen'),
('Take your massive dick, you got a pretty dick, out and use it to jack hammer on the keyboard until the internet bends over for you.'),
('Git gud scrub'),
('AHHHHHHHHH I''M SO EXCITED I COULD RIDE A HORSE'),
('Title card:  Bitches suck and dont fucking matter if you have a dog cause fuck them....'),
('Oh, you''re still a baby back bitch then!'),
('MAYBE IT''S TO CUT DOWN ON 3RD PARTY SCALPERS LIKE YOU FUCKING CUNTS'),
('THE FUCKING ROCKIES WOO WOO HYPE TRAIN LEAVING THE STATION'),
('DAMON LINDELHOF YOU UNINSPIRED BASTARD!!!!!'),
('Maybe I''m the crazy bitch <@235956370980077569>'),
('Oh shit! Adam bot is the ring girl!!'),
('http://mediadownloads.mlb.com/mlbam/mp4/2017/05/24/1420359383/1495585838896/asset_1800K.mp4'),
('<@235796588545441792> hey, ben... you''re a very nice guy.  This is a genuine compliment.  trying to be more nice and less poo poo face.  you being in my life makes me better you fucking.... no no no'),
('The double dicked centaur with dick-nips.... it is legend'),
('BUTT PEE'),
('Right-click junkyard hydrangeas .uk lifting psych intern off try uti'),
('SHUT THE FUCK UP THAT WASN''T FUNNY haha'),
('"Suck on THAT you son of a MONKEY BIIIIIT...."'),
('JUDD HAS NO PIECES IF FLAIR JOHN!!!!!'),
('Just googled schlub top result seems to fit me in the nose'),
('ASS MY WHOLE ASS AUTOCORRET'),
('Hahaha Ben playing with Adam bot again');

ALTER TABLE adamism
  ADD PRIMARY KEY (id);

ALTER TABLE adamism
  MODIFY id int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=289;
`)

    this.model = sequelize.define(
      'adamism',
      {message: {type: Sequelize.TEXT}},
      {freezeTableName: true}
    );
  }

  findAll(cb) {
    this.model.sync().then(() => {
      this.model.findAll().then(adamisms => {
        const allAdamisms = adamisms.map(adamism => adamism.message);
        cb(allAdamisms);
      });
    });
  }

  create(model, cb) {
    this.model.create(model).then(cb);
  }
};
