import { styled } from "goober";

export const Title = styled("h1")`
  font-size: clamp(2.5rem, 4vw, 4rem);
  font-weight: 700;
  color: ${(props) => props.theme.palette.text};
  margin: 0;
`;

export const Heading = styled("h3")`
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 600;
  color: ${(props) => props.theme.palette.text};
  margin: 0;
`;

export const Subtitle = styled("p")`
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.palette.text};
  opacity: 0.7;
  margin: 0;
`;

export const Body = styled("p")`
  font-size: ${(props) => props.theme.fontSizes.md};
  line-height: 1.6;
  color: ${(props) => props.theme.palette.text};
  margin: 0;
`;
