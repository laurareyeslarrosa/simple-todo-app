import React from 'react';
import ListItems from './../../components/list/listContainer';
import {getTodoItems} from './../../helpers/serverHandler';


export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: [],
        };
        getTodoItems(this);
    }

    render() {
        return (
            <ListItems todoItems={this.state.todoItems}/>
        )
    }
}