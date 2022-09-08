<template>
  <v-app>
    <v-app-bar app>
      <NavLayout :links='links' />
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <div class='body_content_wrapper'
          style='
          '
        >
          <router-view />
        </div>
      </v-container>
    </v-main>

    <v-footer app>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script setup lang='ts'>
import Footer from './components/Footer.vue'
import NavLayout from './layout/NavLayout.vue'
import { MenuLink } from './components/navigation/MenuLinks'
import { ShopNamedRoutes } from './routes/root'
import { Ref, ref } from 'vue'


const links: Ref<MenuLink[]> = ref([
    {
      label: 'Catalog',
      route: ShopNamedRoutes.CATALOG,
    },
    {
      label: 'Profile',
      route: ShopNamedRoutes.PROFILE,
    },
  ] as MenuLink[],
)
</script>