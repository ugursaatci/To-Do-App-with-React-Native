import React, {Component} from 'react';
import { 
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  StatusBar,
  TouchableOpacity,

  } from 'react-native';
  import ItemList from './ItemList';

export default class App extends Component{
  constructor(){
    super();
    this.state={
      text:'',
      data:[]
    }
  }
  handleSave = () =>{
    const {text,data} = this.state;
    data.push({text});
    this.setState({data,text:''});
  };
  handleDone = () => {
    this.setState({ backgroundColor: 'green' });
  };

  render(){
    const {text, data}= this.state;
    return(
      <View style={{flex:1}}>
        <View style={style.title}>
          <Text style={style.title_text}>To-Do List</Text>
        </View>
        <View style={{backgroundColor:'#ccc',padding:10,flexDirection:'row'}}>
          <TextInput 
            style={{backgroundColor:'white',flex:5}}
            value={text}
            onChangeText={(text)=>this.setState({text})}/>
          <TouchableOpacity style={style.button} onPress={this.handleSave}>
            <Text style={style.title_text}>Add</Text>
            </TouchableOpacity>
          
        </View>

        <View>
          {
            data.map((item)=> {
              return <ItemList text={item.text} onPressDone={this.handleDone}/>
            })
          }
        </View>
        
      </View>
      )
    }
  }

  const style= StyleSheet.create({
    title_text:{
      fontFamily: 'times new roman',
      color:'white',
      padding:10, 
      textAlign:'center', 
      fontSize: 16, 
      fontWeight:'700'
    },
    title:{
      backgroundColor:'gray'
    },
    button:{
      backgroundColor:'gray',
      borderRadius:5,
      marginLeft:10
    }
  })
  