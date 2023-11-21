const projects = [
  {
    id: 1,
    title: "First portfolio",
    description:
      "This is my first personal portfolio. This is my first personal portfolio. This project was built with Sass/scss and pure javaScript no extra frameworks. It was created just so I could learn more about basic javaScript and learn the foundation before I moved on. The projects are dynamically generated, using class and Objects with javaScript. The class is created using a constructor with some basic parameters.The objects are in an Array of Objects so it can easily be accessed and configured.",
    language: ["SCSS", "JavaScript", "HTML"],
    img: "/images/PersonalPortfolioOld.png",
    link: "https://github.com/Rasweb/Personal-portfolio.git",
    dateCreated: "2022-02-07 14:34",
  },
  {
    id: 2,
    title: "Clone website",
    description:
      "This is an assignment from my Front End Developer education from Medieinstitutet Sweden. The assignment was to copy a simple website by the instructor. In the folder InfoToAssignment you can find the site i was cloning. Some of the textual information is in swedish but that doesn't affect the code.",
    language: ["HTML", "SCSS", "JavaScript"],
    img: "/images/CloneWebsite.png",
    link: "https://github.com/Rasweb/HTML-CSS-clone_website.git",
    dateCreated: "2021-10-01 12:32",
  },
  {
    id: 3,
    title: "Ett Litet Hem",
    description:
      "This project is called 'Ett Litet Hem', which is 'A little home' in English. This was the first time I worked in a group project, it's a group assignment with two other students from my Front End Developer education at Medieinstitutet Sweden. It's a fictional web-shop built with html, Scss/sass and Gulp. This fictional web-shop is a shop about ceramics and we used flex and grind when designing the layout of the page. I created the about(om) page and the contact footer, this was the first time I worked in a group project in front end development. This project's textual information is in swedish and the information on this site and the links are fictional.",
    language: ["HTML", "CSS", "SASS", "JavaScript", "Gulp"],
    img: "/images/EttLitetHem.png",
    link: "https://github.com/Rasweb/MI-HTML-CSS-EttLitetHem.git",
    dateCreated: "2021-10-05 12:53",
  },
  {
    id: 4,
    title: "Javascript Todo",
    description:
      "This is a javaScript To-do list assignment from Medieinstitutet Sweden. This is the first JavaScript project I did. As you can see on github, this was also the first time i tried github branches. The main branch is called master in this project because it's an old project. This project has a simple CRUD functionality, with a sort button that will move the done items to the bottom.",
    language: ["JavaScript", "SCSS", "HTML"],
    img: "/images/JsTodo.png",
    link: "https://github.com/Rasweb/JavaScript-BasicCourse-Assignment1.git",
    dateCreated: "2021-10-29 10:08",
  },
  {
    id: 5,
    title: "Homegrown Records",
    description:
      "This is Homegrown Records, a group assignment with two other students from Medieinstitutet Sweden. It's a fictional web-shop about music albums they are all dynamically created and it was the first time we used Typescript. I mainly created the forms and their properties and also the testing for the site using cypress. But the group helped each other when help was needed. This was the first time i worked with Cypress(testing tool), it was fun and very educational.",
    language: ["JavaScript", "SCSS", "HTML", "JavaScript", "Cypress"],
    img: "/images/HomegrownRecords.png",
    link: "https://github.com/Rasweb/Project_Butik.git",
    dateCreated: "2021-11-30 09:54",
  },
  {
    id: 6,
    title: "NodeJs Todo",
    description:
      "This is an Express To do list. This is a to do list from Medieinstitutet Sweden. This is a to-do list created using node.js and express handlebars to create the html. This also has a crud functionality and a better sorting it also uses MongoDB as a database.",
    language: [
      "JavaScript",
      "Handlebars",
      "CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    img: "/images/NodeJsTodo.png",
    link: "https://github.com/Rasweb/Nodejs-TODO.git",
    dateCreated: "2022-01-31 09:00",
  },
  {
    id: 7,
    title: "Kvitter",
    description:
      "This is Kvitter! This is a group assignment with two other students from Medieinstitutet Sweden. It's a simplified Twitter-clone. We created this project with node.js and used Express to create the different routes with a CRUD functionality. Where you can create an account, and post to add them as favorites. ",
    language: [
      "JavaScript",
      "SCSS",
      "Handlebars",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    img: "/images/Kvitter.png",
    link: "https://github.com/Rasweb/MI-DynamiskWebbutveckling-Kvitter.git",
    dateCreated: "2022-02-24 14:07",
  },
  {
    id: 8,
    title: "Proluo Bene",
    description:
      "This is Proluo Bene a project focused on agile work. This is a group assignment with two other students from Medieinstitutet Sweden. It's a fictional login page and booking site for cleaning. This project is more focused on agile work methods. That's why the site is very minimal and with no functionality. It was also the first time i worked with Github pull requests. A lot of the work was done outside the code using planing and preparation.",
    language: ["HTML", "SCSS", "Agile work"],
    img: "/images/ProluoBene.png",
    link: "https://github.com/Rasweb/MI-AGIL-ProluoBene.git",
    dateCreated: "2022-03-21 11:04",
  },
  {
    id: 9,
    title: "Rethink",
    description:
      "This is my Graphic profile to Web Project. This is my second assignment for Graphic design at Medieinstitutet Sweden. This project was more about the design part. I have created my own Lettermark logo, Illustrations, Mockups, Wireframes. Unfortunately my responsive design was/is lacking in the project.",
    language: ["SCSS", "HTML", "Design"],
    img: "/images/Rethink.png",
    link: "https://github.com/Rasweb/Rethink.git",
    dateCreated: "2022-04-21 16:04",
  },
  {
    id: 10,
    title: "Interactive rating",
    description:
      "This is a solution to the Interactive rating component challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects. I created this project because I wanted to try frontendmentor.io. This is a nice, small project to practice handling user interactions and updating the DOM, and also to make it look as close to the design as possible.",
    language: ["SCSS", "HTML", "JavaScript"],
    img: "/images/InteractiveRating.png",
    link: "https://github.com/Rasweb/Frontend_Mentor-Interactive-rating-component.git",
    dateCreated: "2022-04-19 14:50",
  },
  {
    id: 11,
    title: "Vue3 Zelda todo",
    description:
      "This is my Zelda inspired to-do list. This was the first time I tried Vue.js 3, I created it because I wanted to practice vue.js before my course about it on Medieinstitutet Sweden. There is some CRUD functionality and also design choices inspired by Nintendo's Legend of Zelda Breath of the Wild game.",
    language: ["Vue.js 3", "JavaScript", "HTML", "TypeScript"],
    img: "/images/VueZeldaTodo.png",
    link: "https://github.com/Rasweb/Vue3-To-Do.git",
    dateCreated: "2022-04-29 10:34",
  },
  {
    id: 12,
    title: "Vue3 todo",
    description:
      "This is a Vue 3 to-do list assignment from Medieinstitutet Sweden. The project was built for smaller screens, for mobile, but it can be used on desktop. CRUD functionality exists, you can also add an item multiple times. It was also built for smaller screens.",
    language: ["Vue.js 3", "JavaScript", "HTML", "SCSS", "TypeScript"],
    img: "/images/Vue3Todo.png",
    link: "https://github.com/Rasweb/Vue3-todo-assignment.git",
    dateCreated: "2022-05-10 09:51",
  },
  {
    id: 13,
    title: "React todo",
    description:
      "This is a React to-do list, this is my first React project. This was created so I could learn about React and how to use it. This project has CRUD functionality, I also used typescript, to work with arrays and components.",
    language: ["TypeScript", "SCSS", "HTML", "CSS", "React.js"],
    img: "/images/ReactTodo.png",
    link: "https://github.com/Rasweb/React-to-do.git",
    dateCreated: "2022-05-17 13:20",
  },
  {
    id: 14,
    title: "React Zoo",
    description:
      "This is my React Zoo assignment project from Medieinstitutet Sweden. The requirements for this project was: Create a Single Page Application, Display the animals, Read more about the animals, Has been feed boolean for the animals, disable feed button when animal has been fed, showcase feed time. I retrieved the animals from an API and put them in localStorage. I failed to create a three hour check for last fed.",
    language: ["TypeScript", "HTML", "CSS", "React"],
    img: "/images/ReactZoo.png",
    link: "https://github.com/Rasweb/React-Zoo-Assignment.git",
    dateCreated: "2022-06-07 13:01",
  },
  {
    id: 15,
    title: "React.js E-shop",
    description:
      "This is my React js E-shop. I created this project to practice React and the Context api. I used data from the fakestoreapi.com.I this project you can see the items, learn more about an item, open the shopping cart, add/remove items from the cart, increase the quantity/price and do a fake checkout. As you can see the design is lacking on this project, I was more focused on the technical part.",
    language: ["JavaScript", "HTML", "CSS", "React.js", "Context API"],
    img: "/images/ReactContext.png",
    link: "https://github.com/Rasweb/React-JS-Context-e-Shop.git",
    dateCreated: "2022-07-21 16:44",
  },
  {
    id: 16,
    title: "VuxenJuice",
    description:
      "This is Vuxenjuice an assignment from Medieinstitutet Sweden, using React.ts and Node.js .This is a booking system project with CRUD operations, using an old self created MongoDB database. For the most part I worked on the backend using express and the admin page on the front-end.",
    language: ["TypeScript", "JavaScript", "CSS", "HTML", "Node.js", "Express"],
    img: "/images/VuxenJuice.png",
    link: "https://github.com/Rasweb/booking-system.git",
    dateCreated: "2022-08-17 12:07",
  },
  {
    id: 17,
    title: "Second portfolio",
    description:
      "This is my second personal portfolio. This was created before my internship period as a frontend developer. It's a simple layout where you can find my projects and learn more about them. I also used github pages for this project to show my React.ts project. I used no special color theme, I only used the color black and white to make the styling as simple as possible. But I did create a dark/light mode switch using the context api.",
    language: [
      "React",
      "TypeScript",
      "Styled Components",
      "HTML",
      "CSS",
      "Tailwind",
      "React",
    ],
    img: "/images/secondPersonalPortfolio.png",
    link: "https://github.com/Rasweb/Personal-Portfolio-React",
    dateCreated: "2022-05-30 14:34",
  },
  {
    id: 18,
    title: "CM Web UI",
    description:
      "This is CM Web UI a project I worked on when I was an intern and then an employee at Nexus Group Global. I was at Nexus for approximately 1 year, I was an intern connected to my education at Medieinstitutet Sweden, then I was employed for 3 months. Under that time I worked with full-stack developers and help them with front-end, learned from a frontend consultant with 6 years of experience, developed a modern responsive website and implemented a design-system from a ux/ui developer to ensure consistency across web-pages. The code is confidential and the website was planed to be included in a future package.",
    language: ["Vue.js 2", "JavaScript", "HTML", "CSS", "Tailwind"],
    img: "/images/Confidential.png",
    link: "https://www.nexusgroup.com/sv/",
    dateCreated: "2022-10-01 09:00",
  },
  {
    id: 19,
    title: "Sunrises",
    description:
      "This was my Thesis project at Medieinstitutet Sweden. It was made between the internship period. I created an e-commence for a teacher who was going to sell solar panels in Sweden. This was the first time I used Next.js typescript. I also used Medusa an open-source headless commerce engine that enables developers to create digital commerce experiences. I practiced on splitting up the files and creating nice and readable code. This project's code is also confidential, so I unfortunately can't show the code.",
    language: ["Next.js", "Medusa", "TypeScript", "HTML", "CSS"],
    img: "/images/Confidential.png",
    link: "https://www.sunrises.se/",
    dateCreated: "2022-12-03 17:35",
  },
];

export default projects;
