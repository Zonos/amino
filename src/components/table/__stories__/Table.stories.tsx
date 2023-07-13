import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { Badge } from 'src/components/badge/Badge';
import { DualCurrency } from 'src/components/currency/DualCurrency';
import { RoundedIcon } from 'src/components/rounded-icon/RoundedIcon';
import { VStack } from 'src/components/stack/VStack';
import { type TableProps, Table } from 'src/components/table/Table';
import { TableBody } from 'src/components/table/TableBody';
import { TableCell } from 'src/components/table/TableCell';
import { TableFooter } from 'src/components/table/TableFooter';
import { TableHead } from 'src/components/table/TableHead';
import { TableRow } from 'src/components/table/TableRow';
import { TableRowCollapse } from 'src/components/table/TableRowCollapse';
import { Text } from 'src/components/text/Text';
import { ClassifyIcon } from 'src/icons/ClassifyIcon';
import { CoinsDuotoneIcon } from 'src/icons/CoinsDuotoneIcon';
import { ImageDuotoneIcon } from 'src/icons/ImageDuotoneIcon';
import { ImportDuotoneIcon } from 'src/icons/ImportDuotoneIcon';
import { ShoppingListDuotoneIcon } from 'src/icons/ShoppingListDuotoneIcon';
import { TruckDuotoneIcon } from 'src/icons/TruckDuotoneIcon';
import { WarningIcon } from 'src/icons/WarningIcon';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const StyledTable = styled(Table)`
  max-width: 1080px;
  margin: 0 auto;
`;
const LeftIconLabel = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 12px;
  }
`;
const RightIconLabel = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 12px;
  }
`;

const ExpandedItemCard = styled.div`
  padding: ${theme.space24};
  padding-left: 44px;
  border: ${theme.border};
  border-radius: ${theme.radius6};
`;
const ExpandedTableCard = styled(ExpandedItemCard)`
  padding: 8px;
  padding-left: 44px;
`;

const AttributesWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;
const AttributeLabel = styled(VStack)`
  width: 177px;
`;

const ExpandedListItem = ({
  conversionRate,
  foreignCode,
  label,
  showForeign,
  value,
}: {
  conversionRate?: number;
  foreignCode: string;
  label: string;
  showForeign: boolean;
  value: number;
}) => (
  <TableRow key={label}>
    <TableCell align="left" borderBottom="0" padding="0">
      <Text>{label}</Text>
    </TableCell>
    <TableCell align="right" borderBottom="0" colSpan={2} padding="0">
      <Text>
        <DualCurrency
          conversionRate={conversionRate}
          foreignCode={foreignCode}
          showForeign={showForeign}
          value={value}
        />
      </Text>
    </TableCell>
    <TableCell borderBottom="0" />
  </TableRow>
);

const ItemizedColgroup = () => (
  <colgroup>
    <col />
    <col />
    <col width="10%" />
    <col width="4%" />
  </colgroup>
);

const TableMeta: Meta = {
  component: Table,
};

export default TableMeta;

const Template: StoryFn<
  TableProps & {
    conversionRate?: number;
    foreignCode: string;
    showForeign: boolean;
  }
> = ({ conversionRate, foreignCode, showForeign }) => {
  const [collapsedRows, setCollapsedRows] = useState<number[]>([0, 1]);

  const handleToggleCollapse = (index: number) =>
    setCollapsedRows(
      collapsedRows.includes(index)
        ? collapsedRows.filter(x => x !== index)
        : collapsedRows.concat(index),
    );
  return (
    <StyledTable>
      <colgroup>
        <col />
        <col width="20%" />
        <col width={showForeign ? '23%' : '15%'} />
        <col width="6%" />
      </colgroup>
      <TableHead>
        <TableRow>
          <TableCell>
            <Text color="gray800" type="small-header">
              Description
            </Text>
          </TableCell>
          <TableCell align="right" colSpan={2}>
            <Text color="gray800" type="small-header">
              Amount
            </Text>
          </TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRowCollapse
          collapsed={collapsedRows.includes(0)}
          onToggleCollapse={() => handleToggleCollapse(0)}
          rowContent={
            <>
              <TableCell>
                <LeftIconLabel>
                  <RoundedIcon>
                    <ImageDuotoneIcon />
                  </RoundedIcon>
                  <Text fontWeight={500}>
                    Huka One Running Shoe - Women&apos;s
                  </Text>
                </LeftIconLabel>
              </TableCell>
              <TableCell align="right">
                <RightIconLabel>
                  <Text fontWeight={500}>6404.11.0000</Text>
                  <ClassifyIcon color="purple600" size={14} />
                </RightIconLabel>
              </TableCell>
              <TableCell align="right">
                <Text fontWeight={500}>
                  <DualCurrency
                    conversionRate={conversionRate}
                    foreignCode={foreignCode}
                    showForeign={showForeign}
                    value={27898.74}
                  />
                </Text>
              </TableCell>
            </>
          }
        >
          <ExpandedItemCard>
            <VStack spacing={8}>
              <Text type="bold-label">
                Huka One Running Shoe - Women&apos;s
              </Text>
              <Text color="gray800">
                <DualCurrency
                  conversionRate={conversionRate}
                  foreignCode={foreignCode}
                  isTabular={false}
                  showForeign={showForeign}
                  value={27898.74}
                />
              </Text>
            </VStack>
            <AttributesWrapper>
              {[
                { label: 'sku', value: '123SFS12' },
                { label: 'Country of Origin', value: 'United States' },
                { label: 'Quantity', value: '1' },
                { label: 'HS Code', value: '6404.11.0000' },
                { label: 'Weight', value: '2 lbs' },
                { label: 'Length', value: '49 in' },
                { label: 'Width', value: '45 in' },
                { label: 'Height', value: '11 in' },
              ].map(option => (
                <AttributeLabel key={option.label} spacing={8}>
                  <Text
                    color="gray700"
                    fontWeight={600}
                    isUppercase
                    type="caption"
                  >
                    {option.label}
                  </Text>
                  <Text>{option.value}</Text>
                </AttributeLabel>
              ))}
            </AttributesWrapper>
          </ExpandedItemCard>
        </TableRowCollapse>
        <TableRowCollapse
          collapsed={collapsedRows.includes(1)}
          onToggleCollapse={() => handleToggleCollapse(1)}
          rowContent={
            <>
              <TableCell>
                <LeftIconLabel>
                  <RoundedIcon>
                    <TruckDuotoneIcon />
                  </RoundedIcon>
                  <Text fontWeight={500}>Custom</Text>
                </LeftIconLabel>
              </TableCell>
              <TableCell align="right" colSpan={2}>
                <Text fontWeight={500}>
                  <DualCurrency
                    conversionRate={conversionRate}
                    foreignCode={foreignCode}
                    showForeign={showForeign}
                    value={891.23}
                  />
                </Text>
              </TableCell>
            </>
          }
        >
          <ExpandedTableCard>
            <Table>
              <ItemizedColgroup />
              <TableBody>
                {[
                  { label: 'Shipping', value: 877.5 },
                  { label: 'Fuel Surcharge', value: 0.73 },
                  { label: 'Out of Area Fee', value: 1.0 },
                  { label: 'Buffer', value: 5.0 },
                ].map(({ label, value }) => (
                  <ExpandedListItem
                    key={label}
                    conversionRate={conversionRate}
                    foreignCode={foreignCode}
                    label={label}
                    showForeign={showForeign}
                    value={value}
                  />
                ))}
              </TableBody>
            </Table>
          </ExpandedTableCard>
        </TableRowCollapse>
        <TableRowCollapse
          collapsed={collapsedRows.includes(2)}
          onToggleCollapse={() => handleToggleCollapse(2)}
          rowContent={
            <>
              <TableCell>
                <LeftIconLabel>
                  <RoundedIcon background="blue100">
                    <ImportDuotoneIcon
                      color="blue900"
                      secondaryColor="blue300"
                    />
                  </RoundedIcon>
                  <Text fontWeight={500}>Duties</Text>
                </LeftIconLabel>
              </TableCell>
              <TableCell align="right" colSpan={2}>
                <Text fontWeight={500}>$0.55</Text>
              </TableCell>
            </>
          }
        >
          <ExpandedTableCard>
            <Table>
              <ItemizedColgroup />
              <TableBody>
                {[
                  {
                    label: "2.00% applied to Huka One Running Shoe - Women's",
                    value: 0.55,
                  },
                ].map(({ label, value }) => (
                  <ExpandedListItem
                    key={label}
                    conversionRate={conversionRate}
                    foreignCode={foreignCode}
                    label={label}
                    showForeign={showForeign}
                    value={value}
                  />
                ))}
              </TableBody>
            </Table>
          </ExpandedTableCard>
        </TableRowCollapse>
        <TableRowCollapse
          collapsed={collapsedRows.includes(3)}
          onToggleCollapse={() => handleToggleCollapse(3)}
          rowContent={
            <>
              <TableCell>
                <LeftIconLabel>
                  <RoundedIcon background="red100">
                    <ShoppingListDuotoneIcon
                      color="red900"
                      secondaryColor="red400"
                    />
                  </RoundedIcon>
                  <Text fontWeight={500}>Fees</Text>
                </LeftIconLabel>
              </TableCell>
              <TableCell align="right" colSpan={2}>
                <Text fontWeight={500}>$10.71</Text>
              </TableCell>
            </>
          }
        >
          <ExpandedTableCard>
            <Table>
              <ItemizedColgroup />
              <TableBody>
                {[
                  {
                    label: 'UPS United States Duty and Tax Forwarding Charge',
                    value: 1.0,
                  },
                  {
                    label: 'UPS United Kingdom Disbursement Fee',
                    value: 2.69,
                  },
                ].map(({ label, value }) => (
                  <ExpandedListItem
                    key={label}
                    conversionRate={conversionRate}
                    foreignCode={foreignCode}
                    label={label}
                    showForeign={showForeign}
                    value={value}
                  />
                ))}
              </TableBody>
            </Table>
          </ExpandedTableCard>
        </TableRowCollapse>
        <TableRowCollapse
          collapsed={collapsedRows.includes(4)}
          onToggleCollapse={() => handleToggleCollapse(4)}
          rowContent={
            <>
              <TableCell>
                <LeftIconLabel>
                  <RoundedIcon background="green100">
                    <CoinsDuotoneIcon
                      color="green900"
                      secondaryColor="green400"
                    />
                  </RoundedIcon>
                  <Text fontWeight={500}>Taxes</Text>
                </LeftIconLabel>
              </TableCell>
              <TableCell align="right">
                <Badge color="orange" fontWeight={600}>
                  Over tax de minimis
                </Badge>
              </TableCell>
              <TableCell align="right">
                <Text fontWeight={500}>$10.94</Text>
              </TableCell>
            </>
          }
        >
          <ExpandedTableCard>
            <Table>
              <ItemizedColgroup />
              <TableBody>
                {[
                  {
                    label: 'UPS United States Duty and Tax Forwarding Charge',
                    value: 1.0,
                  },
                  {
                    label: 'UPS United Kingdom Disbursement Fee',
                    value: 2.69,
                  },
                ].map(({ label, value }) => (
                  <ExpandedListItem
                    key={label}
                    conversionRate={conversionRate}
                    foreignCode={foreignCode}
                    label={label}
                    showForeign={showForeign}
                    value={value}
                  />
                ))}
              </TableBody>
            </Table>
          </ExpandedTableCard>
        </TableRowCollapse>
        <TableRowCollapse
          collapsed={collapsedRows.includes(5)}
          onToggleCollapse={() => handleToggleCollapse(5)}
          rowContent={
            <>
              <TableCell colSpan={2}>
                <LeftIconLabel>
                  <RoundedIcon background="orange100">
                    <WarningIcon color="orange900" />
                  </RoundedIcon>
                  <Text fontWeight={500}>No children (cannot expand)</Text>
                </LeftIconLabel>
              </TableCell>
              <TableCell align="right">
                <Text fontWeight={500}>$0.00</Text>
              </TableCell>
            </>
          }
        />
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell align="right" borderBottom="0" colSpan={2}>
            <Text fontWeight={800}>Total</Text>
          </TableCell>
          <TableCell align="right" borderBottom="0" padding="0">
            <Text fontWeight={800}>$65.62</Text>
          </TableCell>
        </TableRow>
      </TableFooter>
    </StyledTable>
  );
};

export const ExpandableTable = Template.bind({});
ExpandableTable.args = {
  showForeign: false,
};
ExpandableTable.parameters = {};

export const ExpandableShowForeignCurrencyTable = Template.bind({});
ExpandableShowForeignCurrencyTable.args = {
  conversionRate: 1.2,
  foreignCode: 'CAD',
  showForeign: true,
};
ExpandableShowForeignCurrencyTable.parameters = {};
