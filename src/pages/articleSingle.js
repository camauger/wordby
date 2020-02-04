import React from "react"
import { Link } from "gatsby"
import styled, { css, keyframes } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import "typeface-roboto"
// import "typeface-roboto-slab"
import Article from "../templates/blog/post"

const ArticleSingle = () => (
  <Layout>
    <SEO title="Article" />
    <Article>
      <h1>Le marketing de contenu : opérez la magie !</h1>

      <h2>
        Saviez-vous que lorsque vient le temps de créer du contenu pour leur
        site web, beaucoup d’entrepreneurs manquent d’idées ?
      </h2>
      <p>
        Beaucoup de rédacteurs web vous diront que bien souvent leurs clients
        avancent qu’ils n’ont pas le temps de rédiger, qu’ils ne savent pas quoi
        dire, qu’ils n’ont aucune idée de la façon dont ils pourraient faire
        mousser leurs services ou leurs produits.
      </p>
      <h2>
        Mais d’après vous qui est le mieux placé pour rédiger leur contenu?
      </h2>
      <p>
        Tout dirigeant d’une entreprise, responsable de département, employé
        maitrisant bien ses produits et services, ou passionné(e) par un domaine
        d’activité, est sans doute capable de le communiquer et d’en parler
        pendant des heures et des heures. Si vous êtes l’une de ces personnes,
        n’est-ce pas déjà ce que vous faites avec vos clients ou vos collègues ?
        <br />
        Communiquer par écrit est important, publier du contenu sur votre site
        web aussi !
      </p>
      <h2>Saviez-vous que Google est friand de nouveauté ?</h2>
      <p>
        Effectivement, les robots (bots) de Google passent régulièrement dans
        vos pages web et les analysent à chaque fois. Si vous n’avez rien publié
        depuis longtemps, il est probable que l’algorithme de Google estime que
        votre site est inactif et commence à l’éloigner du haut de ses résultats
        de recherche. De même, une page web pauvre en texte pourrait aussi
        désavantager votre classement voire même ne pas être indexée du tout.
        Sans pour autant écrire des très longs textes interminables, il est
        important de fournir de la matière et effectuer une bonne{" "}
        <a
          href="https://prospection.qc.ca/strategie/marketing-numerique/#seo-et-indexation-google"
          target="_blank"
          rel="noopener noreferrer"
        >
          SEO (optimisation pour les moteurs de recherche)
        </a>{" "}
        pour lui permettre de comprendre l’essence de votre contenu pour en
        favoriser l’indexation. Ainsi, le texte présent dans chacune de vos
        pages doit avoir un ratio texte / html supérieur à 25%, sinon Google n’a
        pas suffisamment de matière pour les comprendre et les classer.
      </p>
      <h2>Comment être en mesure de générer du contenu efficacement ?</h2>
      <p>
        <strong>Par où commencer ?</strong>
      </p>
      <p>
        C’est là qu’entre en jeu la notion de stratégie de marketing de contenu
        !
      </p>
      <p>
        <strong>C’est quoi ça le marketing de contenu ?</strong>
      </p>
      <p>
        Pour faire simple, le{" "}
        <a
          href="https://prospection.qc.ca/strategie/marketing-numerique/#marketing-de-contenu"
          target="_blank"
          rel="noopener noreferrer"
        >
          marketing de contenu
        </a>{" "}
        consiste à créer du contenu intéressant pour d’abord attirer l'attention
        de clients potentiels, puis apporter de la matière de qualité aux
        moteurs de recherche. Il faut garder en tête que tout ceci doit servir à
        montrer votre maîtrise du sujet et à favoriser le développement de votre
        e-réputation.
      </p>
      <h2>
        Mais quelle forme peut donc prendre la production de contenu marketing ?
      </h2>
      <p>
        <strong>
          Bien plus que la rédaction de texte, de multiples possibilités
          s’offrent à vous :
        </strong>
      </p>
      <ul>
        <li>Les vidéos,</li>
        <li>les études de cas,</li>
        <li>les infographies,</li>
        <li>les podcasts,</li>
        <li>les articles publiés sur votre blog</li>
        <li>les publications sur médias sociaux,</li>
        <li>ou encore les infolettres.</li>
      </ul>
      <p>
        <strong>
          Les objectifs visés par le marketing de contenu sont principalement de
          :
        </strong>
      </p>
      <ul>
        <li>Augmenter le trafic de votre site internet</li>
        <li>Obtenir de nouveaux prospects</li>
        <li>Améliorer le référencement de votre site</li>
        <li>Devenir reconnu dans votre domaine</li>
        <li>Interagir avec vos clients</li>
        <li>Gagner leur confiance</li>
        <li>Améliorer leur fidélité</li>
      </ul>
      <p>
        Pour une{" "}
        <a
          href="https://prospection.qc.ca/strategie/marketing-numerique/#marketing-de-contenu"
          target="_blank"
          rel="noopener noreferrer"
        >
          stratégie de marketing de contenu
        </a>{" "}
        efficace, vous devez définir précisément votre cible, car sachez que :
        Parler à tout le monde c’est comme parler à personne !
      </p>
      <p>
        Bien connaitre votre clientèle cible vous permet de rédiger le contenu
        véritablement adapté pour attirer son attention. Il faut savoir choisir
        le bon ton, le bon langage et la bonne approche pour réussir à capter
        l’intérêt de votre cible afin que votre message soit bien compris.
      </p>
      <h2>
        Quelques astuces pour vous aider à créer du contenu pour votre site web
        ou vos médias sociaux
      </h2>
      <p>
        Si vous éprouvez de la difficulté à faire sortir vos idées par écrit,
        enregistrez-vous ou enregistrez une personne clé avec un dictaphone ou
        votre smartphone parlant des derniers projets réalisés, des défis que
        vous avez relevés, des enjeux que vous avez dû considérer pour réaliser
        vos objectifs … Racontez l’histoire de votre entreprise, décrivez votre
        méthode de travail, parlez de votre approche client, dites tout ce qui
        vous passe par la tête à propos de votre sujet, de votre expérience, de
        votre entreprise. Ensuite, remettez cet enregistrement à un rédacteur
        web, un graphiste, etc…, pour qu’il s’inspire de votre enregistrement
        pour produire votre contenu.
      </p>
      <p>
        Relayer la rédaction complète de vos contenus web à un rédacteur qui ne
        connait pas votre domaine d’activité, en lui donnant carte blanche, sans
        lui avoir indiqué au départ les sujets que vous voulez aborder ni sous
        quel angle les exploiter, est une grave erreur. Vous seul connaissez
        avec précision toutes les subtilités de votre champ d’activité, une
        personne extérieure à votre entreprise en échapperait facilement les
        détails qui parleront à votre clientèle. Vous devez absolument fournir
        les grandes lignes des descriptifs de vos produits et services et
        ensuite le rédacteur se chargera d’y mettre la couleur nécessaire qui
        captera l’attention du lecteur et il saura optimiser vos textes pour le
        web.
      </p>
      <p>
        Pour alimenter votre fil de{" "}
        <a
          href="https://prospection.qc.ca/strategie/marketing-numerique/#marketing-des-reseaux-sociaux-smo"
          target="_blank"
          rel="noopener noreferrer"
        >
          médias sociaux
        </a>
        , ayez le réflexe de sortir votre téléphone et de prendre des photos à
        chaque fois qu’un événement a lieu au bureau ou dans votre milieu. Le
        lancement d’un nouveau projet, un repas d’équipe, une réunion avec un
        client, un congrès, un salon, une conférence… tous les prétextes sont
        bons pour démontrer que vous êtes actifs dans votre milieu, augmenter
        votre présence sur les médias sociaux, créer un lien avec vos clients
        potentiels et/ou votre communauté. Vous ne publierez probablement pas
        toutes ces photos mais au moins vous aurez développé l’habitude de
        sortir le téléphone pour prendre régulièrement des clichés pour
        éventuellement produire du contenu marketing.
      </p>
      <h2>
        N’oubliez pas qu’il n’y a pas que les textes qui peuvent contribuer à
        générer du contenu.
      </h2>
      <p>
        En effet, les vidéos représentent près de 80% des contenus consultés sur
        le web. Si vous en produisez, pensez donc à fournir leurs transcriptions
        dans vos pages web. Idem pour les images, les graphiques et les
        infographies, qui lorsqu’ils sont accompagnés d’une description,
        fournissent plus d’opportunités d’indexation dans Google.
        <br />
        Parallèlement, les descriptions d’images contribuent à l’accessibilité
        de votre site web. Les infographies quant à elles, aident à passer
        visuellement votre message car aujourd’hui, les internautes lisent de
        moins en moins. Choisir des illustrations de qualité incitera le partage
        de votre contenu et impactera le trafic entrant de vos pages.
      </p>
      <p>
        Une bonne stratégie de marketing de contenu contribuera à développer la
        confiance de vos clients à l’égard de votre marque, de vos produits
        et/ou de votre entreprise.
      </p>
      <p>
        Vous voulez structurer une stratégie marketing de contenu efficace ?
        Chez Prospection, nos experts en marketing numérique vous accompagnent
        pour développer votre e-réputation.
      </p>
      <p>
        <a
          title="Contactez un expert marketing"
          href="https://prospection.qc.ca/contact"
        >
          Contactez un expert marketing de contenu
        </a>
      </p>
    </Article>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ArticleSingle
