import { Container, Typography } from "@mui/material";
import { IAboutRowProps } from "../singleProjectTypes";

export default function AboutRow(props: IAboutRowProps) {
  return (
    <>
      <Container className="about-cont">
        <Container>
          <Typography variant="h5">About</Typography>
        </Container>
        <Container>
          <Typography variant="subtitle1">{props.description}</Typography>
        </Container>
      </Container>
    </>
  );
}
