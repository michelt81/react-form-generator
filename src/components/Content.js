import React, {Component} from 'react';
import Form from './Form';

class Content extends Component {

    render() {
        const {
            items
        } = this.props;
        return (
            <div className='content'>
                {Object.keys(items).map((item, index) => {
                    return <Form key={index} data={items[index]}/>
                })}
            </div>
        );
    }
}

export default Content;