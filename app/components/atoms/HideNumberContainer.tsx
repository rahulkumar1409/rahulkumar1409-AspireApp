import { EyeHiddenSvg } from '@app/assets/svg';
import EyeSvg from '@app/assets/svg/EyeSvg';
import { Store } from '@app/core/interfaces';
import { toggleCardVisibility } from '@app/redux/actions';
import { moderateScale, React, scale, useDispatch, useSelector, verticalScale } from '@app/shared-import';
import { colors } from '@app/theme/colors';
import { typography } from '@app/theme/typography';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface HideNumberContainerProps{
}

const HideNumberContainer = ({}: HideNumberContainerProps) => {
    const dispatch = useDispatch()
    const { cardVisiibility } = useSelector((state: Store) => state)
    const toggleShow = () => dispatch(toggleCardVisibility(!cardVisiibility))
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={toggleShow}
            activeOpacity={1}
        >
            { cardVisiibility ? <EyeHiddenSvg /> : <EyeSvg /> }
            <Text style={[typography.h5, typography.h5_c1, { marginLeft: scale(10) }]}>{cardVisiibility ? 'Hide card number' : 'Show card number'}</Text>
        </TouchableOpacity>
    );
}

export default HideNumberContainer;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: scale(10),
        paddingTop: verticalScale(8),
        paddingBottom: verticalScale(20),
        backgroundColor: colors.text.white,
        borderRadius: moderateScale(6),
        alignItems: 'center'
    }
})
