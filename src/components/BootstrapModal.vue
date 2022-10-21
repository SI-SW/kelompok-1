<template>
  <div
    v-if="openClose"
    class="modal fade show"
    style="display: block"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-modal="true"
    role="dialog"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add To Do List</h5>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            @click="openCloseFun()"
          ></button>
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            @click="openCloseFun()"
            :class="'btn btn-' + variant"
          >
            Close
          </button>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
  <button type="button" @click="openCloseFun()" :class="'btn btn-' + variant">
    <i class="fas fa-plus me-2"></i>
    Open Modal
  </button>
</template>
<script>
export default {
  name: "BootstrapModal",
  props: {
    visible: Boolean,
    variant: String,
  },
  data() {
    return {
      openClose: this.visible,
    };
  },
  methods: {
    openCloseFun() {
      this.openClose = !this.openClose;
    },
  },
  watch: {
    visible: function (newVal, oldVal) {
      this.openClose = newVal;
      console.log("new" + newVal + "==" + oldVal);
    },
  },
};
</script>
