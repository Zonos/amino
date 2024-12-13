import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import clsx from 'clsx';

import { Badge } from 'src/components/badge/Badge';
import { DualCurrency } from 'src/components/currency/DualCurrency';
import { RoundedIcon } from 'src/components/rounded-icon/RoundedIcon';
import { VStack } from 'src/components/stack/VStack';
import { Table, type TableProps } from 'src/components/table/Table';
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

import styles from './Table.stories.module.scss';

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
          hideForeign={!showForeign}
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
    <Table className={styles.styledTable}>
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
                <div className={styles.leftIconLabel}>
                  <RoundedIcon>
                    <ImageDuotoneIcon />
                  </RoundedIcon>
                  <Text fontWeight={500}>
                    Huka One Running Shoe - Women&apos;s
                  </Text>
                </div>
              </TableCell>
              <TableCell align="right">
                <div className={styles.rightIconLabel}>
                  <Text fontWeight={500}>6404.11.0000</Text>
                  <ClassifyIcon color="purple600" size={14} />
                </div>
              </TableCell>
              <TableCell align="right">
                <Text fontWeight={500}>
                  <DualCurrency
                    conversionRate={conversionRate}
                    foreignCode={foreignCode}
                    hideForeign={!showForeign}
                    value={27898.74}
                  />
                </Text>
              </TableCell>
            </>
          }
        >
          <div className={styles.expandedItemCard}>
            <VStack spacing={8}>
              <Text type="bold-label">
                Huka One Running Shoe - Women&apos;s
              </Text>
              <Text color="gray800">
                <DualCurrency
                  conversionRate={conversionRate}
                  foreignCode={foreignCode}
                  hideForeign={!showForeign}
                  isTabular={false}
                  value={27898.74}
                />
              </Text>
            </VStack>
            <div className={styles.attributesWrapper}>
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
                <VStack
                  key={option.label}
                  className={styles.attributeLabel}
                  spacing={8}
                >
                  <Text
                    color="gray700"
                    fontWeight={600}
                    isUppercase
                    type="caption"
                  >
                    {option.label}
                  </Text>
                  <Text>{option.value}</Text>
                </VStack>
              ))}
            </div>
          </div>
        </TableRowCollapse>
        <TableRowCollapse
          collapsed={collapsedRows.includes(1)}
          onToggleCollapse={() => handleToggleCollapse(1)}
          rowContent={
            <>
              <TableCell>
                <div className={styles.leftIconLabel}>
                  <RoundedIcon>
                    <TruckDuotoneIcon />
                  </RoundedIcon>
                  <Text fontWeight={500}>Custom</Text>
                </div>
              </TableCell>
              <TableCell align="right" colSpan={2}>
                <Text fontWeight={500}>
                  <DualCurrency
                    conversionRate={conversionRate}
                    foreignCode={foreignCode}
                    hideForeign={!showForeign}
                    value={891.23}
                  />
                </Text>
              </TableCell>
            </>
          }
        >
          <div
            className={clsx(styles.expandedTableCard, styles.expandedItemCard)}
          >
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
          </div>
        </TableRowCollapse>
        <TableRowCollapse
          collapsed={collapsedRows.includes(2)}
          onToggleCollapse={() => handleToggleCollapse(2)}
          rowContent={
            <>
              <TableCell>
                <div className={styles.leftIconLabel}>
                  <RoundedIcon background="blue100">
                    <ImportDuotoneIcon
                      color="blue900"
                      secondaryColor="blue300"
                    />
                  </RoundedIcon>
                  <Text fontWeight={500}>Duties</Text>
                </div>
              </TableCell>
              <TableCell align="right" colSpan={2}>
                <Text fontWeight={500}>$0.55</Text>
              </TableCell>
            </>
          }
        >
          <div
            className={clsx(styles.expandedItemCard, styles.expandedTableCard)}
          >
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
          </div>
        </TableRowCollapse>
        <TableRowCollapse
          collapsed={collapsedRows.includes(3)}
          onToggleCollapse={() => handleToggleCollapse(3)}
          rowContent={
            <>
              <TableCell>
                <div className={styles.leftIconLabel}>
                  <RoundedIcon background="red100">
                    <ShoppingListDuotoneIcon
                      color="red900"
                      secondaryColor="red400"
                    />
                  </RoundedIcon>
                  <Text fontWeight={500}>Fees</Text>
                </div>
              </TableCell>
              <TableCell align="right" colSpan={2}>
                <Text fontWeight={500}>$10.71</Text>
              </TableCell>
            </>
          }
        >
          <div
            className={clsx(styles.expandedItemCard, styles.expandedTableCard)}
          >
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
          </div>
        </TableRowCollapse>
        <TableRowCollapse
          collapsed={collapsedRows.includes(4)}
          onToggleCollapse={() => handleToggleCollapse(4)}
          rowContent={
            <>
              <TableCell>
                <div className={styles.leftIconLabel}>
                  <RoundedIcon background="green100">
                    <CoinsDuotoneIcon
                      color="green900"
                      secondaryColor="green400"
                    />
                  </RoundedIcon>
                  <Text fontWeight={500}>Taxes</Text>
                </div>
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
          <div
            className={clsx(styles.expandedItemCard, styles.expandedTableCard)}
          >
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
          </div>
        </TableRowCollapse>
        <TableRowCollapse
          collapsed={collapsedRows.includes(5)}
          onToggleCollapse={() => handleToggleCollapse(5)}
          rowContent={
            <>
              <TableCell colSpan={2}>
                <div className={styles.leftIconLabel}>
                  <RoundedIcon background="orange100">
                    <WarningIcon color="orange900" />
                  </RoundedIcon>
                  <Text fontWeight={500}>No children (cannot expand)</Text>
                </div>
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
    </Table>
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
