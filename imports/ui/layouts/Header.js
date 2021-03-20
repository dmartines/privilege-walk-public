import React from 'react';

var utils = require('../../../lib/utils');

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.toggleDarkLight = this.toggleDarkLight.bind(this);
    }

    toggleDarkLight(e) {
        e.preventDefault();
        utils.setDarkLightMode();
        this.props.callback();
    }

    render() {

        return (
            <div className="container spaceup">
                <div className="row">
                    <div className="col-12 justify-right">
                        {this.props.dlmode ?
                            <a href="#" onClick={this.toggleDarkLight} style={{ fontSize: 10 }} >Dark / Light</a>
                            :
                            <a href="#" onClick={this.toggleDarkLight} style={{ fontSize: 10 }} className="adark" >Dark / Light</a>
                        }
                    </div>
                </div>
                {/* <div>dark / light</div> */}
                {/* <nav className="navbar navbar-expand-lg navbar-light" >
                    <a className="navbar-brand logo-text" href="/"><span className="privilege">PRIVILEGE</span><span className="walk">WALK</span></a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarCollapse">
                    </div>
                </nav> */}
            </div >
        );
    }
};

export default Header;