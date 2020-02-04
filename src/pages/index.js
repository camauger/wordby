import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ImgWeb from "../images/web.png"
import ImgStrat from "../images/content.png"
import Section from "../components/container/Section"

const fontText = `"Roboto", sans-serif`

const catchPhrase = `Accompagnement et développement de votre efficacité numérique`


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



const Web = () => (
  <Section className={`bg-bgPink`}>
    <BlockSegment>
      <img src={ImgWeb} alt="web" />
    </BlockSegment>
    <BlockSegmentRight>
      <h2>Développement de sites web</h2>
      <p>
        Vous voulez lancer votre site web, votre blogue, votre intranet
        d'entreprise ? Votre site web actuel est désuet et/ou difficile à gérer
        ? Vous devez proposer de nouvelles fonctionnalités en ligne à vos
        visiteurs ? ​​​​​​​Votre site doit être navigable sur tous types
        d'appareils dont les téléphones intelligents ?
      </p>
      <p>
        Le développement de solutions web c'est notre spécialité ! Chez
        Prospection, nous vous accompagnons et prenons en charge le
        développement de votre site web ou intranet pour vous livrer une
        solution flexible et performante clef en main. Nul besoin d'avoir de
        programmeur pour créer et gérer vos contenus.
      </p>
      <a>
        Développement web
      </a>
    </BlockSegmentRight>
  </Section>
)

const Strategic = () => (
  <Section>
    <BlockSegmentLeft>
      <h2>Stratégie numérique</h2>
      <p>
        Établir une stratégie marketing numérique demande une bonne analyse de
        vos besoins, une bonne connaissance de votre marché et des outils de
        communication numérique disponibles. Nos spécialistes vous proposent la
        stratégie adéquate basée sur un diagnostic précis de votre efficacité
        numérique, en prenant en compte vos objectifs et votre budget.
      </p>
      <ul>
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
      </ul>
      <p>
        Stratégie ecommerce, marketing numérique, SEM, SEO, SEA, rapports de
        performance / web analytique, automatisation marketing, blogue,
        animation et publicité sur les réseaux sociaux, SMO.
      </p>
      <a>Stratégie numérique</a>
    </BlockSegmentLeft>
    <BlockSegment>
      <img src={ImgStrat} alt="strat" />
    </BlockSegment>
  </Section>
)

const CardExample = () => (
  <div className="card">
    <h2>
      Tout ce dont vous avez besoin dans une seule suite.
    </h2>
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
  </div>
)



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

  <h1>{catchPhrase}</h1>

   

    <Strategic />
    <Web />
    
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
