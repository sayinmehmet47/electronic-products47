<<<<<<< HEAD
import * as React from "react";
=======
import * as React from 'react';
>>>>>>> 68dc4e7605da558fa502f2e21d6cb3823cc669b6
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceManyField,
<<<<<<< HEAD
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
=======
  required,
  NumberInput,
  FileInput,
  ImageField,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
>>>>>>> 68dc4e7605da558fa502f2e21d6cb3823cc669b6

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
<<<<<<< HEAD

      <NumberInput source="price" />

      <ImageInput
        source="pictures"
        label="Related pictures"
=======
      <NumberInput source="price" />
      <FileInput
        source="files"
        label="Related files"
>>>>>>> 68dc4e7605da558fa502f2e21d6cb3823cc669b6
        accept="image/*"
        placeholder={<p>Drop your file here</p>}
      >
        <ImageField source="src" title="title" />
<<<<<<< HEAD
      </ImageInput>
=======
      </FileInput>
>>>>>>> 68dc4e7605da558fa502f2e21d6cb3823cc669b6
    </SimpleForm>
  </Create>
);

export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
<<<<<<< HEAD
      <TextInput disabled label="Id" source="id" />
      <TextInput source="title" validate={required()} />
      <TextInput multiline source="teaser" validate={required()} />
      <RichTextInput source="body" validate={required()} />
=======
      <TextInput source="title" validate={required()} />
      <NumberInput source="nb_views" />
>>>>>>> 68dc4e7605da558fa502f2e21d6cb3823cc669b6
      <DateInput label="Publication date" source="published_at" />
      <ReferenceManyField
        label="Comments"
        reference="comments"
        target="post_id"
<<<<<<< HEAD
      >
        <Datagrid>
          <TextField source="body" />
          <DateField source="created_at" />
          <EditButton />
        </Datagrid>
      </ReferenceManyField>
=======
      ></ReferenceManyField>
>>>>>>> 68dc4e7605da558fa502f2e21d6cb3823cc669b6
    </SimpleForm>
  </Edit>
);
