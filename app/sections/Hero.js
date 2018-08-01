import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import RestaurantList from './RestaurantList';

export class Hero extends React.Component {
    render(){
        return(
        <View style={styles.container}>
            <RestaurantList />
        </View>
        ); 
    }
}

 const styles = StyleSheet.create ({
     container: {
         backgroundColor:'white',
        flex:12,
    },
//     restaurant: {
//         flex:4,
//         marginBottom:10,
//         backgroundColor: '#569A61',
//     }   
 });