import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class DateTimeSelector extends Component {
    state = {
        isDateTimePickerVisible: false,
        date: ''
    }

    showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

    hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

    handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this.setState({ date: date.toString() })
        this.hideDateTimePicker();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={this.showDateTimePicker}>
                <Text>Show DatePicker</Text>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                    mode='datetime'
                    minuteInterval={5} />
                <Text> {this.state.date} </Text>
            </View>
        )
    }
}
