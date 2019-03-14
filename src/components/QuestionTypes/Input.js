import React from 'react';

/*
    Input
    Een input heeft de volgende velden, naast de velden in het 'table'-attribuut'.
        checkbox: na (dit staat voor not applicable)
        checkbox: enable (deze wordt door het systeem gestuurd, en is meestal niet zichtbaar)
        input value (dit is effectief het invoerveld)
        input lastvalue (deze is momenteel onzichtbaar, maar bevat wel een waarde)

*/

class Input extends React.Component{
    render() {
        const {
            data
        } = this.props;
        return (
            <form>
                <h4>{data.naam}</h4>
                <input type="checkbox" name="na"/>
                <label>Not Applicable</label>
                <input hidden type="checkbox" name="enable" checked/>
                <input type="text" name="value"/>
                <input type="text" name="lastvalue" hidden/>
            </form>
        );
    }
}

export default Input;