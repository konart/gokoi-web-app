import React, {Component} from 'react';

class Player extends Component {

    render() {
        return (
            <div id={this.props.playerName}>
                {this.props.children}
            </div>
        );
    }
}

export default Player;
