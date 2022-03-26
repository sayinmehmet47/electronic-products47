import * as React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceManyField,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  required,
  ImageInput,
  ImageField,
  NumberInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />

      <NumberInput source="price" />

      <ImageInput
        source="pictures"
        label="Related pictures"
        accept="image/*"
        placeholder={<p>Drop your file here</p>}
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="title" validate={required()} />
      <TextInput multiline source="teaser" validate={required()} />
      <RichTextInput source="body" validate={required()} />
      <DateInput label="Publication date" source="published_at" />
      <ReferenceManyField
        label="Comments"
        reference="comments"
        target="post_id"
      >
        <Datagrid>
          <TextField source="body" />
          <DateField source="created_at" />
          <EditButton />
        </Datagrid>
      </ReferenceManyField>
    </SimpleForm>
  </Edit>
);
