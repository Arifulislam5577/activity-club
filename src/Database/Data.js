export const activities = [
  {
    id: 1,
    title: "fajr prayer",
    disciption:
      "The time period within which the Fajr daily prayer must be offered (with loud recitation of the quran) is from the beginning of dawn to sunrise.",
    timeRequired: 45,
    image: "/images/fazr.jpg",
  },
  {
    id: 2,
    title: "Quran Tilawat",
    disciption:
      "Tilawat of the holy Quran, it is recommended for the Mustim to have a pure intention towards Allah and what he is going to recite.",
    timeRequired: 25,
    image: "/images/quran.jpg",
  },
  {
    id: 3,
    title: "Learn Complex Homework ",
    disciption:
      "Learning is an iterative process. Start by defining your goals, and break them down into bite-sized chunks. Get some context by reading.",
    timeRequired: 120,
    image: "/images/homework.jpg",
  },
  {
    id: 4,
    title: "Office Time",
    disciption:
      "Effortlessly capture your hours and expenses. Easily track your projects and life. Designed for freelancers and small teams.",
    timeRequired: 360,
    image: "/images/office.jpg",
  },
  {
    id: 5,
    title: "Dhuhr prayer",
    disciption:
      "The time period within which the Fajr daily prayer must be offered (with loud recitation of the quran) is from the beginning of dawn to sunrise.",
    timeRequired: 30,
    image: "/images/prayer.jpg",
  },
  {
    id: 6,
    title: "Lunch time",
    disciption:
      "The time period within which the Fajr daily prayer must be offered (with loud recitation of the quran) is from the beginning of dawn to sunrise.",
    timeRequired: 60,
    image: "/images/food2.jpg",
  },
];

export const questions = [
  {
    id: 1,
    title: "How does react js work?",
    answer:
      "ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.",
  },
  {
    id: 2,
    title: "What is the difference between state and props?",
    answer:
      "Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.",
  },
  {
    id: 3,
    title: "What is the usecase of useEffect hook without data load?",
    answer:
      "The useEffect Hook allows us to perform side effects in our components. Some examples of side effects are: directly updating the DOM, and timers.if we need to run the side effect every time a combination of state and props change. This use case may occur when our side effect depends on the state and props values. In this case, we need to pass both the state and props variables as dependencies.",
  },
];
