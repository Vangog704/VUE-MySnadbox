<template>
  <div
    class="wheel"
    :style="`left: ${position.x-center}px; 
            top: ${position.y-center}px;`"
  >
    <div class="rotable">
      <!-- title -->
      <div class="info" :style="`line-height: ${size}px`">
        <h6 :style="`font-size: ${title_font};`">{{title}}</h6>
      </div>
      <!-- Full circle -->
      <div
        class="wheel-svg-wraper"
        :style="`width: ${size}px; 
                height: ${size}px;`"
      >
        <!-- buttons -->
        <div style="position: absolute;" v-for="(btnarr,id) in btnParams" :key="id">
          <wheelMenuBtnArc
            class="weelmenubtn"
            v-for="(p,idd) in btnarr"
            :key="idd"
            :btnbody="p"
            :center="center"
            @rotate3d="rotate"
            @setTitle="setTitle"
          />
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" :viewBox="`0 0 ${size} ${size}`">
          <circle
            class="miss-clk-saver"
            :style="`stroke-width: ${(size-size*n_ratio)/2}px; `"
            :cx="`${center}`"
            :cy="`${center}`"
            :r="`${center*n_ratio*0.9+(center - center*n_ratio)/2}`"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<!--=================================================================================================-->

<script>
import Victor from "victor";
import WheelMenuBtn from "./WheelMenuBtnArcSVGComponent.vue";
import WheelBtn from "./WheelBtnClass.js";

export default {
  name: "wheel-menu",
  components: {
    wheelMenuBtnArc: WheelMenuBtn
  },
  data() {
    let res = [];
    let ratio =
      this.ratio > 0 ? (this.ratio < 1 ? this.ratio : this.ratio / 100) : 0.6;
    let center = this.size / 2;
    for (let l = 0; l < this.btns.length; l++) {
      res[l] = [];
      const num = this.btns[l].length;
      let outrad =
        (this.size / 2) * (l > 0 ? Math.pow(ratio, l) * Math.pow(0.97, l) : 1);
      let inrad = outrad * ratio;
      let lvec = new Victor(0, outrad);
      let svec = new Victor(0, inrad);
      let outradvec = new Victor(outrad, outrad);
      let centervec = new Victor(center, center);
      const angle = (Math.PI * 2) / num;
      lvec.rotate(angle / 2);
      svec.rotate(angle / 2);
      for (let i = 0; i < num; i++) {
        let points = [];
        lvec.add(centervec);
        svec.add(centervec);
        points[0] = lvec.clone();
        points[3] = svec.clone();
        lvec.subtract(centervec);
        svec.subtract(centervec);
        lvec.rotate(angle);
        svec.rotate(angle);
        lvec.add(centervec);
        svec.add(centervec);
        points[1] = lvec.clone();
        points[2] = svec.clone();
        lvec.subtract(centervec);
        svec.subtract(centervec);
        res[l][i] = new WheelBtn(
          i,
          this.btns[l][i].title,
          angle,
          points,
          this.btns[l][i].icon,
          outrad,
          inrad,
          center
        );
      }
    }
    let new_font = (this.size * Math.pow(ratio, this.btns.length)) / 180 + "em";

    return {
      btnParams: res,
      title: "",
      center: center,
      title_font: !this.$props.font ? new_font : this.$props.font + "em",
      n_ratio: ratio
    };
  },
  computed: {},
  props: {
    btns: Array,
    size: { type: Number, default: 360 },
    ratio: { type: Number, default: 0.6 },
    rotated: { type: Boolean, default: true },
    position: Object,
    font: Number
  },
  methods: {
    setTitle(text) {
      this.title = text;
    },

    rotate(rvec, mvec, pers) {
      if (!rvec || !mvec || !pers) {
        this.$el.getElementsByClassName("rotable")[0].style.transform = "";
        return;
      }
      if (!this.rotated) return;
      this.$el.getElementsByClassName("rotable")[0]
        .style.transform = ` 
          rotateX(${rvec.y}deg) 
          rotateY(${-rvec.x}deg) 
          translate(${-mvec.x}px, ${-mvec.y}px)`;
      // this.$el.getElementsByClassName('rotable')[0].style['transform-origin'] = " "+this.outrad+"px, "+this.outrad+"px ";
      // this.$el.getElementsByClassName('info')[0].style.transform = " translate("+-mvec.x+"px,"+-mvec.y+"px)";
      this.$el.style["perspective"] = `${pers}cm`;
    },

    updateCanvas: function() {}
  },
  mounted: function() {
    this.updateCanvas();
  }
};
</script>

<!--=================================================================================================-->

<style lang="scss" subtract>
@import "./../colorScheme.scss";

.wheel {
  shape-rendering: auto;
  visibility: hidden;
  border-radius: 90%;

  position: absolute;
  transform-origin: center;

  &:hover {
    stroke: black;
    border-color: black;
  }
}

.rotable {
  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;
  transition-property: transform;
  &:hover {
    transition-timing-function: ease-out;
    transition-duration: 0.4s;
    transition-property: transform;
  }
}

.wheel-svg-wraper {
  position: relative;
  visibility: hidden;

  transition-duration: 0.5s;
  transition-property: filter;
  // filter: drop-shadow(3px 3px .5rem $dark-shadow);

  &:hover {
    transition-duration: 0.5s;
    transition-property: filter;
    // filter: drop-shadow(0 0 .5rem $light-shadow);
  }
}

.info {
  font: 100%;
  visibility: visible;

  height: 100%;
  width: 46%;

  overflow: hidden;
  text-overflow: ellipsis;

  left: 28%;
  top: 0%;
  position: absolute;

  h6 {
    color: $light-shadow;
    filter: drop-shadow(0 0 0.5rem $light-shadow);
    width: 100%;
    margin: 0;

    font: serif;
    text-align: center;
    vertical-align: middle;
    display: inline-block;
  }
}

.miss-clk-saver {
  opacity: 0;
  visibility: visible;
  position: absolute;
  fill: none;
  stroke: red;
  &:hover {
    stroke: green;
  }
}
</style>
