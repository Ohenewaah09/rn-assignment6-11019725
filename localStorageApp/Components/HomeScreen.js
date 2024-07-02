import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header';

export default function HomeScreen({ navigation }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCartItems = async () => {
      try {
        const storedCartItems = await AsyncStorage.getItem('@cart_items');
        if (storedCartItems) {
          setCartItems(JSON.parse(storedCartItems));
        }
      } catch (error) {
        console.error('Failed to load cart items', error);
      }
    };

    loadCartItems();
  }, []);

  const addToCart = async (item) => {
    const newCartItems = [...cartItems, item];
    setCartItems(newCartItems);
    try {
      await AsyncStorage.setItem('@cart_items', JSON.stringify(newCartItems));
    } catch (error) {
      console.error('Failed to save cart item', error);
    }
  };

  const navigateToCart = () => {
    navigation.navigate('CartScreen', { cartItems });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header navigation={navigation} navigateToCart={navigateToCart} />
        <View style={styles.ImageContainer}>
          <View style={styles.ImageColumn}>
            <View>
              <Image source={require('../assets/dress1.png')} />
              <TouchableOpacity onPress={() => addToCart({ image: require('../assets/dress1.png'), name: 'Office Wear', title: 'reversible angora cardigan', price: 120 })}>
                <Image source={require('../assets/add_circle.png')} style={styles.add_Circle} />
              </TouchableOpacity>
              <Text style={styles.itemName}>Office Wear</Text>
              <Text style={styles.itemTitle}>reversible angora cardigan</Text>
              <Text style={styles.itemPrice}>$120</Text>
            </View>

            <View>
              <Image source={require('../assets/dress2.png')} />
              <TouchableOpacity onPress={() => addToCart({ image: require('../assets/dress2.png'), name: 'Black', title: 'reversible angora cardigan', price: 120 })}>
                <Image source={require('../assets/add_circle.png')} style={styles.add_Circle} />
              </TouchableOpacity>
              <Text style={styles.itemName}>Black</Text>
              <Text style={styles.itemTitle}>reversible angora cardigan</Text>
              <Text style={styles.itemPrice}>$120</Text>
            </View>
          </View>

          <View style={styles.ImageColumn}>
            <View>
              <Image source={require('../assets/dress3.png')} />
              <TouchableOpacity onPress={() => addToCart({ image: require('../assets/dress3.png'), name: 'Church Wear', title: 'reversible angora cardigan', price: 120 })}>
                <Image source={require('../assets/add_circle.png')} style={styles.add_Circle} />
              </TouchableOpacity>
              <Text style={styles.itemName}>Church Wear</Text>
              <Text style={styles.itemTitle}>reversible angora cardigan</Text>
              <Text style={styles.itemPrice}>$120</Text>
            </View>

            <View>
              <Image source={require('../assets/dress4.png')} />
              <TouchableOpacity onPress={() => addToCart({ image: require('../assets/dress4.png'), name: 'Lamerei', title: 'reversible angora cardigan', price: 120 })}>
                <Image source={require('../assets/add_circle.png')} style={styles.add_Circle} />
              </TouchableOpacity>
              <Text style={styles.itemName}>Lamerei</Text>
              <Text style={styles.itemTitle}>reversible angora cardigan</Text>
              <Text style={styles.itemPrice}>$120</Text>
            </View>
          </View>

          <View style={styles.ImageColumn}>
            <View>
              <Image source={require('../assets/dress5.png')} />
              <TouchableOpacity onPress={() => addToCart({ image: require('../assets/dress5.png'), name: '21WN', title: 'reversible angora cardigan', price: 120 })}>
                <Image source={require('../assets/add_circle.png')} style={styles.add_Circle} />
              </TouchableOpacity>
              <Text style={styles.itemName}>21WN</Text>
              <Text style={styles.itemTitle}>reversible angora cardigan</Text>
              <Text style={styles.itemPrice}>$120</Text>
            </View>

            <View>
              <Image source={require('../assets/dress6.png')} />
              <TouchableOpacity onPress={() => addToCart({ image: require('../assets/dress6.png'), name: 'Lopo', title: 'reversible angora cardigan', price: 120 })}>
                <Image source={require('../assets/add_circle.png')} style={styles.add_Circle} />
              </TouchableOpacity>
              <Text style={styles.itemName}>Lopo</Text>
              <Text style={styles.itemTitle}>reversible angora cardigan</Text>
              <Text style={styles.itemPrice}>$120</Text>
            </View>
          </View>

          <View style={styles.ImageColumn}>
            <View>
              <Image source={require('../assets/dress7.png')} />
              <TouchableOpacity onPress={() => addToCart({ image: require('../assets/dress7.png'), name: '21WN', title: 'reversible angora cardigan', price: 120 })}>
                <Image source={require('../assets/add_circle.png')} style={styles.add_Circle} />
              </TouchableOpacity>
              <Text style={styles.itemName}>21WN</Text>
              <Text style={styles.itemTitle}>reversible angora cardigan</Text>
              <Text style={styles.itemPrice}>$120</Text>
            </View>

            <View>
              <Image source={require('../assets/dress3.png')} />
              <TouchableOpacity onPress={() => addToCart({ image: require('../assets/dress3.png'), name: 'Lamerei', price: 120 })}>
                <Image source={require('../assets/add_circle.png')} style={styles.add_Circle} />
              </TouchableOpacity>
              <Text style={styles.itemName}>Lamerei</Text>
              <Text style={styles.itemTitle}>reversible angora cardigan</Text>
              <Text style={styles.itemPrice}>$120</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ImageColumn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    top:20,
  },
  add_Circle: {
    left: 130,
    top: -30,
  },
  itemName:{
    fontSize:20,
    top:-20
  },
  itemTitle:{
    fontSize:14,
    color: '#A9A9A9',
    top:-20
  },
  itemPrice:{
    fontSize: 20,
    top:-20,
    color: 'red'
  },
});
