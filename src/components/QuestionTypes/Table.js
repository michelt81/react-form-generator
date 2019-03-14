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
        return <p>table</p>;
    }
}

export default Table;