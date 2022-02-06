import { HomeSvg } from '@app/assets/svg';
import { Store } from '@app/core/interfaces';
import { moderateScale, React, scale, useSelector, verticalScale } from '@app/shared-import';
import { colors } from '@app/theme/colors';
import { spacingStyles } from '@app/theme/spacing';
import { typography } from '@app/theme/typography';
import { StyleSheet, View, ViewBase } from 'react-native';
import { Text } from 'react-native-paper';

interface TabHeaderProps {
}

const TabHeader = (props: TabHeaderProps) => {
    const { cardDetails } = useSelector((state: Store) => state)
  return (
    <View style={styles.container}>
        <View>
            <Text style={[typography.h1, { marginTop: verticalScale(15) }]}>Debit Card</Text>
            <Text style={[typography.h3, { marginTop: verticalScale(24) }]}>Available balance</Text>
            <View style={styles.balanceContainer}>
                <View style={[styles.dollerContainer]}>
                   <Text style={[typography.h5]}>S$</Text>
                </View>
                <Text style={typography.h1}>{(cardDetails.usage && parseInt(cardDetails.usage?.usageLimit)>0) ? parseInt(cardDetails.usage?.usageLimit)-parseInt(cardDetails.usage?.spendings) : '0'}</Text>
            </View>
        </View>
        <HomeSvg color={colors.secondary} />
    </View>
  )
}

export default TabHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent: 'space-between',
        ...spacingStyles.container,
        paddingTop: verticalScale(16)
    },
    balanceContainer: {
        flexDirection:'row',
        alignItems: 'center', 
        marginTop: verticalScale(10)
    },
    dollerContainer: {
        paddingHorizontal: scale(10),
        backgroundColor: colors.secondary,
        borderRadius: moderateScale(4),
        paddingVertical: verticalScale(3),
        marginRight: scale(10)
    }
})
