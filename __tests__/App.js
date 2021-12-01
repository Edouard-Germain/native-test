import 'react-native';
import React from 'react';
import App from '../App';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Pressable } from 'react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
 const App = () =>{
    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Pressable onPress={onPressFunction}>
                        <Image
                            source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }} 
                            style={{ width: 70, height: 20 }}   />
                        <Image
                            source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }} 
                            style={{ width: 70, height: 20 }}   />
                    </Pressable>        
                    <Text style= {padding = "90px", fontSize = " 30px"}></Text>
                    <Text style ={textAlign = "center"}></Text>
                    <Text style = { fontWidth = "bold"}></Text>
                </View>

            </View>
        </ScrollView>
    )
 }

 const styles = StyleSheet.create({
     container : {
         background : 'blue',
         padding : '10px',

     }
 })