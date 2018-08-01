import React from 'react';
import { StyleSheet, Image, View, Text, FlatList } from 'react-native';

import PropTypes from 'prop-types';

const styles= StyleSheet.create({
    card: {

    },
    infoContainer: {

    },
    restaurantName: {

    },
    rating: {

    },
    phone: {

    },
    adress: {

    },
    open: {

    },
    cardImg: {

    },
})

export default function RestaurantCard({ restaurant }){
    const imgLink = restaurant.imgLink
    return(
        <View style={styles.card}>
            {<View style={styles.cardImg}>
                {/* <Image  
                    style={styles.img}
                    source= {require('imgLink')} */}
                />
            </View> }

            <View 
                style={styles.infoContainer}
            >
                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                <Text style={styles.rating}>{restaurant.rating}</Text>
                <Text style={styles.phone}>{restaurant.phone}</Text>
                <Text style={styles.adress}>{restaurant.adress}</Text>
                <Text style={styles.open}>{restaurant.open}</Text>
            </View>
        </View>    
        );
    }

    RestaurantCard.propTypes = {
        restaurant: PropTypes.shape({
            imgLink: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            phone:  PropTypes.string.isRequired,
            adress: PropTypes.string.isRequired,
            open: PropTypes.bool.isRequired
        })
    }