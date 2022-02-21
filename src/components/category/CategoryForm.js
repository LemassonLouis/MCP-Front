// import { Button, Form, Input } from "antd";
// import FormItem from "antd/lib/form/FormItem";
// import { useCallback, useEffect } from "react";
// import { createCategory } from "../../Api/CategoryService";

// const CategoryForm = ({ onFinish }) => {
//   const [form] = Form.useForm();

//   const reset = useCallback(() => {
//     form.resetFields();
//   }, [form]);

//   const handleFormFinish = useCallback(
//     async (category) => {
//       try {
//         const newCategory = {
//           ...category,
//           isArchive: false,
//         };
//         console.log(newCategory);
//         await createCategory(newCategory);

//         if (onFinish) {
//           onFinish();
//         }

//         reset();
//       } catch (err) {
//         console.log(err);
//       }
//     },
//     [onFinish, reset]
//   );

//   useEffect(() => {
//     reset();
//   }, [reset]);

//   return (
//     <Form form={form} onFinish={handleFormFinish}>
//       <FormItem name="name" label="Nom de la catégorie">
//         <Input placeholder="Nom de la catégorie" />
//       </FormItem>
//       <FormItem>
//         <Button type="primary" htmlType="submit">
//           Valider
//         </Button>
//       </FormItem>
//     </Form>
//   );
// };

// export default CategoryForm;

// <Form
//   form={form}
//   onFinish={handleFormFinish}
//   labelCol={{ span: 8 }}
//   wrapperCol={{ offset: 8, span: 16 }}
// >
//   <FormItem name="name" label="Créer une catégorie" wrapperCol={{ span: 8 }}>
//     <Input.Group compact>
//       <Input
//         placeholder="Nom de la catégorie"
//         style={{ width: "calc(100% - 200px)" }}
//         name="name"
//       />
//       <Button type="primary" htmlType="submit">
//         Valider
//       </Button>
//     </Input.Group>
//   </FormItem>
// </Form>;
