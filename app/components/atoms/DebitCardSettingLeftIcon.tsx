import { FreezeCardSvg, NewCardSvg, RestrictLargeSvg, SpeedMeterLargeSvg, UploadSvg } from '@app/assets/svg';
import { CardSettingOptionEnum } from '@app/core/enum/CardSettingOptionEnum';
import { React } from '@app/shared-import';

const DebitCardSettingLeftIcon = ({ code } : {code: number}) => {
    const LeftIcon = null;
    switch (code) {
        case CardSettingOptionEnum.topUp:
          return <UploadSvg />;
        case CardSettingOptionEnum.weekelySpending:
          return <SpeedMeterLargeSvg />;
        case CardSettingOptionEnum.freezeCard:
          return <FreezeCardSvg />;
        case CardSettingOptionEnum.getNewCard:
          return <NewCardSvg />;
        case CardSettingOptionEnum.deactivatedCard:
          return <RestrictLargeSvg />;
      }
    return LeftIcon;
}

export default DebitCardSettingLeftIcon;
