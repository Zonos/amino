import { Meta, Story } from '@storybook/react/types-6-0';
import { MdxTable as MdxTableComponent } from 'src/components/mdx-table/MdxTable';

const MdxTableMeta: Meta = {
  component: MdxTableComponent,
};

export default MdxTableMeta;

const Template: Story = () => (
  <MdxTableComponent>
    <thead>
      <tr>
        <th>
          <strong>Feature Request</strong>
        </th>
        <th>
          <strong>Response</strong>
        </th>
        <th>
          <strong>Probability of Implementation</strong>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Add a &quot;Ship My Pants&quot; Button</td>
        <td>
          We are sorry, but we don&apos;t think that aligns with our brand
          values 😅
        </td>
        <td>0%</td>
      </tr>
      <tr>
        <td>Include a Zonos Onesie with Every Account Sign-up</td>
        <td>Now that&apos;s an idea! We&apos;ll look into it 🤔</td>
        <td>75%</td>
      </tr>
      <tr>
        <td>Allow Customers to Pay in Bitcoin</td>
        <td>Sorry, we prefer to keep our finances on Earth 🚀</td>
        <td>10%</td>
      </tr>
    </tbody>
  </MdxTableComponent>
);

export const MdxTable = Template.bind({});
