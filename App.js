import React, {Component} from 'react';
import {
    StyleSheet, View,
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import Detail from "./Detail";
import ListMovie from "./ListMovie";

const Stack = StackNavigator({
    ListMovie: {screen: ListMovie},
    Detail: {screen: Detail},
});

type Props = {};
export default class App extends Component<Props>
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <View style={styles.container}>
                <Stack/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
