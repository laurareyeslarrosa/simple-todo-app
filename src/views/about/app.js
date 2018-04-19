import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

class About extends React.Component {
    render() {
        return (
            <div class='aboutPanelContainer'>
                <Paper>
                    <div class='aboutTitleContainer'>
                        <div>About me</div>
                        <div>This is an about me panel</div>
                    </div>
                    <Divider />
                    <div class='aboutTextContainer'>
                        This is the first version of a simple todo items list.
                        Its simply made to test the node, mongo and axios integration.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </Paper>
            </div>
        )
    }
}

export default About;