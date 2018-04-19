import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import TodoList from './../../views/todo-list/app';
import Add from './../../views/add/app';
import About from './../../views/about/app';

export default class AppRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageValue: 0,
        };

        this.handleTabChange = this.handleTabChange.bind(this);
    };

    handleTabChange(value) {
        this.setState({
            pageValue: value,
        });
    };

    render() {
        return (
            <div>
                <div className='panelesContainer'>
                    <SwipeableViews index={this.state.pageValue} onChangeIndex={this.handleChange}>
                        <div><TodoList /></div>
                        <div><Add /></div>
                        <div><About /></div>
                    </SwipeableViews>
                </div>
                <div className='navTabsContainer'>
                    <Tabs onChange={this.handleTabChange} value={this.state.pageValue}>
                        <Tab label='TodoList' value={0} />
                        <Tab label='Add' value={1} />
                        <Tab label='About' value={2} />
                    </Tabs>
                </div>
            </div>
        )
    };
};