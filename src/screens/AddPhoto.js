import React, { Component } from 'react'
import {
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert
} from 'react-native'
import ImagePicker from 'react-native-image-picker'

class AddPhoto extends Component {
    state = {
        image: null,
        comment: '',
    }

    pickImage = () => {
        ImagePicker.showImagePicker({
            title: 'Choose an image',
            maxHeight: 600,
            maxWidth: 800
        }, res => {
            if (!res.didCancel) {
                this.setState({ image: { uri: res.uri, base64: res.data } })
            }
        })
    }

    save = async () => {
        Alert.alert('Image added', this.state.comment)
    }

    render() {
        return (
            
        )
    }

    
}