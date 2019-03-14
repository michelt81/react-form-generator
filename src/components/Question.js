import React from 'react';
import Norm from './QuestionTypes/Norm';
import Table from './QuestionTypes/Table';
import Input from './QuestionTypes/Input';
import Textarea from './QuestionTypes/Textarea';

class Question extends React.Component {

    renderQuestion = (question) => {
        switch(question.type){
            case 'norm':
                return <Norm data={question}/>;
            case 'table':
                return <Table data={question}/>;
            case 'input':
                return <Input data={question}/>;
            case 'textarea':
                return <Textarea data={question}/>;
            case '':
                return (
                    <div className="question">
                        <p>{question.naam}</p>
                        <span className="error-message">Er is geen type aanwezig.</span>
                    </div>

                );
            default:
                return (
                    <div className="question">
                        <p>{question.naam}</p>
                        <span className="error-message">Er is nog geen type
                            <strong> {question.type}</strong> gedefinieerd.
                        </span>
                    </div>

                );
        }
    };

    render() {
        const {
            data
        } = this.props;
        return this.renderQuestion(data)
    }
}

export default Question;