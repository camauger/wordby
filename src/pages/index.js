import React from "react"
import { Link } from "gatsby"
import styled, { css, keyframes } from "styled-components"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
//import font from url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');
import "typeface-roboto"
import "typeface-roboto-slab"
import ImgWeb from "../images/web.png"
import ImgStrat from "../images/content.png"

const primary = "#ee7203"
const secondary = "#091437"
const bgPink = "#f07e66"
const bgPinkLight = "#f28d78"

const catchPhrase = `Accompagnement et développement de votre efficacité numérique`

const FrontText = styled.h1`
  color: white;
`

const Block = styled.section`
  display: flex;
  flex-direction: row;
`

const BlockWrapper = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: ${props => props.backgroundColor || "#f07e66"};
  color: ${props => (props.backgroundColor === "#091437" ? "white" : "black")};
`

const BlockSegmentLeft = styled.div`
  flex-basis: calc(50% - 10vw);
  padding-left: 10vw;
`
const BlockSegmentRight = styled.div`
  flex-basis: calc(50% - 10vw);
  padding-right: 10vw;
`
const BlockSegment = styled.div`
  flex-basis: calc(50% + 10vw);
  img {
    max-width: 100%;
    margin: auto;
    display: block;
  }
`

const Heading1 = styled.h1`
  font-size: 36px;
  font-family: "Roboto Slab", sans-serif;
  font-weight: bold;
`

const Heading2 = styled.h2`
  font-size: 48px;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
`
const Heading3 = styled.h3`
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  color: #5b5a5a;
`
const Heading = styled.p`
  font-size: 24px;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-style: italic;
`

const Subtitle = styled.p`
  font-size: 21px;
  font-family: "Roboto Slab", sans-serif;
  font-weight: 100;
`
const Paragraph = styled.p`
  font-size: 16px;
  font-family: "Roboto", sans-serif;
`

const HighParagraph = styled(Paragraph)`
  font-size: 18px;
  padding: 16px;
  background-color: ${bgPinkLight};
`

const CardHeading = styled(Heading2)`
  &:after {
    content: "";
    position: relative;
    border-bottom: 6px solid ${primary};
    width: 50px;
    display: block;
    margin-top: 8px;
    margin-left: 8px;
  }
`

const Card = styled.div`
  background-color: #e4e9f4;
  transition: all 0.4s ease-in-out;
  padding: 36px;
  box-sizing: border-box;
  &:hover {
    background-color: #091437;
    color: white;
  }
`

const Button = styled.a`
  //background-color: ${primary};
  text-transform: uppercase;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
  padding: 8px 16px;
  border: 2px solid ${primary};
  background-size: 200% 100%;
  background-position: right bottom;
  background-image: linear-gradient(to right, transparent 50%, ${primary} 50%);
  transition: all 0.5s ease-out;
  &:hover {
    background-position: left bottom;
    color: ${primary};
  }
`

const List = styled.ul`
  font-family: "Roboto", sans-serif;
  list-style: none;
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  li::before {
    content: "";
    border-bottom: 6px solid ${primary};  
    color: ${primary};
    display: flex;
    min-width: 1rem; 
    width: 1rem;
    margin-left: -1rem;
    margin-right: 1rem; 
    
  }
`

const Web = () => (
  <BlockWrapper backgroundColor={bgPink}>
    <Block>
      <BlockSegment>
        <img src={ImgWeb} alt="web" />
      </BlockSegment>
      <BlockSegmentRight>
        <Heading2>Développement de sites web</Heading2>
        <HighParagraph>
          Vous voulez lancer votre site web, votre blogue, votre intranet
          d'entreprise ? Votre site web actuel est désuet et/ou difficile à
          gérer ? Vous devez proposer de nouvelles fonctionnalités en ligne à
          vos visiteurs ? ​​​​​​​Votre site doit être navigable sur tous types
          d'appareils dont les téléphones intelligents ?
        </HighParagraph>
        <Paragraph>
          Le développement de solutions web c'est notre spécialité ! Chez
          Prospection, nous vous accompagnons et prenons en charge le
          développement de votre site web ou intranet pour vous livrer une
          solution flexible et performante clef en main. Nul besoin d'avoir de
          programmeur pour créer et gérer vos contenus.
        </Paragraph>
        <Button>Développement web</Button>
      </BlockSegmentRight>
    </Block>
  </BlockWrapper>
)

const Strategic = () => (
  <BlockWrapper backgroundColor={secondary}>
    <Block>
      <BlockSegmentLeft>
        <Heading2>Stratégie numérique</Heading2>
        <Paragraph>
          Établir une stratégie marketing numérique demande une bonne analyse de
          vos besoins, une bonne connaissance de votre marché et des outils de
          communication numérique disponibles. Nos spécialistes vous proposent
          la stratégie adéquate basée sur un diagnostic précis de votre
          efficacité numérique, en prenant en compte vos objectifs et votre
          budget.
        </Paragraph>
        <List>
          <li>Préparation de votre modèle d'affaires en ligne</li>
          <li>Proposition stratégique pour votre commerce en ligne</li>
          <li>Analyse et veille de la compétition</li>
          <li>Définition des canaux appropriés pour vendre en ligne</li>
          <li>Conseils en modes de paiement sécurisé</li>
          <li>Conseils en modes de livraison adaptés</li>
          <li>
            Mesure et analyse des performances et de l'utilisation des canaux de
            vente en ligne
          </li>
        </List>
        <Paragraph>
          Stratégie ecommerce, marketing numérique, SEM, SEO, SEA, rapports de
          performance / web analytique, automatisation marketing, blogue,
          animation et publicité sur les réseaux sociaux, SMO.
        </Paragraph>
        <Button>Stratégie numérique</Button>
      </BlockSegmentLeft>
      <BlockSegment>
        <img src={ImgStrat} alt="strat" />
      </BlockSegment>
    </Block>
  </BlockWrapper>
)

const CardExample = () => (
  <Card>
    <CardHeading>
      Tout ce dont vous avez besoin dans une seule suite.
    </CardHeading>
    <Paragraph>
      Une solution adoptée par des millions d'entreprises de toutes tailles, des
      PME aux sociétés du Fortune 500.
    </Paragraph>
    <Subtitle>G Suite facilite considérablement le travail en équipe.</Subtitle>
    <Paragraph>
      Tous les outils dont vous avez besoin pour travailler efficacement, réunis
      dans une suite qui fonctionne aussi bien sur ordinateur, téléphone et
      tablette.
    </Paragraph>
  </Card>
)



const CardGroup = styled.section`
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  div {
    flex-basis: ${props => (props.cards === 2 ? "33%" : "100%")};
  }
  `


const CardGroupRow = () => (
  <CardGroup cards={2}>
    <CardExample />
    <CardExample />
    
  </CardGroup>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FrontText>{catchPhrase}</FrontText>
    <Strategic />
    <Web />
    <CardGroupRow />

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
