import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cartHeader}>
        <Image source={require('../assets/Logo.png')} style={styles.logoStyle}/>
        <Image source={require('../assets/Search.png')} style={styles.searchStyle}/>
      </View>
      <View style={styles.headerTitle}>
        <Text style={styles.headerTitleText}>CHECKOUT</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  cartHeader:{
    marginTop:40,
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  logoStyle:{
    left:50
  },
  searchStyle:{
    left:40
  },
  headerTitle:{
    top: 30,
   alignItems:'center',
  },
  headerTitleText:{
    fontSize:24,
    fontFamily:'Cinzel'
  },
});
