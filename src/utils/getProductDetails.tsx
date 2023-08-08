import {
  CheckoutColorIcon,
  ClassifyColorIcon,
  ClearColorIcon,
  CounterCompanionColorIcon,
  DashboardColorIcon,
  DDPColorIcon,
  DDUColorIcon,
  HelloColorIcon,
  LandedCostColorIcon,
  RateColorIcon,
  RestrictColorIcon,
  ScreenColorIcon,
  TaxColorIcon,
} from 'src/icons/IconIndex';
import type { ColorPrefix } from 'src/types/Color';

export type Product =
  | 'landed-cost'
  | 'classify'
  | 'rate'
  | 'clear'
  | 'restrict'
  | 'screen'
  | 'checkout'
  | 'hello'
  | 'dashboard'
  | 'ddp'
  | 'ddu'
  | 'tax'
  | 'counter-companion';

export type ProductName =
  | 'Landed Cost'
  | 'Classify'
  | 'Rate'
  | 'Clear'
  | 'Restrict'
  | 'Screen'
  | 'Checkout'
  | 'Hello'
  | 'Dashboard'
  | 'DDP'
  | 'DDU'
  | 'Tax'
  | 'Counter Companion';

export const getProductDetails = (
  product: Product,
): {
  color: ColorPrefix;
  icon: React.JSX.Element;
  name: ProductName;
} => {
  switch (product) {
    case 'checkout':
      return {
        color: 'orange',
        icon: <CheckoutColorIcon />,
        name: 'Checkout',
      };
    case 'classify':
      return {
        color: 'purple',
        icon: <ClassifyColorIcon />,
        name: 'Classify',
      };
    case 'clear':
      return {
        color: 'cyan',
        icon: <ClearColorIcon />,
        name: 'Clear',
      };
    case 'dashboard':
      return {
        color: 'blue',
        icon: <DashboardColorIcon />,
        name: 'Dashboard',
      };
    case 'hello':
      return {
        color: 'green',
        icon: <HelloColorIcon />,
        name: 'Hello',
      };
    case 'landed-cost':
      return {
        color: 'red',
        icon: <LandedCostColorIcon />,
        name: 'Landed Cost',
      };
    case 'rate':
      return {
        color: 'blue',
        icon: <RateColorIcon />,
        name: 'Rate',
      };
    case 'restrict':
      return {
        color: 'blue',
        icon: <RestrictColorIcon />,
        name: 'Restrict',
      };
    case 'screen':
      return {
        color: 'green',
        icon: <ScreenColorIcon />,
        name: 'Screen',
      };
    case 'ddp':
      return {
        color: 'blue',
        icon: <DDPColorIcon />,
        name: 'DDP',
      };
    case 'ddu':
      return {
        color: 'red',
        icon: <DDUColorIcon />,
        name: 'DDU',
      };
    case 'tax':
      return {
        color: 'green',
        icon: <TaxColorIcon />,
        name: 'Tax',
      };
    case 'counter-companion':
      return {
        color: 'purple',
        icon: <CounterCompanionColorIcon />,
        name: 'Counter Companion',
      };

    default:
      return {
        color: 'blue',
        icon: <DashboardColorIcon />,
        name: 'Dashboard',
      };
  }
};
