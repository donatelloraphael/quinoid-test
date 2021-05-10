<template>
  <div class="container">
    <Header></Header>
    <div class="result">
      <div class="card">
        <div class="stats">
          <div class="main">
            <div class="score">
              Score: <span>{{numCorrect}} / </span>{{numQuestions}}
            </div>
            <div class="time">
              Time Taken: <span>{{timeTaken}}</span>
            </div>
            <div class="percent">{{percentRight}}%</div>
            <div class="label">Total Score</div>
          </div>
          <div class="final">
            <result-graph :percent="percentFinal"></result-graph>
            <div class="text">Final Score</div>
          </div>
          <div class="correct">
            <result-graph :percent="percentRight"></result-graph>
            <div class="text">Correct</div>
          </div>
          <div class="wrong">
            <result-graph :percent="percentWrong"></result-graph>
            <div class="text">Wrong</div>
          </div>
          <div class="skipped">
            <result-graph :percent="percentSkipped"></result-graph>
            <div class="text">Skipped</div>
          </div>
        </div>
        <div class="notes">
          <h4>Your scribble notes:</h4>
          <p>{{ $store.getters.getNotes }}</p>
        </div>
        <Button variant="secondary" @click.native="exit()">Exit</Button>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template> 

<script>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  import Button from "@/components/Button.vue";
  import ResultGraph from "@/components/ResultGraph.vue";

  export default {
    name: "Result",
    components: {
      Header,
      Footer,
      Button,
      ResultGraph,
    },
    data() {
      return {
        numQuestions: this.$store.getters.getNumQuestions,
        timeTaken: this.$store.getters.getTimeTaken,
      }
    },
    computed: {
      numCorrect() {
        const correct = (this.$store.getters.getQuestions).filter(question => question.selectedAnswer === question.correct_option);
        return correct.length;
      },
      numWrong() {
        const wrong = (this.$store.getters.getQuestions).filter(question => {
          if (question.selectedAnswer !== undefined) {
            if (question.selectedAnswer !== question.correct_option) {
              return true;
            }
            return false;
          }
        });
        return wrong.length;
      },
      numSkipped() {
        const skipped = (this.$store.getters.getQuestions).filter(question => question.selectedAnswer === undefined);
        return skipped.length;
      },
      percentFinal() {
        const final = (this.numCorrect - this.numWrong * 0.25) / this.numQuestions * 100;
        return final < 0 ? 0 : final;
      },
      percentRight() {
        return this.numCorrect / this.numQuestions * 100;
      },
      percentWrong() {
        return this.numWrong / this.numQuestions * 100;
      },
      percentSkipped() {
        return this.numSkipped / this.numQuestions * 100;
      }
    },
    methods: {
      exit() {
        this.$store.dispatch("clearStore");
        this.$router.push("/");
      },
    },
    mounted() {
      if (!this.$store.getters.getUser || !(this.$store.getters.getTimeTaken).length ) {
        return this.$router.replace("/login");
      }
     // clears history state
      window.history.pushState(null, "", window.location.href);
      window.onpopstate = function () {
        window.history.pushState(null, "", window.location.href);
      };

      console.log(this.$store.getters.getQuestions);
   },

 };
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: space-between;
  }

  .result {
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card {
    width: 75%;
    height: 90%;
    background-color: white;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .notes {
    border: 1px solid #e2e2e2;
    width: 90%;
    height: 25%;
    border-radius: 5px;
    padding: 1rem;
  }

  h4 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .notes p {
    font-size: 0.9rem;
    color: #555555;
  }

  .card .stats {
    width: 100%;
    height: 45%;
    position: relative;
    display: flex;
    padding: 0 5%;
  }

  .card .stats > * {
    height: 80%;
    width: 20%;
  }

  .card .score, .card .time {
    font-size: 0.8rem;
    color: #555555;
  }

  .card .score span, .card .time span {
    font-size: 1rem;
    font-weight: 700;
  }

  .card .stats .main > *{
    margin-bottom: 0.5rem;
  }

  .card .percent {
    font-size: 2.2rem;
    color: #2B7DF7;
    font-weight: 700;
  }

  .card .label {
    font-size: 1rem;
    font-weight: 700;
    color: #2b7df7;
  }

  .stats div .text {
    font-size: 1.2rem;
    position: relative;
    top: -20px;
    left: -10px;
    text-align: center;
  }

  .card .secondary {
    margin-top: 1rem;
  }
 
</style>

