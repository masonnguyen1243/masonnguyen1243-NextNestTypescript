"use client";
import { Layout } from "antd";

const AdminFooter = () => {
  const { Footer } = Layout;

  return (
    <>
      <Footer style={{ textAlign: "center" }}>
        Mason Nguyen ©{new Date().getFullYear()} Created by @mason
      </Footer>
    </>
  );
};

export default AdminFooter;
