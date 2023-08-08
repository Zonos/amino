import {
  CheckoutColorIcon,
  ClassifyColorIcon,
  ClearColorIcon,
  DashboardColorIcon,
  HelloColorIcon,
  LandedCostColorIcon,
  RateColorIcon,
  RestrictColorIcon,
  ScreenColorIcon,
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
  | 'dashboard';

export type ProductName =
  | 'Landed Cost'
  | 'Classify'
  | 'Rate'
  | 'Clear'
  | 'Restrict'
  | 'Screen'
  | 'Checkout'
  | 'Hello'
  | 'Dashboard';

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

    default:
      return {
        color: 'blue',
        icon: <DashboardColorIcon />,
        name: 'Dashboard',
      };
  }
};
