import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { IDetailsProps } from "../singleProjectTypes";

export default function DetailsRow(props: IDetailsProps) {
  return (
    <>
      <div className="details-cont">
        <Container>
          <Typography variant="h6">About</Typography>
          <Typography variant="subtitle1">{props.description}</Typography>
        </Container>
        <Container className="details-tech-stack">
          <Typography variant="h6">Tech Stack</Typography>
          <List sx={{ paddingTop: 0 }}>
            {props.language.map((item: string, index: number) => (
              <ListItem key={index} disablePadding>
                <ListItemText primary={item}></ListItemText>
              </ListItem>
            ))}
          </List>
        </Container>
      </div>
    </>
  );
}
