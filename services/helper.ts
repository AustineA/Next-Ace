import { SafeArea } from "capacitor-plugin-safe-area";

export const statusBarHeight = async () => {
  const { statusBarHeight } = await SafeArea.getStatusBarHeight();
  return statusBarHeight;
};
