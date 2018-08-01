import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert, Image, AppRegistry } from 'react-native';


export class Menu extends React.Component {

    onPress = ()=> {
        Alert.alert('You tapped the button!');
    }
    home = () => {
        this.props.navigate('HomeRT');
    }

    render(){
        return(
        	<View style={styles.container}>
                <View style = {styles.buttonRow}>
                    {
                    <TouchableOpacity onPress={this.home} style={styles.buttonStyles} >
                            <Image source={require('./img/home24x24.png')}></Image>
                    </TouchableOpacity>
                }
                </View>
                <View style = {styles.searchBg}>
                    {   
                    <TouchableOpacity style={styles.buttonStyles} >
                        <Image source={require('./img/search24x24_green.png')}></Image>
                    </TouchableOpacity>
                    }
                </View>     
                <View style = {styles.buttonRow}>
                    {   
                    <TouchableOpacity style={styles.buttonStyles} >
                        <Image source={require('./img/star24x24.png')}></Image>
                    </TouchableOpacity>
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
        shadowRadius: 10,
        shadowColor: 'white',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowOpacity: 0.5
        
    },
    buttonRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyles:{
        backgroundColor: 'transparent',
    },
    searchBg: {
        backgroundColor: '#EBE1BE',
        borderRadius: 100,
        height: undefined,
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        color: '#ffffff',
        fontSize: 14,
        alignSelf: 'center',
    }
});