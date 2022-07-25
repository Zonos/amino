import React, { Fragment, useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { RoundedIcon } from 'src/components/rounded-icon/RoundedIcon';
import { VStack } from 'src/components/stack/VStack';
import { Table, TableProps } from 'src/components/table/Table';
import { TableBody } from 'src/components/table/TableBody';
import { TableCell } from 'src/components/table/TableCell';
import { TableHead } from 'src/components/table/TableHead';
import { TableRow } from 'src/components/table/TableRow';
import { TableRowCollapse } from 'src/components/table/TableRowCollapse';
import { Text } from 'src/components/text/Text';
import { ClassifyIcon } from 'src/icons/ClassifyIcon';
import { ImageDuotoneIcon } from 'src/icons/ImageDuotoneIcon';
import { ImportDuotoneIcon } from 'src/icons/ImportDuotoneIcon';
import { TruckDuotoneIcon } from 'src/icons/TruckDuotoneIcon';
import styled from 'styled-components';
import { ShoppingListDuotoneIcon } from 'src/icons/ShoppingListDuotoneIcon';
import { Badge } from 'src/components/badge/Badge';
import { CoinsDuotoneIcon } from 'src/icons/CoinsDuotoneIcon';
import { TableFooter } from 'src/components/table/TableFooter';

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
  padding: var(--amino-space);
  padding-left: 44px;
  border: var(--amino-border);
  border-radius: var(--amino-radius);
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
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <TableRow key={label}>
    <TableCell align="left" borderBottom="0" padding="0">
      <Text>{label}</Text>
    </TableCell>
    <TableCell align="right" borderBottom="0" padding="0 78px">
      <Text>{value}</Text>
    </TableCell>
  </TableRow>
);

const TableMeta: Meta = {
  title: 'Amino/Table',
  component: Table,
};

export default TableMeta;

const Template: Story<TableProps> = () => {
  const [expandedRows, setExpandedRows] = useState<number[]>([0, 1]);

  const handleExpandClick = (index: number) =>
    setExpandedRows(
      expandedRows.includes(index)
        ? expandedRows.filter(x => x !== index)
        : expandedRows.concat(index)
    );
  return (
    <>
      <StyledTable>
        <colgroup>
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <TableHead>
          <TableRow>
            <TableCell>
              <Text color="gray-d40" type="small-header">
                Description
              </Text>
            </TableCell>
            <TableCell align="right" colSpan={2}>
              <Text color="gray-d40" type="small-header">
                Amount
              </Text>
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRowCollapse
            handleExpandClick={() => handleExpandClick(0)}
            isExpand={expandedRows.includes(0)}
            rowContent={
              <>
                <TableCell>
                  <LeftIconLabel>
                    <RoundedIcon>
                      <ImageDuotoneIcon />
                    </RoundedIcon>
                    <Text fontWeight="500">
                      Huka One Running Shoe - Women&apos;s
                    </Text>
                  </LeftIconLabel>
                </TableCell>
                <TableCell align="right">
                  <RightIconLabel>
                    <Text fontWeight="500">6404.11.0000</Text>
                    <ClassifyIcon color="purple-base" size={14} />
                  </RightIconLabel>
                </TableCell>
                <TableCell align="right">
                  <Text fontWeight="500">$27.74</Text>
                </TableCell>
              </>
            }
          >
            <ExpandedItemCard>
              <VStack spacing="space-quarter">
                <Text type="bold-label">
                  Huka One Running Shoe - Women&apos;s
                </Text>
                <Text color="gray-d40">$27.74</Text>
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
                  <AttributeLabel key={option.label} spacing="space-quarter">
                    <Text
                      color="gray-d20"
                      fontWeight="600"
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
            handleExpandClick={() => handleExpandClick(1)}
            isExpand={expandedRows.includes(1)}
            rowContent={
              <>
                <TableCell>
                  <LeftIconLabel>
                    <RoundedIcon>
                      <TruckDuotoneIcon />
                    </RoundedIcon>
                    <Text fontWeight="500">Custom</Text>
                  </LeftIconLabel>
                </TableCell>
                <TableCell align="right" colSpan={2}>
                  <Text fontWeight="500">$14.23</Text>
                </TableCell>
              </>
            }
          >
            <ExpandedTableCard>
              <Table>
                <TableBody>
                  {[
                    { label: 'Shipping', value: '$7.50' },
                    { label: 'Fuel Surcharge', value: '$0.73' },
                    { label: 'Out of Area Fee', value: '$1.00' },
                    { label: 'Buffer', value: '$5.00' },
                  ].map(({ label, value }) => (
                    <ExpandedListItem label={label} value={value} />
                  ))}
                </TableBody>
              </Table>
            </ExpandedTableCard>
          </TableRowCollapse>
          <TableRowCollapse
            handleExpandClick={() => handleExpandClick(2)}
            isExpand={expandedRows.includes(2)}
            rowContent={
              <>
                <TableCell>
                  <LeftIconLabel>
                    <RoundedIcon background="blue-l80">
                      <ImportDuotoneIcon
                        color="blue-d60"
                        secondaryColor="blue-l60"
                      />
                    </RoundedIcon>
                    <Text fontWeight="500">Duties</Text>
                  </LeftIconLabel>
                </TableCell>
                <TableCell align="right" colSpan={2}>
                  <Text fontWeight="500">$0.55</Text>
                </TableCell>
              </>
            }
          >
            <ExpandedTableCard>
              <Table>
                <TableBody>
                  {[
                    {
                      label: "2.00% applied to Huka One Running Shoe - Women's",
                      value: '$0.55',
                    },
                  ].map(({ label, value }) => (
                    <ExpandedListItem label={label} value={value} />
                  ))}
                </TableBody>
              </Table>
            </ExpandedTableCard>
          </TableRowCollapse>
          <TableRowCollapse
            handleExpandClick={() => handleExpandClick(3)}
            isExpand={expandedRows.includes(3)}
            rowContent={
              <>
                <TableCell>
                  <LeftIconLabel>
                    <RoundedIcon background="red-l80">
                      <ShoppingListDuotoneIcon
                        secondaryColor="red-l40"
                        color="red-d60"
                      />
                    </RoundedIcon>
                    <Text fontWeight="500">Fees</Text>
                  </LeftIconLabel>
                </TableCell>
                <TableCell align="right" colSpan={2}>
                  <Text fontWeight="500">$10.71</Text>
                </TableCell>
              </>
            }
          >
            <ExpandedTableCard>
              <Table>
                <TableBody>
                  {[
                    {
                      label: 'UPS United States Duty and Tax Forwarding Charge',
                      value: '$1.00',
                    },
                    {
                      label: 'UPS United Kingdom Disbursement Fee',
                      value: '$2.69',
                    },
                  ].map(({ label, value }) => (
                    <ExpandedListItem label={label} value={value} />
                  ))}
                </TableBody>
              </Table>
            </ExpandedTableCard>
          </TableRowCollapse>
          <TableRowCollapse
            handleExpandClick={() => handleExpandClick(4)}
            isExpand={expandedRows.includes(4)}
            rowContent={
              <>
                <TableCell>
                  <LeftIconLabel>
                    <RoundedIcon background="green-l80">
                      <CoinsDuotoneIcon
                        color="green-d60"
                        secondaryColor="green-l40"
                      />
                    </RoundedIcon>
                    <Text fontWeight="500">Taxes</Text>
                  </LeftIconLabel>
                </TableCell>
                <TableCell align="right">
                  <Badge color="orange" fontWeight="600">
                    Over tax de minimis
                  </Badge>
                </TableCell>
                <TableCell align="right">
                  <Text fontWeight="500">$10.94</Text>
                </TableCell>
              </>
            }
          >
            <ExpandedTableCard>
              <Table>
                <TableBody>
                  {[
                    {
                      label: 'UPS United States Duty and Tax Forwarding Charge',
                      value: '$1.00',
                    },
                    {
                      label: 'UPS United Kingdom Disbursement Fee',
                      value: '$2.69',
                    },
                  ].map(({ label, value }) => (
                    <ExpandedListItem label={label} value={value} />
                  ))}
                </TableBody>
              </Table>
            </ExpandedTableCard>
          </TableRowCollapse>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell align="right" borderBottom="0" colSpan={2}>
              <Text fontWeight="800">Total</Text>
            </TableCell>
            <TableCell align="right" borderBottom="0" padding="0">
              <Text fontWeight="800">$65.62</Text>
            </TableCell>
          </TableRow>
        </TableFooter>
      </StyledTable>
    </>
  );
};

export const ExpandableTable = Template.bind({});
ExpandableTable.args = {};
ExpandableTable.parameters = {};
