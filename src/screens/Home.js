import React from 'react';
import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import {Appbar, IconButton, Text} from 'react-native-paper';
import {AuthContext} from '../context';
import {useTheme} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

const Home = ({navigation}) => {
  const context = React.useContext(AuthContext);
  const theme = useTheme();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    firestore()
      .collection('Services')
      .onSnapshot(querySnapshot => {
        console.log('Total Services: ', querySnapshot.size);

        let services = [];
        querySnapshot.forEach(documentSnapshot => {
          console.log(
            'Service ID: ',
            documentSnapshot.id,
            documentSnapshot.data(),
          );
          services.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });

        setData(services);
      });
  }, []);

  return (
    <View style={{...styles.container}}>
      <Appbar.Header style={{backgroundColor: theme.colors.primary}}>
        <Appbar.Content title={context.user.displayName} />
        <Appbar.Action icon="account" onPress={() => {}} />
      </Appbar.Header>
      <Text
        variant="headlineMedium"
        style={{
          fontWeight: 'bold',
          fontStyle: 'italic',
          alignSelf: 'center',
          paddingTop: 16,
          color: theme.colors.primary,
          textTransform: 'uppercase',
        }}>
        Kami Spa
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 16,
        }}>
        <Text variant="labelLarge">Danh sách dịch vụ</Text>
        <IconButton
          icon="plus-outline"
          size={20}
          style={{backgroundColor: theme.colors.primary}}
          onPress={() => navigation.navigate('Add')}
        />
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Pressable
            style={{
              borderColor: '#000',
              borderWidth: 1,
              marginHorizontal: 16,
              marginTop: 16,
              borderRadius: 8,
              flexDirection: 'row',
              height: 48,
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 16,
            }}>
            <Text>{item.name}</Text>
            <Text>{item.price} đ</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
