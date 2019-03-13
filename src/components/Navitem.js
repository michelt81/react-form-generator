import React from 'react';

class Navitem extends React.Component {
    render() {
        const {
            title
        } = this.props;
        return (
            <li>{title}</li>
        );
    }
}

export default Navitem;