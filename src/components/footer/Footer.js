import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"





const Footer =()=>  (
      <footer className={}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-12 col-lg-8">
              <div className="row">
                <div className="col-md-12">
                  <ul className="list-unstyled">
                    <li className="alignVertical">
                      <a
                        className="itemNavAccueil titleFooter active"
                        href="https://prospection.qc.ca/"
                        title="Prospection"
                      >
                        <i className="fa fa-home fa-2x fa-fw"></i>
                        Accueil
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="alignVertical">
                      <a
                        className="itemNavStrategie titleFooter"
                        href="https://prospection.qc.ca/strategie"
                        title="Stratégie"
                      >
                        {" "}
                        <i className="fa fa-line-chart fa-2x fa-fw"></i>
                        Stratégie
                      </a>
                      <ul className="list-unstyled subNavFooter">
                        <li>
                          <a
                            className="itemNavMarketingNumerique titleSubSubNav"
                            href="https://prospection.qc.ca/strategie/marketing-numerique"
                            title="Marketing numérique"
                          >
                            Marketing numérique
                          </a>
                          <ul className="list-unstyled subSubNavFooter">
                            <li>
                              <a
                                className="itemNavSeo"
                                href="https://prospection.qc.ca/strategie/marketing-numerique#seo-indexation-google"
                                title="SEO et indexation Google"
                              >
                                SEO et indexation Google
                              </a>
                            </li>
                            <li>
                              <a
                                className="itemNavMarketingContenu"
                                href="https://prospection.qc.ca/strategie/marketing-numerique#marketing-contenu"
                                title="Marketing de contenu"
                              >
                                Marketing de contenu
                              </a>
                            </li>
                            <li>
                              <a
                                className="itemNavMarketingSmo"
                                href="https://prospection.qc.ca/strategie/marketing-numerique#marketing-reseaux-sociaux-smo"
                                title="Marketing des réseaux sociaux (SMO)"
                              >
                                Marketing des réseaux sociaux (SMO)
                              </a>
                            </li>
                            <li>
                              <a
                                className="itemNavPubliciteNumerique"
                                href="https://prospection.qc.ca/strategie/marketing-numerique#publicite-numerique"
                                title="Publicité numérique"
                              >
                                Publicité numérique
                              </a>
                            </li>
                            <li>
                              <a
                                className="itemNavAnalyses"
                                href="https://prospection.qc.ca/strategie/marketing-numerique#analyses-rapports-analytics"
                                title="Analyses et rapports (analytics)"
                              >
                                Analyses et rapports (analytics)
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            className="itemNavStrategieEcommerce"
                            href="https://prospection.qc.ca/strategie/strategie-ecommerce"
                            title="Stratégie e-commerce"
                          >
                            Stratégie e-commerce
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="alignVertical">
                      <a
                        className="itemNavAnalyseProgrammation titleFooter"
                        href="https://prospection.qc.ca/analyse-programmation"
                        title="Analyse et Programmation"
                      >
                        {" "}
                        <i className="fa fa-code fa-2x fa-fw"></i>
                        Analyse et Programmation
                      </a>
                      <ul className="list-unstyled subSubNavFooter alignSubNav">
                        <li>
                          <a
                            className="itemNavDeveloppement"
                            href="https://prospection.qc.ca/analyse-programmation/developpement-sites-web/"
                            title="Développement de sites web"
                          >
                            Développement de sites web
                          </a>
                        </li>
                        <li>
                          <a
                            className="itemNavApplicationsEcommerce"
                            href="https://prospection.qc.ca/analyse-programmation#applications-commerce-en-ligne"
                            title="Applications de commerce en ligne"
                          >
                            Applications de commerce en ligne
                          </a>
                        </li>
                        <li>
                          <a
                            className="itemNavGoogle"
                            href="https://prospection.qc.ca/analyse-programmation#modernisation-applications"
                            title="Modernisation d'applications"
                          >
                            Modernisation d'applications
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="alignVertical">
                      <a
                        className="itemNavGoogle titleFooter"
                        href="https://prospection.qc.ca/g-suite"
                        title="G Suite"
                      >
                        <i class="fab fa-google fa-2x fa-fw"></i>G Suite
                      </a>
                      <ul className="list-unstyled subSubNavFooter alignSubNav">
                        <li>
                          <a
                            className="itemNavInstallation"
                            href="https://prospection.qc.ca/g-suite#installation-configuration"
                            title="Installation et configuration"
                          >
                            Installation et configuration
                          </a>
                        </li>
                        <li>
                          <a
                            className="itemNavFormation"
                            href="https://prospection.qc.ca/g-suite#formation"
                            title="Formation"
                          >
                            Formation
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="padding-vertical">
                    <p className="text-center">
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-12 col-lg-4">
              <div className="padding-vertical">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-12">
                    <div className="footerLogo text-center">
                      <a href="https://prospection.qc.ca" title="Prospection">
                        <img
                          className="img-fluid"
                          src="https://prospection.qc.ca/wp-content/themes/prospection/images/logo-prospection-blanc.png"
                          alt="Prospection"
                          title="Prospection"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-12">
                    <p>
                      <a
                        className="btn btn-link btn-block btn-lg footerTelephone"
                        href="tel:+14185212248"
                        title="Téléphone: (418) 521-2248 "
                      >
                        <i className="fa fa-phone"></i> +1 418 521-2248
                      </a>
                    </p>
                    <p className="text-center" id="ecrivezNous">
                      <a
                        href="https://prospection.qc.ca/contact#ancreFormulaire"
                        title="Contactez-nous"
                        className="btn btn-default btn-block btn-lg"
                        text="Contactez-nous"
                      />
                    </p>
                    <div className="reseauxSociaux text-center">
                      {/* <h4 className="text-muted">Suivez-nous…</h4> */}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/Prospection/"
                        className="btn"
                        title="Prospection sur Facebook"
                      >
                        <i className="fa fa-facebook-square fa-3x"></i>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/company/327281"
                        className="btn"
                        title="Prospection sur LinkedIn"
                      >
                        <i className="fa fa-linkedin-square fa-3x"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <p className="copyright">
                Copyright © 2020 Prospection&nbsp;inc. -
                Tous&nbsp;droits&nbsp;réservés -{" "}
                <a href="https://prospection.qc.ca/politique-confidentialite">
                  Politique de confidentialité
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
 
export default Footer;
