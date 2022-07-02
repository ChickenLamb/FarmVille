import PersistentDrawerLeft from "../components/PersistentDrawerLeft";
import titlelogo from "../public/titlelogo.jpg";
import ColorTabs from "../components/ColorTabs";
import EnhancedTable from "../components/EnhancedTableHead";
import test from "../public/test.jpg";
import Image from "next/image";
const AppList = [
  { name: "查看存庫", link: "/" },
  { name: "添加品相", link: "/Add" },
];
const MenuCat = [
  { value: "0", name: "庫存明細" },
  { value: "1", name: "點貨記錄" },
];
const ItemOneCat = [
  {
    id: "ID",
    numeric: false,
    disablePadding: true,
    label: "代號",
  },
  {
    id: "photos",
    numeric: true,
    disablePadding: false,
    label: "照片",
  },
  {
    id: "name",
    numeric: true,
    disablePadding: false,
    label: "名字",
  },
  {
    id: "quantities",
    numeric: true,
    disablePadding: false,
    label: "數量",
  },
  {
    id: "expiry-date",
    numeric: true,
    disablePadding: false,
    label: "儲存期限",
  },
  {
    id: "savings",
    numeric: true,
    disablePadding: false,
    label: "庫存",
  },
  {
    id: "categories",
    numeric: true,
    disablePadding: false,
    label: "類別",
  },
];
const ItemTwoCat = [
  {
    id: "rooms",
    numeric: false,
    disablePadding: true,
    label: "廠庫",
  },
  {
    id: "name",
    numeric: true,
    disablePadding: false,
    label: "名字",
  },
  {
    id: "nowquantities",
    numeric: true,
    disablePadding: false,
    label: "現有數量",
  },
  {
    id: "actualquantities",
    numeric: true,
    disablePadding: false,
    label: "實際點貨數量",
  },
  {
    id: "means",
    numeric: true,
    disablePadding: false,
    label: "差異",
  },
  {
    id: "orderdates",
    numeric: true,
    disablePadding: false,
    label: "點貨日期",
  },
  {
    id: "ordertimes",
    numeric: true,
    disablePadding: false,
    label: "點貨時間",
  },
  {
    id: "orderers",
    numeric: true,
    disablePadding: false,
    label: "點貨人",
  },
];
function createData(one, two, three, four, five, six, seven, eight) {
  return {
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
  };
}
const rowsData1 = [
  createData("A01", test, "包菜", 16, "2022 - 09 - 13", "A01", "農作物"),
  createData("A01", test, "包菜", 16, "2022 - 09 - 13", "A01", "農作物"),
  createData("A01", test, "包菜", 16, "2022 - 09 - 13", "A01", "農作物"),
  createData("A01", test, "包菜", 16, "2022 - 09 - 13", "A01", "農作物"),
  createData("A01", test, "包菜", 16, "2022 - 09 - 13", "A01", "農作物"),
  createData("A01", test, "包菜", 16, "2022 - 09 - 13", "A01", "農作物"),
  createData("A01", test, "包菜", 16, "2022 - 09 - 13", "A01", "農作物"),
  createData("A01", test, "包菜", 16, "2022 - 09 - 13", "A01", "農作物"),
  createData("A01", test, "包菜", 16, "2022 - 09 - 13", "A01", "農作物"),
  createData("A01", test, "包菜", 16, "2022 - 09 - 13", "A01", "農作物"),
  createData("A01", test, "包菜", 16, "2022 - 09 - 13", "A01", "農作物"),
  createData("A01", test, "包菜", 16, "2022 - 09 - 13", "A01", "農作物"),
  createData("A01", test, "包菜", 16, "2022 - 09 - 13", "A01", "農作物"),
  createData("A01", test, "包菜", 16, "2022 - 09 - 13", "A01", "農作物"),
  createData("A01", test, "包菜", 16, "2022 - 09 - 13", "A01", "農作物"),
];

const rowsData2 = [
  createData("A01", "包菜", 10, 16, 0, "2022/06/07", 1600, "Vincent"),
  createData("A01", "包菜", 10, 16, 0, "2022/06/07", 1600, "Vincent"),
  createData("A01", "包菜", 10, 16, 0, "2022/06/07", 1600, "Vincent"),
  createData("A01", "包菜", 10, 16, 0, "2022/06/07", 1600, "Vincent"),
  createData("A01", "包菜", 10, 16, 0, "2022/06/07", 1600, "Vincent"),
  createData("A01", "包菜", 10, 16, 0, "2022/06/07", 1600, "Vincent"),
  createData("A01", "包菜", 10, 16, 0, "2022/06/07", 1600, "Vincent"),
  createData("A01", "包菜", 10, 16, 0, "2022/06/07", 1600, "Vincent"),
  createData("A01", "包菜", 10, 16, 0, "2022/06/07", 1600, "Vincent"),
  createData("A01", "包菜", 10, 16, 0, "2022/06/07", 1600, "Vincent"),
  createData("A01", "包菜", 10, 16, 0, "2022/06/07", 1600, "Vincent"),
  createData("A01", "包菜", 10, 16, 0, "2022/06/07", 1600, "Vincent"),
  createData("A01", "包菜", 10, 16, 0, "2022/06/07", 1600, "Vincent"),
  createData("A01", "包菜", 10, 16, 0, "2022/06/07", 1600, "Vincent"),
  createData("A01", "包菜", 10, 16, 0, "2022/06/07", 1600, "Vincent"),
];
// after choosing applist trigger parameter change AppMain show state
const AppMain = (
  <>
    <ColorTabs
      MenuCat={MenuCat}
      ItemOne={<EnhancedTable ItemCat={ItemOneCat} rows={rowsData1} />}
      ItemTwo={
        <EnhancedTable ItemCat={ItemTwoCat} rows={rowsData2} buttonEnable />
      }
    />
  </>
);
function HomePage() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <PersistentDrawerLeft
        titlelogo={titlelogo}
        AppList={AppList}
        AppMain={AppMain}
      />
    </div>
  );
}

export default HomePage;
