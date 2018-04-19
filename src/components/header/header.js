import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

export default class TodoApp extends React.Component {
    render() {
        return (
            <div>
                <AppBar
                    className='headerContainer'
                    title={<span className='headerTitle'>This is just some simple todo app...</span>}
                    iconElementLeft={<IconButton><i className="material-icons">dns</i></IconButton>}
                />
            </div>
        )
    }
}