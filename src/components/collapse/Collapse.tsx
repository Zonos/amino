import type { ReactNode } from 'react';

import type { CollapseProps as MuiCollapseProps } from '@mui/material/Collapse';
import MuiCollapse from '@mui/material/Collapse';

import type { BaseProps } from 'src/types/BaseProps';

// https://mui.com/material-ui/api/collapse

export type CollapseProps = BaseProps & {
  children: ReactNode;
  /**
   * Size when collapsed
   * @default 0
   */
  collapseSize?: number;
  /**
   * Collapsed state
   * @default false
   */
  collapsed?: boolean;
} & Pick<MuiCollapseProps, 'orientation'>;

/**
 * Collapse component animates the expansion and collapse of its content.
 * It's useful for creating accordions, expandable panels, and other interactive UI elements.
 *
 * @example Basic usage
 * const [open, setOpen] = useState(false);
 *
 * <Button onClick={() => setOpen(!open)}>
 *   {open ? 'Hide' : 'Show'} Content
 * </Button>
 * <Collapse collapsed={!open}>
 *   <Card>
 *     <Text>This content can be hidden or shown.</Text>
 *   </Card>
 * </Collapse>
 *
 * @example With partial collapse
 * const [open, setOpen] = useState(false);
 *
 * <Button onClick={() => setOpen(!open)}>
 *   {open ? 'Show Less' : 'Show More'}
 * </Button>
 * <Collapse collapsed={!open} collapseSize={50}>
 *   <Text>
 *     This text is partially visible even when collapsed,
 *     showing the first 50px and hiding the rest.
 *     Click the button to see the full content.
 *   </Text>
 * </Collapse>
 *
 * @example Horizontal orientation
 * const [open, setOpen] = useState(false);
 *
 * <Button onClick={() => setOpen(!open)}>
 *   {open ? 'Hide' : 'Show'} Details
 * </Button>
 * <Collapse collapsed={!open} orientation="horizontal">
 *   <Card>
 *     <Text>Additional details that expand horizontally.</Text>
 *   </Card>
 * </Collapse>
 *
 * @example In an accordion
 * const [expandedSection, setExpandedSection] = useState<string | null>(null);
 *
 * const toggleSection = (section: string) => {
 *   setExpandedSection(expandedSection === section ? null : section);
 * };
 *
 * <VStack>
 *   <Button onClick={() => toggleSection('section1')}>Section 1</Button>
 *   <Collapse collapsed={expandedSection !== 'section1'}>
 *     <Text>Content for Section 1</Text>
 *   </Collapse>
 *
 *   <Button onClick={() => toggleSection('section2')}>Section 2</Button>
 *   <Collapse collapsed={expandedSection !== 'section2'}>
 *     <Text>Content for Section 2</Text>
 *   </Collapse>
 * </VStack>
 *
 * @example With custom styling
 * <Collapse
 *   collapsed={!isOpen}
 *   className="custom-collapse"
 *   style={{ backgroundColor: '#f5f5f5' }}
 * >
 *   <Text>Content with custom styling</Text>
 * </Collapse>
 */
export const Collapse = ({
  children,
  className,
  collapsed = false,
  collapseSize = 0,
  orientation,
  style,
}: CollapseProps) => (
  <MuiCollapse
    className={className}
    collapsedSize={collapseSize}
    in={!collapsed}
    orientation={orientation}
    style={style}
  >
    {children}
  </MuiCollapse>
);
