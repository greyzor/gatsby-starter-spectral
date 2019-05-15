import React from 'react'
import '../assets/sass/main.scss'

import Header from './Header'

class Template extends React.Component {
    render() {
        const { children } = this.props

        return (
            <body className="landing is-preload">
                <Header />
                {children}
            </body>
        )
    }
}

export default Template
