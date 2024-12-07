<template>
  {{ timerCountSeconds }}
</template>

<script>

export default {
  name: "CountDownTimer",
  props: ['minutes'],
  data() {
    return {
      timerCountSeconds: this.minutes * 60
    }
  },

  watch: {

    timerCountSeconds: {
      handler(value) {

        if (value > 0) {
          setTimeout(() => {
            this.timerCountSeconds--;
          }, 1000);
        }

      },
      immediate: true // This ensures the watcher is triggered upon creation
    }

  }
}

</script>