import React, {Component} from 'react';
import { Button, StyleSheet, Text, View,Image,FlatList, TextInput } from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: 'Eduardo do Espirito Santo'
    };
  }
  
  gitNome(){
    this.setState({nome: texto});
  }

  render(){
    
    var img = 'https://scontent.fsdu8-2.fna.fbcdn.net/v/t1.0-1/57349685_2391572707589789_2176599257069387776_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=K1jx9ymputMAX8SLVG5&_nc_ht=scontent.fsdu8-2.fna&oh=8bd1f01f4547e64041be4f74b3683bff&oe=607DF765'
    var img2= 'data:image/jpeg;base64,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'
        
    return(
      
      <View
      style={styles.container}
      >
        <Image
        style={styles.img}
        source={{uri:img2}}
        
        />
        <Text
        style={styles.text}>
          Estamos buscando desenvolvedores competentes para nosso time de desenvolvimento, faça uma busca no
          Github para achar um novo integrante para nossa equipe.
        </Text>
        
        <Text
        style={styles.text}
        >
          Digite o nome do programador que está procurando:
        </Text>
        <TextInput
        style={styles.input}
        onChangeText={this.gitNome}
        >

        </TextInput>
        <FlatList>

        </FlatList>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin:5,
    backgroundColor:'#ea80fc'
    
  },
   
  input: {
    height:45,
    borderWidth:2,
    borderColor: '#223',
    margin:10,
    fontSize: 20,
    padding:10
  },
  img:{
    width: 300,
    height:150,
    alignItems:'center',
    justifyContent: 'center',
    marginLeft:30
    
  },
  text:{
    fontSize:20,
    margin:5

    
  }
});

export default App;