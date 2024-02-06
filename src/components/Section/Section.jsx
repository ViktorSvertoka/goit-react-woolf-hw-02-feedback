import React from 'react';
import { SectionWrap, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrap>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrap>
  );
};
