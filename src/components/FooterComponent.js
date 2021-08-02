import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        
    <footer className="bg-dark p-0">
    <div className="container">
        <div className="row">

            <div className="col-sm-3 text-center my-2">
                <h5 className="text-light">Social</h5>
                <a className="btn btn-social-icon btn-instagram mb-1" href="http://instagram.com/"><i
                        className="fa fa-instagram"></i></a>
                <a className="btn btn-social-icon btn-facebook mb-1" href="http://facebook.com/"><i
                        className="fa fa-facebook"></i></a><br />
                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i
                        className="fa fa-twitter"></i></a>
                <a className="btn btn-social-icon btn-google" href="http://pinterest.com/"><i className="fa fa-pinterest"></i></a>
            </div>

            <div className="col-sm-3 d-none d-sm-block">
                <div className="form-group row">
                    <div className="col mt-4">
                        <input type="email" id="subscribe" name="subscribe" placeholder="email address" />
                        <button className="btn btn-secondary mt-1">Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="col-12 col-sm-3 my-1 text-center">
                <a href="https://www.apple.com/app-store/"><img className="my-1" src="../../app-store.png" alt="Apple store" /></a>
                <a href="https://play.google.com"><img className="my-1" src="./img/google-play.png" alt="Google Play" /></a>
            </div>

            <div className="col-sm-3 text-center d-none d-sm-inline-block">
                <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone"></i>
                    1-206-555-1234</a><br />
                <a role="button" className="btn btn-link" href="mailto:change-me@nucamp.co"><i
                        className="fa fa-envelope-o"></i> grillmaster@smokestack.com</a>
                <a role="button" className="btn btn-link" href="http://maps.google.com"><i className="fa fa-map-marker"></i> 1337 Street St<br />Salt Lake City, Utah 84101</a>
            </div>
        </div>
    </div>
</footer>
    )
}

export default Footer