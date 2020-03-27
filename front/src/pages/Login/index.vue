<template>
  <v-app id="Login">
    <v-container class="pa-0 fill-height" fluid>
      <!-- <v-img class="logo" src="alugowLogo.png"></v-img> -->
      <v-col style="margin: 0 auto" cols="12" md="5">
        <v-row no-gutters justify="center">
          <v-col align="center" lg="7" cols="11">
            <v-row justify="center">
              <img class="logo mb-5" src="alugowLogo.png" />
            </v-row>

            <span class="text-center title-card">
              Alugue diversos itens em uma plataforma on-line totalmente segura
            </span>
            <v-text-field
              class="mt-6"
              prepend-inner-icon="fas fa-user-circle"
              outlined
              label="Email"
            />
            <v-text-field
              prepend-inner-icon="fas fa-key"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              name="input-10-1"
              label="Senha"
              outlined
              @click:append="showPassword = !showPassword"
            />

            <v-btn x-large block color="#0743B1" class="white--text"
              >Entrar</v-btn
            >
            <v-row class="mt-4" justify="space-between">
              <v-btn small color="red" text>Esqueci a senha</v-btn>
              <v-btn small color="#0743B1" text>Registre-se</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
/*
import Vue from 'vue';
import { watch } from 'fs';
import { log } from 'util';

*/
export default {
  components: {},
  data() {
    return {
      showPassword: false
    };
  },

  created() {
    /*
    setTimeout(async () => {
      if (this.$auth.ready() && this.$auth.check()) {
          this.$router.push({ name: 'Dashboard' });
      } else {
        if (localStorage.getItem('refresh_token')) {
          this.loading = true;
          this.$auth
            .login({
              headers: {
                Authorization: 'Bearer ' + localStorage.getItem('refresh_token')
              },
              data: {},
              rememberMe: true,
              fetchUser: true
            })
            .then(resp => {
              this.loading = false;
            })
            .catch(error => {
              this.loading = false;
            });
        } else {
          this.loading = false;
        }
      }
    }, 500);
   */
  },

  mounted() {},

  methods: {
    /*
    login(token) {
      this.loading = true;
      this.loginError = false;

      let data = { email: this.model.email, password: this.model.password };
      if (token) {
        data['authToken'] = token;
      }
      this.$auth
        .login({
          data: data,
          rememberMe: true,
          fetchUser: true
        })
        .then(res => {
          this.$router.push({ name: 'Dashboard' });
        })
        .catch(error => {
          for (const err of error.response.data) {
            this.form[err.field].error = true;
            this.form[err.field].message = err.message;
          }
          this.loading = false;
        });
    },

    resetError(field) {
      this.form[field].error = false;
      this.form[field].message = '';
    }
   */
  }
};
</script>

<style scoped lang="scss">
#Login::v-deep {
  padding: 0;
  .logo {
    min-width: 80%;
  }
  .title-card {
    color: #b0b0b0;
    font-size: 18px;
  }
}
</style>
