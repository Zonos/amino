import type { ReactNode } from 'react';

import { CheckoutColorIcon } from 'src/icons/custom/products/CheckoutColorIcon';
import { ClassifyColorIcon } from 'src/icons/custom/products/ClassifyColorIcon';
import { ClearColorIcon } from 'src/icons/custom/products/ClearColorIcon';
import { CollectColorIcon } from 'src/icons/custom/products/CollectColorIcon';
import { CounterCompanionColorIcon } from 'src/icons/custom/products/CounterCompanionColorIcon';
import { DashboardColorIcon } from 'src/icons/custom/products/DashboardColorIcon';
import { HelloColorIcon } from 'src/icons/custom/products/HelloColorIcon';
import { InclusivePricingColorIcon } from 'src/icons/custom/products/InclusivePricingColorIcon';
import { LandedCostColorIcon } from 'src/icons/custom/products/LandedCostColorIcon';
import { PrepayColorIcon } from 'src/icons/custom/products/PrepayColorIcon';
import { RateColorIcon } from 'src/icons/custom/products/RateColorIcon';
import { RestrictColorIcon } from 'src/icons/custom/products/RestrictColorIcon';
import { ScreenColorIcon } from 'src/icons/custom/products/ScreenColorIcon';
import { TaxColorIcon } from 'src/icons/custom/products/TaxColorIcon';
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
        gradient:
          'linear-gradient(90deg, oklch(78.04% 0.185585 53.79) 42.48%, oklch(61.9% 0.259032 22.56) 109.98%)',
        icon: <CheckoutColorIcon size={iconSize} />,
        name: 'Checkout',
      };
    case 'classify':
      return {
        color: 'purple',
        gradient:
          'linear-gradient(301.28deg, oklch(62% 0.294753 308.42) 23.74%, oklch(65.79% 0.196783 273.36) 95.06%)',
        icon: <ClassifyColorIcon size={iconSize} />,
        name: 'Classify',
      };
    case 'clear':
      return {
        color: 'cyan',
        gradient:
          'linear-gradient(223.42deg, oklch(72.09% 0.152819 193.32) 50.32%, oklch(61.99% 0.225762 249.87) 135.88%)',
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
        gradient:
          'linear-gradient(314.52deg, oklch(63.9% 0.207847 152.94) 36.5%, oklch(78.02% 0.141797 235.32) 86.53%)',
        icon: <HelloColorIcon size={iconSize} />,
        name: 'Hello',
      };
    case 'inclusive-pricing':
      return {
        color: 'purple',
        gradient:
          'linear-gradient(180deg, oklch(61.9% 0.259032 22.56) 43.87%, oklch(62.09% 0.294574 308.55) 77.46%)',
        icon: <InclusivePricingColorIcon size={iconSize} />,
        name: 'Inclusive Pricing',
      };
    case 'landed-cost':
      return {
        color: 'red',
        gradient:
          'linear-gradient(41.91deg, oklch(61.9% 0.259032 22.56) 31.62%, oklch(78.04% 0.185585 53.79) 42.48% 83.63%)',
        icon: <LandedCostColorIcon size={iconSize} />,
        name: 'Landed Cost',
      };
    case 'rate':
      return {
        color: 'blue',
        gradient:
          'linear-gradient(269.86deg, oklch(55% 0.265803 266) -11.3%, oklch(62.09% 0.294574 308.55) 168.06%)',
        icon: <RateColorIcon size={iconSize} />,
        name: 'Rate',
      };
    case 'restrict':
      return {
        color: 'blue',
        gradient:
          'linear-gradient(49.93deg, oklch(62.09% 0.294574 308.55) 41.5%, oklch(46.92% 0.206293 258.12) 113.97%)',
        icon: <RestrictColorIcon size={iconSize} />,
        name: 'Restrict',
      };
    case 'screen':
      return {
        color: 'green',
        gradient:
          'linear-gradient(180deg, oklch(74.91% 0.235738 134.99) -16.78%, oklch(89.16% 0.211835 95.47) 80.83%)',
        icon: <ScreenColorIcon size={iconSize} />,
        name: 'Screen',
      };
    case 'prepay':
      return {
        color: 'blue',
        gradient:
          'linear-gradient(270deg, oklch(61.99% 0.225762 249.87) 32.33%, oklch(78.97% 0.14171 192.42) 126.81%)',
        icon: <PrepayColorIcon size={iconSize} />,
        name: 'Prepay',
      };
    case 'collect':
      return {
        color: 'red',
        gradient:
          'linear-gradient(135deg, oklch(61.9% 0.259032 22.56) 46.38%, oklch(62.09% 0.294574 308.55) 78.57%)',
        icon: <CollectColorIcon size={iconSize} />,
        name: 'Collect',
      };
    case 'tax':
      return {
        color: 'green',
        gradient:
          'linear-gradient(126.15deg, oklch(63.9% 0.207847 152.94) 42.95%, oklch(75% 0.236934 135.13) 76.49%)',
        icon: <TaxColorIcon size={iconSize} />,
        name: 'Tax',
      };
    case 'counter-companion':
      return {
        color: 'purple',
        gradient:
          'linear-gradient(180deg, oklch(54% 0.26576 307.14) 36.69%, oklch(70.86% 0.33372 330.47) 76.94%)',
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
