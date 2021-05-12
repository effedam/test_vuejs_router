<template>
  <div class="logout">
    <h1>Logout component</h1>
    <button v-on:click="handleClick">Logout..</button>
  </div>
</template>

<script>
  import EventBus from '../event-bus';

  export default {
    name: 'Logout',
    methods:{
      handleClick: function(){
        sessionStorage.clear();
        EventBus.$emit('unlogged');
        console.log("User logout!", sessionStorage.getItem("user"));
      }
    }
  }
</script>
