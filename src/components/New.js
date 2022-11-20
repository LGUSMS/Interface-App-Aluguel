import { View, Text,StyleSheet, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import  {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'

export default function New(props){ 
    const navigation = useNavigation();
  return (
    
    <TouchableOpacity onPress={()=> navigation.navigate('detail')} style={styles.container}>
     <Image
     source={props.cover}
     style={styles.cover} />

     <View style={styles.content}>
        <Text style={styles.title}>{props.name}</Text>

        <View style={styles.dot}>
        </View>

        <Text style={styles.badge}>Novo</Text>

     </View>
     
     <Text style={styles.description}>
        {props.description}
     </Text>

     <View style={styles.footer}>
        <View style={{width:'80%'}}>
          <Text style={styles.price}>R$ 1.204,90</Text>
        </View>
        <View style={{width:'20%'}}>
            <Ionicons name="ios-add-circle" size={24} color="black"/>

        </View>
     </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        backgroundColor:'#FFF',
        height:250,
        width:200,
        elevation:2,
        borderRadius:10,
        padding:15,
        marginRight:30,
        marginLeft:2,
        marginBottom:5,
    },
    cover:{
        width:170,
        height:110,
        borderRadius:10,
    },
    content:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10,
    },
    title:{
        fontSize:12,
        color:'#4f4a4as'
    },
    dot:{
        width:4,
        height:4,
        backgroundColor:'red',
        marginHorizontal:4,
        borderRadius:10
    },
    badge:{
        color:'red',
        fontSize:9
    },
    description:{
        fontSize:9,
        color:'#4f4a4a'
    },
    footer:{
        flexDirection:'row',
        marginTop:5,
        alignItems:'center',
        width:'100%'
    },
    price:{
        fontSize:15
    }

});