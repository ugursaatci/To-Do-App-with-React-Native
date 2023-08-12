import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";




const ItemList=({text, onPressDone}) =>{
    return(
        <View>
                <View style={[style.body_border,{flexDirection:"row"}]}>
                    <Text style={[style.body_text,{flex:1, marginTop:10}]}>{text}</Text>
                        <TouchableOpacity onPress={onPressDone}>
                            <Text style={[style.body_text,{backgroundColor:'gray',padding:10, color:'white'}]}>Done</Text>
                        </TouchableOpacity>
                </View>
        </View>
    )
}

export default ItemList;

const style=StyleSheet.create({
    body_text:{fontFamily:'times new roman', fontSize:16, fontWeight:'700'},
    body_border:{padding:10,backgroundColor:'#ccc', marginTop:10},
})