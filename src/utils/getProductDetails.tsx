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
  icon: JSX.Element;
  color: ColorPrefix;
  name: ProductNames;
} => {
  switch (product) {
    case 'checkout':
      return {
        icon: <CheckoutIcon />,
        color: 'orange',
        name: 'Checkout',
      };
    case 'classify':
      return {
        icon: <ClassifyIcon />,
        color: 'purple',
        name: 'Classify',
      };
    case 'clear':
      return {
        icon: <ClearIcon />,
        color: 'cyan',
        name: 'Clear',
      };
    case 'dashboard':
      return {
        icon: <DashboardIcon />,
        color: 'blue',
        name: 'Dashboard',
      };
    case 'hello':
      return {
        icon: <HelloIcon />,
        color: 'green',
        name: 'Hello',
      };
    case 'landed-cost':
      return {
        icon: <LandedCostIcon />,
        color: 'red',
        name: 'Landed Cost',
      };
    case 'rate':
      return {
        icon: <RateIcon />,
        color: 'blue',
        name: 'Rate',
      };
    case 'restrict':
      return {
        icon: <RestrictIcon />,
        color: 'blue',
        name: 'Restrict',
      };
    case 'screen':
      return {
        icon: <ScreenIcon />,
        color: 'green',
        name: 'Screen',
      };

    default:
      return {
        icon: <DashboardIcon />,
        color: 'blue',
        name: 'Dashboard',
      };
  }
};
