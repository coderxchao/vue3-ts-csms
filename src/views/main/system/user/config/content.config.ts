import { ITableColumnConfig } from "@/base-ui/table/types";
const propList: ITableColumnConfig[] = [
  { prop: "name", label: "用户名", minWidth: "120" },
  { prop: "realname", label: "真实姓名", minWidth: "120" },
  { prop: "cellphone", label: "手机号码", minWidth: "120" },
  { prop: "enable", label: "状态", minWidth: "80", slotName: "status" },
  {
    prop: "createAt",
    label: "创建时间",
    minWidth: "180",
    slotName: "createAt"
  },
  {
    prop: "updateAt",
    label: "更新时间",
    minWidth: "180",
    slotName: "updateAt"
  },
  {
    prop: "operation",
    label: "操作",
    minWidth: "120",
    slotName: "handler"
  }
];
export const contentTableConfig = {
  title: "用户列表",
  propList: propList,
  isShowIndexColumn: true,
  isShowSelectColumn: true
};
