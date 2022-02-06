import { SwitchOffSvg, SwitchOnSvg } from '@app/assets/svg';
import { React } from '@app/shared-import';
import { GestureResponderEvent } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface SwitchProps {
    value?: boolean;
    onChangeValue?: () => void;
}

const Switch = ({
    value,
    onChangeValue
}: SwitchProps) =>  {
    const [localValue, setLocalValue] = React.useState<boolean>(false);
    const changeValue = () => {
        if(onChangeValue) onChangeValue();
        else setLocalValue(!localValue)
    }
    return (
        <TouchableOpacity
            onPress={changeValue}
            activeOpacity={0.5}
        >
            {
                value || localValue ? <SwitchOnSvg /> : <SwitchOffSvg />
            }
        </TouchableOpacity>
    )
}

export default Switch;
