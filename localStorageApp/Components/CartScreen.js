import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CartScreen({ route }) {
  const { cartItems: initialCartItems } = route.params;
  const [items, setItems] = useState(initialCartItems);

  useEffect(() => {
    const getItemsFromStorage = async () => {
      try {
        const storedItems = await AsyncStorage.getItem('@cart_items');
        if (storedItems) {
          setItems(JSON.parse(storedItems));
        }
      } catch (error) {
        console.error('Error retrieving cart items from AsyncStorage:', error);
      }
    };

    getItemsFromStorage();
  }, []);

  const removeFromCart = async (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);

    try {
      await AsyncStorage.setItem('@cart_items', JSON.stringify(updatedItems));
    } catch (error) {
      console.error('Error saving cart items to AsyncStorage:', error);
    }
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.cartHeader}>
          <Image source={require('../assets/Logo.png')} style={styles.logoStyle} />
          <Image source={require('../assets/Search.png')} style={styles.searchStyle} />
        </View>
        <View style={styles.headerTitle}>
          <Text style={styles.headerTitleText}>C H E C K O U T</Text>
          <View style={styles.lineContainer}>
            <View style={styles.line} />
            <View style={styles.diamond} />
            <View style={styles.line} />
          </View>
        </View>
        {items.map((item, index) => (
          <View key={index} style={styles.cartItem}>
            <View style={styles.itemDetailsContainer}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemPrice}>${item.price}</Text>
                <TouchableOpacity onPress={() => removeFromCart(index)}>
                  <Image source={require('../assets/remove.png')} style={styles.removeItemImage} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footerContent}>
        <View style={styles.totalContainer}>
          <Text>EST. TOTAL</Text>
          <Text>${calculateTotal()}</Text>
        </View>
        <View style={styles.checkoutFooter}>
          <Image source={require('../assets/shoppingBag.png')} style={styles.shoppingBag} />
          <Text style={styles.checkoutFooterText}>CHECKOUT</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    paddingBottom: 120, 
  },
  cartHeader: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  logoStyle: {
    width: 100,
    height: 40,
    left:120
  },
  searchStyle: {
    width: 25,
    height: 25,
  },
  headerTitle: {
    marginTop: 30,
    alignItems: 'center',
  },
  headerTitleText: {
    fontSize: 24,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  line: {
    height: 1,
    backgroundColor: '#A9A9A9',
    flex: 1,
  },
  diamond: {
    width: 10,
    height: 10,
    backgroundColor: '#A9A9A9',
    transform: [{ rotate: '45deg' }],
    marginHorizontal: 10,
  },
  cartItem: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  itemDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    marginRight: 15,
  },
  
  removeItemImage: {
    left:140,
    top:50,
    marginTop: 10,
  },
  itemName:{
    fontSize:24
  },
  itemTitle:{
    fontSize:16,
    color: '#A9A9A9'
  },
  itemPrice:{
    fontSize: 22,
    top:5,
    color: 'red'
  },
  footerContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  checkoutFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    borderRadius: 5,
  },
  shoppingBag: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  checkoutFooterText: {
    color: '#fff',
    fontSize: 22,
  },
});
