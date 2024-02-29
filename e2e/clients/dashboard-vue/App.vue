<template>
  <dashboard :ImageTestVarLang="ImageTestVarLang" />
</template>

<script>
import Vue from 'vue'
import ImageTestVarLang from '@ImageTestVarLang/core'
import { Dashboard } from '@ImageTestVarLang/vue'

export default {
  name: 'App',
  components: {
    Dashboard,
  },
  computed: {
    ImageTestVarLang: () => new ImageTestVarLang(),
  },
}
</script>

<style src="@ImageTestVarLang/core/dist/style.css"></style>
<style src="@ImageTestVarLang/dashboard/dist/style.css"></style>
