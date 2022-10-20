const dashboard = {
  path: "/",
  name: "Dashboard",
  redirect: "dashboard",
  children: [
    {
      path: "dashboard",
      name: "Default",
      component: () => import("@/views/Dashboard/Default.vue"),
      meta: { auth: true },
    },
    {
      path: "tables",
      name: "Tables",
      component: () => import("@/views/Dashboard/Tables.vue"),
      meta: { auth: true },
    },
    {
      path: "billing",
      name: "Billing",
      component: () => import("@/views/Dashboard/Billing.vue"),
      meta: { auth: true },
    },
    {
      path: "profile",
      name: "Profile",
      component: () => import("@/views/Dashboard/Profile.vue"),
      meta: { auth: true },
    },
  ],
};

export default dashboard;
