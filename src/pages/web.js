import React from "react"
import { Link } from "gatsby"
import styled, { css, keyframes } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/container/Section"
import Hero from "../components/container/Hero"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ImgDevWeb from "../images/dev-web.png"
import ImgDevWeb2 from "../images/dev-web-2.png"
import Button from "../components/button/button"

const Subheader = styled.h2``
const Title = styled.h1``

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "modernisation.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const WebPage = () => (
  <Layout>
    <SEO title="WebPage" />
    <Banner />
    <Hero>
      <Title>Développement web</Title>
      <Subheader>Développer des sites web... est dans notre ADN !</Subheader>
    </Hero>
    <Section className={"bg-turquoise"}>
      <div>
        <img src={ImgDevWeb} alt="Screen" />

        <div>
          <h2>Vous avez besoin d’un site web ?</h2>
          <p>
            De mettre votre vieux site web au goût du jour ? D'une page
            d'atterissage pour votre campagne publicitaire ? Vous souhaitez vous
            démarquer ? Gérer vous-même le contenu de votre site web sans avoir
            recours à un programmeur ?
          </p>
          <h3>Prospection vous livre votre site web clé en main.</h3>

          <p>
            Nos spécialistes vous accompagnent pour définir clairement vos
            besoins, vous conseillent sur le plan technologique, des
            fonctionnalités et des processus d’affaires. Nous établissons avec
            vous la stratégie de développement de votre site web dans le respect
            de votre budget et nous nous chargeons de la gestion du projet. Chez
            Prospection nous pilotons et réalisons votre projet web en mode
            agile en assurant une coopération permanente avec vous.
          </p>
          <p>
            Choisir Prospection c’est avoir sa propre équipe de développement
            dédiée à la réussite de votre site web.
          </p>
          <h3>Vous avez un projet ?</h3>
          <Button href="/" size={"large"} theme={"btn-primary"}>
            Contact
          </Button>
        </div>
      </div>
    </Section>
    <Section className={"bg-sky"}>
      <div>
        <div>
          <h2>Analyse fonctionnelle et technique</h2>
          <p>
            Votre entreprise, votre organisme a des processus d’affaires
            spécifiques ? Besoin de fonctionnalités sur mesure ? Gérer vous même
            votre site web et être indépendant de votre équipe TI ?
          </p>

          <h3>
            Analyse et conseils d'experts pour développer votre projet sur de
            bonnes fondations
          </h3>
          <p>
            L’analyse fonctionnelle constitue la fondation de votre site web ou
            de votre application mobile. Elle permet d’établir la feuille de
            route du projet. Nous analysons vos besoins en fonction de votre
            contexte et de vos besoins d’affaires et vous conseillons sur le
            choix technologiques et les orientations techniques pour développer
            votre site web ou votre application mobile.
          </p>
          <p>
            Par exemple, nous identifions le CMS (Système de gestion de contenu)
            approprié qui permettra de créer et gérer les pages ainsi que les
            contenus textes et/ou multimédia (images, vidéos, fichiers PDF,
            etc…) de votre site web. Ou encore, nous définissons ensemble et
            documentons les fonctionnalités nécessaires pour concevoir un site
            web de qualité qui répondra aux besoins des vos utilisateurs tout en
            respectant vos diverses contraintes d’affaires et votre budget.
          </p>
        </div>{" "}
        <img src={ImgDevWeb2} alt="Screen" />
      </div>
    </Section>
    <Section className={"bg-salmon"}>
      <div>
        <img src={ImgDevWeb2} alt="Screen" />
        <div>
          <h2>Programmation, intégration et&nbsp;sécurité</h2>

          <p>
            Dans quel langage programmer votre site web ? Doit-il communiquer
            avec d’autres applications ? Comment y intégrer et traiter des
            données externes ? Avez-vous des informations sensibles qui
            nécessitent d’être encodées ?
          </p>
          <p>
            Dans chaque cas, ce sont les besoins qui déterminent le type de
            programmation. Les technologies offrent toute la flexibilité pour
            s’adapter. À votre projet. À vos besoins.
          </p>

          <h3>Nos programmeurs parlent une multitude de langages !</h3>
          <p>
            Tous les jours notre équipe de production code dans une multitude de
            langages de programmation web pour traiter et échanger de
            l’information avec l’utilisateur et le serveur. Que votre site web,
            votre application mobile ou votre base de données, nécessite le
            langage C#, PHP, XML, HTML5, Javascript, SQL, MySQL ou CSS3, nous le
            parlons couramment.
          </p>
          <p>
            L’équipe de Prospection est constituée d’experts qui maîtrisent
            différents CMS (Système de gestion de contenu) qui permettent de
            développer rapidement des solutions professionnelles de qualité.
            Ainsi, votre site web ou votre site intranet pourrait être développé
            sur WordPress, votre boutique e-commerce sur WooCommerce, Magento ou
            Nop Commerce. De multiples fonctionnalités pourraient facilement y
            être ajoutées tel qu’un module sécurisé de paiement en ligne
            connecté à PayPal ou Stripe, etc….
          </p>

          <h3>La sécurité au centre de nos considérations</h3>
          <p>
            Avec un soucis permanent pour la sécurité de vos données et des
            autres informations critiques qui pourraient circuler entre votre
            site web, votre base de données et des applications externes, nous
            nous assurons de bien les protéger. Nos spécialistes veillent à
            protéger votre site web, votre serveur et vos bases de données des
            pirates informatiques, spammers et des logiciels malveillants.
          </p>
        </div>
      </div>
    </Section>
  </Layout>
)

export default WebPage
