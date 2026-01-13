/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// import Index from "views/Index.js"/
import Index from "views/User.js";
import Icons from "views/examples/Icons.js";
import GPUaaS from "views/examples/Gpu.js";
import User_2 from "views/User_2.js";
import Adoption from "views/Adoption.js";
import Data from "views/examples/Data.js";
import Assets from "views/Assets.js";
import GPUaaS_2 from "views/examples/Gpu_2.js";
// import Dev from "views/dev.js";

var routes = [
  {
    path: "/user_2",
    name: "사용자",
    icon: "ni ni-tv-2 text-primary",
    component: <User_2 />,
    layout: "/admin",
  },
  {
    path: "/data",
    name: "데이터",
    icon: "ni ni-planet text-blue",
    component: <Data />,
    layout: "/admin",
  },
  {
    path: "/gpu_2",
    name: "인프라",
    icon: "ni ni-pin-3 text-orange",
    component: <GPUaaS_2/>,
    layout: "/admin",
  },
  {
    path: "/adoption",
    name: "활성화",
    icon: "ni ni-tv-2 text-primary",
    component: <Adoption/>,
    layout: "/admin",
  },
  {
    path: "/assets",
    name: "구축현황",
    icon: "ni ni-tv-2 text-primary",
    component: <Assets/>,
    layout: "/admin",
  },  
  // {
  //   path: "/index",
  //   name: "user_1",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: <Index/>,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "data_1",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: <Icons/>,
  //   layout: "/admin",
  // },  
  // {
  //   path: "/gpu",
  //   name: "gpu_1",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: <GPUaaS/>,
  //   layout: "/admin",
  // },   
];
export default routes;
