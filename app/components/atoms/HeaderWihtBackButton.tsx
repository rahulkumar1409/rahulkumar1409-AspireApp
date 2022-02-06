
import { HomeSvg } from '@app/assets/svg';
import { goBack } from '@app/core/services/navigation/navigation.service';
import { React } from '@app/shared-import';
import { colors } from '@app/theme/colors';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

interface HeaderWihtBackButtonProps{
    title?: string;
    subTitle?: string;
    handlePressRight?: () => void;
}

const HeaderWihtBackButton = ({
    title,
    subTitle,
    handlePressRight
}: HeaderWihtBackButtonProps) => {
  return (
    <Appbar.Header
        style={styles.container}
    >
      <Appbar.BackAction onPress={goBack} />
      <Appbar.Content title={title||""} subtitle={subTitle||""} />
      <Appbar.Action icon={() => <HomeSvg color={colors.secondary} />} onPress={handlePressRight}/>
    </Appbar.Header>
  )
}

export default HeaderWihtBackButton;

const styles = StyleSheet.create({
    container: {
        elevation: 0,
        shadowRadius: 0,
        shadowColor: 'transparent',
        shadowOffset: { height: 0, width: 0}
    }
})
