import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native';
import CheckBox from 'react-native-elements'
export default class TaskScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            checked : true
        }
    }
    render() {
        return (
            <View>
                <CheckBox
                    title='Hello'
                    checked = {this.state.checked}
                />
            </View>
        )
    }
}