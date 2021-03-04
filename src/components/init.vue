<template>
  <div class="container-fluid login-bg valign-wrapper">
    <div style="display: flex; flex-direction: row" class="form-container base-bg-color">
      <form class="form-width">
        <h2 class="primary-title medium">Welcome back!</h2>
        <p class="secondary-title fw-400 mg-bot-20">We're so excited to see you again</p>
        <h5 class="small base-txt-color upper-txt fw-600 label">Email or Phone number</h5>
        <div class="input-wrapper input-border mg-bot-20">
          <input @focus="focusInput" @blur="loseInput" type="text" class="input-default input-login input-border fw-400" autocomplete="off" spellcheck="false" required>
        </div>
        <h5 class="small base-txt-color upper-txt fw-600 label">Password</h5>
        <div class="input-wrapper input-border mg-bot-20">
          <input @focus="focusInput" @blur="loseInput" type="password" class="input-default input-login fw-400" autocomplete="off" spellcheck="false" required>
        </div>
        <p>
          <a class="indigo-text text-lighten-2 small fw-500" style="letter-spacing: .3px">Forgot your password?</a>
        </p>
        <input type="submit" class="btn btn-block indigo lighten-2" value="Login" @click.prevent="login">
        <p class="fw-400">
          Need an account? <a class="indigo-text text-lighten-2 fw-500 small">Register</a>
        </p>
      </form>
      <div class="vertical-separator"></div>
      <div>
        <form class="form-width">
          <h2 class="primary-title medium">Login as guest</h2>
          <p class="secondary-title fw-400 mg-bot-20">Signing in as guest won't save your chats</p>
          <h5 class="small base-txt-color upper-txt fw-600 label">Name</h5>
          <div class="input-wrapper mg-bot-20 input-border">
            <input @focus="focusInput" @blur="loseInput" v-model="name" type="text" class="input-default input-login fw-400" autocomplete="off" spellcheck="false" required>
          </div>
          <p>
            <a class="indigo-text text-lighten-2 small fw-500" style="letter-spacing: .3px">You can register with the name later</a>
          </p>
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <input type="submit" class="btn btn-block indigo lighten-2" value="Start" @click.prevent="directToChat">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'init',
  data () {
    return {
      name: null,
      feedback: null,
    }
  },
  methods: {
    directToChat() {
      if(this.name) {
        this.$router.push({ name: 'channels', params: { name: this.name } })
      }
      else {
        this.feedback = 'You must enter your name in order to join'
      }
    },
    focusInput(event) {
      event.target.parentNode.classList.add('focused-input-login')
    },
    loseInput(event) {
      event.target.parentNode.classList.remove('focused-input-login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.vertical-separator {
  margin: 0 32px;
  border: 1px solid hsla(0, 0%, 100%, 0.06);
  height: 1px;
}

.form-container {
  width: fit-content;
  margin: 0 auto;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,.2);
  border-radius: 5px;
}

.form-width {
  width: 500px;
  padding: 32px;
}

.form-width .primary-title {
  font-family: Whitney bold;
  color: white;
  text-align: center;
  font-weight: 600;
}

.form-width .secondary-title {
  color: #8f9093;
  text-align: center;
}

.fw-400 {
  font-weight: 400;
}

.fw-500 {
  font-weight: 500;
}

.fw-600 {
  font-weight: 600;
}

.label {
  margin: 0 0 8px 0;
}

.input-wrapper {
  width: 100%;
  border: 1px solid rgba(0,0,0,.3);
  color: rgb(220, 221, 222);
  background: rgba(0, 0, 0, .1);
  height: 42px;
}

.input-default {
  padding: 10px;
  height: 40px;
  color: white;
}

.input-login {
  font-size: 16px;
  background: none !important;
  box-sizing: border-box !important;
  padding: 10px !important;
  border: none !important;
  height: 100% !important;
  width: 100% !important;
  margin: 0 !important;
  color: #dcddde;
  box-shadow: none !important;
}

.input-border {
  border-radius: 3px !important;
}

.focused-input-login{
  border-color: #7289da !important;
}

.login-bg {
  background-image: url('../assets/fd91131ea693096d6be5e8aa99d18f9e.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-size: center;
  height: 100vh;
}
</style>
