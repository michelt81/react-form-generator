import React from 'react';

/*
    Table:
    Een table heeft de volgende velden, naast de velden in het 'table'-attribuut'.
        checkbox: na (dit staat voor not applicable)
        checkbox: enable (deze wordt door het systeem gestuurd, en is meestal niet zichtbaar)

 */
class Table extends React.Component{
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
                <table dangerouslySetInnerHTML={{__html: data.table}}/>
            </form>
        );
    }
}

export default Table;