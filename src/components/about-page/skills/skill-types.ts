type TooltipState = Record<number, boolean>;

export interface ISkillProps {
  handleTooltipOpen: (id: number) => void;
  handleTooltipClose: (id: number) => void;
  tooltipOpen: TooltipState;
}
