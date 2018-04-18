import React from 'react';
import { List } from 'material-ui/List';
import ListItemData from './listItem'

class ListItems extends React.Component {
    render() {
        return (
            <List>
                {this.props.todoItems.map((item) =>
                    <ListItemData key={item.title.replace(/\s/g, "_")} item={item}/>
                )}
            </List>
        )
    }
}

export default ListItems;