import { colors } from '@app/theme/colors';
import { typography } from '@app/theme/typography';
import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[typography.h1]}>Profile</Text>
    </SafeAreaView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.primary
  },
})