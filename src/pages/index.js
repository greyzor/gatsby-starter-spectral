import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
 

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {};
    }

    render() {
        const siteTitle = "Custom Title"
        const siteDescription = ""

        return (
            <Layout>
                <Helmet
                  bodyAttributes={{
                      class: 'landing' //Fixme: add other class 'is-preload'
                  }}
                >
                  <title>{siteTitle}</title>
                  <meta name="description" content={siteDescription} />
                </Helmet>

                <div id='main'> 
                  <div id='page-wrapper'>

                      <section id="banner">
                        <div className="inner">
                          <h2>Spectral</h2>
                          <p>Another fine responsive<br />
                          site template freebie<br />
                          crafted by <a href="http://html5up.net">HTML5 UP</a>.</p>
                          <ul className="actions special">
                            <li><a href="#" className="button primary">Activate</a></li>
                          </ul>
                        </div>
                        <a href="#one" className="more scrolly">Learn More</a>
                      </section>

                      <section id="one" className="wrapper style1 special">
                        <div className="inner">
                          <header className="major">
                            <h2>Arcu aliquet vel lobortis ata nisl<br />
                            eget augue amet aliquet nisl cep donec</h2>
                            <p>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend<br />
                            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</p>
                          </header>
                          <ul className="icons major">
                            <li><span className="icon fa-diamond major style1"><span className="label">Lorem</span></span></li>
                            <li><span className="icon fa-heart-o major style2"><span className="label">Ipsum</span></span></li>
                            <li><span className="icon fa-code major style3"><span className="label">Dolor</span></span></li>
                          </ul>
                        </div>
                      </section>



                  </div>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex