import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppRouter from './../../components/router/app';
import MyMuiTheme from './../../content/css/app.style';

class TodoApp extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={MyMuiTheme}>
                <AppRouter />
            </MuiThemeProvider>
        )
    }
}

export default TodoApp;