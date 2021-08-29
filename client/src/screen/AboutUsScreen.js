import React from 'react'
import "../style/AboutUsPageStyle.css"
import aboutUs from "../assets/aboutUs.png"

export default function AboutUsScreen() {
    return (
        <>
            <div className="aboutUs">
                <div className="mainBody">
                    <img src={aboutUs} alt="aboutUs" />
                </div>
                <div className="rightDescribtion">
                    <h4>Innovative LIBRARY</h4>
                    <h1>About Us</h1>
                    <p>
                        Hello guys! I am souvik sen
                    </p>

                    <p>
                        Welcome to <b>digital library</b>, your number one source for all things related to <b>digital library,  information</b>. We're dedicated to giving you the very best of digital library,  information with a focus on quality and real-world problem solution.
                    </p>
                    <p>
                        Founded in 2021-08-20 by souvik sen, digital library has come a long way from its beginnings in <b>11/H/9/1, Beleghata main road, K G Bose sarani</b> located in <b>India</b>.
                        When souvik sen first started out, our passion for digital library,  information
                        drove us to start our own website.
                    </p>
                    <p>
                        We hope you enjoy our site as much as We enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                    </p>
                    <p>
                        Sincerely,
                        souvik sen
                    </p>
                </div>
            </div>
        </>
    )
}
