import React from 'react';
import {View} from 'react-native';
import {Appbar, Button} from 'react-native-paper';
import {useTheme, TextInput} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

const Add = ({navigation}) => {
  const theme = useTheme();
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState(null);

  const onPress = () => {
    if (!name || !price) {
      alert('Please fill in all required fields');
      return;
    }

    firestore()
      .collection('Services')
      .add({
        name: name,
        price: price,
      })
      .then(() => {
        alert('Service added successfully');
        navigation.goBack();
      })
      .catch(error => {
        alert(error);
      });
  };

  return (
    <View>
      <Appbar.Header style={{backgroundColor: theme.colors.primary}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Service" />
      </Appbar.Header>
      <TextInput
        label="Service name *"
        mode="outlined"
        value={name}
        onChangeText={text => setName(text)}
        style={{marginTop: 16, marginHorizontal: 16}}
      />
      <TextInput
        label="Price *"
        mode="outlined"
        value={price}
        onChangeText={text => setPrice(text)}
        style={{margin: 16}}
        keyboardType="numeric"
      />
      <Button
        mode="contained"
        style={{marginHorizontal: 16}}
        onPress={() => onPress()}>
        ADD
      </Button>
    </View>
  );
};

export default Add;
