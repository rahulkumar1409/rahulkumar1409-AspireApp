import { Store } from '@app/core/interfaces';
import { moderateScale, React, useSelector, verticalScale } from '@app/shared-import';
import { colors } from '@app/theme/colors';
import { typography } from '@app/theme/typography';
import { StyleSheet, Text, View } from 'react-native';

interface SpendingLimitProgressBarProps{
}

const SpendingLimitProgressBar = ({}: SpendingLimitProgressBarProps) => {
  const { cardDetails } = useSelector((state: Store) => state)
  const {
    usage
  } = cardDetails;
  if(parseInt(usage?.usageLimit)<1){
    return null;
  }
  return (
    <View>
        <View style={styles.topContainer}>
            <Text style={{ ...typography.h4, ...typography.h4_c3}}>Debit card spending limit</Text>
            <Text style={[ typography.h4, typography.h4_c1, { color : colors.text.tertiary } ]}>${usage ? usage?.spendings : 0 } <Text style={{ color: colors.text.secondary }}>| ${usage ? usage?.usageLimit : 0}</Text></Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={[styles.progressBar, { width: `${Math.ceil(((usage ? parseInt(usage?.spendings) : 1)/(usage ? parseInt(usage?.usageLimit) : 1))*100)}%`}]} />
        </View>
    </View>
  );
}

export default SpendingLimitProgressBar;

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bottomContainer: {
        marginTop: verticalScale(5),
        backgroundColor: colors.progreaaBar,
        height: verticalScale(15),
        borderRadius: moderateScale(10)
    },
    progressBar: {
      backgroundColor: colors.secondary,
      borderRadius: moderateScale(10),
      height: '100%'
    }
})
