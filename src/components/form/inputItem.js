import React from 'react';
import {inputType} from './../../helpers/const';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';

export default class InputItem extends React.Component {
    constructor(props) {
        super(props);
    }

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


/*
    handleValueChange(e) {
       // this.setState({itemValue: e.target.value});
    this.props.item.onChangeFunction(this.props.item)
    }

    renderInputText() {
        return (
            <div>
                <TextField
                    id={this.props.item.name.replace(/\s/g, "_")}
                    hintText={this.props.item.name}
                    floatingLabelText={this.props.item.name}
                    value={this.state.itemValue}
                    onChange={this.handleValueChange}
                    fullWidth={true}
                />
            </div>
        )
    }

    renderInputField() {
        return (
            <div>
                <TextField
                    id={this.props.item.name.replace(/\s/g, "_")}
                    hintText={this.props.item.name}
                    floatingLabelText={this.props.item.name}
                    value={this.props.item.value}
                    onChange={this.props.item.onChangeFunction}
                    fullWidth={true}
                    multiLine={true}
                    rows={4}
                />
            </div>
        )
    }

    renderInputSlider() {
        let min = (this.props.item.min) ? this.props.item.min : 0;
        let max = (this.props.item.max) ? this.props.item.max : 100;

        return (
            <div>
                <p>{this.props.item.name}</p>
                <Slider
                    id={this.props.item.name.replace(/\s/g, "_")}
                    min={min}
                    max={max}
                    step={1}
                    value={this.props.item.value}
                    onChange={this.props.item.onChangeFunction}
                />
            </div>
        )
    }

    renderInputDate() {
        return (
            <div>
                <DatePicker
                    id={this.props.item.name.replace(/\s/g, "_")}
                    hintText={this.props.item.name}
                    floatingLabelText={this.props.item.name}
 //                   value={this.props.item.value}
                    onChange={this.props.item.onChangeFunction}
                    fullWidth={true}
                />
            </div>
        )
    }



    render() {
        switch (this.props.item.type) {
            case inputType.text:
                return this.renderInputText();
            case inputType.field:
                return this.renderInputField();
            case inputType.number:
                return this.renderInputSlider();
            case inputType.date:
                return this.renderInputDate();
        }
    }

    */
}