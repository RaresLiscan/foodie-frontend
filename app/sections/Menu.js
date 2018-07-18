import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';

export class Menu extends React.Component {

    onPress = ()=> {
        Alert.alert('You tapped the button!');
    }

    render(){
        return(
        	<View style={styles.container}>
                <View style = {styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('RegisterRT')}>
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('ContactRT')}>
                        <Text style={styles.buttonText}>CONTACT</Text>
                    </TouchableOpacity> 
                </View>     
                <View style = {styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('AboutRT')}>
                        <Text style={styles.buttonText}>ABOUT</Text>
                    </TouchableOpacity>    
                </View>
		    </View>
	    );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#35605a',
        flexDirection: 'row',
        
    },
    buttonRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderRightWidth: 1,
        borderLeftWidth: 1,
    },
    buttonStyles:{
        backgroundColor: '#35605a',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#ffffff',
        fontSize: 14,
        alignSelf: 'center',
    }
});