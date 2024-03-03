import { forwardRef } from "react";


const Footer = forwardRef((props, ref) => {

  return (
    <div className="footer" ref={ref} >
      <h1>Footer!</h1>
    </div>
  );


})

export default Footer
