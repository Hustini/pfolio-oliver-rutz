<template>
  <section>
    <div class="wrapper">
      <div class="title">
        <h3>ABOUT</h3>
      </div>
      <div class="content">
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
    const items = document.querySelectorAll(".wrapper");

    items.forEach(item => {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });
  },
};
</script>

<style>
section {
  min-height: 100vh;
  width: 100%;
  margin-top: -10px;
  display: flex;
  flex-direction: column;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  text-align: left;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
}

.title h3{
  margin: 0;
  padding-left: 1rem;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  font-size: 72px;
}

.wrapper {
  max-width: 700px;
  margin-top: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid white;
  cursor: pointer;
}

.content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.content p {
  padding-top: 5rem;
  line-height: 1.6;
  font-size: 1.4rem;
}

.wrapper.active .content {
  max-height: 300px;
}
</style>