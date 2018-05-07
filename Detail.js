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
export default class Detail extends Component<Props>
{
    static navigationOptions = ({navigation}) =>
    {
        return {
            title: navigation.state.params.title,
        }
    };

    constructor(props)
    {
        super(props);
        this.state = {
            like: this.props.navigation.state.params.like,
        }
    }

    render()
    {
        let {image, updateStateLike, id} = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.item_image}
                    source={{uri: image}}
                />

                <TouchableOpacity onPress={() =>
                {
                    this.setState({like: !this.state.like});
                    updateStateLike(id);
                }}>
                    {this.renderHear()}
                </TouchableOpacity>
            </View>
        );
    }

    renderHear = () =>
    {
        if (this.state.like)
        {
            return (
                <Image
                    style={{width: 50, height: 50, marginTop: 20}}
                    source={{uri: 'https://png.icons8.com/metro/1600/hearts.png'}}
                    resizeMode={'contain'}
                />
            );
        }
        else
        {
            return (
                <Image
                    style={{width: 50, height: 50, marginTop: 20}}
                    source={{uri: 'https://png.icons8.com/metro/1600/like.png'}}
                    resizeMode={'contain'}
                />
            );
        }
    };

    componentDidMount()
    {

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item_container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#fff',
    },
    item_image: {
        width: 200,
        height: 300,
        borderRadius: 10,
    }
});
