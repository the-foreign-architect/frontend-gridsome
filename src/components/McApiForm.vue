<template>
  <div class="relative max-w-sm p-8 mx-auto my-12 border-2 border-black">
    <loading :active.sync="isLoading"
        loader="bars"
        :height="50"
        :width="50"
        :opacity="0.75"
        :is-full-page="false"/>
    <template v-if="status === 'success'">
      <h3 class="font-bold">Perfect 👏!</h3>
      <div class="h-4"/>
      <p>You should get an email confirmation shortly. Otherwise, make sure to check your spam folder.</p>
    </template>
    <template v-else-if="status === 'failure'">
      <h3 class="font-bold">Oops 🙀!</h3>
      <div class="h-4"/>
      <p>I'm so sorry, something went wrong on my side! <button class="text-gray-700 underline" @click="status = 'idle'">Wanna try again?</button></p>
    </template>
    <template v-else>
      <div>
        <h3 class="font-bold"><slot name="title">{{title}}</slot></h3>
        <div class="h-4"/>
        <p><slot name="description">{{description}}</slot></p>
      </div>
      <form @submit.prevent="submit">
        <div class="block my-4">
          <label for="email" class="text-sm tracking-wide uppercase text-grey-darker">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            class="w-full p-2 border border-black rounded bg-grey-light focus:bg-white focus:border-black"
            v-model="$v.email.$model"
          >
          <div class="text-sm italic text-red-600" v-if="!$v.email.required"><p>Required!</p></div>
          <div class="text-sm italic text-red-600" v-if="!$v.email.email"><p>Is that really your email? It seems to be invalid...</p></div>
        </div>
        <div class="clear">
          <button
            type="submit"
            class="p-2 text-sm font-bold tracking-wide text-white uppercase bg-red-600 rounded shadow cursor-pointer hover:shadow-lg hover:bg-red-700"
            :disabled="isLoading || $v.$invalid"
          ><slot name="submit">{{submitLabel}}</slot></button>
        </div>
      </form>
    </template>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import 'vue-loading-overlay/dist/vue-loading.css';

const NETLIFY_MC_FUNCTION = '/.netlify/functions/newsletter-signup'
export default {
  name: 'McApiForm',
  components: {
    Loading
  },
  props: {
    signUpLocation: {
      type: String,
      default: 'General'
    },
    formType: {
      type: String,
      default: "general"
    }
  },
  data() {
    return {
      email: "",
      isLoading: false,
      status: 'idle',
    }
  },
  mixins: [validationMixin],
  validations: {
    email: {
      required: true,
      email: true,
      title: "",
      description: "",
      submitLabel: "",
      tag: ""
    }
  },
  created() {
    switch (this.formType) {
      case "general":
        this.title = "Subscribe to my newsletter";
        this.description = "I will send you a weekly email on Mondays. I promise it will always be interesting! And you can unsubscribe at any time."
        this.submitLabel = "Subscribe";
        this.tag = 'Direct'
        break;
      case "guide":
        this.title = "Get this guide as a PDF";
        this.description =  "This guide is also available as a beautiful PDF file formatted to be printed in A4/Letter, full with all the information below and more. To get the download link, please enter your email and follow the instructions:";
        this.submitLabel =  "Get the link";
        this.tag = 'Guide'
        break;
    }
  },
  methods: {
    async submit() {
      console.log("submit!")
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.isLoading = true;
        await this.sendToMailchimp()
        this.isLoading = false;
      }
    },
    async sendToMailchimp(email, signUpLocation) {
      const url = `${NETLIFY_MC_FUNCTION}?email=${encodeURIComponent(this.email)}&signup=${this.signUpLocation}&tag=${this.tag}`
      console.log(url);
      try {
        const res = await fetch(url);
        if (res.status !== 200) {
          throw new Error(res)
        }
        this.status = 'success';
      } catch (e) {
        console.error(e)
        this.status = 'failure'
      }
    },

  }
};
</script>
