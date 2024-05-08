import React, {useEffect} from 'react';
import {View} from 'react-native';

const Update = ({navigation, route}) => {
  const [service, setService] = React.useState({});
  useEffect(() => {
    setService(route?.params?.service);
  }, [route?.parems?.service]);
  return <View></View>;
};

export default Update;
