import { colors } from '@app/theme/colors';
import { typography } from '@app/theme/typography';
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Credit = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[typography.h1]}>Credit</Text>
    </SafeAreaView>
  );
}

export default Credit;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.primary
  },
})