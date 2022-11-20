import { View, Text,StyleSheet, Button } from 'react-native';
import React from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'


import New from '../components/New';
import House from '../components/House';
import Recommended from '../components/Recommended';

export default function Home() {
    

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
        style={{backgroundColor:'#FFF'}}
        >
            <View style={styles.header}>
                
                <View style={styles.inputArea}>
                    <Feather name="search" size={24} color="black" />
                    <TextInput
                    placeholder='O que está procurando?'
                    style={styles.input}
                    />
                    </View>
                    </View>
                    
                    <View style={styles.contentNew}>
                        <Text style={styles.title}>Novidades</Text>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:15,}}>
                      <New
                      cover={require('../assets/house1.jpg')}
                      name="Casa de Praia"
                      description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
                      onPress={() => {}}
                      />
                     

                  
                      <New
                      cover={require('../assets/house2.jpg')}
                      name="Casa de Floripa"
                      description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
                      onPress={() => navigation.navigate('detail')}
                      />
                      <New
                      cover={require('../assets/house3.jpg')}
                      name="Sobrado"
                      description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
                      onPress={() =>{}}
                      />
                    </ScrollView>

                    <View style={{flexDirection:'row', marginBottom:10, alignItems:'center'}}> 
                        <Text style={[styles.title,{marginTop:20}]}>Próximo de você</Text>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:15,}}>
                    <House
                    cover={require('../assets/house4.jpg')}

                    />
                    <House
                    cover={require('../assets/house5.jpg')}
                    />
                    <House
                    cover={require('../assets/house6.jpg')}
                    />
                    </ScrollView>

                    <Text style={[styles.title,{margintop:20}]}>
                        Dica do dia 
                    </Text>
                    
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style>
                      <Recommended
                      cover={require('../assets/house1.jpg')}
                      house="Casa Floripa"
                      offer="25%"
                      />
                        <Recommended
                      cover={require('../assets/house4.jpg')}
                      house="Casa São Paulo"
                      offer="15%"
                      />
                        <Recommended
                      cover={require('../assets/house6.jpg')}
                      house="Casa de Praia"
                      offer="10%"
                      />

                    </ScrollView>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    header:{
        paddingHorizontal:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        marginVertical:20,
    },
    inputArea:{
        paddingHorizontal:15,
        flexDirection:'row',
        alignItems:'center',
        width:'98%',
        backgroundColor:'#FFF',
        elevation:2,
        paddingHorizontal:10,
        height:37,
        borderRadius:10,
    },
    input:{
        paddingHorizontal:10,
        fontSize:13,
        width:'90%'
    },
    contentNew:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center'
    },
    title:{
        paddingHorizontal:15,
        fontSize:18,
        color:'#4f4a4a'
    }
});