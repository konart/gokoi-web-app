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
        this.appendLog = this.appendLog.bind(this)
    }

    appendLog(item) {
        console.log(item)
        // var doScroll = log.scrollTop === log.scrollHeight - log.clientHeight;
        // log.appendChild(item);
        // if (doScroll) {
        //     log.scrollTop = log.scrollHeight - log.clientHeight;
        // }
    }

    componentWillMount() {
        let conn;
        let msg = document.getElementById("msg");
        let log = document.getElementById("log");

        if (window["WebSocket"]) {
            conn = new WebSocket("ws://localhost:8080/ws");
                conn.onopen = function (m) {
                    conn.send("test");
                    console.log("test");
                };
            conn.onclose = function (evt) {
                let item = document.createElement("div");
                item.innerHTML = "<b>Connection closed.</b>";
                this.appendLog(item);
            };
            conn.onmessage = function (evt) {
                let messages = evt.data.split('\n');
                for (let i = 0; i < messages.length; i++) {
                    let item = document.createElement("div");
                    item.innerText = messages[i];
                    console.log(item);
                    //this.appendLog(item);
                }
            };
        } else {
            let item = document.createElement("div");
            item.innerHTML = "<b>Your browser does not support WebSockets.</b>";
            this.appendLog(item);
        }
    }
    toggleBackground() {
        //ReactDOM.render(<Welcome />, document.getElementById("deck"));
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
//
// let deck = document.getElementById("deck")
// function some() { ReactDOM.render(<Card />, deck);}
// some()
export default Card;
