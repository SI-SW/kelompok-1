<template>
    <div class="py-4 container-fluid">
        <div class="row">
            <div class="col-6">
                <div class="card">``
                    <div class="card-header pb-0">
                        <h6>Update Todo</h6>
                        <form @submit.prevent="onSubmit">
                            <div class="row mt-4 ">
                                <input class="form-control mb-3" type="text" v-model="input.name" />
                                <input class="form-control mb-3" type="text" v-model="input.description" />
                                <right>
                                    <div class="col-3">
                                        <div class="text-center">
                                            <argon-button fullWidth color="dark" variant="gradient" type="submit"
                                                class="my-4 mb-5">
                                                Update
                                            </argon-button>
                                        </div>
                                    </div>
                                </right>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import d$todo from "@/stores/dashboard/todo";
import { mapActions, mapState } from "pinia";
export default {
    name: "update",
    components: {
        ArgonInput,
        ArgonButton
    },
    data() {
        return {
            //input
            input: {
                id: '',
                name: '',
                description: '',
            },
        };
    },
    computed: {
        ...mapState(d$todo, ["g$detail"]),
        // detail() {
        //     return this.g$detail(this.$route.params.id);
        // }

    },
    methods: {
        ...mapActions(d$todo, ["a$update"]),

        async onSubmit() {
            const dataId = this.input.id;
            console.log(dataId);
            try {
                await this.a$update({
                    name : this.input.name, description:  this.input
                        .description
                }, dataId);
                alert("Update Successfully");
                this.$router.push({name : 'Tables'})
            } catch (error) {
                console.error("method addlist error", error);
            }
        },
    },
    created() {
        // (this.g$detail );

        this.input = { ...this.g$detail(this.$route.params.id) }
        // g$detail.forEach((obj) => this.detail.push(obj))
        // this.a$list
        // this.input.name = detail.name
        // this.input.description = detail.description
    }
}
</script>

<style lang="scss" scoped>

</style>