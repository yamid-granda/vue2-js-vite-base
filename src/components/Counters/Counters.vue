<script>
export default {
  data() {
    return {
      countersDic: {
        a: 0,
        b: 0,
        c: 0
      }
    }
  },

  methods: {
    onCounterAIncrement() {
      this.$set(this.countersDic, 'a', this.countersDic.a + 1)
    },

    onCounterBIncrement() {
      this.$set(this.countersDic, 'b', this.countersDic.b + 1)
    },

    onCounterCIncrement() {
      this.$set(this.countersDic, 'c', this.countersDic.c + 1)
    },
  }
}
</script>

<template>
  <div>
    <div>
      {{ countersDic.a }}
      <button @click="onCounterAIncrement">Increment</button>
    </div>

    <div>
      {{ countersDic.b }}
      <button @click="onCounterBIncrement">Increment</button>
    </div>

    <div>
      {{ countersDic.c }}
      <button @click="onCounterCIncrement">Increment</button>
    </div>
  </div>
</template>
