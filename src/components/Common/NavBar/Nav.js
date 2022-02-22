import { Layout, Menu } from "antd";

const { Header } = Layout;

const Nav = () => {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">Recette</Menu.Item>
        <Menu.Item key="2">Ingredient</Menu.Item>
        <Menu.Item key="3">Technique</Menu.Item>
        <Menu.Item key="4">Profil</Menu.Item>
        <Menu.Item key="5">Categories</Menu.Item>
      </Menu>
    </Header>
  );
};

export default Nav;
