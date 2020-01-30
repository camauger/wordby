import React from "react"
import { Link } from "gatsby"
import styled, { css, keyframes } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/container/Section"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ImgScreen from "../images/screen.jpg"

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

const Hero = styled.section`
  max-width: 1300px;
  margin: auto;
  padding-top: 3rem;
  padding-bottom: 3rem;
  text-align: center;
`

const primary = "#ee7203"
const secondary = "#091437"
const headLight = "#5b5a5a"
const bgPink = "#f07e66"
const bgPinkLight = "#f28d78"

const Left = styled.div`
  display: flex;
  flex-basis: 50%;
  div {
    padding: 4rem;
    color: white;
    font-size: 18px;
  }
`
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 50%;
  flex-direction: column;
  div {
    padding: 4rem;
    color: white;
    font-size: 18px;
  }
`

const Modernisation = () => (
  <Layout>
    <SEO title="Modernisation" />
    <Banner />
    <Hero>
      <Title>Modernisation d'applications</Title>
      <Subheader>
        Nous modernisons vos applications en symbiose avec votre vision
        d’affaires
      </Subheader>
    </Hero>
    <Section>
      <Left>
        {" "}
        <img src={ImgScreen} alt="Screen" />
      </Left>
      <Right>
        <div>
          <p>
            Vous souhaitez mettre à jour, développer ou faire évoluer votre
            vieille application vers une solution adaptée aux nouvelles
            technologies ? Prospection a développé une expertise unique dans la
            modernisation d’application, la mise à jour de système ou le
            développement de nouvelles structures d’informations.
          </p>
          <p>
            Nous parlons Cobol, Basic, Clipper, FileMaker, 4D, Perl ou Access
            pour traduire en applications en ligne, accessibles sur toutes les
            plates-formes, de partout, selon les niveaux de sécurité souhaités.
            Que vos utilisateurs soient vos clients, vos membres ou employés,
            vous souhaitez leur faciliter l'accès à votre système ou application
            à distance, mieux communiquer en toute sécurité, sans qu'ils se
            soucient d'avoir à mettre à jour votre application ?
          </p>
          <p>
            Notre équipe d’experts (analystes, programmeurs, développeurs) fera
            évoluer votre système ou votre application en service SaaS (Software
            as a Service) et le rendre disponible à la demande quel que soit le
            type d’appareil et de sécurité souhaité. Nous sommes à l’écoute pour
            votre projet. Parlez-nous de vous.
          </p>
        </div>
      </Right>
    </Section>
  </Layout>
)

export default Modernisation
