import React, { useState } from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { data } from './data-api';

const Directory = () => {
  const [sections, setSections] = useState(data);

  return (
    <div className="directory-menu">
      {sections.map(({ ...otherSectionProps }) => (
        <MenuItem {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
