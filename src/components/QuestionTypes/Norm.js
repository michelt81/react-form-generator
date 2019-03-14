import React from 'react';

/*
    Norm:
    Een norm heeft de volgende velden (de veldnaam staat vet):
        select: score (waarden "" (=leeg), 0 (=conform), 50 (=minor), 100 (=major))
        radio: observation (waarden 0 (=conform), 100 (=niet conform))
        checkbox: na (dit staat voor not applicable)
        checkbox: enable (deze wordt door het systeem gestuurd, en is meestal niet zichtbaar)
        textarea: lastobservationtext
        textarea: observationtext
        textarea: scoretext
*/

class Norm extends React.Component{
    render() {
        const {
            data
        } = this.props;
        return (
            <form>
                <h4>{data.naam}</h4>
                <select name="score">
                    <option disabled selected value> -- select an option -- </option>
                    <option value="0">Conform</option>
                    <option value="50">Minor</option>
                    <option value="100">Major</option>
                </select>
                <div className="radio-group">
                    <input type="radio" name="observation" value="0"/>
                    <label>Conform</label>
                    <input type="radio" name="observation" value="1000"/>
                    <label>Niet Conform</label>
                </div>
                <input type="checkbox" name="na"/>
                <label>Not Applicable</label>
                <input hidden type="checkbox" name="enable" checked/>
                <textarea name="lastobservationtext"></textarea>
                <textarea name="observationtext"></textarea>
                <textarea name="scoretext"></textarea>




            </form>
        );
    }
}

export default Norm;