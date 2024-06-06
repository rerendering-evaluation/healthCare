import { memo } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox, FormControlLabel } from "@mui/material";
// import FormControlLabel from "@material-ui/core/FormControlLabel";

export default memo(function RadiologyCheckbox() {
  console.log(window.globalCount++);
  const yupSchema = yup.object().shape({
    multiCheckbox: yup.object().shape({
      option1: yup.boolean(),
      option2: yup.boolean(),
      option3: yup.boolean()
    }).test("multiCheckbox", "At least one of the checkbox is required", options => {
      console.log(options.option1 || options.option2, "yup multiCheckbox result");
      return options.option1 || options.option2;
    })
  });
  const defaultValues = {
    multiCheckbox: {
      option1: false,
      option2: false
    }
  };
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
  } = useForm({
    resolver: yupResolver(yupSchema),
    defaultValues
  });
  console.log(errors, "errors");
  console.log(watch(), "watch");
  return <form onSubmit={handleSubmit(data => console.log(data, "data"))}>
      <div style={{
      display: "flex",
      justifyContent: "space-between"
    }}>
       

        <div style={{
        display: "flex",
        flexDirection: "column"
      }}>
          <h3>Radiology</h3>
          <FormControlLabel control={<Controller name="multiCheckbox.option1" control={control} render={({
          field
        }) => {
          console.log(window.globalCount++);
          return <Checkbox {...field} />;
        }} />} label="X-ray" />
          <FormControlLabel control={<Controller name="multiCheckbox.option2" control={control} render={({
          field
        }) => {
          console.log(window.globalCount++);
          return <Checkbox {...field} />;
        }} />} label="Ultra-Sound" />
          <FormControlLabel control={<Controller name="multiCheckbox.option3" control={control} render={({
          field
        }) => {
          console.log(window.globalCount++);
          return <Checkbox {...field} />;
        }} />} label="MRI" />
          {errors?.multiCheckbox && <p style={{
          color: "green"
        }}>{`Error: ${errors?.multiCheckbox?.message}`}</p>}
        </div>
      </div>

    </form>;
});