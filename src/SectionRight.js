import React from "react";
import Form from "./Form";

const SectionRight = () => {
  return (
    <div className="section-right">
      <button className="btn-try-it-free">
        <span className="btn-try-it-free-bold">Try it free 7 days</span> then
        $20/mo. thereafter
      </button>

      <div className="form-secton">
        <Form />
      </div>
    </div>
  );
};

export default SectionRight;
