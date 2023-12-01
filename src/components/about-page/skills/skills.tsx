import { workedSkills } from "@/data/skillsLists";
import {
  Button,
  Container,
  Link,
  List,
  Tooltip,
  TooltipProps,
  Typography,
  styled,
  tooltipClasses,
} from "@mui/material";
import Image from "next/image";
import { ISkillProps } from "./skill-types";

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#1d1e44",
    color: "#f0f0f0",
  },
}));

export default function Skills(props: ISkillProps) {
  return (
    <>
      <Container className="containers-style">
        <Typography variant="h6">Tech stack</Typography>
        <List className="tech-cont">
          {workedSkills.map((skill) => (
            <div key={skill.id} className="skill-cont">
              <CustomTooltip
                title={
                  <>
                    <Typography variant="h6">{skill.title}</Typography>
                    <Link href={skill.tooltipLink} underline="hover">
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "secondaryText",
                          "&:hover": {
                            color: "hoverFocus",
                          },
                        }}
                      >
                        Learn more
                      </Typography>
                    </Link>
                  </>
                }
              >
                <div>
                  <Button onClick={() => props.handleTooltipOpen(skill.id)}>
                    <Image
                      src={skill.icon}
                      alt={skill.title}
                      width={40}
                      height={40}
                    />
                  </Button>
                </div>
              </CustomTooltip>
            </div>
          ))}
        </List>
      </Container>
    </>
  );
}
