<template>
  <div class="container">
    <Header></Header>
    <div class="test">
      <div class="time"><span>{{ timeString }}</span></div>
      <div class="main">
        <div class="left">
          <div class="count">{{ `Question ${currentNum} of ${numQuestions}` }}</div>
          <div class="question">{{ currentQuestion.question }} </div>
          <div class="answers">
            <p v-for="option in currentQuestion.options" :key="option.id">
              <label :for="option.value" class="answer">
                <input type="radio" name="answer" :id="option.value" :value="option.id" v-model="selectedAnswer">
                <span class="checkmark"></span>
                {{ option.value }}
              </label>
            </p>
          </div>
          <div class="buttons">
            <Button variant="secondary" @click.native="previousQuestion()">Back</Button>
            <Button v-if="index < numQuestions - 1" variant="primary" @click.native="nextQuestion()">Next</Button>
            <Button v-else variant="primary" @click.native="nextQuestion(); promptSubmit();">Submit</Button>
          </div>
        </div>
        <div class="right">
          <div class="notepad">
            <div class="title">
              <span>Notepad</span>
            </div>
            <div class="body">
              <textarea name="body" cols="100" rows="20" v-model="notes" placeholder="Scribble your notes here..."></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <Footer></Footer>
    <div id="disclaimer" :class="{ active: disclaimerActive }">
      <img class="warning" src="@/assets/img/warning.svg" alt="warning sign">
      <img class="close" src="@/assets/img/close.svg" alt="close button" @click="disclaimerActive = false">
      <h4>Warning</h4>
      <p>Are you sure you want to exit the exam?</p>
      <button @click="submitAnswers(); disclaimerActive = false;">Continue</button>
    </div>
    <div id="backdrop" @click="disclaimerActive = false" :class="{active: disclaimerActive}"></div>
  </div>
</template>

 <script>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  import Button from "@/components/Button.vue";
  import jsonData from "@/assets/sampleData.json";

  export default {
    name: "Test",
    components: {
      Header,
      Footer,
      Button,
    },
    data() {
      return {
        questions: [],
        seconds: this.$store.getters.getTotalTime,
        currentQuestion: {},
        numQuestions: this.$store.getters.getNumQuestions,
        selectedAnswer: null,
        index: 0,
        disclaimerActive: false,
        notes: "",
      }
    },
    computed: {
      timeString() {
        const minutes = Math.floor(this.seconds / 60);
        const seconds = this.seconds - minutes * 60;

        let timeString = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        return timeString;
      },
      currentNum() {
        return this.index + 1;
      },
    },
    watch: {
      index() {
        this.currentQuestion = this.questions[this.index];
        this.selectedAnswer = this.questions[this.index].selectedAnswer;
      },
    },
    methods: {
      loadQuestions() {
        const categoryQuestions = jsonData.filter(question => question.category === (this.$store.getters.getCategory).toLowerCase());
        this.questions = this.getRandomUnique(categoryQuestions, this.numQuestions);
      },
      getRandomUnique(array, count) {
        var tmp = array.slice(array);
        var ret = [];
        
        for (var i = 0; i < count; i++) {
          var index = Math.floor(Math.random() * tmp.length);
          var removed = tmp.splice(index, 1);
          ret.push(removed[0]);
        }
        return ret;  
      },
      getCurrentQuestion() {
        this.currentQuestion = this.questions[this.index];
      },
      gotoResults() {
        this.$router.push("/result");
      },
      previousQuestion() {
        if (this.index > 0) this.index--;
      },
      nextQuestion() {
        this.saveAnswer();
        if (this.index < this.numQuestions - 1) this.index++;
      },
      saveAnswer() {
        this.questions[this.index].selectedAnswer = this.selectedAnswer;
      },
      promptSubmit() {
        this.disclaimerActive = true;
      },
      submitAnswers() {
        this.$store.commit("setQuestions", this.questions);
        this.$store.dispatch("setTimeTaken", this.seconds);
        this.$store.commit("setNotes", this.notes);

        this.$router.push("/result");
      },
    }, 
    mounted() {
      if (!this.$store.getters.getUser) {
        return this.$router.replace("/login");
      }
      
      this.loadQuestions();
      this.getCurrentQuestion();

      // clears history state
      window.history.pushState(null, "", window.location.href);
      window.onpopstate = function () {
        window.history.pushState(null, "", window.location.href);
      };
      
      setInterval(() => {
        this.seconds--;
        if (this.seconds === 0) {
          this.gotoResults();
        }
      }, 1000);
    }
  };
 </script>
 
 <style scoped>

  .container {
    display: flex;
    flex-direction: column;
    align-items: space-between;
  }

  .test {
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
  }

  .time {
    width: 100%;
    text-align: center;
    font-size: 1.9rem;
    font-weight: 700;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main {
    width: 100%;
    height: 90%;
    position: relative;
  }

  .left, .right {
    width: 50%;
    height: 100%;
    display: inline-block;
    padding: 2rem 3rem;
    position: relative;
  }

  .right {
    float: right;
    padding: 1rem;
  }

  .count {
    color: #555555;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .question {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 36px;
    margin-bottom: 2.75rem;
  }

  .answers {
    font-size: 0.9rem;
    color: #555555;
    margin-left: 0.8rem;
  }

  .answers > * {
    margin-bottom: 2.2rem;
  }

  .answer {
    display: block;
    position: relative;
    padding-left: 2.5rem;
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .answer input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .answer .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 1rem;
    width: 1rem;
    border: 1px solid #555555;
  }

  .answer:hover input ~ .checkmark {
    background-color: #82adee;
    border: none;
  }

  .answer input:checked ~ .checkmark {
    background-color: #2b7df7;
    border: none;
  }

  .buttons {
    display: flex;
    flex-direction: row;
  }

  .buttons > * {
    margin-right:0.5rem;
    margin-top: 1rem;
  }

  #disclaimer {
		position: fixed;
		width: 19rem;
		height: 18rem;
		background-color: white;
		display: none;
		z-index: 500;
		line-height: 2;
		font-size: 0.9rem;
		border-radius: 12px;
    left: 45%;
    margin-left: -50px;
    top: 40%;
    margin-top: -50px;
	}

  #disclaimer .warning {
    width: 3.5rem;
    margin: 1rem;
  }

  #disclaimer .close {
    position: absolute;
    cursor: pointer;
    right: 12px;
    top: 12px;
 }

  #disclaimer h4 {
    font-size: 1.1rem;
    font-weight: 700;
  }

  #disclaimer p {
    margin: 1rem 2rem;
  }

	#disclaimer button {
		background-color: #2b7df7;
		color: white;
		height: 3.5rem;
		font-size: 1rem;
		padding: auto;
    width: 95%;
	}

	#disclaimer.active, #backdrop.active {
		display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
	}

	#backdrop {
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,0.6);
		display: none;
		z-index: 100;
	}

  .notepad {
    width: 90%;
    height: 90%;
    background-color: white;
    margin: 1rem auto;
    position: relative;
  }

  .notepad .title {
    height: 15%;
    border-bottom: 1px solid #ebebeb;
    display: flex;
    align-items: center;
  }

  .notepad .title span {
    margin-left: 2rem;
  }

  .notepad textarea {
    resize: none;
    width: 100%;
    height: 100%;
    padding: 1rem 2rem;
  }

  .notepad textarea::placeholder {
    font-style: italic;
    color: #a6a6a6;
  }

 </style>