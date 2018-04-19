import React from 'react';
import { ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

export default class ListItemData extends React.Component {
    render() {
        return (
            <ListItem
                disabled={true}
                key={this.props.item.title}>
                <Paper>
                    <div class="itemTitleContainer">
                    <div class="itemTitle">{this.props.item.title}</div>
                    <div class="itemUser">by: {this.props.item.user}</div>
                    </div>
                    <Divider />
                    <div class="itemDataContainer">
                        <div>Category: {this.props.item.category}</div>
                        <div>Complete: {this.props.item.percentage_complete}%</div>
                        <div>Date from: {this.props.item.date_from}</div>
                        <div>Date to: {this.props.item.date_from}</div>
                    </div>
                    <div class="itemDetailContainer">
                        <div>Detalle</div>
                        <div>{this.props.item.description}</div>
                    </div>
                </Paper>
            </ListItem>
        )
    }
}