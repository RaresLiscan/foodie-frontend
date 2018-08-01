import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  AsyncStorage,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import RestaurantCard from './RestaurantCard';
import axios from 'axios';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 5,
  },
});

class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        restaurants: [],
    };
  };
  
  getRestaurant = () => {
    const ax = axios.create({
      baseURL: 'http://localhost:3000/data'
    })
    ax.get('db.json')
      .then((response) => {
        this.state.restaurants = response.data;
      });
  }
  
    
  
  // state = {
  //   restaurants: [],
  // }
  // componentDidMount() {
  //   const restaurants = require('./db.json').restaurants.map( r => ({
  //     ...r,
  //   }));
  //   this.setState({ restaurants });
  // }
  
    render () {
      return (
        <FlatList
          key="flatlist"
          style={styles.list}
          data={this.state.restaurants}
          renderItem={({ item }) => (
            <RestaurantCard restaurant={item} />
          )}
          keyExtractor={item => item.id}
          />
        );
      }
    }
  
  
    export default RestaurantList;