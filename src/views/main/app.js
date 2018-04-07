import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppRouter from './../../components/router/app';

class TodoApp extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <AppRouter />
            </MuiThemeProvider>
        )
    }
}

export default TodoApp;