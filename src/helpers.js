import Door1bkg from "./img/1.jpg"
import Door2bkg from "./img/2.jpg"
import Door3bkg from "./img/3.jpg"
import Door4bkg from "./img/4.jpg"
import Door5bkg from "./img/5.jpg"
import Door6bkg from "./img/6.jpg"
import Door7bkg from "./img/7.jpg"
import Door8bkg from "./img/8.jpg"
import Door9bkg from "./img/9.jpg"
import Door10bkg from "./img/10.jpg"

const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  
  export const hatchArray = [
    {
      id: "hatch-1",
      nr: 1,
      img: Door1bkg,
      text:
        "Who delivers presents to baby sharks at Christmas? Santa Jaws!",
      open: false
    },
    {
      id: "hatch-2",
      nr: 2,
      img: Door2bkg,
      text:
        "What do they sing at a snowman’s birthday party? Freeze a jolly good fellow!",
      open: false
    },
    {
      id: "hatch-3",
      nr: 3,
      img: Door3bkg,
      text:
        "What do Santa’s little helpers learn at school? The elf-abet!",
      open: false
    },
    {
      id: "hatch-4",
      nr: 4,
      img: Door4bkg,
      text:
        "What kind of motorbike does Santa ride? A Holly Davidson!",
      open: false
    },
    {
      id: "hatch-5",
      nr: 5,
      img: Door5bkg,
      text:
        "What do you get if you cross Santa with a duck? A Christmas Quacker!",
      open: false
    },
    {
      id: "hatch-6",
      nr: 6,
      img: Door6bkg,
      text:
        "What goes “Oh, Oh, Oh”? Santa walking backwards!",
      open: false
    },
    {
      id: "hatch-7",
      nr: 7,
      img: Door7bkg,
      text:
        "Why does Santa have three gardens? So he can ‘ho ho ho’!",
      open: false
    },
    {
      id: "hatch-8",
      nr: 8,
      img: Door8bkg,
      text:
        "What is the best Christmas present in the world? A broken drum, you just can’t beat it!",
      open: false
    },
    {
      id: "hatch-9",
      nr: 9,
      img: Door9bkg,
      text:
        "What do snowmen wear on their heads? Ice caps!",
      open: false
    },
    {
      id: "hatch-10",
      nr: 10,
      img: Door10bkg,
      text:
        "What do you get when you cross a snowman with a vampire? Frostbite!",
      open: false
    },
    {
      id: "hatch-11",
      nr: 11,
      img: Door1bkg,
      text:
        "Why don’t you ever see Santa in hospital? Because he has private elf care!",
      open: false
    },
    {
      id: "hatch-12",
      nr: 12,
      img: Door2bkg,
      text:
        "What did the beaver say to the Christmas Tree? Nice gnawing you!",
      open: false
    },
    {
      id: "hatch-13",
      nr: 13,
      img: Door3bkg,
      text:
        "What do snowmen have for breakfast? Snowflakes!",
      open: false
    },
    {
      id: "hatch-14",
      nr: 14,
      img: Door4bkg,
      text:
        "Who delivers presents to cats? Santa Paws!",
      open: false
    },
    {
      id: "hatch-15",
      nr: 15,
      img: Door5bkg,
      text:
        "What’s a child’s favourite king at Christmas? A stoc-king!",
      open: false
    },
    {
      id: "hatch-16",
      nr: 16,
      img: Door6bkg,
      text:
        "How does Darth Vader enjoy his Christmas Turkey? On the dark side!",
      open: false
    },
    {
      id: "hatch-17",
      nr: 17,
      img: Door7bkg,
      text:
        "What cars do elves drive? Toyotas!",
      open: false
    },
    {
      id: "hatch-18",
      nr: 18,
      img: Door8bkg,
      text:
        "What do you call an obnoxious reindeer? Rude-olph!",
      open: false
    },
    {
      id: "hatch-19",
      nr: 19,
      img: Door9bkg,
      text:
        "Why did Santa get a parking ticket on Christmas Eve? He left his sleigh in a snow parking zone!",
      open: false
    },
    {
      id: "hatch-20",
      nr: 20,
      img: Door10bkg,
      text:
        "What is the most competitive season? Win-ter!",
      open: false
    },
    {
      id: "hatch-21",
      nr: 21,
      img: Door1bkg,
      text:
        "What do you call buying a piano for the holidays? Christmas Chopin!",
      open: false
    },
    {
      id: "hatch-22",
      nr: 22,
      img: Door2bkg,
      text:
        "When is a boat just like snow? When it’s adrift!",
      open: false
    },
    {
      id: "hatch-23",
      nr: 23,
      img: Door3bkg,
      text:
        "What did the stamp say to the Christmas card? Stick with me and we'll go places!",
      open: false
    },
    {
      id: "hatch-24",
      nr: 24,
      img: Door4bkg,
      text:
        "Why is it getting harder to buy Advent calendars? Their days are numbered!",
      open: false
    },
  ];
  
  export const createCalendar = () => shuffle(hatchArray);