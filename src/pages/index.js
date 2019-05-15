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
                <Helmet>
                  <title>{siteTitle}</title>
                  <meta name="description" content={siteDescription} />
                </Helmet>

                <div id='main'> 

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


                </div>

            </Layout>
        )
    }
}

export default HomeIndex