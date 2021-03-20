import React from 'react';

class Footer extends React.Component {

    render() {

        let footerClass = this.props.dlmode ? "footer" : "footerdark";

        return (
            <footer className={footerClass}>
                <div className="container">
                    <a href="https://github.com/dmartines/privilege-walk-public" target="_blank"><span className="text-muted">Github</span></a>
                </div>
            </footer>
        );
    }
};

export default Footer;