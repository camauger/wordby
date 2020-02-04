import React from "react"
import { Link } from "gatsby"
import styled, { css, keyframes } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ImgWeb from "../images/web.png"
import ImgStrat from "../images/content.png"
import Section from "../components/container/Section"

const primary = "#ee7203"
const secondary = "#091437"

const bgPink = "#f07e66"
const bgPinkLight = "#f28d78"

const fontText = `"Roboto", sans-serif`

const catchPhrase = `Accompagnement et développement de votre efficacité numérique`

const Button = styled.a.attrs(props => ({
  size: props.size || "24px",
  coloring: props.coloring || primary,
  color: props.color || secondary,
}))`
  text-transform: uppercase;
  font-size: ${props => props.size};
  font-family: ${fontText};
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

const HighParagraph = styled.p`
  font-size: 18px;
  padding: 16px;
  background-color: ${bgPinkLight};
`

const CardHeading = styled.h2`
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
  transform-origin: bottom;
  &:hover {
    background-color: #091437;
    color: white;
    transform: translateY(-3rem);
  }
`

const List = styled.ul`
  font-family: ${fontText};
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
  <Section className={`bg-bgPink`}>
    <BlockSegment>
      <img src={ImgWeb} alt="web" />
    </BlockSegment>
    <BlockSegmentRight>
      <h2>Développement de sites web</h2>
      <HighParagraph>
        Vous voulez lancer votre site web, votre blogue, votre intranet
        d'entreprise ? Votre site web actuel est désuet et/ou difficile à gérer
        ? Vous devez proposer de nouvelles fonctionnalités en ligne à vos
        visiteurs ? ​​​​​​​Votre site doit être navigable sur tous types
        d'appareils dont les téléphones intelligents ?
      </HighParagraph>
      <p>
        Le développement de solutions web c'est notre spécialité ! Chez
        Prospection, nous vous accompagnons et prenons en charge le
        développement de votre site web ou intranet pour vous livrer une
        solution flexible et performante clef en main. Nul besoin d'avoir de
        programmeur pour créer et gérer vos contenus.
      </p>
      <Button color={bgPink} coloring={secondary}>
        Développement web
      </Button>
    </BlockSegmentRight>
  </Section>
)

const Strategic = () => (
  <Section backgroundColor={secondary}>
    <BlockSegmentLeft>
      <h2>Stratégie numérique</h2>
      <p>
        Établir une stratégie marketing numérique demande une bonne analyse de
        vos besoins, une bonne connaissance de votre marché et des outils de
        communication numérique disponibles. Nos spécialistes vous proposent la
        stratégie adéquate basée sur un diagnostic précis de votre efficacité
        numérique, en prenant en compte vos objectifs et votre budget.
      </p>
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
      <p>
        Stratégie ecommerce, marketing numérique, SEM, SEO, SEA, rapports de
        performance / web analytique, automatisation marketing, blogue,
        animation et publicité sur les réseaux sociaux, SMO.
      </p>
      <Button coloring={primary}>Stratégie numérique</Button>
    </BlockSegmentLeft>
    <BlockSegment>
      <img src={ImgStrat} alt="strat" />
    </BlockSegment>
  </Section>
)

const CardExample = () => (
  <Card>
    <CardHeading>
      Tout ce dont vous avez besoin dans une seule suite.
    </CardHeading>
    <p>
      Une solution adoptée par des millions d'entreprises de toutes tailles, des
      PME aux sociétés du Fortune 500.
    </p>
    <p className="subheading">
      G Suite facilite considérablement le travail en équipe.
    </p>
    <p>
      Tous les outils dont vous avez besoin pour travailler efficacement, réunis
      dans une suite qui fonctionne aussi bien sur ordinateur, téléphone et
      tablette.
    </p>
  </Card>
)

const CardGroup = styled.section`
  padding-top: 4rem;
  padding-bottom: 4rem;
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

  <h1>{catchPhrase}</h1>

   

    <Strategic />
    <Web />
    <CardGroupRow />
    <Section backgroundColor={"red"}>
      <p>
        Vous voulez lancer votre site web, votre blogue, votre intranet
        d'entreprise ? Votre site web actuel est désuet et/ou difficile à gérer
        ? Vous devez proposer de nouvelles fonctionnalités en ligne à vos
        visiteurs ? ​​​​​​​Votre site doit être navigable sur tous types
        d'appareils dont les téléphones intelligents ?
      </p>
    </Section>
    <Link to="/articleSingle/">Go to Article</Link>
    <Link to="/web/">Go to Web</Link>
  </Layout>
)

export default IndexPage
