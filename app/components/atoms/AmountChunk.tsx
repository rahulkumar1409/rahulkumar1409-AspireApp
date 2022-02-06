import { moderateScale, React, scale, verticalScale } from '@app/shared-import';
import { colors } from '@app/theme/colors';
import { typography } from '@app/theme/typography';
import { GestureResponderEvent, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

interface AmountChunkProps{
    amount: string|number;
    onPress: (event: GestureResponderEvent) => void;
    container?: StyleProp<ViewStyle>
}

const AmountChunk = ({
    amount,
    container,
    onPress
}: AmountChunkProps) => {
  return (
      <TouchableOpacity 
        style={[styles.container, container]}
        onPress={onPress}
        activeOpacity={0.5}
    >
          <Text style={[typography.h5, typography.h5_c1]}>S$ {amount}</Text>
      </TouchableOpacity>
  )
}

export default AmountChunk;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: scale(20),
        paddingVertical: verticalScale(10),
        backgroundColor: colors.progreaaBar,
        borderRadius: moderateScale(4)
    }
})