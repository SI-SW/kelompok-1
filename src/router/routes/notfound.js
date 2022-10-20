const pageNotFound = {
  path: "/:pathMatch(.*)*",
  name: "error",
  component: () => import("@/views/Error/NotFound.vue"),
};

export default pageNotFound;
