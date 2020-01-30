import { createGlobalStyle } from 'styled-components';

const primary = "#ee7203"
const secondary = "#091437"
const headLight = "#5b5a5a"
const bgPink = "#f07e66"
const bgPinkLight = "#f28d78"

const fontHead = `"Roboto Slab", sans-serif`
const fontText = `"Roboto", sans-serif`

export const GlobalVariables = createGlobalStyle`
body {
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.text};
}

`