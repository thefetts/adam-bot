const Sequelize = require('sequelize');

module.exports = class Adamism {
  constructor(dbUri) {
    const sequelize = new Sequelize(dbUri);
    sequelize.query(```
-- phpMyAdmin SQL Dump
-- version 4.5.0-dev
-- http://www.phpmyadmin.net
--
-- Host: 192.168.8.210:3306
-- Generation Time: Nov 14, 2017 at 06:19 PM
-- Server version: 10.1.24-MariaDB
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: \`cf_8b83d4b4_33cb_4bc8_abc7_b9b1e9d95c7b\`
--

-- --------------------------------------------------------

--
-- Table structure for table \`adamism\`
--

CREATE TABLE IF NOT EXISTS \`adamism\` (
  \`id\` int(11) NOT NULL,
  \`message\` text COLLATE utf8_unicode_ci,
  \`createdAt\` datetime NOT NULL,
  \`updatedAt\` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=289 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table \`adamism\`
--

INSERT INTO \`adamism\` (\`id\`, \`message\`, \`createdAt\`, \`updatedAt\`) VALUES
(4, 'WHATS UP BUTTHOLES', '2017-03-15 22:08:00', '2017-03-15 22:08:00'),
(7, '@here Hey WHO WANNA PLAY GAEMZ?!??', '2017-03-15 22:08:00', '2017-03-15 22:08:00'),
(10, 'nostalgia is a double edged sword, it pisses you off when you''re not satisfied but it also fills you up with joy on silly nonsense...', '2017-03-15 22:08:18', '2017-03-15 22:08:18'),
(13, 'BUT IT''S YOUR GODAMN NERDS JOB TO TELL ME THAT I''M A FUCKN TOOL IDIOT', '2017-03-15 22:08:18', '2017-03-15 22:08:18'),
(16, 'hehe', '2017-03-15 22:08:38', '2017-03-15 22:08:38'),
(19, 'your ears make you look like a Hippogriph', '2017-03-15 22:08:38', '2017-03-15 22:08:38'),
(22, 'GREAT SPACE BATTLES', '2017-03-15 22:08:51', '2017-03-15 22:08:51'),
(25, 'EARLY SHOWINGS ARE CHEAPER YOU JEW FUCK', '2017-03-15 22:08:51', '2017-03-15 22:08:51'),
(28, 'Blangonga is the big white monkey that is fucking hard as balls.', '2017-03-15 22:09:02', '2017-03-15 22:09:02'),
(31, 'In soviet Russia Zarya butt fucks YOU!!', '2017-03-15 22:09:02', '2017-03-15 22:09:02'),
(34, 'sweeeeeeeet', '2017-03-15 22:09:12', '2017-03-15 22:09:12'),
(37, '/giphy charlie work\\r\\nfuck', '2017-03-15 22:09:12', '2017-03-15 22:09:12'),
(40, 'Hybrid DANK WEED', '2017-03-15 22:09:22', '2017-03-15 22:09:22'),
(43, 'THIS AINT CASABLANCA BITCHES but i like this movie and i like casablanca, so fuck you" -Adam Hickey''s official review', '2017-03-15 22:09:22', '2017-03-15 22:09:22'),
(46, 'Judd you are a CUNT... a... a. ..CUNT... a CONTINUING source if inspiration', '2017-03-15 22:09:40', '2017-03-15 22:09:40'),
(49, 'Talking about final Fantasy and no one mentions how Sabin SUPLEXED A MOTHER FUCKING TRAIN?!?! shame on you nerds.....', '2017-03-15 22:09:40', '2017-03-15 22:09:40'),
(52, 'loser\\r\\nhahaha', '2017-03-15 22:09:51', '2017-03-15 22:09:51'),
(55, 'i''m in what paypal you want, money or Bj''s', '2017-03-15 22:09:51', '2017-03-15 22:09:51'),
(58, 'IMAGINE ALL THE STUPID SHIT I COULD ADD TO THESE CONVERSATIONS!!', '2017-03-15 22:10:02', '2017-03-15 22:10:02'),
(61, 'NERDGASM!!!!', '2017-03-15 22:10:02', '2017-03-15 22:10:02'),
(64, 'PICS OF BOOBIES OR IT DIDNT HAPPEN', '2017-03-15 22:10:15', '2017-03-15 22:10:15'),
(67, 'GO @Netgazernine WAY TO NOT DIE!!!!!!!', '2017-03-15 22:10:15', '2017-03-15 22:10:15'),
(70, 'BABY METAL:metal::astonished::metal:', '2017-03-15 22:10:28', '2017-03-15 22:10:28'),
(73, 'weekend of Pokemon and Stardew Valley here I come', '2017-03-15 22:10:28', '2017-03-15 22:10:28'),
(76, 'Want plaaaaaaay', '2017-03-15 22:11:05', '2017-03-15 22:11:05'),
(79, 'SEVEN DAYS BOYS', '2017-03-15 22:11:24', '2017-03-15 22:11:24'),
(82, 'FUUUUUUUUUUUUUUUUCK', '2017-03-15 22:11:24', '2017-03-15 22:11:24'),
(85, 'Wat', '2017-03-15 22:11:40', '2017-03-15 22:11:40'),
(88, 'METAPHORE', '2017-03-15 22:11:40', '2017-03-15 22:11:40'),
(91, 'i''d still be shameless and have a stash of stolen props cause i''m a CUNT', '2017-03-15 22:11:53', '2017-03-15 22:11:53'),
(94, '@here so who''s got a dry dick needing sucked that wants to give me a ride?!', '2017-03-15 22:11:53', '2017-03-15 22:11:53'),
(97, 'gubu dudu, you mean butt face?', '2017-03-15 22:12:04', '2017-03-15 22:12:04'),
(100, 'Jesse is the female equivalent to satyrs', '2017-03-15 22:12:04', '2017-03-15 22:12:04'),
(103, 'Funeral? Who are we killing? If it''s me I''d be OK with that', '2017-03-15 22:12:20', '2017-03-15 22:12:20'),
(106, 'Who is that, Terry Schiavo?', '2017-03-15 22:12:20', '2017-03-15 22:12:20'),
(109, 'It slices, it dices, it makes your imperial dick hard', '2017-03-15 22:12:37', '2017-03-15 22:12:37'),
(112, 'HEY DUMBASSES!!! YOU GUYS ARE THE BEST!!!', '2017-03-15 22:12:37', '2017-03-15 22:12:37'),
(115, 'MERRY CHRISTMAS YOU SHIT POTS!!!', '2017-03-15 22:12:47', '2017-03-15 22:12:47'),
(118, 'I LITERALLY THINK HIGHLY OF YOU!!!', '2017-03-15 22:12:47', '2017-03-15 22:12:47'),
(121, 'GOOD LUCK you stupid dummy GARBAGE MEN', '2017-03-15 22:12:58', '2017-03-15 22:12:58'),
(124, 'Also Walter says HI', '2017-03-15 22:12:58', '2017-03-15 22:12:58'),
(127, 'I transformed into a dog and had sex', '2017-03-15 22:13:11', '2017-03-15 22:13:11'),
(130, 'Happy chinese new year... the year of the COCK!', '2017-03-15 22:13:11', '2017-03-15 22:13:11'),
(133, 'Whoa, it''s like really bright out you guys...', '2017-03-15 22:13:22', '2017-03-15 22:13:22'),
(136, 'i''m gonna make a quick cup of tea then i''ll be back', '2017-03-15 22:13:22', '2017-03-15 22:13:22'),
(139, 'DONT GIVE A SHIT I''LL SLEEP ON A HOMELESS PERSON', '2017-03-15 22:13:40', '2017-03-15 22:13:40'),
(142, 'Sitting in a vinegar based brine flavored with dill for 8 months?', '2017-03-15 22:13:40', '2017-03-15 22:13:40'),
(145, 'I had a dream that we we''re all baseball players on a team and Tyler was the pitcher and he tucked his jeans way down into his big long socks up to his Knickerbockers and I was the shitty catcher and we lost the game cause I missed running down a tag up third base for some reason, also our locker room was in a video rental store...', '2017-03-15 22:13:51', '2017-03-15 22:13:51'),
(148, 'WHAT''S UP PROFESSIONAL BONER ACCEPTERS!', '2017-03-15 22:13:51', '2017-03-15 22:13:51'),
(151, 'FUCK YOU NERDS I AM THE BEST', '2017-03-15 22:14:05', '2017-03-15 22:14:05'),
(154, 'I HAVE FFFFIIIINNNNAAALLLLYYYY', '2017-03-15 22:14:05', '2017-03-15 22:14:05'),
(157, 'UNLOCKED ALL THE SHIPS IN FTL', '2017-03-15 22:14:20', '2017-03-15 22:14:20'),
(160, 'SUCK ON MY STUPID SALAMI AUTISM!]', '2017-03-15 22:14:20', '2017-03-15 22:14:20'),
(163, 'adam!\\r\\nFuck me', '2017-03-15 22:14:35', '2017-03-15 22:14:35'),
(166, 'I''m gonna save that for later :kissing_heart::eggplant::eggplant::eggplant:', '2017-03-15 22:14:35', '2017-03-15 22:14:35'),
(169, 'It''s 56FFF or GTFO', '2017-03-15 22:14:49', '2017-03-15 22:14:49'),
(172, 'what the fuck did you just say?!', '2017-03-15 22:14:49', '2017-03-15 22:14:49'),
(175, 'that better not be some insult to my FUTUTE FUCKING WIAFUUUUU', '2017-03-15 22:15:03', '2017-03-15 22:15:03'),
(178, 'Oh fuck m÷eeeeee', '2017-03-15 22:15:03', '2017-03-15 22:15:03'),
(181, 'My dick is always on my mind', '2017-03-17 14:58:30', '2017-03-17 14:58:30'),
(187, 'what', '2017-03-21 21:50:43', '2017-03-21 21:50:43'),
(190, 'TAKE YOUR EXELENT TALENT AND BLONE FUCKING HAIRS BACK THE FUCK OUTTA HERE', '2017-03-23 03:51:10', '2017-03-23 03:51:10'),
(193, 'MORE THAN HILTER HATED JEWS IS MY HATRED', '2017-03-29 19:14:48', '2017-03-29 19:14:48'),
(196, 'JOHN YOU''RE OUT OF YOU''RE ELEMENT', '2017-03-29 20:37:25', '2017-03-29 20:37:25'),
(199, 'oooooh nintendo is a BITCH', '2017-03-30 03:52:24', '2017-03-30 03:52:24'),
(202, 'J his O = Japanese his Orchestra', '2017-03-31 15:28:46', '2017-03-31 15:28:46'),
(205, 'Peen has the need, the need ...for Vageen', '2017-03-31 20:04:50', '2017-03-31 20:04:50'),
(208, 'Take your massive dick, you got a pretty dick, out and use it to jack hammer on the keyboard until the internet bends over for you.', '2017-04-03 18:21:54', '2017-04-03 18:21:54'),
(211, 'Git gud scrub', '2017-04-04 02:15:02', '2017-04-04 02:15:02'),
(214, 'AHHHHHHHHH I''M SO EXCITED I COULD RIDE A HORSE', '2017-04-05 21:33:31', '2017-04-05 21:33:31'),
(217, 'Title card:  Bitches suck and dont fucking matter if you have a dog cause fuck them....', '2017-04-25 05:32:09', '2017-04-25 05:32:09'),
(220, 'Oh, you''re still a baby back bitch then!', '2017-04-30 18:00:06', '2017-04-30 18:00:06'),
(226, 'MAYBE IT''S TO CUT DOWN ON 3RD PARTY SCALPERS LIKE YOU FUCKING CUNTS', '2017-05-15 13:30:28', '2017-05-15 13:30:28'),
(229, 'THE FUCKING ROCKIES WOO WOO HYPE TRAIN LEAVING THE STATION', '2017-05-18 22:24:32', '2017-05-18 22:24:32'),
(232, 'DAMON LINDELHOF YOU UNINSPIRED BASTARD!!!!!', '2017-05-19 18:03:12', '2017-05-19 18:03:12'),
(235, 'Maybe I''m the crazy bitch <@235956370980077569>', '2017-05-19 18:08:44', '2017-05-19 18:08:44'),
(238, 'Oh shit! Adam bot is the ring girl!!', '2017-05-19 18:10:41', '2017-05-19 18:10:41'),
(241, 'http://mediadownloads.mlb.com/mlbam/mp4/2017/05/24/1420359383/1495585838896/asset_1800K.mp4', '2017-05-24 01:11:03', '2017-05-24 01:11:03'),
(244, '<@235796588545441792> hey, ben... you''re a very nice guy.  This is a genuine compliment.  trying to be more nice and less poo poo face.  you being in my life makes me better you fucking.... no no no', '2017-07-05 23:39:38', '2017-07-05 23:39:38'),
(250, 'The double dicked centaur with dick-nips.... it is legend', '2017-07-07 18:06:17', '2017-07-07 18:06:17'),
(256, 'BUTT PEE', '2017-09-19 19:37:03', '2017-09-19 19:37:03'),
(262, 'Right-click junkyard hydrangeas .uk lifting psych intern off try uti', '2017-10-01 07:08:01', '2017-10-01 07:08:01'),
(265, 'SHUT THE FUCK UP THAT WASN''T FUNNY haha', '2017-10-11 18:57:58', '2017-10-11 18:57:58'),
(268, '"Suck on THAT you son of a MONKEY BIIIIIT...."', '2017-10-16 17:23:24', '2017-10-16 17:23:24'),
(271, 'JUDD HAS NO PIECES IF FLAIR JOHN!!!!!', '2017-10-31 01:47:11', '2017-10-31 01:47:11'),
(277, 'Just googled schlub top result seems to fit me in the nose', '2017-10-31 15:42:34', '2017-10-31 15:42:34'),
(283, 'ASS MY WHOLE ASS AUTOCORRET', '2017-11-02 02:48:13', '2017-11-02 02:48:13'),
(286, 'Hahaha Ben playing with Adam bot again', '2017-11-05 02:51:39', '2017-11-05 02:51:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table \`adamism\`
--
ALTER TABLE \`adamism\`
  ADD PRIMARY KEY (\`id\`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table \`adamism\`
--
ALTER TABLE \`adamism\`
  MODIFY \`id\` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=289;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
```)

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
