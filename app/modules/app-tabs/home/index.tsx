
import { React, SafeAreaView, useDispatch } from '@app/shared-import';
import { colors } from '@app/theme/colors';
import { typography } from '@app/theme/typography';
import { StyleSheet, Text } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[typography.h1]}>Home</Text>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.primary
  },
})
