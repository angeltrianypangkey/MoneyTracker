import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Balance, Gap, SubHeader, Transaksi } from '../../Components';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SubHeader title="Money Tracker" subTitle="Track your money" />
      <Gap />
      <Balance />
      <Gap />
      <Transaksi navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});