import { IButton } from 'interfaces/components/Button';
import { StyledButton } from 'styledComponents/Button';

const Button = ({ title, layout, buttonSize, ...props }: IButton) => {
  return (
    <StyledButton layout={layout} buttonSize={buttonSize} {...props}>
      {title}
    </StyledButton>
  );
};

export default Button;
