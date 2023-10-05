import { type ReactNode } from 'react';

import {
  CheckoutColorIcon,
  ClassifyColorIcon,
  ClearColorIcon,
  CollectColorIcon,
  CounterCompanionColorIcon,
  DashboardColorIcon,
  HelloColorIcon,
  InclusivePricingColorIcon,
  LandedCostColorIcon,
  PrepayColorIcon,
  RateColorIcon,
  RestrictColorIcon,
  ScreenColorIcon,
  TaxColorIcon,
} from 'src/icons/IconIndex';
import type { ColorPrefix } from 'src/types/Color';

export type Product =
  | 'checkout'
  | 'classify'
  | 'clear'
  | 'counter-companion'
  | 'dashboard'
  | 'prepay'
  | 'collect'
  | 'hello'
  | 'inclusive-pricing'
  | 'landed-cost'
  | 'rate'
  | 'restrict'
  | 'screen'
  | 'tax';

export type ProductName =
  | 'Checkout'
  | 'Classify'
  | 'Clear'
  | 'Counter Companion'
  | 'Dashboard'
  | 'Prepay'
  | 'Collect'
  | 'Hello'
  | 'Inclusive Pricing'
  | 'Landed Cost'
  | 'Rate'
  | 'Restrict'
  | 'Screen'
  | 'Tax';

type Params = {
  /**
   * @default 24
   */
  iconSize?: number;
  product?: Product;
};

type Return = {
  color: ColorPrefix;
  gradient: string;
  icon: ReactNode;
  name: ProductName;
};

export const getProductDetails = ({
  iconSize = 24,
  product,
}: Params): Return => {
  switch (product) {
    case 'checkout':
      return {
        color: 'orange',
        gradient: 'linear-gradient(90deg, #E7910A 42.48%, #DF2B76 109.98%)',
        icon: <CheckoutColorIcon size={iconSize} />,
        name: 'Checkout',
      };
    case 'classify':
      return {
        color: 'purple',
        gradient: 'linear-gradient(301.28deg, #AA2DC9 23.74%, #7278F2 95.06%)',
        icon: <ClassifyColorIcon size={iconSize} />,
        name: 'Classify',
      };
    case 'clear':
      return {
        color: 'cyan',
        gradient: 'linear-gradient(223.42deg, #00B9B7 50.32%, #3122F6 135.88%)',
        icon: <ClearColorIcon size={iconSize} />,
        name: 'Clear',
      };
    case 'dashboard':
      return {
        color: 'blue',
        gradient:
          'conic-gradient(#B004A4 -10grad, #FEBD10 10grad 80grad, #98C729 120grad 190grad, #536CFE 210grad 280grad, #B004A4 320grad 390grad, #FEBD10 410grad);',
        icon: <DashboardColorIcon size={iconSize} />,
        name: 'Dashboard',
      };
    case 'hello':
      return {
        color: 'green',
        gradient: 'linear-gradient(314.52deg, #80B917 36.5%, #0CC4E2 86.53%)',
        icon: <HelloColorIcon size={iconSize} />,
        name: 'Hello',
      };
    case 'inclusive-pricing':
      return {
        color: 'purple',
        gradient: 'linear-gradient(180deg, #C8286B 43.87%, #AA2EC9 77.46%)',
        icon: <InclusivePricingColorIcon size={iconSize} />,
        name: 'Inclusive Pricing',
      };
    case 'landed-cost':
      return {
        color: 'red',
        gradient: 'linear-gradient(41.91deg, #DF2B76 31.62%, #FFB90D 83.63%)',
        icon: <LandedCostColorIcon size={iconSize} />,
        name: 'Landed Cost',
      };
    case 'rate':
      return {
        color: 'blue',
        gradient: 'linear-gradient(269.86deg, #2740F3 -11.3%, #AA2DC9 168.06%)',
        icon: <RateColorIcon size={iconSize} />,
        name: 'Rate',
      };
    case 'restrict':
      return {
        color: 'blue',
        gradient: 'linear-gradient(49.93deg, #9297FA 41.5%, #3122F9 113.97%)',
        icon: <RestrictColorIcon size={iconSize} />,
        name: 'Restrict',
      };
    case 'screen':
      return {
        color: 'green',
        gradient: 'linear-gradient(180deg, #80BC17 -16.78%, #FFD900 80.83%)',
        icon: <ScreenColorIcon size={iconSize} />,
        name: 'Screen',
      };
    case 'prepay':
      return {
        color: 'blue',
        gradient: 'linear-gradient(270deg, #4560EE 32.33%, #65E4EF 126.81%)',
        icon: <PrepayColorIcon size={iconSize} />,
        name: 'Prepay',
      };
    case 'collect':
      return {
        color: 'red',
        gradient: 'linear-gradient(135deg, #DC2A54 46.38%, #D078FC 78.57%)',
        icon: <CollectColorIcon size={iconSize} />,
        name: 'Collect',
      };
    case 'tax':
      return {
        color: 'green',
        gradient: 'linear-gradient(126.15deg, #10A74C 42.95%, #93F317 76.49%)',
        icon: <TaxColorIcon size={iconSize} />,
        name: 'Tax',
      };
    case 'counter-companion':
      return {
        color: 'purple',
        gradient: 'linear-gradient(180deg, #880DC2 36.69%, #F229F7 76.94%)',
        icon: <CounterCompanionColorIcon size={iconSize} />,
        name: 'Counter Companion',
      };

    default:
      return {
        color: 'blue',
        gradient: 'linear-gradient(223.42deg, #00B9B7 50.32%, #3122F6 135.88%)',
        icon: <DashboardColorIcon />,
        name: 'Dashboard',
      };
  }
};
