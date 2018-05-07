import React, {Component} from 'react';
import {
    FlatList, Image,
    Platform,
    StyleSheet,
    Text,
    View
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
            dataSource: [],
        }
    }

    render()
    {
        let {image} = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.item_image}
                    source={{uri: image}}
                />

                <Image
                    style={{width: 50, height: 50, marginTop: 20}}
                    source={{uri: 'https://png.icons8.com/metro/1600/like.png'}}
                    resizeMode={'contain'}
                />
            </View>
        );
    }

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
