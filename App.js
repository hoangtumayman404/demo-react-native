import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import axios from 'axios';

type Props = {};
export default class App extends Component<Props>
{
    render()
    {
        return (
            <View style={styles.container}>

            </View>
        );
    }

    componentDidMount()
    {
        axios.get(
            'https://api.themoviedb.org/3/discover/movie',
            {
                params: {
                    api_key: '069b62155350e1bc4e6c552ee33edfc9'
                }
            })
            .then((response) =>
            {
                console.log(response);
            })
            .catch((error) =>
            {
                console.log(error.response);
            });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
