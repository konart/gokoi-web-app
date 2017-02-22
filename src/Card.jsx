import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suit: "",
            group: "",
            image: "",
            background: {}
        };
        this.toggleBackground = this.toggleBackground.bind(this);
    }

    toggleBackground() {
        if (this.state.image == "url(image.png)") {
            this.setState({background: {backgroundImage: ""}});
            this.setState({image: ""})
        } else {
            this.setState({background: {backgroundImage: "url(image.png)"}});
            this.setState({image: "url(image.png)"})
        }
    }


    render() {
        return (
            <div className="card" style={this.state.background} onClick={() => this.toggleBackground()}/>
        );
    }
}

export default Card;
