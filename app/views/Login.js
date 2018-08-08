import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert,
    AsyncStorage,
    Image
} from 'react-native';
import axios from 'axios';

export const LoginContext = React.createContext();

export class Login extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loggedIn: false
        };
    };

    cancelLogin = () => {
        Alert.alert('Login cancelled');
        this.props.navigation.navigate('HomeRT');
    };

    loginUser = () => {

        if (!this.state.username) {
            Alert.alert('Please enter a username')
        }
        else if (!this.state.password) {
            Alert.alert('Please enter a password')
        }
        else {

            AsyncStorage.getItem('jwt_token', (err, result) => {

                if (result !== 'none') {
                    AsyncStorage.setItem('jwt_token', '', (err, result) => {
                       
                    });
                }

                    axios.post("https://tranquil-beach-95723.herokuapp.com/api/login", {
                        username: this.state.username,
                        password: this.state.password
                    })
                        .then((response) => {
                                AsyncStorage.setItem('jwt_token', response.data.token, (err, result) => {
                                    Alert.alert(`${this.state.username} Logged in`);
                                    this.props.navigation.navigate('HomeRT');
                                });
                                this.state.loggedIn = true;
                        })
                        .catch((error) => {
                            console.log(error);
                            this.cancelLogin();
                        });
                

            })

        }

    }

    resetPassword = () => {
        this.props.navigation.navigate('ForgotPasswordRT');
    }
    
    register = () => {
        this.props.navigation.navigate('RegisterRT');
    }

    render() {
        return (
            <LoginContext.Provider value={this.state}>
            <View style={styles.cancelContainer}>
                <TouchableHighlight onPress={this.cancelLogin} underlayColor='#31e981'>
                        <Image source={ require('./img/cancel-music.png')}  //Thx Egor Rumyantsev for Cancel button
                        style={styles.cancelButton}/>
                </TouchableHighlight>
             </View>
            <View style={styles.container}>
                <Text style={styles.heading}>Introdu e-mailul si parola</Text>
                
                <View style={styles.inRow}>
                    <Text style={styles.labels}>E-mailul:</Text>
                    <TextInput
                        style={styles.inputs}
                        onChangeText={(text) => this.setState({ username: text })}
                        value={this.state.username}
                    />
                </View>

                <View style={styles.inRow}>
                    <Text style={styles.labels}>Parola:</Text>
                    <TextInput
                        style={styles.inputs}
                        onChangeText={(text) => this.setState({ password: text })}
                        value={this.state.password}
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.inRow}>
                    <TouchableHighlight onPress={this.loginUser} underlayColor='#31e981'>
                        <Text style={styles.buttons}>
                            Intră în cont</Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight onPress = {this.resetPassword}>
                        <Text style = {styles.buttons}>Ai uitat parola?</Text>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight onPress = {this.register}>
                        <Text style = {styles.buttons}>Nu ai cont?</Text>
                </TouchableHighlight>
            </View>
            </LoginContext.Provider>
        );
    }


}

const styles = StyleSheet.create({
    cancelContainer: {
        flex:1,
        backgroundColor: '#569A61',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    container: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#569A61',
    },
    heading: {
        fontSize: 16,
        color: '#EBE1BE',
        paddingBottom: 10
    },
    inputs: {
        width: '70%',
        padding: 10,
        color: '#EBE1BE',
    },
    buttons: {
        margin: 15,
        fontSize: 16,
        color: '#EBE1BE',
    },
    labels: {
        paddingBottom: 10,
        color: '#EBE1BE',
    },
    inRow: {
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelButton: {
        alignSelf: 'flex-end',
        margin: 10
        
    }
   
});
