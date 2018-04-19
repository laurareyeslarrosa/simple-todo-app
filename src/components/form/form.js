import React from 'react';
import InputItem from './inputItem';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

export default class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmitBtnEnabled: true
        }
    }

    render() {
        return (
            <div>
                <Paper>
                    <div class="titleFormContainer">
                        <div>Add item</div>
                        <div>Set a new todo item</div>
                    </div>
                    <Divider/>
                    <div class="formContainer">
                        {this.props.formItems.map((item) =>
                            <InputItem item={item} key={item.name.replace(/\s/g, "_")} onChange={this.props.onChange} />
                        )}
                    </div>
                </Paper>
                <div class="btnSubmitContainer">
                    <FlatButton primary={true} label="submit" disabled={!this.state.isSubmitBtnEnabled} onClick={this.props.onSubmit} />
                </div>
            </div>
        )
    }
}