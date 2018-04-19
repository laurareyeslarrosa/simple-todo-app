import React from 'react';
import { ListItem } from 'material-ui/List';


export default class ListItemData extends React.Component {
    render() {
        return (
            <ListItem
                key={this.props.item.title}>
                <Paper zDepth={2}>
                    <div>{this.props.item.title}</div>
                    
                    <div>by: {this.props.item.user}</div>
                    <div>
                        <div>Category: {this.props.item.category}</div>
                        <div>Complete: {this.props.item.percentage_complete}%</div>
                        <div>Date from: {this.props.item.date_from}</div>
                        <div>Date to: {this.props.item.date_from}</div>
                    </div>
                    <div>
                        <div>Detalle</div>
                        <div>{this.props.item.description}</div>
                    </div>
                </Paper>
            </ListItem>
        )
    }
}