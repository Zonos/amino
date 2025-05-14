import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  description:
    'Model Context Protocol server for Amino component documentation',
  title: {
    default: 'Amino MCP Server',
    template: '%s | Amino MCP',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
