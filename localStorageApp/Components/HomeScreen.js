import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Header from './Header';

export default function HomeScreen() {
 return(
  <View style={styles.container}>
    <ScrollView>
    <Header/>
    <View style={styles.ImageContainer}>

      <View style={styles.ImageColumn}>
      <View>
        <Image source={require('../assets/dress1.png')}/>
        <Image source={require('../assets/add_circle.png')} style={styles.add_Circle}/>
        <Text>Office Wear</Text>
        <Text>reversible angora cardigan</Text>
        <Text>$120</Text>
      </View>

      <View>
        <Image source={require('../assets/dress2.png')}/>
        <Image source={require('../assets/add_circle.png')} style={styles.add_Circle}/>
        <Text>Black</Text>
        <Text>reversible angora cardigan</Text>
        <Text>$120</Text>
      </View>
      </View>

      <View style={styles.ImageColumn}>
      <View>
        <Image source={require('../assets/dress3.png')}/>
        <Image source={require('../assets/add_circle.png')} style={styles.add_Circle}/>
        <Text>Church Wear</Text>
        <Text>reversible angora cardigan</Text>
        <Text>$120</Text>
      </View>

      <View>
        <Image source={require('../assets/dress4.png')}/>
        <Image source={require('../assets/add_circle.png')} style={styles.add_Circle}/>
        <Text>Lamerei</Text>
        <Text>reversible angora cardigan</Text>
        <Text>$120</Text>
      </View>
      </View>

      <View style={styles.ImageColumn}>
      <View>
        <Image source={require('../assets/dress5.png')}/>
        <Image source={require('../assets/add_circle.png')} style={styles.add_Circle}/>
        <Text>21WN</Text>
        <Text>reversible angora cardigan</Text>
        <Text>$120</Text>
      </View>

      <View>
        <Image source={require('../assets/dress6.png')}/>
        <Image source={require('../assets/add_circle.png')} style={styles.add_Circle}/>
        <Text>Lopo</Text>
        <Text>reversible angora cardigan</Text>
        <Text>$120</Text>
      </View>
      </View>

      <View style={styles.ImageColumn}>
      <View>
        <Image source={require('../assets/dress7.png')}/>
        <Image source={require('../assets/add_circle.png')} style={styles.add_Circle}/>
        <Text>21WN</Text>
        <Text>reversible angora cardigan</Text>
        <Text>$120</Text>
      </View>

      <View>
        <Image source={require('../assets/dress3.png')}/>
        <Image source={require('../assets/add_circle.png')} style={styles.add_Circle}/>
        <Text>Lamerei</Text>
        <Text>reversible angora cardigan</Text>
        <Text>$120</Text>
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
  ImageColumn:{
    flexDirection: 'row',
    justifyContent:'space-evenly'
  },
  add_Circle:{
    left: 130,
    top:-30
  }
});
