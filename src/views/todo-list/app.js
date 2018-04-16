import React from 'react';
import ListItems from './../../components/list/listContainer';
import {getTodoItems} from './../../helpers/serverHandler';


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: [],
        };
        getTodoItems(this);
    }

    render() {
        return (
            <div><ListItems todoItems={this.state.todoItems}/></div>
        )
    }
}

export default TodoList;