
import { HeaderWihtBackButton } from '@app/components/atoms';
import { moderateScale, React, SafeAreaView, verticalScale } from '@app/shared-import';
import { colors } from '@app/theme/colors';
import { gutter } from '@app/theme/spacing';
import { typography } from '@app/theme/typography';
import { StyleSheet, Text, View } from 'react-native';
import FormContainer from './comonents/FormContainer';

const SpendingLimit = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWihtBackButton />
      <View style={styles.innerContainer}>
        <Text style={[typography.h1]}>Spending limit</Text>
      </View>
      <View style={styles.overlayContainer}>
        <FormContainer />
      </View>
    </SafeAreaView>
  );
}

export default SpendingLimit;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.primary
  },
  innerContainer: {
    paddingHorizontal: gutter.paddingLargeHorizontal,
    paddingBottom: verticalScale(40)
  },
  overlayContainer: {
    flex:1,
    backgroundColor: colors.text.white,
    borderTopLeftRadius: moderateScale(24),
    borderTopRightRadius: moderateScale(24)
  }
})
