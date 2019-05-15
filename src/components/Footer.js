import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/greyzor" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/said-aitmbarek-18107616/?locale=en_US" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
                        <li><a href="#mailform" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Saïd Aitmbarek</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
