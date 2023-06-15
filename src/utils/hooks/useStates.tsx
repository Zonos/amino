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

export const useUnitedStates = () => {
  const states = [
    { code: 'AL', icon: <AlabamaIcon />, name: 'Alabama', region: 'South' },
    { code: 'AK', icon: <AlaskaIcon />, name: 'Alaska', region: 'West' },
    { code: 'AZ', icon: <ArizonaIcon />, name: 'Arizona', region: 'West' },
    { code: 'AR', icon: <ArkansasIcon />, name: 'Arkansas', region: 'South' },
    {
      code: 'CA',
      icon: <CaliforniaIcon />,
      name: 'California',
      region: 'West',
    },
    { code: 'CO', icon: <ColoradoIcon />, name: 'Colorado', region: 'West' },
    {
      code: 'CT',
      icon: <ConnecticutIcon />,
      name: 'Connecticut',
      region: 'Northeast',
    },
    {
      code: 'DE',
      icon: <DelawareIcon />,
      name: 'Delaware',
      region: 'Northeast',
    },
    { code: 'FL', icon: <FloridaIcon />, name: 'Florida', region: 'South' },
    { code: 'GA', icon: <GeorgiaIcon />, name: 'Georgia', region: 'South' },
    { code: 'HI', icon: <HawaiiIcon />, name: 'Hawaii', region: 'West' },
    { code: 'ID', icon: <IdahoIcon />, name: 'Idaho', region: 'West' },
    { code: 'IL', icon: <IllinoisIcon />, name: 'Illinois', region: 'Midwest' },
    { code: 'IN', icon: <IndianaIcon />, name: 'Indiana', region: 'Midwest' },
    { code: 'IA', icon: <IowaIcon />, name: 'Iowa', region: 'Midwest' },
    { code: 'KS', icon: <KansasIcon />, name: 'Kansas', region: 'Midwest' },
    { code: 'KY', icon: <KentuckyIcon />, name: 'Kentucky', region: 'South' },
    { code: 'LA', icon: <LouisianaIcon />, name: 'Louisiana', region: 'South' },
    { code: 'ME', icon: <MaineIcon />, name: 'Maine', region: 'Northeast' },
    {
      code: 'MD',
      icon: <MarylandIcon />,
      name: 'Maryland',
      region: 'Northeast',
    },
    {
      code: 'MA',
      icon: <MassachusettsIcon />,
      name: 'Massachusetts',
      region: 'Northeast',
    },
    { code: 'MI', icon: <MichiganIcon />, name: 'Michigan', region: 'Midwest' },
    {
      code: 'MN',
      icon: <MinnesotaIcon />,
      name: 'Minnesota',
      region: 'Midwest',
    },
    {
      code: 'MS',
      icon: <MississippiIcon />,
      name: 'Mississippi',
      region: 'South',
    },
    { code: 'MO', icon: <MissouriIcon />, name: 'Missouri', region: 'Midwest' },
    { code: 'MT', icon: <MontanaIcon />, name: 'Montana', region: 'West' },
    { code: 'NE', icon: <NebraskaIcon />, name: 'Nebraska', region: 'Midwest' },
    { code: 'NV', icon: <NevadaIcon />, name: 'Nevada', region: 'West' },
    {
      code: 'NH',
      icon: <NewHampshireIcon />,
      name: 'New Hampshire',
      region: 'Northeast',
    },
    {
      code: 'NJ',
      icon: <NewJerseyIcon />,
      name: 'New Jersey',
      region: 'Northeast',
    },
    { code: 'NM', icon: <NewMexicoIcon />, name: 'New Mexico', region: 'West' },
    {
      code: 'NY',
      icon: <NewYorkIcon />,
      name: 'New York',
      region: 'Northeast',
    },
    {
      code: 'NC',
      icon: <NorthCarolinaIcon />,
      name: 'North Carolina',
      region: 'South',
    },
    {
      code: 'ND',
      icon: <NorthDakotaIcon />,
      name: 'North Dakota',
      region: 'Midwest',
    },
    { code: 'OH', icon: <OhioIcon />, name: 'Ohio', region: 'Midwest' },
    { code: 'OK', icon: <OklahomaIcon />, name: 'Oklahoma', region: 'South' },
    { code: 'OR', icon: <OregonIcon />, name: 'Oregon', region: 'West' },
    {
      code: 'PA',
      icon: <PennsylvaniaIcon />,
      name: 'Pennsylvania',
      region: 'Northeast',
    },
    {
      code: 'RI',
      icon: <RhodeIslandIcon />,
      name: 'Rhode Island',
      region: 'Northeast',
    },
    {
      code: 'SC',
      icon: <SouthCarolinaIcon />,
      name: 'South Carolina',
      region: 'South',
    },
    {
      code: 'SD',
      icon: <SouthDakotaIcon />,
      name: 'South Dakota',
      region: 'Midwest',
    },
    { code: 'TN', icon: <TennesseeIcon />, name: 'Tennessee', region: 'South' },
    { code: 'TX', icon: <TexasIcon />, name: 'Texas', region: 'South' },
    { code: 'UT', icon: <UtahIcon />, name: 'Utah', region: 'West' },
    { code: 'VT', icon: <VermontIcon />, name: 'Vermont', region: 'Northeast' },
    { code: 'VA', icon: <VirginiaIcon />, name: 'Virginia', region: 'South' },
    {
      code: 'WA',
      icon: <WashingtonIcon />,
      name: 'Washington',
      region: 'West',
    },
    {
      code: 'WV',
      icon: <WestVirginiaIcon />,
      name: 'West Virginia',
      region: 'South',
    },
    {
      code: 'WI',
      icon: <WisconsinIcon />,
      name: 'Wisconsin',
      region: 'Midwest',
    },
    { code: 'WY', icon: <WyomingIcon />, name: 'Wyoming', region: 'West' },
  ];

  return { states };
};
