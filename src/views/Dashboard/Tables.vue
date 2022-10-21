<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header pb-0">
            <div class="row">
              <div class="col-6">
                <h6>To Do List Table</h6>
              </div>
              <div class="col-6 text-end">
                <form @submit.prevent="onSubmit" method="post">
                  <BootstrapModal :visible="false" variant="dark">
                    <template v-slot:body>
                      <ArgonInput
                        type="text"
                        v-model="input.name"
                        placeholder="input name"
                        name="name"
                        size="md"
                      />
                      <ArgonInput
                        type="text"
                        v-model="input.description"
                        placeholder="input description"
                        name="description"
                        size="md"
                      />
                      <ArgonInput
                        type="text"
                        v-model="input.category"
                        placeholder="input category"
                        name="category"
                        size="md"
                      />
                    </template>
                    <template v-slot:footer>
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button></template
                    >
                  </BootstrapModal>
                </form>
              </div>
            </div>
          </div>
          <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Nama
                    </th>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                    >
                      Description
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Status
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Create At
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in g$list" :key="index">
                    <td>
                      <div class="d-flex px-3 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ item.name }}</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs text-secondary mb-0">
                        {{ item.description }}
                      </p>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm bg-gradient-primary">{{
                        item.status
                      }}</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">{{
                        item.createdAt
                      }}</span>
                    </td>
                    <td class="align-middle">
                      <div class="ms-auto text-center">
                        <a
                          class="btn btn-link text-dark px-3 mb-0"
                          href="javascript:;"
                        >
                          <i
                            class="fas fa-pencil-alt text-dark me-2"
                            aria-hidden="true"
                          ></i
                          >Edit
                        </a>
                        <a
                          class="btn btn-link text-danger text-gradient px-3 mb-0"
                          href="javascript:;"
                        >
                          <i
                            class="far fa-trash-alt me-2"
                            aria-hidden="true"
                          ></i
                          >Delete
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <ArgonPagination>
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                      <a class="page-link" href="#" tabindex="-1">
                        <i class="fa fa-angle-left"></i>
                        <span class="sr-only">Previous</span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        <i class="fa fa-angle-right"></i>
                        <span class="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </ArgonPagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthorsTable from "@/components/example/AuthorsTable.vue";
import ProjectsTable from "@/components/example/ProjectsTable.vue";
import d$todo from "@/stores/dashboard/todo";
import { mapActions, mapState } from "pinia";
import ArgonButton from "../../components/ArgonButton.vue";
import BootstrapModal from "../../components/BootstrapModal.vue";
import ArgonInput from "../../components/ArgonInput.vue";
import ArgonPagination from "../../components/ArgonPagination.vue";
import ArgonPaginationItem from "../../components/ArgonPaginationItem.vue";

export default {
  name: "tables",
  components: {
    AuthorsTable,
    ProjectsTable,
    ArgonButton,
    BootstrapModal,
    ArgonInput,
    ArgonPagination,
    ArgonPaginationItem,
  },
  data() {
    return {
      //input
      input: {
        name: "",
        description: "",
        category: "",
      },
    };
  },
  computed: {
    ...mapState(d$todo, ["g$list"]),
  },
  methods: {
    ...mapActions(d$todo, ["a$list"]),
    ...mapActions(d$todo, ["a$add"]),
    async getList() {
      try {
        await this.a$list;
      } catch (error) {
        console.error("method getlist error", error);
      }
    },
    async onSubmit() {
      try {
        await this.a$add({ ...this.input });
        this.$router.replace({ name: "Tables" });
      } catch (error) {
        console.error("method addlist error", error);
      }
    },
  },
  async created() {
    await this.a$list();
  },
};
</script>
