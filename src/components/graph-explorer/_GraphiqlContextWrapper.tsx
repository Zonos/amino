import { ReactNode, useEffect } from 'react';

import {
  EditorContextType,
  ExecutionContextType,
  useEditorContext,
  useExecutionContext,
  // eslint-disable-next-line import/no-internal-modules
} from '@graphiql/react';
import { CodeMirrorEditor } from '@graphiql/react/types/editor/types';

type Props = {
  children: ReactNode;
  setExecutionContext: (context: ExecutionContextType) => void;
  setResponseEditorContext: (context: CodeMirrorEditor) => void;
};

export const GraphiqlContextWrapper = ({
  children,
  setExecutionContext,
  setResponseEditorContext,
}: Props) => {
  const context = useExecutionContext({ nonNull: true });

  const { responseEditor }: EditorContextType = useEditorContext({
    nonNull: true,
  });

  useEffect(() => {
    if (context) {
      setExecutionContext(context);
    }
    if (responseEditor) {
      setResponseEditorContext(responseEditor);
    }
  }, [context, responseEditor, setExecutionContext, setResponseEditorContext]);

  return <span>{children}</span>;
};
