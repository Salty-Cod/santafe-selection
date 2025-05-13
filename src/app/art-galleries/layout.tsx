import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Art Galleries | Santa Fe Selection',
  description: 'Explore Santa Fe\'s diverse art scene, from traditional Native American art to contemporary galleries.',
};

export default function ArtGalleriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
