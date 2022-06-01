<template>
  <div v-html="convertMd" />
</template>

<script>
import { marked } from "marked";

export default {
  name: "MarkdownDisplay",
  props: ["body"],
  computed: {
    convertMd() {
      let text = this.body;

      text = text.replace(/\n/g, "<br />");

      return marked(text);
    },
  },
};
</script>