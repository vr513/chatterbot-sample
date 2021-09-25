import React, { Component } from 'react'
import instagram from './image/instagram.png'
import linkedin from './image/linkedin.png'
import twitter from './image/twitter.png'



class Footer extends Component {
    static defaultProps = {

    };
    constructor(props) {
        super(props);
        this.state = {

        }
    };
    render() {
        return (
            <div>
                <footer>
                    <div className="container mt-5" >
                        <div className="row text-white" >
                            <div className="col-12 col-md-6 mt-4 foot-links" >
                                <h2>
                                    Sample Footer
                                </h2>
                                <div className="my-4" >
                                    <a href="https://www.instagram.com/" ><img className="img-brand me-3"
                                        src={instagram} height="40px" width="40px" alt="" /></a>
                                    <a href="https://www.facebook.com"><img className="img-brand me-3"
                                        src="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19753.png" height="40px" width="40px" alt="" /></a>
                                    <a href="https://twitter.com/"><img className="img-brand me-3"
                                        src={twitter} height="40px" width="40px" alt="" /></a>
                                    <a href="https://www.linkedin.com"><img
                                        className="img-brand me-3" src={linkedin} height="40px" width="40px"
                                        alt="" /></a>
                                    <a href="https://www.youtube.com/"><img
                                        className="img-brand me-3" src="http://pngimg.com/uploads/youtube/youtube_PNG102356.png" height="40px" width="40px"
                                        alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;