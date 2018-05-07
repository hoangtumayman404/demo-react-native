import React, {Component} from 'react';
import {
    FlatList,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import axios from 'axios';

type Props = {};
export default class App extends Component<Props>
{
    constructor(props)
    {
        super(props);
        this.state = {
            dataSource: [],
        }
    }

    render()
    {
        console.log(this.state.dataSource);
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) =>
                    {
                        console.log(item);
                        return (<Text>{item.original_title}</Text>);
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
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
                this.setState({
                    dataSource: response.data.results,
                })
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
        backgroundColor: '#fff',
    },
});
