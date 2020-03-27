<template>
  <nav>
    <v-app-bar
      id="appBar"
      color="white"
      fixed
      clipped-left
      flat
      dense
      app
      max-height="65"
      height="65"
      class="align-center"
    >
      <div class="menu-button-container d-flex align-center">
        <v-app-bar-nav-icon
          class="button-icon mr-2"
          @click="handleDrawerToggle"
        ></v-app-bar-nav-icon>
      </div>
      <v-img
        src="/static/logo-ecotrace-horizontal.png"
        max-width="181"
        max-height="43"
        class=" mr-4"
      ></v-img>
      <v-toolbar-title
        class="font-italic font-weight-light text-uppercase title"
        >Classificador</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn
        class="ma-2 font-italic font-weight-regular subtitle-1 text-capitalize"
        height="auto"
        text
        color="#707070"
      >
        <v-avatar size="33" class="mr-3">
          <v-img src="/static/icon.png" cover width="38" height="38"></v-img>
        </v-avatar>
        {{ this.$auth.user().name }}
        <v-icon color="primary" class="ml-5" size="18" right
          >fas fa-caret-down</v-icon
        >
      </v-btn>
      <v-divider
        class="ml-2"
        inset
        vertical
        style="max-height: 48px; margin-top: 0; align-self: center;"
      ></v-divider>
      <v-btn text icon color="secondary" class="ml-2">
        <v-icon size="21">far fa-bell</v-icon>
      </v-btn>
      <v-btn text icon color="secondary">
        <v-icon size="21">far fa-question-circle</v-icon>
      </v-btn>
      <v-button
        class="ml-4"
        size="small"
        text="sair"
        :loading="loading"
        color="secondary"
        @do="logout"
      />
    </v-app-bar>
    <NavigationDrawer :drawer="drawer" />
  </nav>
</template>

<script>
import NavigationDrawer from '@/components/NavigationDrawer';
export default {
  components: {
    NavigationDrawer: NavigationDrawer
  },

  data: () => ({
    drawer: false,
    loading: false
  }),
  mounted() {},
  methods: {
    logout() {
      this.$auth.logout({
        makeRequest: true,
        redirect: '/login',
        success: function() {
          localStorage.clear();
        },
        error: function() {
          localStorage.clear();
        }
      });
    },
    handleDrawerToggle() {
      this.drawer = !this.drawer;
    }
  }
};
</script>

<style lang="scss" scoped>
#appBar::v-deep {
  color: red;
  z-index: 20;
  box-shadow: 0px 3px 19px #00000012;

  .menu-button-container {
    color: #abafb3;

    .v-btn--round:before,
    .v-btn--rounded:before {
      border-radius: 3px;
    }

    .button-icon {
      color: blue;
    }

    .v-btn--icon.v-size--default .v-icon {
      font-size: 20px;
    }
  }
}
</style>
