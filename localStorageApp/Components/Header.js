import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';



export default function Header(){
    return (
        <View style={styles.container}>
          <View style={styles.headerImages}>
            <View>
              <Image source={require('../assets/Menu.png')} />
            </View>
            <View>
              <Image source={require('../assets/Logo.png')}/>
            </View>
            <View style={styles.subHeaderImages}>
              <Image source={require('../assets/Search.png')} style={styles.subHeaderImages1}/>
              <Image source={require('../assets/shoppingBag.png')}/>
            </View>
          </View>
    
          <View style={styles.headerTitle}>
            <Text style={styles.TitleStyle}>OUR STORY</Text>
            <View style={styles.subHeaderImages}>
              <View style={styles.StorySectImages}>
              <Image source={require('../assets/Listview.png')} style={styles.subHeaderImages1}/>
              </View>
              <View style={styles.StorySecImages}>
              <Image source={require('../assets/Filter.png')}/>
              </View>
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
    headerImages:{
      marginTop:40,
      flexDirection:'row',
      justifyContent:'space-evenly'
    },
    subHeaderImages:{
      flexDirection:'row',
    },
    subHeaderImages1:{
      marginRight:20,
    },
    headerTitle:{
      flexDirection: 'row',
      justifyContent:'space-evenly',
      marginTop:25
    },
    TitleStyle:{
      fontSize:24
    },
    StorySecImages:{
      backgroundColor:'#f6f6f6',
      height:50,
      width:50,
      borderRadius:25,
      alignItems:'center',
      justifyContent:'center'
    },
    StorySectImages:{
      backgroundColor:'#f6f6f6',
      height:50,
      width:50,
      borderRadius:25,
      alignItems:'center',
      justifyContent:'center',
      marginRight: 10
    }
  });
  