import { Container, Typography } from "@mui/material";

export default function Info() {
  return (
    <>
      <Container className="containers-style">
        <Typography variant="h5">{"About Me"}</Typography>
        <Typography variant="h6">
          {"Hello, I'm Rasmus a frontend developer from Sweden"}
        </Typography>
      </Container>
      {/*  */}
      <Container className="containers-style">
        <Typography variant="h6">{"Introduction"}</Typography>
        <Typography variant="subtitle1" component={"p"}>
          {
            "I am a junior frontend developer who's worked with an assortment of technologies, I have a solid foundation in web development and unique experiences from my approximately 1 year of work experience."
          }
        </Typography>
      </Container>
      {/*  */}
      <Container className="containers-style">
        <Typography variant="h6">{"Work Experience"}</Typography>
        <Typography variant="subtitle1" component={"p"} pb={1}>
          {
            " I have approximately 1 year of work experience in the frontend field. It all began when I got the privilege to be an intern at Nexus Group Global through my education at Medieinstitutet, where I was studying frontend development."
          }
        </Typography>
        <Typography variant="subtitle1" component={"p"} pb={1}>
          {
            "Nexus Group Global is a a prominent European tech company renowned for it's expertise in secure and trusted identities, a part of the french company IN Groupe who's been partnered with the french government for 500 years."
          }
        </Typography>
        <Typography variant="subtitle1" component={"p"}>
          {
            "During my time at Nexus I worked with several developers and people, from frontend to backend to different kind of designers. I got to learn and develop a modern web application, by enhancing the user experience and accessibility of the different features. The tech stack I got to work with was: Vue.js 2, HTML, CSS, Tailwind and Vuetify. I have increase my ability to collaborate effectively with cross-functional teams and navigate through the complexities of substantial MVP requirements."
          }
        </Typography>
      </Container>
      {/*  */}

      <Container className="containers-style">
        <Typography variant="h6">{"Education"}</Typography>
        <Typography variant="subtitle1">
          {
            "I have studied at Medieinstitutet Stockholm Sweden for approximately 2 years and learned to become a Frontend Developer. At Medieinstitutet I got to learn javaScript, HTML, CSS, but also frameworks and libraries like React and Vue.js. This education also included two internship periods where I was at Nexus and got implement my knowledge in a real company for a real project. All this helped me get a contract for 3 months after graduation to work as a frontend developer at Nexus Group Global."
          }
        </Typography>
      </Container>
    </>
  );
}
