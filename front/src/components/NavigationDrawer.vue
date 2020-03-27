<template>
  <v-navigation-drawer id="navDrawer" app clipped floating v-model="drawer">
    <v-list dense flat expand class="pl-2">
      <template v-for="item in menus">
        <v-list-item
          :to="!item.href ? { name: item.name } : null"
          :href="item.href"
          :target="item.target"
          ripple="ripple"
          rel="noopener"
          :key="item.name"
          v-if="checkRole(item)"
        >
          <v-list-item-action v-if="item.icon">
            <div class="icon-container d-flex justify-center align-center">
              <v-icon color="white" size="16">{{ item.icon }}</v-icon>
            </div>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="subtitle-1 font-weight-regular">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import menu from '@/assets/Menu';

export default {
  props: ['drawer'],

  data: () => ({
    menus: menu
  }),
  methods: {
    checkRole(item) {
      let result = false;

      for (const role of this.$auth.user().roles) {
        if (item.profiles.includes(role.name)) {
          result = true;
        }
      }
      return result;
    }
  }
};
</script>

<style lang="scss" scoped>
#navDrawer::v-deep {
  top: 0px !important;
  box-shadow: 2px 0px 43px #00000014;
  height: 100vh;
  max-height: inherit !important;

  .v-list {
    margin-top: 80px;

    .v-list-item--active {
      .icon-container {
        background-color: red;
      }

      .v-list-item__title {
        font-weight: 500 !important;
        color: blue;
      }
    }
    .v-list-item__action {
      margin-right: 21px;
    }
    .icon-container {
      width: 38px;
      height: 38px;
      border-radius: 3px;
      background-color: green;
      box-shadow: 0px 6px 8px #0000001a;
    }
  }

  .v-list.pl-2 {
    padding-left: 0px !important;
  }
}
</style>
