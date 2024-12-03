<template>
  <section>
    <h1 class="title">Titel</h1>

    <div class="faq">
      <div class="question">
        <h3>What is Javascript</h3>
        <svg width="15" height="10" viewBox="0 0 42 25">
          <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="answer">
        <p>
          JavaScript, often abbreviated as JS, is a programming language that
          conforms to the ECMAScript specification. JavaScript is high-level,
          often just-in-time compiled, and multi-paradigm.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AccordionPanel",
  mounted() {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach(faq => {
      faq.addEventListener("click", () => {
        faq.classList.toggle("active");
      });
    });
  },
};
</script>

<style>
section {
  min-height: 100vh;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 3rem;
  margin: 2rem 0;
}

.faq {
  max-width: 700px;
  margin-top: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid white;
  cursor: pointer;
}

.question {
display: flex;
justify-content: space-between;
align-items: center;
}

.question h3 {
  font-size: 1.8rem;
}

.answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.answer p {
  padding-top: 1rem;
  line-height: 1.6;
  font-size: 1.4rem;
}

.faq.active .answer {
  max-height: 300px;
}
</style>