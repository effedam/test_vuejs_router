<template>
  <div class="footer">
    <hr>
    <h1>Footer view</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
  import EventBus from '../event-bus';

  export default {
    name: 'Footer',
    data(){
      return {
        msg: undefined
      }
    },
    mounted: function(){
        EventBus.$on('logged', () => {
          console.log('handle logged in Footer');
          this.msg = sessionStorage.getItem('user');
        });

        EventBus.$on('unlogged', () => {
          console.log('handle unlogged in Footer');
          this.msg = 'user unlogged';
        })

    }
  }
</script>
