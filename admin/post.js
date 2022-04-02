import * as React from 'react';
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceManyField,
  required,
  NumberInput,
  FileInput,
  ImageField,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <NumberInput source="price" />
      <FileInput
        source="files"
        label="Related files"
        accept="image/*"
        placeholder={<p>Drop your file here</p>}
      >
        <ImageField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
);

export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" validate={required()} />
      <NumberInput source="nb_views" />
      <DateInput label="Publication date" source="published_at" />
      <ReferenceManyField
        label="Comments"
        reference="comments"
        target="post_id"
      ></ReferenceManyField>
    </SimpleForm>
  </Edit>
);
