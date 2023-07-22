/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StatusBar, Text, View, TextInput, FlatList } from 'react-native';

let database = [
  { Indonesia: 'Ayam', Inggris: 'Chicken' },
  { Indonesia: 'Sapi', Inggris: 'Dog' },
  { Indonesia: 'Kambing', Inggris: 'Goat' },
  { Indonesia: 'Kelinci', Inggris: 'Rabbit' },
  { Indonesia: 'Ular', Inggris: 'Snake' },
  { Indonesia: 'Laki-Laki', Inggris: 'Man' },
  { Indonesia: 'Perempuan', Inggris: 'Woman' },
  { Indonesia: 'Ayah', Inggris: 'Father' },
  { Indonesia: 'Semangka', Inggris: 'Watermelon' },
  { Indonesia: 'Pisang', Inggris: 'Banana' },
  { Indonesia: 'Jeruk', Inggris: 'Orange' },
  { Indonesia: 'Berenang', Inggris: 'Swim' },
  { Indonesia: 'Berlari', Inggris: 'Run' },


];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      data: database,
    };
  }
  cari = () => {
    let data = database;
    data = data.filter(item => item.Indonesia.includes(this.state.text));

    this.setState({
      data: data,
    });

  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#0288d1" barStyle="light-content" />
        <View style={{ padding: 10, backgroundColor: '#03a9f4' }}>
          <Text style={{ textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold', fontSize: 18 }}>KAMUS BAHASA INGGRIS</Text>
        </View>

        <TextInput
          style={{ height: 40, borderBlockColor: 'gray', borderWidth: 2, paddingLeft: 10, marginVertical: 20, marginHorizontal: 30, borderRadius: 50, backgroundColor: '#03a9f4' }}
          onChangeText={text => this.setState({ text: text })}
          value={this.state.text}
          placeholder="Masukkan Kata"
          onKeyPress={() => this.cari()}

        />
        <FlatList
          data={this.state.data}
          renderItem={({ item }) =>
            <View style={{ borderWidth: 2, borderRadius: 10, marginVertical: 6, marginHorizontal: 30, padding: 10, backgroundColor: '#0288d1' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.Indonesia}</Text>
              <Text style={{ fontSize: 16, marginTop: 5 }}>{item.Inggris}</Text>
            </View>

          }
          keyExtractor={item => item.Indonesia}
        />

        <Text>{this.state.text}</Text>

      </View>
    );
  }
}


export default App;
