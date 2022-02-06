
import { CardOption, DebitCardSettingLeftIcon, Switch } from '@app/components/atoms';
import { CardSettingOptionEnum } from '@app/core/enum/CardSettingOptionEnum';
import { DebitCardOptionsSettingInterface, Store } from '@app/core/interfaces';
import { CardSettingOptions } from '@app/core/mock/CardOption';
import { navigate } from '@app/core/services/navigation/navigation.service';
import { setCardDetails } from '@app/redux/actions';
import { spendingLimit } from '@app/routes/labels';
import { React, useDispatch, useSelector } from '@app/shared-import';
import { TouchableOpacity } from 'react-native';

const SettingsList = () => {
    const { cardDetails } = useSelector((state: Store) => state)
    const dispatch = useDispatch()
    return (
        <React.Fragment>
            {CardSettingOptions.map((item: DebitCardOptionsSettingInterface, index: number) => {
                const { id, description, title, rightIcon, leftIcon } = item;
                const onPressRightIcon = () => {
                    if(leftIcon === CardSettingOptionEnum.weekelySpending){
                        if(parseInt(cardDetails.usage?.usageLimit)>0){
                            dispatch(setCardDetails({
                                ...cardDetails,
                                usage: {
                                    ...cardDetails.usage,
                                    usageLimit: '0'
                                }
                            }))
                        }else{
                            navigate(spendingLimit)
                        }
                    }
                }
                return (
                    <CardOption
                        key={id}
                        title={title}
                        description={description}
                        right={rightIcon ? () => (
                            <TouchableOpacity onPress={onPressRightIcon} activeOpacity={0.1}>
                                <Switch value={parseInt(cardDetails.usage?.usageLimit)>0 && leftIcon === CardSettingOptionEnum.weekelySpending}/>
                            </TouchableOpacity>
                        ) : null}
                        left={() => <DebitCardSettingLeftIcon code={leftIcon} />}
                    />
                )},
            )}
        </React.Fragment>
    )
}

export default SettingsList;
