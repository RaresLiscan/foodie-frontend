import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableHighlight, 
    Alert, 
    AsyncStorage,
    Image } from 'react-native';
import axios from 'axios';


export class Register extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: '',
            matchingPassword: '',
            firstName: '',
            lastName: ''
        };
    };

    cancelRegister = ()=>{
        Alert.alert('Înregistrare anulată');
        this.props.navigation.navigate('HomeRT');
    };

    registerAccount = ()=>{
        if ( !this.state.email ){
            Alert.alert('Introdu un e-mail')
        }
        else if (this.state.password !== this.state.matchingPassword){
            Alert.alert('Parolele nu se potrivesc')
        }
        else {
            axios.post("https://tranquil-beach-95723.herokuapp.com/api/user/registration", {
                
                 email: this.state.email,
                 password: this.state.password,
                 matchingPassword: this.state.matchingPassword,
                 firstName: this.state.firstName,
                 lastName: this.state.lastName
                } 
             ,)
             .then((response) => {
                AsyncStorage.setItem('jwt_token', response.data, (err, result) => {
                    Alert.alert(`${this.state.email} Contul a fost creat!`);
                    this.props.navigation.navigate('HomeRT');
                });
             })
             .catch((error) => {
                 console.log(error);
                 this.cancelRegister();
             });  
        }

    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.cancelContainer}>
                    <TouchableHighlight onPress={this.cancelRegister} underlayColor='#31e981'>
                            <Image source={ require('./img/cancel-music.png')}  //Thx Egor Rumyantsev for Cancel button
                            style={styles.cancelButton}/>
                    </TouchableHighlight>
                </View>

                <View style={styles.container}>
            
                    <Text style={styles.heading}>Înregistrează-te! :)</Text>
                    
                    <View style={styles.inRow}>
                        <Text style={styles.label}>E-mailul</Text>
                        <TextInput 
                            style={styles.inputs} 
                            onChangeText={(text) => this.setState({email: text})}
                            value={this.state.email}
                        />
                    </View>

                    <View style={styles.inRow}>  
                        <Text style={styles.label}>Parola</Text>
                        <TextInput 
                            style={styles.inputs} 
                            onChangeText={(text) => this.setState({password: text})}
                            value={this.state.password}
                            secureTextEntry={true}
                        />
                    </View>

                    <View style={styles.inRow}>
                        <Text style={styles.label}>Confirmă parola</Text>
                        <TextInput 
                            style={styles.inputs} 
                            onChangeText={(text) => this.setState({matchingPassword: text})}
                            value={this.state.matchingPassword}
                            secureTextEntry={true}
                        />
                        
                    </View>

                    <View style={styles.inRow}>
                        <Text style={styles.label}>Numele</Text>
                        <TextInput 
                            style={styles.inputs} 
                            onChangeText={(text) => this.setState({firstName: text})}
                            value={this.state.firstName}
                        />
                    </View>

                    <View style={styles.inRow}>
                        <Text style={styles.label}>Prenumele</Text>
                        <TextInput 
                            style={styles.inputs} 
                            onChangeText={(text) => this.setState({lastName: text})}
                            value={this.state.lastName}
                        />
                    </View>

                    <TouchableHighlight onPress={this.registerAccount} underlayColor='#31e981'>
                        <Text style = {styles.buttons}>
                            Creează un cont
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
    )}




}

const styles = StyleSheet.create({
    
    cancelContainer: {
        flex: 1,
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
        width: '50%',
        padding: 10,
        paddingLeft: 30,
        color: '#EBE1BE',
    },
    buttons: {
        margin: 15,
        fontSize: 16,
        color: '#EBE1BE',
    },
    label: {
        paddingBottom: 10,
        color: '#EBE1BE',
        alignSelf: 'flex-start'
    },
    inRow: {
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    cancelButton: {
        alignSelf: 'flex-end',
        margin: 10
        
    }
});