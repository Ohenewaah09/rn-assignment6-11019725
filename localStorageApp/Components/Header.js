import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header({ navigateToCart }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerImages}>
        <View>
          <Image source={require('../assets/Menu.png')} />
        </View>
        <View>
          <Image source={require('../assets/Logo.png')} />
        </View>
        <View style={styles.subHeaderImages}>
          <Image source={require('../assets/Search.png')} style={styles.subHeaderImages1} />
          <TouchableOpacity onPress={navigateToCart}>
            <Image source={require('../assets/shoppingBag.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.headerTitle}>
        <Text style={styles.titleText}>O U R  S T O R Y</Text>
        <View style={styles.subHeaderImages}>
          <View style={styles.storySectImages}>
            <Image source={require('../assets/Listview.png')} style={styles.subHeaderImagesIcon} />
          </View>
          <View style={styles.storySecImages}>
            <Image source={require('../assets/Filter.png')} style={styles.subHeaderImagesIcon} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerImages: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  subHeaderImages: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subHeaderImages1: {
    marginRight: 20,
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 25,
  },
  titleText: {
    fontSize: 24,
  },
  storySecImages: {
    backgroundColor: '#f6f6f6',
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  storySectImages: {
    backgroundColor: '#f6f6f6',
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  subHeaderImagesIcon: {
    width: 20,
    height: 20,
  },
});
