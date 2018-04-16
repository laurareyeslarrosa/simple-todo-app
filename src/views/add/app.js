import React from 'react';
import AddForm from './../../components/form/form';
import {inputType} from './../../helpers/const';

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItem: {
                title: "",
                description: "",
                category: "",
                user: "",
                percentage_complete: "",
                date_from: "",
                date_to: ""
            }
        }
    }

    getTodoItemFormData() {
        return [
            {name:'title', value: this.state.todoItem.title, type: inputType.text, onChangeFunction: ''},
            {name:'description', value: this.state.todoItem.description, type: inputType.field, onChangeFunction: ''},
            {name:'category', value: this.state.todoItem.category, type: inputType.text, onChangeFunction: ''},
            {name:'user', value: this.state.todoItem.user, type: inputType.text, onChangeFunction: ''},
            {name:'percentage complete', value: this.state.todoItem.percentage_complete, type: inputType.number, onChangeFunction: ''},
            {name:'date from', value: this.state.todoItem.date_from, type: inputType.date, onChangeFunction: ''},
            {name:'date to', value: this.state.todoItem.date_to, type: inputType.date, onChangeFunction: ''},
        ] 
    }

    handleSubmit() {

    }

    render() {
        let formItems = this.getTodoItemFormData();
        return (
            <div>
                <div>ADD ITEM FORM</div>
                <AddForm onSubmit={this.handleSubmit} formItems={formItems}/>
            </div>
        )
    }
}

export default Add;