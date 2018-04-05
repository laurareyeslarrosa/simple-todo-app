import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class TodoApp extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>TODO APP</div>
            </MuiThemeProvider>
        )
    }
}