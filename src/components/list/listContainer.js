import React from 'react';
import { List } from 'material-ui/List';
import ListItemData from './listItem'

export default class ListItems extends React.Component {
    render() {
        return (
            <div className='todoItemsContainer'>
                <List>
                    {this.props.todoItems.map((item) =>
                        <ListItemData key={item.title.replace(/\s/g, "_")} item={item} />
                    )}
                </List>
            </div>
        )
    }
}