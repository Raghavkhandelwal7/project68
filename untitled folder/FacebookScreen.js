import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class FacebookScreen extends React.Component {
    render(){
        return(
            <View style = {styles.container}>  
                <Text style = {styles.textFb}> Facebook </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container :{
        flex:1,
        marginTop:200,
        backgroundColor: '#ffffff',
        alignItems:'center',
        justifyContent:'center'
    },
    textFb :{
        fontSize: 25,
        fontWeight: '500',
        color: '#0000dd',
        alignItems: 'center',
        justifyContent: 'center'
    }
})