import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const ButtonStyle = styled.a.attrs(props => ({
  size: props.size || "24px",
  coloring: props.coloring || "black",
  color: props.color || "black",
}))`
  text-transform: uppercase;
  font-size: ${props => props.size};

  padding: 8px 16px;
  border: 2px solid ${props => props.coloring};
  background-size: 200% 100%;
  background-position: right bottom;
  background-image: linear-gradient(
    to right,
    transparent 50%,
    ${props => props.coloring} 50%
  );
  transition: all 0.5s ease-out;
  color: ${props => props.color};
  &:hover {
    background-position: left bottom;
    color: ${props => props.coloring};
  }
`
const Button = ({ children }) => {
  return <ButtonStyle>{children}</ButtonStyle>
}
Button.propTypes = {
    children: PropTypes.node.isRequired,
  }

export default Button