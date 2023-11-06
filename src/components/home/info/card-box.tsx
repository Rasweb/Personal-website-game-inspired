import { Button, Card, CardActions, CardMedia } from "@mui/material";
import { ICardBoxProps } from "./card-boxTypes";

export default function CardBox(props: ICardBoxProps) {
  return (
    <>
      <Card
        className="card-container"
        sx={{
          backgroundColor: "secondary.main",
          color: "mainText",
        }}
      >
        <CardMedia
          className="card-media"
          onClick={props.toLinkedin}
          image="/images/Linkedin-profile.png"
          title="linkedin profile image and link of Rasmus Palm"
          sx={{
            "&:hover": {
              border: 3,
              borderColor: "hoverFocus",
            },
          }}
        />
        <CardActions>
          <Button
            sx={{
              typography: { sm: "subtitle2", xs: "body2" },
              backgroundColor: "accentCustom",
              color: "mainText",
              "&:hover": {
                backgroundColor: "hoverFocus",
              },
            }}
          >
            About Me
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
