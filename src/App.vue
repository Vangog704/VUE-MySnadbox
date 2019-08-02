<template>
  <div id="app">
    <div>
      <div :class="[style.type]" class='alert'>{{style.msg}}</div>  
      <div class='alert alert-success'>
        <br>
        <br>
        <br>
        <br>
      </div> 
    </div>
    <div @mouseover="disableScroll" @mouseout="enableScroll">
      <vue-p5 id='AAA'
        @sketch="sketch"
      ></vue-p5>
    </div>
    
  </div>
</template>

<script>
import VueP5 from 'vue-p5';
import sketch from './sketch.js'
import {disableScroll,enableScroll} from './scrollOff.js' 

export default {
  name: 'app',
  components: {
    "vue-p5": VueP5
  },
  data () {
    return {
      style:{
        type:'alert-success', 
        msg: 'enable scroll'
      }
    }
  },
  methods: {
    disableScroll,
    enableScroll,
    sketch
  },
  render(h) { 
    return h(VueP5, {on: this}); 
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
