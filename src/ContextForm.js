import Form from './Form/Form';
import FormField from './FormField/FormField';
import FormControl from './FormField/FormControl';
import FormFooter from './FormFooter/FormFooter';
import ContextFormInstanceContext from './Context/ContextFormInstanceContext';
import FormFieldArrayContext from './Context/FormFieldArrayContext';
import ContextFormProvider from './Context/ContextFormProvider';

import AddGroupButton from './FormField/AddGroupButton';
import RemoveGroupButton from './FormField/RemoveGroupButton';
import FormFieldArray from './FormField/FormFieldArray';

import { humanizeName } from './utils';

const ContextForm = {
  Form,
  FormField,
  FormFooter,
  FormControl,
  ContextFormProvider,
  AddGroupButton,
  RemoveGroupButton,
  FormFieldArray,
  ContextFormInstanceContext,
  FormFieldArrayContext,
  humanizeName,
};

export default ContextForm;
