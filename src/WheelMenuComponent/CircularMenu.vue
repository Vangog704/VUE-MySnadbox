<template>
  <div class="circular-menu-container" :style="`left:${pos.x}px; top:${pos.y}px;`">
    <!-- <div class="info"
      :style="`transform: translate(${mov.x}px,${-mov.y}px);`"
    >
      <h1>Axcvvc hgf ddd fgAA dfsdfdhg dsgdf dfgdfgsgs gsd sd sdg sgh g as</h1>
    </div> -->
    <div class="rotable" 
        :style="`transform: rotateX(${rot.y}deg) rotateY(${rot.x}deg) translate(${mov.x}px,${-mov.y}px);`"
    >
      <circular-menu-arc-button
        v-for="(btn, id) in shapes"
        :style="`transform: rotateZ(${btn.angle}deg);`"
        :key="id"
        :shape="btn"
        @hover="btnover"
        @out="btnout"
      />
    </div>
  </div>
</template>

<!--=================================================================================================-->

<script>
import Victor from "victor";
import CircularMenuArcButton from "./CircularMenuArcButton.vue";
import CircularMenuBuilder from "./circular-menu-builder";

export default {
  name: "circular-menu",
  components: {
    "circular-menu-arc-button": CircularMenuArcButton
  },
  props: {
    btns: Array,
    conf: Object,
    pos: Object
  },
  data() {
    return {
      rot: { x: 0, y: 0 },
      mov: { x: 0, y: 0 },
    };
  },
  methods: {

    btnover(btnid, rotvec, movvec) {
      this.mov = movvec;
      this.rot = rotvec;
    },
    btnout() {
      this.mov = this.rot = {x:0, y:0};
    },
  },
  computed: {
    shapes() {
      console.log('build');
      return new CircularMenuBuilder(Object.assign({},this.conf)).build();
    }
  },
  mounted: function() {
    // console.log('build');
    //   this.shapes = new CircularMenuBuilder(this.conf).build();
  }
};
</script>

<!--=================================================================================================-->

<style lang="scss" subtract>
@import "./../colorScheme.scss";

.circular-menu-container {
  shape-rendering: auto;

  visibility: hidden;
  transform-origin: center;
  perspective: 30cm;
  position: absolute;
}

.rotable{
  transition-duration: .5s;
}

.info{
  visibility: visible;
  position:absolute;
  width: 400px;
  top: -2.5em;
  left: -200px;
  background-color: red;
  overflow: hidden;
  text-overflow: ellipsis;
  transition-duration: .5s;
  line-height: 5em;
  h1{
    position:relative;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    width: 100%;
  }
}

</style>
