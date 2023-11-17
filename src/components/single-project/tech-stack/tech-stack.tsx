import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { ITechStack } from "../singleProjectTypes";

export default function TechStack(props: ITechStack) {
  return (
    <>
      <Container>
        <Container>
          <Typography variant="h6">Tech stack</Typography>
          <List>
            {props.language.map((item: string, index: number) => (
              <ListItem key={index} disablePadding>
                <ListItemText primary={item}></ListItemText>
              </ListItem>
            ))}
          </List>
        </Container>

        {/* <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Icon with text
          </Typography>
          <Demo>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid> */}
      </Container>
    </>
  );
}
