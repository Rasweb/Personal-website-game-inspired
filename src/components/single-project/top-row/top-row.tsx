import { Container, Link, Typography } from "@mui/material";
import { ITopRowProps } from "../singleProjectTypes";

export default function TopRow(props: ITopRowProps) {
  return (
    <>
      <Container
        sx={{
          display: "flex",
        }}
      >
        <Container className="info-style">
          <Typography variant="h5">{props.title}</Typography>
        </Container>

        <Container className="info-style">
          <Typography variant="h6">Date Created</Typography>
          <Typography variant="subtitle1" sx={{ color: "secondaryText" }}>
            {props.dateCreated}
          </Typography>
        </Container>
        <Container className="info-cont">
          <Typography variant="h6">Learn More</Typography>
          <Link
            href={props.link}
            underline="hover"
            target="_blank"
            rel="noopener"
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: "linkCustom",
                "&:hover": {
                  color: "hoverFocus",
                },
              }}
            >
              {props.link}
            </Typography>
          </Link>
        </Container>
      </Container>
    </>
  );
}
