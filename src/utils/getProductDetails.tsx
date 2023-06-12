import { CheckoutIcon } from 'src/icons/custom/products/CheckoutIcon';
import { ClassifyIcon } from 'src/icons/custom/products/ClassifyIcon';
import { ClearIcon } from 'src/icons/custom/products/ClearIcon';
import { DashboardIcon } from 'src/icons/custom/products/DashboardIcon';
import { HelloIcon } from 'src/icons/custom/products/HelloIcon';
import { LandedCostIcon } from 'src/icons/custom/products/LandedCostIcon';
import { RateIcon } from 'src/icons/custom/products/RateIcon';
import { RestrictIcon } from 'src/icons/custom/products/RestrictIcon';
import { ScreenIcon } from 'src/icons/custom/products/ScreenIcon';
import type { ColorPrefix } from 'src/types/Color';

export type Products =
  | 'landed-cost'
  | 'classify'
  | 'rate'
  | 'clear'
  | 'restrict'
  | 'screen'
  | 'checkout'
  | 'hello'
  | 'dashboard';

export type ProductNames =
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
  product?: Products
): {
  color: ColorPrefix;
  icon: JSX.Element;
  name: ProductNames;
} => {
  switch (product) {
    case 'checkout':
      return {
        color: 'orange',
        icon: <CheckoutIcon />,
        name: 'Checkout',
      };
    case 'classify':
      return {
        color: 'purple',
        icon: <ClassifyIcon />,
        name: 'Classify',
      };
    case 'clear':
      return {
        color: 'cyan',
        icon: <ClearIcon />,
        name: 'Clear',
      };
    case 'dashboard':
      return {
        color: 'blue',
        icon: <DashboardIcon />,
        name: 'Dashboard',
      };
    case 'hello':
      return {
        color: 'green',
        icon: <HelloIcon />,
        name: 'Hello',
      };
    case 'landed-cost':
      return {
        color: 'red',
        icon: <LandedCostIcon />,
        name: 'Landed Cost',
      };
    case 'rate':
      return {
        color: 'blue',
        icon: <RateIcon />,
        name: 'Rate',
      };
    case 'restrict':
      return {
        color: 'blue',
        icon: <RestrictIcon />,
        name: 'Restrict',
      };
    case 'screen':
      return {
        color: 'green',
        icon: <ScreenIcon />,
        name: 'Screen',
      };

    default:
      return {
        color: 'blue',
        icon: <DashboardIcon />,
        name: 'Dashboard',
      };
  }
};
