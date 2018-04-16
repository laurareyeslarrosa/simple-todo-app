import React from 'react';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { blueGrey400, white } from 'material-ui/styles/colors';

export default class ListItemData extends React.Component {
    render() {
        return (
            /*
            <ListItem primaryText={this.props.item.title + ": " + this.props.item.description}
                key={this.props.item.title}
                leftAvatar={<Avatar color={white} backgroundColor={blueGrey400}>{this.props.item.title}</Avatar>}>
            </ListItem>
            */
            <ListItem primaryText={this.props.item.title + ": " + this.props.item.description}
            key={this.props.item.title}>
        </ListItem>
        )
    }
}