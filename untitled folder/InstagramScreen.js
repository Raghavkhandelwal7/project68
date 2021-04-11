import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class InstagramScreen extends React.Component {
    render(){
        return(
            <View style = {styles.container}>  
                <Text style = {styles.textIg}> Instagram </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container :{
        flex:1,
        marginTop:200,
        backgroundColor: '#000000',
        alignItems:'center',
        justifyContent:'center'
    },
    textIg :{
        fontSize: 25,
        fontWeight: '500',
        color: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})