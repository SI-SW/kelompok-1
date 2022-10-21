import { defineStore } from "pinia";
import * as s$todo from "../../services/dashboard/todo";

const d$todo = defineStore({
  id: "todo",
  state: () => ({
    list: [],
  }),
  actions: {
    async a$list() {
      try {
        const { data } = await s$todo.list();
        this.list = data;
      } catch (error) {
        console.error("error action list todo :", error);
        throw error;
      }
    },
    async a$add(body) {
      try {
        await s$todo.add(body);
      } catch (e) {
        console.error("actions todo add error", e);
        throw e;
      }
    },
  },
  getters: {
    g$add: ({ name, description, category }) => ({
      name,
      description,
      category,
    }),
    g$list: ({ list }) => list,
  },
});

export default d$todo;
