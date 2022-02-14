import React, {Component} from 'react';
import Tabs from './components/Tabs/Tabs';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './components/theme';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';

// if server get err: node:events:368
//       throw er; // Unhandled 'error' event
// we can use another PORT (3005), for example 5000
const client = new ApolloClient({
    uri: 'http://localhost:3005/graphql'
})

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <MuiThemeProvider theme={theme}>
                    <Tabs/>
                </MuiThemeProvider>
            </ApolloProvider>
        );
    }
}

export default App;
