// import CategoryForm from "./CategoryForm";
// // import { DeleteOutlined } from "@ant-design/icons/lib/icons";
// // import { Card, Spin } from "antd";
// import { useCallback, useEffect, useState } from "react";
// import { deleteCategory, getAllCategories } from "../../Api/CategoryService";
// import Nav from "../NavBar/Nav";

// const { Meta } = Card;

// const Category = ({ onFinish }) => {
//   const [categoriesState, setCategoriesState] = useState([]);
//   const [categoriesLoading, setCategoriesLoading] = useState(false);

//   const initCategories = useCallback(async () => {
//     try {
//       setCategoriesLoading(true);
//       const categories = await getAllCategories();
//       if (categories.status === 200) {
//         setCategoriesLoading(false);
//         setCategoriesState(categories.data);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }, []);

//   const deleteCategoryById = useCallback(
//     async (id) => {
//       console.log(id);
//       await deleteCategory(id);
//       initCategories();
//     },
//     [initCategories]
//   );

//   useEffect(() => {
//     if (onFinish) {
//       initCategories();
//     }
//     initCategories();
//   }, [initCategories, onFinish]);

//   return (
//     <>
//       <Spin spinning={categoriesLoading}>
//         <div className="card">
//           {categoriesState.map((e) => {
//             return (
//               <div className="uniqueCard" key={e.id}>
//                 <Card
//                   loading={categoriesLoading}
//                   // key={e.id}
//                   style={{ width: 200, marginTop: 16 }}
//                   actions={[
//                     <DeleteOutlined
//                       key="deleted"
//                       onClick={() => deleteCategoryById(e.id)}
//                     />,
//                   ]}
//                 >
//                   <Meta title={e.name} />
//                 </Card>
//               </div>
//             );
//           })}
//         </div>
//       </Spin>
//       <CategoryForm onFinish={initCategories} />
//       <Nav />
//     </>
//   );
// };

// export default Category;
