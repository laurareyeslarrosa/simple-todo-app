import React from 'react';

export default class InputItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.item.name}
            </div>
        )
    }
}




/*

    getTodoItemFormData() {
        return [
            {name:'title', value: todoItem.title, type: inputType.text, onChangeFunction: ''},
            {name:'description', value: todoItem.description, type: inputType.field, onChangeFunction: ''},
            {name:'category', value: todoItem.category, type: inputType.text, onChangeFunction: ''},
            {name:'user', value: todoItem.user, type: inputType.text, onChangeFunction: ''},
            {name:'percentage complete', value: todoItem.percentage_complete, type: inputType.number, onChangeFunction: ''},
            {name:'date from', value: todoItem.date_from, type: inputType.date, onChangeFunction: ''},
            {name:'date to', value: todoItem.date_to, type: inputType.date, onChangeFunction: ''},
        ] 
    }

    */