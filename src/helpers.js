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
      img: "./img/1.jpg",
      text:
        "Why did the programmer quit his job? Because he didn't get arrays",
      open: false
    },
    {
      id: "hatch-2",
      nr: 2,
      img: "./img/2.jpg",
      text:
        "Why do Java programmers have to wear glasses? Because they don't C#",
      open: false
    },
    {
      id: "hatch-3",
      nr: 3,
      img: "./img/3.jpg",
      text:
        "Real programmers count from 0",
      open: false
    },
    {
      id: "hatch-4",
      nr: 4,
      img: "./img/4.jpg",
      text:
        "Chuck Norris writes code... that optimizes itself",
      open: false
    },
    {
      id: "hatch-5",
      nr: 5,
      img: "./img/5.jpg",
      text:
        "A foo walks into a bar, takes a look around and says 'Hello world!'",
      open: false
    },
    {
      id: "hatch-6",
      nr: 6,
      img: "./img/6.jpg",
      text:
        "The programmer got stuck in thte shower because the instructions on thte shampoo bottle said... Lather,Rinse, Repeat.",
      open: false
    },
    {
      id: "hatch-7",
      nr: 7,
      img: "./img/7.jpg",
      text:
        "A SQL query goes into a bar, walks up to two tables and asks...'Can I join you?'",
      open: false
    },
    {
      id: "hatch-8",
      nr: 8,
      img: "./img/8.jpg",
      text:
        "if (sad() === true { sad. stop (); beAwesome();}",
      open: false
    },
    {
      id: "hatch-9",
      nr: 9,
      img: "./img/9.jpg",
      text:
        "['hip', 'hip']",
      open: false
    },
    {
      id: "hatch-10",
      nr: 10,
      img: "./img/10.jpg",
      text:
        "I love pressing the F5 key, it's refreshing",
      open: false
    },
    {
      id: "hatch-11",
      nr: 11,
      img: "./img/11.jpg",
      text:
        ".",
      open: false
    },
    {
      id: "hatch-12",
      nr: 12,
      img: "./img/12.jpg",
      text:
        ".",
      open: false
    },
    {
      id: "hatch-13",
      nr: 13,
      img: "./img/13.jpg",
      text:
        ".",
      open: false
    },
    {
      id: "hatch-14",
      nr: 14,
      img: "./img/14.jpg",
      text:
        ".",
      open: false
    },
    {
      id: "hatch-15",
      nr: 15,
      img: "./img/15.jpg",
      text:
        ".",
      open: false
    },
    {
      id: "hatch-16",
      nr: 16,
      img: "./img/16.jpg",
      text:
        ".",
      open: false
    },
    {
      id: "hatch-17",
      nr: 17,
      img: "./img/17.jpg",
      text:
        ".",
      open: false
    },
    {
      id: "hatch-18",
      nr: 18,
      img: "./img/18.jpg",
      text:
        ".",
      open: false
    },
    {
      id: "hatch-19",
      nr: 19,
      img: "./img/19.jpg",
      text:
        ".",
      open: false
    },
    {
      id: "hatch-20",
      nr: 20,
      img: "./img/20.jpg",
      text:
        ".",
      open: false
    },
    {
      id: "hatch-21",
      nr: 21,
      img: "./img/21.jpg",
      text:
        ".",
      open: false
    },
    {
      id: "hatch-22",
      nr: 22,
      img: "./img/22.jpg",
      text:
        ".",
      open: false
    },
    {
      id: "hatch-23",
      nr: 23,
      img: "./img/23.jpg",
      text:
        ".",
      open: false
    },
    {
      id: "hatch-24",
      nr: 24,
      img: "./img/24.jpg",
      text:
        ".",
      open: false
    },
  ];
  
  export const createCalendar = () => shuffle(hatchArray);