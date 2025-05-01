import clsx from 'clsx';

import { Stack, type StackProps } from 'src/components/stack/Stack';

import styles from './VStack.module.scss';

/**
 * VStack component arranges children vertically with consistent spacing.
 * It's a specialized version of Stack that automatically sets vertical layout.
 *
 * @example Basic vertical layout
 * <VStack>
 *   <div>Top item</div>
 *   <div>Middle item</div>
 *   <div>Bottom item</div>
 * </VStack>
 *
 * @example Custom spacing
 * <VStack spacing={16}>
 *   <Text type="header">Section Title</Text>
 *   <Text>Description text for this section that explains what it does.</Text>
 *   <Button>Action</Button>
 * </VStack>
 *
 * @example With center alignment
 * <VStack alignment="center">
 *   <Badge>Featured</Badge>
 *   <Text>Product name</Text>
 *   <Text>$19.99</Text>
 * </VStack>
 *
 * @example Form layout
 * <VStack spacing={12}>
 *   <Input label="Name" />
 *   <Input label="Email" />
 *   <Input label="Password" type="password" />
 *   <Checkbox label="I agree to terms" />
 *   <Button variant="primary">Sign up</Button>
 * </VStack>
 *
 * @example Content sections
 * <VStack spacing={32}>
 *   <Card>Section 1 content</Card>
 *   <Card>Section 2 content</Card>
 *   <Card>Section 3 content</Card>
 * </VStack>
 *
 * @example With different spacing for visual hierarchy
 * <VStack spacing={8}>
 *   <Text type="bold-subheader">Group Title</Text>
 *   <VStack spacing={4}>
 *     <Text>Item 1</Text>
 *     <Text>Item 2</Text>
 *     <Text>Item 3</Text>
 *   </VStack>
 * </VStack>
 */
export const VStack = ({
  children,
  className,
  spacing = 24,
  style,
  ...props
}: StackProps) => (
  <Stack
    className={clsx(className, styles.styledVStack)}
    style={{ ...style, '--amino-v-stack-gap': `${spacing}px` }}
    {...props}
  >
    {children}
  </Stack>
);
