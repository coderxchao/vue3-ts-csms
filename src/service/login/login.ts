import xcRequest from "../index";
import { IAccount, ILoginResult } from "./type";

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users/", // 用法: /users/1
  UserMenus = "/role/" // 用法: role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return xcRequest.post<ILoginResult>({
    isShowLoading: false,
    url: LoginAPI.AccountLogin,
    data: account
  });
}

export function requestUserInfoById(id: number) {
  return xcRequest.get({
    isShowLoading: false,
    url: LoginAPI.LoginUserInfo + id
  });
}

export function requestUserMenusByRoleId(id: number) {
  return xcRequest.get({
    isShowLoading: false,
    url: LoginAPI.UserMenus + id + "/menu"
  });
}
