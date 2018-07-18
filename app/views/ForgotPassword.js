import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput, TouchableHighlight } from 'react-native';

export class ForgotPassword extends React.Component {

    state = {
        email: null,
        newPassword: null,
        confirmNewPassword: null,
    };

    handleChangePassword = (value) => {
        this.setState({newPassword: value});
    };

    handleChangeConfirmPassword = (value) => {
        this.setState({confirmNewPassword: value});
    }

    handleEmail = (value) => {
        this.setState({email: value});
    }

    resetPassword = () =>{

        if (this.state.newPassword === this.state.confirmNewPassword) {
            this.props.navigation.navigate('LoginRT');
        }
        else {
            console.error("Passwords do not match");
        }
    }

    render() {
        return (
            <View style = {styles.container}>
                <TextInput 
                    sty7 = {styles.inputs}
                    placeholder = "Email"
                    spellCheck = {false}
                    value = {this.state.email}
                    onChangeText = {this.handleEmail}
                />

                <TextInput 
                    style = {styles.inputs} 
                    placeholder = "New password"
                    spellCheck = {false}
                    value = {this.state.newPassword}
                    onChangeText = {this.handleChangePassword}
                />

                <TextInput 
                    style = {styles.inputs}
                    placeholder = "Confirm new password"
                    spellCheck = {false}
                    value = {this.state.confirmNewPassword}
                    onChangeText = {this.handleChangeConfirmPassword}
                />

                <TouchableHighlight onPress = {this.resetPassword}>
                    <Text style = {styles.buttons}>Reset password</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%',
        paddingTop: '10%'
    },
    inputs: {
        flex: 1,
        width: '80%',
        padding: 10
    },
    buttons: {
        marginTop: 15,
        fontSize: 16
    },
})