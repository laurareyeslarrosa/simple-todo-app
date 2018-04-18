import React from 'react';
import InputItem from './inputItem';
import FlatButton from 'material-ui/FlatButton';

export default class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmitBtnEnabled: false
        }
    }

    render() {
        return (
            <div>
                {this.props.formItems.map((item) =>
                    <InputItem item={item} key={item.name.replace(/\s/g, "_")}/>
                )}
                <FlatButton primary={true} label="submit" disabled={!this.state.isSubmitBtnEnabled} onClick={this.props.onSubmit} />
            </div>
        )
    }
}