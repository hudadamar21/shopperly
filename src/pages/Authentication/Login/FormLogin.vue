<template>
  <form @submit.prevent="formSubmit">
    <div class="mb-2">
      <label for="email" class="form-label">Email</label>
      <input
        class="form-input"
        id="email"
        type="email"
        v-model="email"
        placeholder="example@gmail.com"
        autocomplete="off"
      />
    </div>
    <div class="mb-2">
      <label for="password" class="form-label">Password</label>
      <div class="relative">
        <input
          class="form-input"
          id="password"
          :type="showed.password ? 'text' : 'password'"
          v-model="password"
          placeholder="*********"
        />
        <div
          class="show-password"
          @click="show('password')"
        >
          <icon-show-password :show="showed.password" />
        </div>
      </div>
    </div>
    <div class="py-4 flex items-center gap-3">
      <div class="flex-grow h-px bg-gray-400"></div>
      <span class="text-gray-500">or login with</span>
      <div class="flex-grow h-px bg-gray-400"></div>
    </div>
    <div class="flex items-center gap-5">
      <button class="form-button flex-grow">
        <icon-facebook />
        <span class="ml-2 text-center">Facebook</span>
      </button>
      <button class="form-button flex-grow">
        <icon-google />
        <span class="ml-2 text-center">Google</span>
      </button>
    </div>
    <button
      type="submit"
      class="form-button w-full mt-3 justify-center font-semibold"
    >
      Login
    </button>
  </form>
</template>

<script>
import { reactive, ref } from "vue";
import { IconFacebook, IconGoogle, IconShowPassword } from "@/components/icons";

export default {
  components: {
    IconFacebook,
    IconGoogle,
    IconShowPassword
  },
  emits: ["formsubmit"],
  setup(props, { emit }) {
    const email = ref("");
    const password = ref("")

    const showed = reactive({
      password: false
    });

    const show = (field) => {
      showed[field] = !showed[field];
    };

    const formSubmit = () => {
      alert("ok");
      emit("formsubmit", { email, password });
    };

    return {
      email,
      password,
      show,
      showed,
      formSubmit,
    };
  },
};
</script>

<style lang="postcss">
.form-label {
  @apply font-semibold block mb-1;
}
.form-input {
  @apply px-3 py-1 rounded-md border-2 border-shopperly-blue focus:border-shopperly-green-400 w-full focus:!ring-0;
}
.form-button {
  @apply flex items-center px-3 py-1 border-2 border-shopperly-blue hover:border-shopperly-green-400 rounded-md focus:outline-none;
}
.show-password {
  @apply absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-700 cursor-pointer
}
</style>
