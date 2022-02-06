import {
  CardContainer,
  TabHeader,
} from '@app/components/atoms';
import {
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';
import { SpendingLimitProgressBar } from '@app/components/atoms';
import { colors } from '@app/theme/colors';
import { moderateScale, verticalScale, React, useDispatch, scale, useSelector } from '@app/shared-import';
import { fetchCardDetails } from '@app/redux/actions';
import SettingsList from './components/SettingsList';

const DebitCard = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchCardDetails())
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TabHeader />
      </View>
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.scrollContainer}>
        <View>
          <View
            style={styles.innerConatiner}
          >
            <View style={{ marginTop: verticalScale(170) }}>
              <SpendingLimitProgressBar />
              <View style={{ marginTop: verticalScale(32) }}/>
              <SettingsList />
            </View>
          </View>
          <CardContainer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  headerContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: verticalScale(30)
  },
  scrollContainer: {
    paddingTop: verticalScale(170),
    borderRadius: moderateScale(10),
    marginTop: verticalScale(10)
  },
  innerConatiner: {
    backgroundColor: colors.white,
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    marginTop: verticalScale(60),
    paddingHorizontal: scale(24),
    paddingBottom: verticalScale(10)
  },
});
export default DebitCard;
