import './styles.scss';
import { FormFieldState, InputFieldProps, RenderTemplateProps } from './types';

const renderTemplate = (props: RenderTemplateProps) => {
  const { formFields, formData, onFormFieldChange, disableSubmit, onSubmit } =
    props;
  return (
    <div style={{ padding: '8px', width: 'fit-content' }}>
      <div className="mainHeading">User Form</div>
      <form onSubmit={onSubmit}>
        <div className="formContainer">
          {formFields.map((item) => (
            <InputField
              data={formData[item.id]}
              item={item}
              key={item.id}
              onChange={onFormFieldChange}
            />
          ))}
          <input
            className="button"
            type="submit"
            value="Submit"
            disabled={disableSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default renderTemplate;

const InputField = ({
  item,
  data,
  onChange,
}: {
  item: InputFieldProps;
  data: FormFieldState;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    item: InputFieldProps
  ) => void;
}) => {
  const {
    type = 'text',
    label = 'default-label',
    id = 'ID',
    validation = {},
  } = item;

  const { min, max } = validation;
  const { value, error } = data;

  return (
    <label className="inputLabel">
      <div className="labelText">{label}</div>
      <input
        type={type}
        value={value}
        id={id}
        name={id}
        min={min?.value}
        max={max?.value}
        onChange={(e) => onChange(e, item)}
      />
      <div className="errorText">{error}</div>
    </label>
  );
};
