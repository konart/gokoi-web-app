import React, {Component} from 'react';

class Table extends Component {

    componentWillMount() {
        let conn;

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
                }
            };
        } else {
            let item = document.createElement("div");
            item.innerHTML = "<b>Your browser does not support WebSockets.</b>";
        }
    }

    render() {
        return (
            <div id="table">
                {this.props.children}
            </div>
        );
    }
}

export default Table;
