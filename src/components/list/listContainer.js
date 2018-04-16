import React from 'react';
import { List } from 'material-ui/List';
import ListItemData from './listItem'

class ListItems extends React.Component {
    render() {
        return (
            <List>
                {this.props.todoItems.map((item) =>
                    <ListItemData item={item}/>
                )}
            </List>
        )
    }
}

export default ListItems;