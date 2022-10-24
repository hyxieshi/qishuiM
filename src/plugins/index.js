import { Button, Popup, Notify, Icon, Tabbar, TabbarItem, Search } from "vant";
// 放入数组中
let plugins = [Button, Popup, Notify, Icon, Tabbar, TabbarItem, Search];
export default function getVant(app) {
  plugins.forEach((item) => {
    return app.use(item);
  });
}
