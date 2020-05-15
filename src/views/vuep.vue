<template>
  <div>
    <vuep :value="value"
          :scope="scope"
          class="test"></vuep>
  </div>
</template>

<script>


  import Features from '@/components/features'

  export default {
    components: {
    },
    data () {
      return {
        option: {
            
        },
        scope: { Features },
        value: `
<style>
  .main {
    color: #2c3e50;
  }
  .text {
    color: #4fc08d;
  }
</style>

<template>
  <div class="main">
    <h2> Welcome to <span class="text">{{ name }}</span>!</h2>
    <features :features="features"></features>
  </div>
</template>

<script>
  export default {
    components: {
      Features
    },
    data () {
      return {
        name: 'Vuep',
        features: [
          'Single File Component',
          'Babel for ES6/JSX/UMD/CommonJS',
          'Scoped style',
          'Customizable JavaScript scope'
        ]
      }
    }
  }<\/script>
`
      }
    },
    created () { // 父组件主要是这里
      this.$on('mountedd', (status) => {
        console.log('调用了子组件')
      })
    },
    mounted () {
      this.$on('mountedd', this.a)
      //   console.info(this.$children[0].$data, this.aaaa)
    },
    methods: {
      a (a) {
        console.log(a)
      }
    }
  }
</script>

<style>
  .test {
    text-align: left;
  }
</style>
