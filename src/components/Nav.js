import React from 'react';
import Navitem from './Navitem';

class Nav extends React.Component {
    render() {
        const {
            items
        } = this.props;
        return (
            <nav>
                <ul>
                    {Object.keys(items).map((item, index) => {
                        return <Navitem key={index} title={items[index].title}/>;
                    })}
                </ul>
            </nav>
        );
    }
}

 export default Nav;