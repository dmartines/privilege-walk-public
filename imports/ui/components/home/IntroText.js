import React from 'react';

class IntroText extends React.Component {
    render() {
        return (
            <div className="introbox container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="introtext">Take One Step Forward for Diversity & Inclusion</div>
                    </div>
                    <div className="col-sm-6">
                        <p className="sampletext1">If you are a while male, take one step forward.</p>
                        <p className="sampletext2">If English is not your first language, take one step backward.</p>
                        <p className="sampletext3">If you came from a supportive family environment, take a step forward.</p>
                        <p className="sampletext4">If you grew up in inner city, take a step backward.</p>
                        <div className="trybutton">
                            <a type="submit" className="btn btn-large btn-primary " href="/try-it-now">Try it now</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IntroText;