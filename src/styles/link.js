import { highlightColor, foregroundColor } from "./color";

export const linkStyle = {
  textDecoration: 'none',
  textAlign: 'center',
  display: 'block',
  padding: '.5em',
  color: foregroundColor,
  '&:hover': {
    background: highlightColor,
  }
}
