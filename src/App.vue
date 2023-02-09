<script>
import Counters from './components/Counters/Counters.vue';

export default {
  components: {
    Counters,
  }
}
</script>


<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/counters">Counters</router-link>
    </nav>

    <router-view />
  </div>
</template>
