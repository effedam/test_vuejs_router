<template>
  <div class="login">
    <h1>Login component</h1>
    <button v-on:click="handleLogin">Login..</button>
  </div>
</template>

<script>
  import EventBus from '../event-bus';
  import RouterBus from '../router-bus'

  export default {
    name: 'Login',
    methods:{
      handleLogin: function(){
        sessionStorage.setItem("user","user: Pippo");
        EventBus.$emit('logged');
        console.log("User logged!");
        RouterBus.push('Arena');
      }
    }
  }
</script>
