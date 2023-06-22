import { theme } from './theme';
import { blue } from './theme/night/colors/_blue';
import { cyan } from './theme/night/colors/_cyan';
import { gray } from './theme/night/colors/_gray';
import { red } from './theme/night/colors/_red';
import { orange } from './theme/night/colors/_orange';
import { green } from './theme/night/colors/_green';
import { purple } from './theme/night/colors/_purple';
import { transparent } from './theme/night/colors/_transparent';
import { glass } from './theme/night/colors/_glass';

import { constraintDefinedAminoVar } from './utils';
import { shadow } from './theme/night/_shadow';
import { variablesUsingColors } from './theme/_variablesUsingColors';
import { oneOffColors } from './theme/night/colors/_oneOffColors';

export const night = constraintDefinedAminoVar(theme, {
  /* GLASS PALETTE */
  ...glass,

  /* GRAY PALETTE */
  ...gray,

  /* BLUE PALETTE */
  ...blue,

  /* CYAN PALETTE */
  ...cyan,

  /* RED PALETTE */
  ...red,

  /* ORANGE PALETTE */
  ...orange,

  /* GREEN PALETTE */
  ...green,

  /* PURPLE */
  ...purple,

  /* TRANSPARENT */
  ...transparent,

  /* BOX SHADOW */
  ...shadow,

  /* VARIABLES USING COLORS */
  ...variablesUsingColors,

  /* ONE OFF COLORS */
  ...oneOffColors,
});
