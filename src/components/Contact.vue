<template>
  <div class="flex-container">
    <div class="socials-contact">
      <h1>INSTA</h1>
      <h1>MAIL</h1>
      <h1>LINKEDIN</h1>
    </div>
    <div class="work-contact">
      <div class="navigation">
        <h1>HOME</h1>
        <h1>ABOUT</h1>
        <h1>WORK</h1>
      </div>
      <div class="navigation">
        <h1>AGB's</h1>
        <h1>Datenschutz</h1>
        <h1>Impressum</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactCard"
};
</script>

<style>
.flex-container {
  display: flex;
  color: black;
  justify-content: space-between;
  margin: 50px 75px;
}

.socials-contact h1 {
  font-size: 50px;
}

.navigation {
  text-align: right;
  margin-bottom: 45px;
}

.navigation h1 {
  font-size: 18px;
}
</style>
