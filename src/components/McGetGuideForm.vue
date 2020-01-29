<template>
  <div class="max-w-sm p-4 mx-auto my-12 border-2 border-black">
    <h3 class="mt-0">Get this guide as a PDF</h3>
    <p>
      This guide is also available as a beautiful PDF file formatted to be
      printed in A4/Letter, full with all the information below and more.
    </p>
    <p>
      To get the download link, please enter your email and follow the
      instructions:
    </p>

    <div>
      <form
        action="https://theforeignarchitect.us15.list-manage.com/subscribe/post?u=220ad385d5f90b6e7c5e808ba&amp;id=67c1661df3"
        method="post"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div>
          <div class="block my-4">
            <label
              for="mce-EMAIL"
              class="text-sm tracking-wide uppercase text-grey-darker"
              >Email</label
            >
            <input
              type="email"
              name="EMAIL"
              placeholder="Enter your email address"
              class="w-full p-2 border border-black rounded bg-grey-light focus:bg-white focus:border-black"
            />
            <input type="hidden" name="SIGNUP" :value="guide" />
          </div>
          <div class="clear">
            <div
              class="response"
              style="display:none"
            ></div>
            <div
              class="response"
              style="display:none"
            ></div>
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input
              type="text"
              name="b_220ad385d5f90b6e7c5e808ba_67c1661df3"
              tabindex="-1"
              value
            />
          </div>
          <div class="clear">
            <input
              type="submit"
              value="Get the link"
              name="subscribe"
              class="p-2 text-sm font-bold tracking-wide text-white uppercase bg-red-600 rounded shadow cursor-pointer hover:shadow-lg hover:bg-red-700"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "McGetGuideForm",
  props: {
    guide: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
