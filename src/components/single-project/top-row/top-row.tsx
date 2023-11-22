import { Container, Link, Typography } from "@mui/material";
import { ITopRowProps } from "../singleProjectTypes";

export default function TopRow(props: ITopRowProps) {
  return (
    <>
      <div className="top-row-cont">
        <Container className="top-row-title">
          <Typography variant="h5">{props.title}</Typography>
        </Container>
        <Container className="top-row-section">
          <Typography variant="h6">Date Created</Typography>
          <Typography variant="subtitle1">{props.dateCreated}</Typography>
        </Container>
        <Container className="top-row-section">
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
                "&:hover": { color: "hoverFocus" },
              }}
            >
              {props.link}
            </Typography>
          </Link>
        </Container>
      </div>
    </>
  );
}
