<template>
  <div class="rings">
    <div class="percent">
      <svg>
        <circle cx="70" cy="70" r="70"></circle>
        <circle cx="70" cy="70" r="70" :style="{ 'stroke-dashoffset': dashOffset }"></circle>
      </svg>
      <div class="number">
        <h2>{{percent}}<span>%</span></h2>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ResultGraph",
    props: {
      percent: {
        type: Number,
        default: 0,
      },
    },
    computed: {
      dashOffset() {
        return 440 - (440 * this.percent) / 100;
      },
    }
  };
</script>

<style scoped>

.rings {
	display: flex;
	flex-direction: row;
  position: relative;
  z-index: 100;
}

.percent, svg, circle {
	width: 200px;
	height: 200px;
}

circle {
	position: absolute;
	fill: none;
	stroke-width: 10;
	transform: translate(10px, 10px);
	stroke-dasharray: 440;
	stroke-linecap: round;
}

circle:nth-child(1) {
	stroke-dashoffset: 0;
  stroke: #D3E7F8;
}

.percent circle:nth-child(2) {
	/* stroke-dashoffset: calc(440 - (440 * 75) / 100); */
	stroke: #007DEA;
}

.number {
	position: relative;
	bottom: 145px;
	right: -58px;
	color: #fff;
}

h2 {
	font-size:2rem;
  color: #555555;
}

span {
	font-size: 24px;
	opacity: .7;
}

</style>
