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
import Config from './config.json'

const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }

  return a;
};

export const bgImages = [
  Door1bkg,
  Door2bkg,
  Door3bkg,
  Door4bkg,
  Door5bkg,
  Door6bkg,
  Door7bkg,
  Door8bkg,
  Door9bkg,
  Door10bkg,
];

const randomImg = () => bgImages[Math.floor(Math.random() * bgImages.length)];

export const createCalendar = () => {
  const doors = Config.doors;

  // Add needed attributes
  for (let i = 0; i < doors.length; i++)
  {
    doors[i].bg = randomImg();
    doors[i].open = false;
  }

  return shuffle(doors);
}