import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback as TWF,
    Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class AddComment extends Component {
    state = {
        comment: '',
        editMode: false
    }

    handleAddComment = () => {
        Alert.alert('Added!', this.state.comment)
    }

    render() {
        let commentArea = null

        if (this.state.editMode) {
            commentArea = (
                <View style={styles.container}>
                    <TextInput placeholder='You can comment...'
                        style={styles.input} autoFocus={true}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })}
                        onSubmitEditing={this.handleAddComment} />
                    <TWF onPress={() => this.setState({ editMode: false })}>
                        <Icon name='times' size={15} color='#555' />
                    </TWF>
                </View>
            )
        } else {
            commentArea = (
                <TWF onPress={() => this.setState({ editMode: true })}>
                    <View style={styles.container}>
                        <Icon name='comment-o' size={25} color='#555' />
                        <Text style={styles.caption}>
                            Add a comment...
                        </Text>
                    </View>
                </TWF>
            )
        }
    }
}