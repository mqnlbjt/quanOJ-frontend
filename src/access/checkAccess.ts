import AccessEnum from "@/access/accessEnum";

const checkAccess = (loginUser: any, needAccess = AccessEnum.NOT_LOGIN) => {
  // 仅管理员可见，判断当前用户是否有权限
  const loginUserAccess = loginUser?.userRole ?? AccessEnum.NOT_LOGIN;
  if (needAccess === AccessEnum.NOT_LOGIN) {
    return true;
  }
  if (needAccess === AccessEnum.USER) {
    if (loginUserAccess === AccessEnum.NOT_LOGIN) {
      return false;
    }
  }
  if (needAccess === AccessEnum.ADMIN) {
    if (loginUserAccess !== AccessEnum.ADMIN) {
      return false;
    }
  }
  return true;
};

export default checkAccess;
