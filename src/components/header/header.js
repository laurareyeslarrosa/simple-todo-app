import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export default class TodoApp extends React.Component {
    render() {
        return (
            <div>
                <AppBar
                    className='headerContainer'
                    title={<span class='headerTitle'>This is just some simple todo app...</span>}
                    iconElementLeft={<IconButton><i class="material-icons">dns</i></IconButton>}
                />
            </div>
        )
    }
}