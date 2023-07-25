import { theme } from 'build-utils/css/constants/theme';
import { variablesUsingColors } from 'build-utils/css/constants/theme/_variablesUsingColors';
import { hover } from 'build-utils/css/constants/theme/night/_hover';
import { shadow } from 'build-utils/css/constants/theme/night/_shadow';
import { blue } from 'build-utils/css/constants/theme/night/colors/_blue';
import { cyan } from 'build-utils/css/constants/theme/night/colors/_cyan';
import { glass } from 'build-utils/css/constants/theme/night/colors/_glass';
import { gray } from 'build-utils/css/constants/theme/night/colors/_gray';
import { green } from 'build-utils/css/constants/theme/night/colors/_green';
import { oneOffColors } from 'build-utils/css/constants/theme/night/colors/_oneOffColors';
import { orange } from 'build-utils/css/constants/theme/night/colors/_orange';
import { purple } from 'build-utils/css/constants/theme/night/colors/_purple';
import { red } from 'build-utils/css/constants/theme/night/colors/_red';
import { transparent } from 'build-utils/css/constants/theme/night/colors/_transparent';
import { constraintDefinedAminoVar } from 'build-utils/css/constants/utils';

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

  /* BUTTON HOVER COLORS */
  ...hover,
});
