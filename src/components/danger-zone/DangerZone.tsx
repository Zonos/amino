import type { ReactNode } from 'react';

import { Card, type CardProps } from 'src/components/card/Card';
import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

/**
 * DangerZone component visually highlights areas containing destructive or irreversible actions.
 * It's a specialized Card component with warning styling to make users cautious about the actions within.
 *
 * @example Basic usage
 * <DangerZone>
 *   <Text type="bold">Delete Account</Text>
 *   <Text>This action cannot be undone. All data will be permanently deleted.</Text>
 *   <Button variant="danger">Delete Account</Button>
 * </DangerZone>
 *
 * @example With multiple actions
 * <DangerZone>
 *   <VStack spacing={16}>
 *     <div>
 *       <Text type="bold">Reset Settings</Text>
 *       <Text>Restore all settings to their default values.</Text>
 *       <Button variant="danger">Reset</Button>
 *     </div>
 *     <Divider />
 *     <div>
 *       <Text type="bold">Delete Account</Text>
 *       <Text>This action cannot be undone.</Text>
 *       <Button variant="danger">Delete</Button>
 *     </div>
 *   </VStack>
 * </DangerZone>
 *
 * @example With confirmation UI
 * const [showConfirmation, setShowConfirmation] = useState(false);
 *
 * <DangerZone>
 *   <Text type="bold">Delete Project</Text>
 *   <Text>This will permanently delete the project and all associated resources.</Text>
 *
 *   {!showConfirmation ? (
 *     <Button
 *       variant="danger"
 *       onClick={() => setShowConfirmation(true)}
 *     >
 *       Delete Project
 *     </Button>
 *   ) : (
 *     <VStack>
 *       <Text fontWeight="bold">Are you sure?</Text>
 *       <HStack>
 *         <Button variant="standard" onClick={() => setShowConfirmation(false)}>
 *           Cancel
 *         </Button>
 *         <Button variant="danger" onClick={handleDeleteProject}>
 *           Yes, Delete
 *         </Button>
 *       </HStack>
 *     </VStack>
 *   )}
 * </DangerZone>
 *
 * @example With custom styling
 * <DangerZone
 *   style={{ maxWidth: '500px' }}
 *   className="custom-danger-zone"
 * >
 *   <Text type="bold">Danger Zone Content</Text>
 * </DangerZone>
 */
export const DangerZone = ({
  children,
  className,
  style,
  ...props
}: BaseProps & CardProps & { children: ReactNode }) => (
  <Card
    className={cn(
      'shadow-[0_1px_5px_rgba(255,0,0,0.19)] [&_h4]:text-red-600',
      className,
    )}
    style={style}
    {...props}
  >
    {children}
  </Card>
);
