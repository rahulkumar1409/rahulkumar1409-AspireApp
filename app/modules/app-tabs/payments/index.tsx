import { colors } from '@app/theme/colors';
import { typography } from '@app/theme/typography';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Payments = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[typography.h1]}>Payments</Text>
    </SafeAreaView>
  );
}

export default Payments;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.primary
  },
})