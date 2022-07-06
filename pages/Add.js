import React from "react";
import PersistentDrawerLeft from "../components/PersistentDrawerLeft";
import titlelogo from "../public/titlelogo.jpg";
import Add_Layout from "../components/Add_layout";
const AppList = [
  { name: "查看存庫", link: "/" },
  { name: "添加品相", link: "/Add" },
];
const AppMain = (
  <>
    <Add_Layout />
  </>
);
const Add = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <PersistentDrawerLeft
        titlelogo={titlelogo}
        AppList={AppList}
        AppMain={AppMain}
      />
    </div>
  );
};

export default Add;
