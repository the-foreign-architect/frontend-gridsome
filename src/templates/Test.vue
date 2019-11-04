<template>
  <Layout>
    <section class="mb-8">

      <div class="px-4 max-w-xl mx-auto">
        <h1 class="text-3xl font-bold leading-none mb-2">{{ $page.test.title }}</h1>

      </div>
    </section>
    <section class="content px-4 max-w-xl mx-auto">
      <slot></slot>
    </section>
  </Layout>
</template>

<page-query>
query Test ($id: ID!) {
  test(id: $id) {
    title
  }
}
</page-query>
