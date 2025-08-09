import React from 'react';
import { Ribbon1, Ribbon2 } from '.';

const Homepage: React.FC = () => {
  return (
    <div className="relative min-h-[5000px] overflow-x-hidden">
      {/* Fixed position ribbons */}
      <Ribbon1 className="top-0 left-0 w-full" />
      <Ribbon2 className="top-0 right-0 w-full" />
      
     
    </div>
  );
};

export default Homepage;  