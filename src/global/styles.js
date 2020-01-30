import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
p {
    font-size: 16px;
}
h1 {
    font-size: 36px;
    font-family: "Roboto Slab", sans-serif;
    font-weight: bold;
}
h2 {
    font-size: 48px;
    font-weight: 100;
}
h3 {
    color: #5b5a5a;
    font-size: 30px;
    font-weight: 100;
}
.heading {
    font-size: 24px;
    font-weight: 100;
    font-style: italic;
}
.subheading {
    font-size: 21px;
    font-family: "Roboto Slab", sans-serif;
    font-weight: 100;
}
`
