import React from 'react';
import AddForm from './../../components/form/form';
import { inputType } from './../../helpers/const';
import { setTodoItems } from './../../helpers/serverHandler';

export default class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            category: '',
            user: '',
            percentage_complete: 0,
            date_from: null,
            date_to: null,
            isSubmitBtnEnabled: false
        }

        this.handleInputOnChange = this.handleInputOnChange.bind(this);
        this.handleDateToOnChange = this.handleDateToOnChange.bind(this);
        this.handleDateFromOnChange = this.handleDateFromOnChange.bind(this);
        this.handlePercentageOnChange = this.handlePercentageOnChange.bind(this);
        this.handleInputOnChange = this.handleInputOnChange.bind(this);
        this.setSubmitBtnEnabledStatus = this.setSubmitBtnEnabledStatus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getTodoItemFormData() {
        return [
            { key: 'title', name: 'title', value: this.state.title, type: inputType.text, onChange: this.handleInputOnChange },
            { key: 'description', name: 'description', value: this.state.description, type: inputType.field, onChange: this.handleInputOnChange },
            { key: 'category', name: 'category', value: this.state.category, type: inputType.text, onChange: this.handleInputOnChange },
            { key: 'user', name: 'user', value: this.state.user, type: inputType.text, onChange: this.handleInputOnChange },
            { key: 'percentage_complete', name: 'percentage complete', value: this.state.percentage_complete, type: inputType.number, onChange: this.handlePercentageOnChange },
            { key: 'date_from', name: 'date from', value: this.state.date_from, type: inputType.date, onChange: this.handleDateFromOnChange },
            { key: 'date_to', name: 'date to', value: this.state.date_to, type: inputType.date, onChange: this.handleDateToOnChange },
        ]
    }

    componentDidUpdate() {
        this.setSubmitBtnEnabledStatus();
    }

    handleSubmit(e) {
        e.preventDefault();

        let obj = {
            title: this.state.title,
            description: this.state.description,
            category: this.state.category,
            user: this.state.user,
            percentage_complete: this.state.percentage_complete,
            date_from: this.state.date_from,
            date_to: this.state.date_to
        }

        setTodoItems(this, obj);

        this.setState({
            title: '',
            description: '',
            category: '',
            user: '',
            percentage_complete: 0,
            date_from: null,
            date_to: null
        });
    }

    handleDateFromOnChange(e, date) {
        this.setState({ date_from: date });

    }

    handleDateToOnChange(e, date) {
        this.setState({ date_to: date });
    }

    handlePercentageOnChange(e) {
        if (!isNaN(e.target.value))
            this.setState({ [e.target.id]: e.target.value });
    }

    handleInputOnChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    setSubmitBtnEnabledStatus() {
        let formItems = this.getTodoItemFormData();

        let isBtnEnable = (formItems.find(item => {
            return (item.value === null || item.value === "")
        }) === undefined);

        if (this.state.isSubmitBtnEnabled !== isBtnEnable)
            this.setState({ isSubmitBtnEnabled: isBtnEnable });
    }

    render() {
        let formItems = this.getTodoItemFormData();
        return (
            <div className='addItemContainer'>
                <AddForm onSubmit={this.handleSubmit} formItems={formItems} onChange={this.handleInputOnChange} isSubmitBtnEnabled={this.state.isSubmitBtnEnabled} />
            </div>
        )
    }
}