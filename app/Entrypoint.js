/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import Navigator from './navigation';
import configureStore from './store/configureStore';
const { persistor, store } = configureStore();
import { Root } from "native-base";
import FullScreenLoader from './components/FullScreenLoader';
import { NavigationContainer } from '@react-navigation/native';

export default class Entrypoint extends Component {
    render() {
        return (
         
            <Provider store={store}>
                <PersistGate
                    loading={<ActivityIndicator />}
                    persistor={persistor}
                >
                    <Root>
                    <Navigator />
                    <FullScreenLoader />
                    </Root>
                </PersistGate>
            </Provider>
         
        );
    }
}
