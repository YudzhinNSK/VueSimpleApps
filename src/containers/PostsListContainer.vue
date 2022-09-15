<template>
  <SearchInput
    @search="searchByAuthorName"
  />
  <div class="flex flex-col items-start justify-center items-center px-10 py-5">
    <div
      v-if="status === LoadingStatus.Loading"
    >
      <NSpin size="medium"/>
    </div>
    <div
      v-else
      class="postsGrid"
    >
      <template v-for="item in postsList" :key="item.id">
        <PostItem :post="item"/>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import {NSpin} from "naive-ui"
import {LoadingStatus} from "../composition/post/usePost";
import {usePost} from "../composition/post/usePost";
import PostItem from "../components/PostItem.vue";
import SearchInput from "../components/SearchInput.vue";

const {
  status,
  postsList,
  searchByAuthorName
} = usePost()

</script>

<style scoped lang="scss">
.postsGrid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  min-width: 350px;

  @media screen and (max-width: 1000px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 800px){
    grid-template-columns: 1fr;
    padding: 1.25rem;
  }
}
</style>