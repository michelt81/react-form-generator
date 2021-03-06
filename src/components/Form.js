import React from 'react';
import Question from './Question';


class Form extends React.Component {

    checkType = (item) => {
        return item.hasOwnProperty('list');
    };

    getNr = (item) => {
        if (item.hasOwnProperty('nr') && item.nr.trim() !== "") {
            return <span>{item.nr} </span>
        }
    }

    loopItem = (item, index) => {
        if (this.checkType(item)){
            return (
                <div key={index}>
                <h3>
                    {this.getNr(item)}
                    {item.title}
                </h3>
                    {item.list.map(this.loopItem)}
                </div>
            );
        } else {
            return <Question key={index} data={item}/>
        }
    };


    render() {
        const {
            data
        } = this.props;

        return (
            <div>
                <h2>{data.title}</h2>
                {data.list.map(this.loopItem)}
            </div>
        )
    }
}

export default Form;