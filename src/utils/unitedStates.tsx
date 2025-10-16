import { AlabamaIcon } from 'src/icons/custom/us-states/AlabamaIcon';
import { AlaskaIcon } from 'src/icons/custom/us-states/AlaskaIcon';
import { ArizonaIcon } from 'src/icons/custom/us-states/ArizonaIcon';
import { ArkansasIcon } from 'src/icons/custom/us-states/ArkansasIcon';
import { CaliforniaIcon } from 'src/icons/custom/us-states/CaliforniaIcon';
import { ColoradoIcon } from 'src/icons/custom/us-states/ColoradoIcon';
import { ConnecticutIcon } from 'src/icons/custom/us-states/ConnecticutIcon';
import { DelawareIcon } from 'src/icons/custom/us-states/DelawareIcon';
import { FloridaIcon } from 'src/icons/custom/us-states/FloridaIcon';
import { GeorgiaIcon } from 'src/icons/custom/us-states/GeorgiaIcon';
import { HawaiiIcon } from 'src/icons/custom/us-states/HawaiiIcon';
import { IdahoIcon } from 'src/icons/custom/us-states/IdahoIcon';
import { IllinoisIcon } from 'src/icons/custom/us-states/IllinoisIcon';
import { IndianaIcon } from 'src/icons/custom/us-states/IndianaIcon';
import { IowaIcon } from 'src/icons/custom/us-states/IowaIcon';
import { KansasIcon } from 'src/icons/custom/us-states/KansasIcon';
import { KentuckyIcon } from 'src/icons/custom/us-states/KentuckyIcon';
import { LouisianaIcon } from 'src/icons/custom/us-states/LouisianaIcon';
import { MaineIcon } from 'src/icons/custom/us-states/MaineIcon';
import { MarylandIcon } from 'src/icons/custom/us-states/MarylandIcon';
import { MassachusettsIcon } from 'src/icons/custom/us-states/MassachusettsIcon';
import { MichiganIcon } from 'src/icons/custom/us-states/MichiganIcon';
import { MinnesotaIcon } from 'src/icons/custom/us-states/MinnesotaIcon';
import { MississippiIcon } from 'src/icons/custom/us-states/MississippiIcon';
import { MissouriIcon } from 'src/icons/custom/us-states/MissouriIcon';
import { MontanaIcon } from 'src/icons/custom/us-states/MontanaIcon';
import { NebraskaIcon } from 'src/icons/custom/us-states/NebraskaIcon';
import { NevadaIcon } from 'src/icons/custom/us-states/NevadaIcon';
import { NewHampshireIcon } from 'src/icons/custom/us-states/NewHampshireIcon';
import { NewJerseyIcon } from 'src/icons/custom/us-states/NewJerseyIcon';
import { NewMexicoIcon } from 'src/icons/custom/us-states/NewMexicoIcon';
import { NewYorkIcon } from 'src/icons/custom/us-states/NewYorkIcon';
import { NorthCarolinaIcon } from 'src/icons/custom/us-states/NorthCarolinaIcon';
import { NorthDakotaIcon } from 'src/icons/custom/us-states/NorthDakotaIcon';
import { OhioIcon } from 'src/icons/custom/us-states/OhioIcon';
import { OklahomaIcon } from 'src/icons/custom/us-states/OklahomaIcon';
import { OregonIcon } from 'src/icons/custom/us-states/OregonIcon';
import { PennsylvaniaIcon } from 'src/icons/custom/us-states/PennsylvaniaIcon';
import { PuertoRicoIcon } from 'src/icons/custom/us-states/PuertoRicoIcon';
import { RhodeIslandIcon } from 'src/icons/custom/us-states/RhodeIslandIcon';
import { SouthCarolinaIcon } from 'src/icons/custom/us-states/SouthCarolinaIcon';
import { SouthDakotaIcon } from 'src/icons/custom/us-states/SouthDakotaIcon';
import { TennesseeIcon } from 'src/icons/custom/us-states/TennesseeIcon';
import { TexasIcon } from 'src/icons/custom/us-states/TexasIcon';
import { UtahIcon } from 'src/icons/custom/us-states/UtahIcon';
import { VermontIcon } from 'src/icons/custom/us-states/VermontIcon';
import { VirginiaIcon } from 'src/icons/custom/us-states/VirginiaIcon';
import { WashingtonIcon } from 'src/icons/custom/us-states/WashingtonIcon';
import { WestVirginiaIcon } from 'src/icons/custom/us-states/WestVirginiaIcon';
import { WisconsinIcon } from 'src/icons/custom/us-states/WisconsinIcon';
import { WyomingIcon } from 'src/icons/custom/us-states/WyomingIcon';
import type { UnitedState } from 'src/types/UnitedStates';

import { translate } from './translations/__internal__/translateAminoText';
import type { SupportedLanguageCode } from './translations/supportedLanguages';

const getTranslatedRegionName = ({
  languageCode,
  region,
}: {
  languageCode: SupportedLanguageCode;
  region: UnitedState['region'];
}) => {
  switch (region) {
    case 'South':
      return translate({
        languageCode,
        text: 'South --context: region name for the United States',
      });
    case 'West':
      return translate({
        languageCode,
        text: 'West --context: region name for the United States',
      });
    case 'Midwest':
      return translate({
        languageCode,
        text: 'Midwest --context: region name for the United States',
      });
    case 'Northeast':
      return translate({
        languageCode,
        text: 'Northeast --context: region name for the United States',
      });
    default:
      return region;
  }
};

export const getUnitedStates = (
  languageCode: SupportedLanguageCode,
): UnitedState[] => [
  {
    code: 'AL',
    highlighted: false,
    icon: <AlabamaIcon />,
    name: 'Alabama',
    region: getTranslatedRegionName({ languageCode, region: 'South' }),
  },
  {
    code: 'AK',
    highlighted: false,
    icon: <AlaskaIcon />,
    name: 'Alaska',
    region: getTranslatedRegionName({ languageCode, region: 'West' }),
  },
  {
    code: 'AZ',
    highlighted: false,
    icon: <ArizonaIcon />,
    name: 'Arizona',
    region: getTranslatedRegionName({ languageCode, region: 'West' }),
  },
  {
    code: 'AR',
    highlighted: false,
    icon: <ArkansasIcon />,
    name: 'Arkansas',
    region: getTranslatedRegionName({ languageCode, region: 'South' }),
  },
  {
    code: 'CA',
    highlighted: false,
    icon: <CaliforniaIcon />,
    name: 'California',
    region: getTranslatedRegionName({ languageCode, region: 'West' }),
  },
  {
    code: 'CO',
    highlighted: false,
    icon: <ColoradoIcon />,
    name: 'Colorado',
    region: getTranslatedRegionName({ languageCode, region: 'West' }),
  },
  {
    code: 'CT',
    highlighted: false,
    icon: <ConnecticutIcon />,
    name: 'Connecticut',
    region: getTranslatedRegionName({ languageCode, region: 'Northeast' }),
  },
  {
    code: 'DE',
    highlighted: false,
    icon: <DelawareIcon />,
    name: 'Delaware',
    region: getTranslatedRegionName({ languageCode, region: 'Northeast' }),
  },
  {
    code: 'FL',
    highlighted: false,
    icon: <FloridaIcon />,
    name: 'Florida',
    region: getTranslatedRegionName({ languageCode, region: 'South' }),
  },
  {
    code: 'GA',
    highlighted: false,
    icon: <GeorgiaIcon />,
    name: 'Georgia',
    region: getTranslatedRegionName({ languageCode, region: 'South' }),
  },
  {
    code: 'HI',
    highlighted: false,
    icon: <HawaiiIcon />,
    name: 'Hawaii',
    region: getTranslatedRegionName({ languageCode, region: 'West' }),
  },
  {
    code: 'ID',
    highlighted: false,
    icon: <IdahoIcon />,
    name: 'Idaho',
    region: getTranslatedRegionName({ languageCode, region: 'West' }),
  },
  {
    code: 'IL',
    highlighted: false,
    icon: <IllinoisIcon />,
    name: 'Illinois',
    region: getTranslatedRegionName({ languageCode, region: 'Midwest' }),
  },
  {
    code: 'IN',
    highlighted: false,
    icon: <IndianaIcon />,
    name: 'Indiana',
    region: getTranslatedRegionName({ languageCode, region: 'Midwest' }),
  },
  {
    code: 'IA',
    highlighted: false,
    icon: <IowaIcon />,
    name: 'Iowa',
    region: getTranslatedRegionName({ languageCode, region: 'Midwest' }),
  },
  {
    code: 'KS',
    highlighted: false,
    icon: <KansasIcon />,
    name: 'Kansas',
    region: getTranslatedRegionName({ languageCode, region: 'Midwest' }),
  },
  {
    code: 'KY',
    highlighted: false,
    icon: <KentuckyIcon />,
    name: 'Kentucky',
    region: getTranslatedRegionName({ languageCode, region: 'South' }),
  },
  {
    code: 'LA',
    highlighted: false,
    icon: <LouisianaIcon />,
    name: 'Louisiana',
    region: getTranslatedRegionName({ languageCode, region: 'South' }),
  },
  {
    code: 'ME',
    highlighted: false,
    icon: <MaineIcon />,
    name: 'Maine',
    region: getTranslatedRegionName({ languageCode, region: 'Northeast' }),
  },
  {
    code: 'MD',
    highlighted: false,
    icon: <MarylandIcon />,
    name: 'Maryland',
    region: getTranslatedRegionName({ languageCode, region: 'Northeast' }),
  },
  {
    code: 'MA',
    highlighted: false,
    icon: <MassachusettsIcon />,
    name: 'Massachusetts',
    region: getTranslatedRegionName({ languageCode, region: 'Northeast' }),
  },
  {
    code: 'MI',
    highlighted: false,
    icon: <MichiganIcon />,
    name: 'Michigan',
    region: getTranslatedRegionName({ languageCode, region: 'Midwest' }),
  },
  {
    code: 'MN',
    highlighted: false,
    icon: <MinnesotaIcon />,
    name: 'Minnesota',
    region: getTranslatedRegionName({ languageCode, region: 'Midwest' }),
  },
  {
    code: 'MS',
    highlighted: false,
    icon: <MississippiIcon />,
    name: 'Mississippi',
    region: getTranslatedRegionName({ languageCode, region: 'South' }),
  },
  {
    code: 'MO',
    highlighted: false,
    icon: <MissouriIcon />,
    name: 'Missouri',
    region: getTranslatedRegionName({ languageCode, region: 'Midwest' }),
  },
  {
    code: 'MT',
    highlighted: false,
    icon: <MontanaIcon />,
    name: 'Montana',
    region: getTranslatedRegionName({ languageCode, region: 'West' }),
  },
  {
    code: 'NE',
    highlighted: false,
    icon: <NebraskaIcon />,
    name: 'Nebraska',
    region: getTranslatedRegionName({ languageCode, region: 'Midwest' }),
  },
  {
    code: 'NV',
    highlighted: false,
    icon: <NevadaIcon />,
    name: 'Nevada',
    region: getTranslatedRegionName({ languageCode, region: 'West' }),
  },
  {
    code: 'NH',
    highlighted: false,
    icon: <NewHampshireIcon />,
    name: 'New Hampshire',
    region: getTranslatedRegionName({ languageCode, region: 'Northeast' }),
  },
  {
    code: 'NJ',
    highlighted: false,
    icon: <NewJerseyIcon />,
    name: 'New Jersey',
    region: getTranslatedRegionName({ languageCode, region: 'Northeast' }),
  },
  {
    code: 'NM',
    highlighted: false,
    icon: <NewMexicoIcon />,
    name: 'New Mexico',
    region: getTranslatedRegionName({ languageCode, region: 'West' }),
  },
  {
    code: 'NY',
    highlighted: false,
    icon: <NewYorkIcon />,
    name: 'New York',
    region: getTranslatedRegionName({ languageCode, region: 'Northeast' }),
  },
  {
    code: 'NC',
    highlighted: false,
    icon: <NorthCarolinaIcon />,
    name: 'North Carolina',
    region: getTranslatedRegionName({ languageCode, region: 'South' }),
  },
  {
    code: 'ND',
    highlighted: false,
    icon: <NorthDakotaIcon />,
    name: 'North Dakota',
    region: getTranslatedRegionName({ languageCode, region: 'Midwest' }),
  },
  {
    code: 'OH',
    highlighted: false,
    icon: <OhioIcon />,
    name: 'Ohio',
    region: getTranslatedRegionName({ languageCode, region: 'Midwest' }),
  },
  {
    code: 'OK',
    highlighted: false,
    icon: <OklahomaIcon />,
    name: 'Oklahoma',
    region: getTranslatedRegionName({ languageCode, region: 'South' }),
  },
  {
    code: 'OR',
    highlighted: false,
    icon: <OregonIcon />,
    name: 'Oregon',
    region: getTranslatedRegionName({ languageCode, region: 'West' }),
  },
  {
    code: 'PA',
    highlighted: false,
    icon: <PennsylvaniaIcon />,
    name: 'Pennsylvania',
    region: getTranslatedRegionName({ languageCode, region: 'Northeast' }),
  },
  {
    code: 'PR',
    highlighted: false,
    icon: <PuertoRicoIcon />,
    name: 'Puerto Rico',
    region: getTranslatedRegionName({ languageCode, region: 'Territories' }),
  },
  {
    code: 'RI',
    highlighted: false,
    icon: <RhodeIslandIcon />,
    name: 'Rhode Island',
    region: getTranslatedRegionName({ languageCode, region: 'Northeast' }),
  },
  {
    code: 'SC',
    highlighted: false,
    icon: <SouthCarolinaIcon />,
    name: 'South Carolina',
    region: getTranslatedRegionName({ languageCode, region: 'South' }),
  },
  {
    code: 'SD',
    highlighted: false,
    icon: <SouthDakotaIcon />,
    name: 'South Dakota',
    region: getTranslatedRegionName({ languageCode, region: 'Midwest' }),
  },
  {
    code: 'TN',
    highlighted: false,
    icon: <TennesseeIcon />,
    name: 'Tennessee',
    region: getTranslatedRegionName({ languageCode, region: 'South' }),
  },
  {
    code: 'TX',
    highlighted: false,
    icon: <TexasIcon />,
    name: 'Texas',
    region: getTranslatedRegionName({ languageCode, region: 'South' }),
  },
  {
    code: 'UT',
    highlighted: false,
    icon: <UtahIcon />,
    name: 'Utah',
    region: getTranslatedRegionName({ languageCode, region: 'West' }),
  },
  {
    code: 'VT',
    highlighted: false,
    icon: <VermontIcon />,
    name: 'Vermont',
    region: getTranslatedRegionName({ languageCode, region: 'Northeast' }),
  },
  {
    code: 'VA',
    highlighted: false,
    icon: <VirginiaIcon />,
    name: 'Virginia',
    region: getTranslatedRegionName({ languageCode, region: 'South' }),
  },
  {
    code: 'WA',
    highlighted: false,
    icon: <WashingtonIcon />,
    name: 'Washington',
    region: getTranslatedRegionName({ languageCode, region: 'West' }),
  },
  {
    code: 'WV',
    highlighted: false,
    icon: <WestVirginiaIcon />,
    name: 'West Virginia',
    region: getTranslatedRegionName({ languageCode, region: 'South' }),
  },
  {
    code: 'WI',
    highlighted: false,
    icon: <WisconsinIcon />,
    name: 'Wisconsin',
    region: getTranslatedRegionName({ languageCode, region: 'Midwest' }),
  },
  {
    code: 'WY',
    highlighted: false,
    icon: <WyomingIcon />,
    name: 'Wyoming',
    region: getTranslatedRegionName({ languageCode, region: 'West' }),
  },
];
