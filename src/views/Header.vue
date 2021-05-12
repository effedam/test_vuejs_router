<template>
  <div class="header" >
    <h1>Header view</h1>

    <div id="nav"  >
      <router-link to="/">Home</router-link> |      

      <template v-if="!logged">
        <router-link  to="/login" >Login</router-link>
      </template>

      <template v-else>
        <router-link to="/arena">Arena</router-link> | 
        <router-link to="/logout">Logout</router-link>
      </template>

    </div>
    
    <hr>
    <router-view/>
  </div>
</template>

<script>
  import EventBus from '../event-bus';

  export default {
    name: 'Header',
    data(){
      return{
        logged: false,
      }
    },
    mounted: function(){

        EventBus.$on('logged', () => {
          console.log('handle logged in Header');
          this.logged = true;
        });

        EventBus.$on('unlogged', () => {
          console.log('handle unlogged in Header');
          this.logged = false;
        })

    }
  }
</script>
