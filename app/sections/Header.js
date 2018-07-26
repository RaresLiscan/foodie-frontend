import React from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage, Alert  } from 'react-native';
// import Drawer from 'Drawer';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            loggedUser: false
        };    
    }

    toggleUser = ()=>{
        if (this.state.isLoggedIn) {
            AsyncStorage.setItem('jwt_token', 'none', (err, result) => {
                this.setState({
                    isLoggedIn: false,
                    loggedUser: false
                });
                Alert.alert('User logged out');        
            })

        }
        else {
            this.props.navigate('LoginRT')            
        }
    }

    componentDidMount(){
        AsyncStorage.getItem('jwt_token', (err, result) => {
            if ( result==='none'){
                console.log('NONE');
            }
            else if (result === null){
                AsyncStorage.setItem('jwt_token', 'none' , (err, result) => {
                    console.log('Set user to NONE');
                })
            }
            else {
                this.setState({
                    isLoggedIn: true,
                    loggedUser: result
                });
            }

        })

    }

    
    render() {
        let display = this.state.isLoggedIn ? this.state.loggedUser : this.props.message;
        return (
            <View style={styles.headStyle}>
                <Text style={styles.meniu}>
                </Text>
                <Image 
                    style={styles.logoStyle} 
                    source={ require('./img/logo.png')} 
                    resizeMode="contain"
                />
                <Text 
                    style={styles.headText} 
                    onPress={this.toggleUser}>{display}
                </Text>
                <Image 
                    source={require('./img/avatar.png')}
                />
            </View>    
        );
    }
}

const styles = StyleSheet.create({
    headText: {
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 15,
        flex: 1
    },
    headStyle: {
        paddingTop: 30,
        paddingRight: 10,
        backgroundColor: 'blue',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#000000' ,
        justifyContent: 'center', 
        alignItems: 'center'
     
        
    },
    logoStyle:{
        flex: 1,
        width: undefined,
        height: 100
    },
    meniu:{
        flex:1

    }
});
