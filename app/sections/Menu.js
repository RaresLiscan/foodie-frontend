import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert, Image, AppRegistry } from 'react-native';


export class Menu extends React.Component {

    onPress = ()=> {
        Alert.alert('You tapped the button!');
    }

    render(){
        return(
        	<View style={styles.container}>
                <View style = {styles.buttonRow}>
                    {/* <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('RegisterRT')}>
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity> */
                    <TouchableOpacity style={styles.buttonStyles} >
                            <Image source={require('./img/home.png')}></Image>
                    </TouchableOpacity>}
                </View>
                <View style = {styles.buttonRow}>
                    {/* <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('ContactRT')}>
                        <Text style={styles.buttonText}>CONTACT</Text>
                    </TouchableOpacity>  */
                    <TouchableOpacity style={styles.buttonStyles} >
                            <Image source={require('./img/search.png')}></Image>
                    </TouchableOpacity>
                    }
                </View>     
                <View style = {styles.buttonRow}>
                    {/* <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('AboutRT')}>
                        <Text style={styles.buttonText}>ABOUT</Text>
                    </TouchableOpacity>     */
                    // <TouchableOpacity style={styles.buttonStyles} >
                    //         <Image source={require('./img/avatar.png')}></Image>
                    // </TouchableOpacity>
                    }
                </View>
		    </View>
	    );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#569A61',
        flexDirection: 'row',
        
    },
    buttonRow: {
        flex: 1,
        flexDirection: 'row',
        borderColor: '#ffffff',
        borderLeftWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyles:{
        backgroundColor: '#569A61',
    },
    buttonText:{
        color: '#ffffff',
        fontSize: 14,
        alignSelf: 'center',
    }
});