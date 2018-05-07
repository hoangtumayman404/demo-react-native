import React, {Component} from 'react';
import {
    FlatList, Image,
    Platform,
    StyleSheet,
    Text,
    View, TouchableOpacity
} from 'react-native';
import axios from 'axios';

type Props = {};
export default class ListMovie extends Component<Props>
{
    static navigationOptions = {
        header: null,
    };

    constructor(props)
    {
        super(props);
        this.state = {
            dataSource: [],
        }
    }

    render()
    {
        const {navigate} = this.props.navigation;
        console.log(this.state.dataSource);
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) =>
                    {
                        console.log(item);
                        return (
                            <TouchableOpacity style={styles.item_container}
                                              onPress={() =>
                                              {
                                                  navigate('Detail', {
                                                      image: 'https://image.tmdb.org/t/p/w200' + item.poster_path,
                                                      title: item.title
                                                  });
                                              }}>
                                <Image
                                    style={styles.item_image}
                                    source={{uri: 'https://image.tmdb.org/t/p/w200' + item.poster_path}}
                                />
                                <View style={{marginLeft: 20,}}>
                                    <Text style={{fontSize: 17}}>
                                        {item.title}
                                    </Text>
                                    <Text style={{fontSize: 27}}>
                                        {item.vote_average}
                                    </Text>
                                </View>

                                <Image
                                    style={{width: 30, height: 30, position: 'absolute', bottom: 0, right: 0}}
                                    source={{uri: 'https://png.icons8.com/metro/1600/like.png'}}
                                    resizeMode={'contain'}
                                />
                            </TouchableOpacity>
                        );
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
        marginTop: 20,
    },
    item_container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#fff',
    },
    item_image: {
        width: 80,
        height: 120,
        borderRadius: 10,
    }
});
