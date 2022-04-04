import { StyledPage } from "../components/styles/Page.styled";
import { BreakDown } from "../components/styles/Scheduler.styled";

const Scheduler = () => {
  return (
    <StyledPage justifyContent="center">
      <BreakDown>
        <div>Recurring Expenses</div>
        <div>$120</div>
      </BreakDown>
    </StyledPage>
  );
};

export default Scheduler;
