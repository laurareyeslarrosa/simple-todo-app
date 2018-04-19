import React from 'react';
import {inputType} from './../../helpers/const';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

export default class InputItem extends React.Component {
    renderInputText() {
        return (
            <div>
                <TextField
                    id={this.props.item.key}
                    datatype={this.props.item.type}
                    hintText={this.props.item.name}
                    floatingLabelText={this.props.item.name}
                    value={this.props.item.value}
                    onChange={(this.props.item.onChange) ? this.props.item.onChange : this.props.onChange}
                    fullWidth={true}
                />
            </div>
        )
    }

    renderInputDate() {
        return (
            <div>
                <DatePicker
                    id={this.props.item.key}
                    datatype={this.props.item.type}
                    hintText={this.props.item.name}
                    floatingLabelText={this.props.item.name}
                    value={this.props.item.value}
                    onChange={this.props.item.onChange}
                    fullWidth={true}
                />
            </div>
        )
    }

    render() {
        switch (this.props.item.type) {
            case inputType.date:
                return this.renderInputDate();
            default:
                return this.renderInputText();
        }
    }
}