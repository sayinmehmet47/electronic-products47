import * as React from "react";
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
  ArrayInput,
  SimpleFormIterator,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  CreateActionsProps,
  EditActionsProps,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

export const PostCreate = (props:CreateActionsProps) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <NumberInput source="price" />
      <ArrayInput source="extraOptions">
        <SimpleFormIterator>
          <TextInput source="desc" />
          <NumberInput source="price"/>
        </SimpleFormIterator>
      </ArrayInput>
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

// export const PostEdit = (props:EditActionsProps) => (
//   <Edit {...props}>
//     <SimpleForm>
//       <TextInput disabled label="Id" source="id" />
//       <TextInput source="title" validate={required()} />
//       <TextInput multiline source="teaser" validate={required()} />
//       <RichTextInput source="body" validate={required()} />
//       <DateInput label="Publication date" source="published_at" />
//       <ReferenceManyField
//         label="Comments"
//         reference="comments"
//         target="post_id"
//       >
//         <Datagrid>
//           <TextField source="body" />
//           <DateField source="created_at" />
//           <EditButton />
//         </Datagrid>
//       </ReferenceManyField>
//     </SimpleForm>
//   </Edit>
// );
