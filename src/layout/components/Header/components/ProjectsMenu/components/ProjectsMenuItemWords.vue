<template>
  <span class="itemword">
    <span>{{ setWords(0) }}</span>
    <span style="color:rgb(26, 103, 163);font-weight:700">{{ setWords(1) }}</span>
    <span>{{ setWords(2) }}</span>
  </span>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["projectname", "searchname", "searchIndex"],
  methods: {
    setWordsColor(id) {
      if (this.searchname == "") {
        return {};
      }
      let searchnamelength = this.searchname.length;
      let projectlength = this.projectname.length;
    },
    setWords(id) {
      let searchnamelength = this.searchname.length;
      let projectlength = this.projectname.length;
      if (id == 0) {
        if (this.searchIndex < 0) {
          return this.projectname;
        }
        return this.projectname.slice(0, this.searchIndex);
      }
      if (id == 1) {
        if (this.searchIndex < 0) {
          return "";
        }
        return this.projectname.slice(
          this.searchIndex,
          this.searchIndex + searchnamelength
        );
      }
      if (id == 2) {
        if (this.searchIndex < 0) {
          return "";
        }
        return this.projectname.slice(this.searchIndex + searchnamelength);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
span {
  display: inline-block;
}
.itemword{
    $hovercolor:rgb(22, 118, 190);
    &:hover {
    // text-decoration: underline;
    border-bottom:solid 2px $hovercolor;
    color: $hovercolor;
  }
}
</style>