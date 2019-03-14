import React from 'react';

/*
    Textarea
    Een textarea heeft de volgende velden, naast de velden in het 'table'-attribuut'.
        checkbox: na (dit staat voor not applicable)
        checkbox: enable (deze wordt door het systeem gestuurd, en is meestal niet zichtbaar)
        textarea value (dit is effectief het invoerveld)
        textarea lastvalue (deze is momenteel onzichtbaar, maar bevat wel een waarde)

*/

class Textarea extends React.Component{
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
                <textarea name="value"></textarea>
                <textarea name="lastvalue" className="hidden-textarea"></textarea>
            </form>
        );
    }
}

export default Textarea;