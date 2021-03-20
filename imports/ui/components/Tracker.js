import React from 'react';

class Tracker extends React.Component {
    render() {
        var trackerSize = Array.from(' '.repeat(this.props.trackerSize.size + 1));
        return (
            <div className="col-12">
                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr>
                            {trackerSize.map((item, i) =>
                                this.props.trackerSize.start == i ?
                                    <td colSpan={20} key={i}>start</td>
                                    :
                                    <td key={i}></td>
                            )}
                        </tr>
                        <tr>
                            {trackerSize.map((item, i) =>
                                this.props.trackerSize.start == i ?
                                    <td colSpan={20} key={i}>|</td>
                                    :
                                    <td key={i}></td>
                            )}
                        </tr>
                        <tr>
                            {trackerSize.map((item, i) =>
                                i < this.props.trackerSize.size /2 ?
                                    <td className="trackercell" key={i}><span className="graydash">-</span></td>
                                    :
                                    <td className="trackercell" key={i}>-</td>
                            )}
                        </tr>
                        {this.props.players.map((p, pi) =>
                            <tr key={pi}>
                                {trackerSize.map((item, i) =>
                                    p.position == i ?
                                        <td className="trackercell" key={i}><span className="trackerX">{p.name}</span></td>
                                        :
                                        <td className="trackercell" key={i}></td>
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Tracker;