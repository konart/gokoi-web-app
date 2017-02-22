import React, {Component} from 'react';

class Table extends Component {

    render() {
        return (
            <div id="table">
                {this.props.children}
            </div>
        );
    }
}

export default Table;
