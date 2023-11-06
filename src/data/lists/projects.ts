const projects = [
  {
    id: 1,
    title: "First Personal portfolio",
    description:
      "This is my first personal portfolio. The projects are dynamically generated, using Class and Objects with JavaScript, the class is created using a constructor. This website uses 50% scss, 28% javascript, and 22% html",
    language: ["SCSS", "JavaScript", "HTML"],
    img: "/images/PersonalPortfolioOld.png",
    link: "https://github.com/Rasweb/Personal-portfolio.git",
    dateCreated: "2022-02-07 14:34",
  },
  {
    id: 2,
    title: "Clone website",
    description:
      "This clone website is an assignment from Medieinstitutet. This website uses 48% html, 48% scss, and 4% JavaScript",
    language: ["HTML", "SCSS", "JavaScript"],
    img: "/images/CloneWebsite.png",
    link: "https://github.com/Rasweb/HTML-CSS-clone_website.git",
    dateCreated: "2021-10-01 12:32",
  },
  {
    id: 3,
    title: "Ett Litet Hem",
    description:
      "This is a group assignment from Medieinstitutet. Ett Litet Hem is a fictional web shop. This was the first time I worked in a group project in front end development. Ett Litet Hem uses 56% html, 21% css, 21% css,  and 1% javascript",
    language: ["HTML", "CSS", "SCSS", "JavaScript"],
    img: "/images/EttLitetHem.png",
    link: "https://github.com/Rasweb/MI-HTML-CSS-EttLitetHem.git",
    dateCreated: "2021-10-05 12:53",
  },
  {
    id: 4,
    title: "Javascript Todo",
    description:
      "This is a js To-do list assignment from Medieinstitutet. This is the first JavaScript project I did, this was also the first time i used github branches. It uses 58% javascript, 34% scss, and 8% html",
    language: ["JavaScript", "SCSS", "HTML"],
    img: "/images/JsTodo.png",
    link: "https://github.com/Rasweb/JavaScript-BasicCourse-Assignment1.git",
    dateCreated: "2021-10-29 10:08",
  },
  {
    id: 5,
    title: "Homegrown Records",
    description:
      "This is a group assignment from Medieinstitutet. Homegronw Records is a fictional webshop it was the first time we used Typescript and Cypress. I mainly created the forms and the testing for the site using cypress. It uses 52% typescript, 27% scss, 19% html, and 2% javascript.",
    language: ["JavaScript", "SCSS", "HTML", "JavaScript"],
    img: "/images/HomegrownRecords.png",
    link: "https://github.com/Rasweb/Project_Butik.git",
    dateCreated: "2021-11-30 09:54",
  },
  {
    id: 6,
    title: "NodeJs Todo",
    description:
      "This is a Nodejs todo list assignment from Medieinstitutet. This was the first backend project i did. It uses 43% javascript, 35% handlebars, 20% css, and 2% shell.",
    language: ["JavaScript", "Handlebars", "CSS", "Shell"],
    img: "/images/NodeJsTodo.png",
    link: "https://github.com/Rasweb/Nodejs-TODO.git",
    dateCreated: "2022-01-31 09:00",
  },
  {
    id: 7,
    title: "Kvitter",
    description:
      "This is a group assignment from Medieinstitutet. Kvitter is a NodeJs Twitter-like project. It uses 46% javascript, 28% shell, and 26% handlebars.",
    language: ["JavaScript", "SCSS", "Handlebars"],
    img: "/images/Kvitter.png",
    link: "https://github.com/Rasweb/MI-DynamiskWebbutveckling-Kvitter.git",
    dateCreated: "2022-02-24 14:07",
  },
  {
    id: 8,
    title: "Proluo Bene",
    description:
      "This is a group assignment from Medieinstitutet. Proluo Bene is more focused at agile work methods. This was the first time i worked with Github pull requests. Proluo Bene uses 54% html, 46% scss",
    language: ["HTML", "SCSS"],
    img: "/images/ProluoBene.png",
    link: "https://github.com/Rasweb/MI-AGIL-ProluoBene.git",
    dateCreated: "2022-03-21 11:04",
  },
  {
    id: 9,
    title: "Rethink",
    description:
      "This website is an assignment from the Graphic design course. I created my own Lettermark logo. Rethink uses 67% scss, and 33% html.",
    language: ["SCSS", "HTML"],
    img: "/images/Rethink.png",
    link: "https://github.com/Rasweb/Rethink.git",
    dateCreated: "2022-04-21 16:04",
  },
  {
    id: 10,
    title: "Interactive rating",
    description:
      "This is a website from Frontend Mentor, to practice handling user interactions and updating the DOM. Interactive rating uses 45% scss, 42% html, and 13% javascript.",
    language: ["SCSS", "HTML", "JavaScript"],
    img: "/images/InteractiveRating.png",
    link: "https://github.com/Rasweb/Frontend_Mentor-Interactive-rating-component.git",
    dateCreated: "2022-04-19 14:50",
  },
  {
    id: 11,
    title: "Vue3 Zelda todo",
    description:
      "This is a vue3 Zelda inspired todo list. Zelda todo uses single file components, it is also my first vuejs project. All textual information comes from Nintendo's `BOTW` game. It uses 79% vue, 8% javascript, 6% html, 4% shell, and 3% javascript.",
    language: ["Vue", "JavaScript", "HTML", "Shell", "TypeScript"],
    img: "/images/VueZeldaTodo.png",
    link: "https://github.com/Rasweb/Vue3-To-Do.git",
    dateCreated: "2022-04-29 10:34",
  },
  {
    id: 12,
    title: "Vue3 todo assignment",
    description:
      "This is a vue3 todo list assignment from Medieinstitutet. Vue3 todo was built for smaller screens and you can add, remove and mark todos as done. It uses 72% vue, 10% javascript, 8% html, 6% scss, and 3% typescript.",
    language: ["Vue", "JavaScript", "HTML", "SCSS", "TypeScript"],
    img: "/images/Vue3Todo.png",
    link: "https://github.com/Rasweb/Vue3-todo-assignment.git",
    dateCreated: "2022-05-10 09:51",
  },
  {
    id: 13,
    title: "React todo",
    description:
      "This is a react todo list. This is my first React project. This was created so I could learn about React and how to use it. You can Add, remove, and mark todos as done. It uses 60% typescript, 21% scss, 16% html and 4% css.",
    language: ["TypeScript", "SCSS", "HTML", "CSS"],
    img: "/images/ReactTodo.png",
    link: "https://github.com/Rasweb/React-to-do.git",
    dateCreated: "2022-05-17 13:20",
  },
  {
    id: 14,
    title: "React Zoo",
    description:
      "This is an assignment from Medieinstitutet. The requirements for this assignment is to work with React typescript. The instructions and all of the textual data on this site are in swedish. It uses 87% typescript, 11% html and 2% css.",
    language: ["TypeScript", "HTML", "CSS"],
    img: "/images/ReactZoo.png",
    link: "https://github.com/Rasweb/React-Zoo-Assignment.git",
    dateCreated: "2022-06-07 13:01",
  },
  {
    id: 15,
    title: "React JS Context E-shop",
    description:
      "This is a react js e-shop. I created this project because I wanted to practice on context and React JS. The data is from the Fake Store API. It uses 93% javascript, 5% html, and 2% css.",
    language: ["JavaScript", "HTML", "CSS"],
    img: "/images/ReactContext.png",
    link: "https://github.com/Rasweb/React-JS-Context-e-Shop.git",
    dateCreated: "2022-07-21 16:44",
  },
  {
    id: 16,
    title: "VuxenJuice",
    description:
      "This is a Fullstack group project from medieinstitutet, created using ReactTs and NodeJs. Its a booking site where you can do all the CRUD operations. It uses 89% TypeScript, 7% JavaScript, 3% CSS, and 1% HTML.",
    language: ["TypeScript", "JavaScript", "CSS", "HTML"],
    img: "/images/VuxenJuice.png",
    link: "https://github.com/Rasweb/booking-system.git",
    dateCreated: "2022-08-17 12:07",
  },
  {
    id: 17,
    title: "Second personal portfolio",
    description:
      "This is my second portfolio created using react and typescript with tailwind",
    language: [
      "React",
      "TypeScript",
      "JavaScript",
      "Styled Components",
      "HTML",
      "CSS",
      "Tailwind",
    ],
    img: "/images/secondPersonalPortfolio.png",
    link: "https://github.com/Rasweb/Personal-Portfolio-React",
    dateCreated: "2022-05-30 14:34",
  },
];

export default projects;
