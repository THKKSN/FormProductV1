// components/FormPage.js
import React from "react";
import FormP1 from "./FormP1";
import FormP3one from "./FormP3one";
import FormP3onetwo from "./FormP3onetwo";
import FormP3two from "./FormP3two";
import FormP3twotwo from "./FormP3twotwo";
import FormP3twothree from "./FormP3twothree";
import FormP3twofour from "./FormP3twofour";
import FormP3twofive from "./FormP3twofive";
import FormP3twosix from "./FormP3twosix";

const FormPage = ({ formValues, handleChange, handleSubmit, error }) => {
    return (
        <div>
            <h3 className="header-container">แบบประเมินผลการปฏิบัติงานของพนักงาน อผศ. และลูกจ้างประจำหน่วยงานกิจการพิเศษ</h3>
            <form onSubmit={handleSubmit} className="form-container">
                <FormP1 formValues={formValues} handleChange={handleChange} />
                <FormP3one formValues={formValues} handleChange={handleChange} />
                <FormP3onetwo formValues={formValues} handleChange={handleChange} />
                <FormP3two formValues={formValues} handleChange={handleChange} />      
                <FormP3twotwo formValues={formValues} handleChange={handleChange} />      
                <FormP3twothree formValues={formValues} handleChange={handleChange} />      
                <FormP3twofour formValues={formValues} handleChange={handleChange} />      
                <FormP3twofive formValues={formValues} handleChange={handleChange} />      
                <FormP3twosix formValues={formValues} handleChange={handleChange} />      
                <button className="submit" type="submit">Submit</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default FormPage;
