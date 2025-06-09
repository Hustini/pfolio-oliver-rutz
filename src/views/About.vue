<script setup>
import Footer from "@/components/Footer.vue";
</script>

<script>
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  components: {
    Breadcrumb
  }
}
</script>

<template>
  <div>
    <div class="layout-container">
      <Breadcrumb />
      <div class="about">About</div>
      <img class="hero-portrait" src="/img/about_portrait.jpg" alt="portrait">
    </div>
    <div class="about-content">
      <div class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna  tortor, euismod vitae dolor eget, porta consectetur augue. Morbi lorem  quam, semper vel aliquet volutpat, pretium eget nisl. Morbi hendrerit  turpis sapien, vel sollicitudin ipsum bibendum quis. Nunc id elementum  nulla, eu tincidunt ex. Nulla condimentum tincidunt rhoncus. Donec  sollicitudin varius libero vel vulputate. Pellentesque pharetra  scelerisque nisi, nec laoreet magna blandit sit amet. Mauris mattis nisi purus, commodo ornare magna semper in. Ut interdum feugiat nisl et  sagittis. Nullam volutpat urna id arcu dapibus, condimentum imperdiet  dolor fringilla. Aliquam sed viverra tellus. Vivamus mattis libero a  nisi viverra, at eleifend ligula fringilla. Nunc in dignissim sapien, et vestibulum ante. Sed eleifend, felis nec faucibus commodo, mi purus  efficitur lorem, vitae mollis leo nibh eget enim.
        Sed volutpat sapien sem, et vestibulum arcu blandit ut. Mauris tincidunt pharetra arcu non facilisis. Cras sed dapibus purus. Morbi convallis at felis non laoreet. Cras feugiat lobortis sodales. Mauris accumsan est  ut euismod faucibus. Nunc at dapibus eros. Pellentesque eu dapibus  neque, nec porta tellus. Donec ac posuere mauris. Morbi in condimentum  odio.
        Quisque venenatis quam nec pretium convallis. Sed rutrum, neque in  facilisis sodales, nibh ligula tincidunt arcu, at dapibus risus nisl  eget elit. Aenean auctor dui diam, sed malesuada enim congue eget. Orci  varius natoque penatibus et magnis dis parturient montes, nascetur  ridiculus mus. Pellentesque quis metus porttitor, vestibulum neque non,  rutrum dui. Maecenas non mauris eget mauris venenatis vehicula.  Pellentesque pharetra augue turpis, semper molestie lectus sagittis  vitae. Proin non lorem bibendum, faucibus libero in, ullamcorper elit.  Sed vel nunc nulla. Etiam lectus ex, posuere et convallis sit amet,  rhoncus in urna. Morbi justo nisl, sagittis quis tempus vel, placerat  nec nulla.
        Phasellus cursus orci nec tempus egestas. Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Aenean malesuada nisl id tellus aliquam,  vel lobortis mi aliquet. Fusce dictum leo magna, sed eleifend erat  ultricies id. Cras ut imperdiet ipsum. Nullam at facilisis nunc. In hac  habitasse platea dictumst.
        Donec est nunc, ultricies sit amet elit at, tristique tempor tellus. Sed aliquam congue feugiat. Vivamus ut euismod orci, vel luctus sem.  Integer a lacus tortor. Morbi vitae nisl malesuada, dictum nibh eget,  faucibus lorem. Integer porttitor, nibh nec lobortis viverra, felis  nulla eleifend velit, ac imperdiet magna orci vel lacus. Quisque pretium metus sit amet purus rhoncus, vitae volutpat lorem accumsan. Maecenas  faucibus posuere blandit. Duis id blandit odio, at interdum felis.
      </div>
      <div class="layout-container img-container">
        <div class="rectangle"></div>
        <div class="wrapper">
          <div class="rectangle"></div>
          <div class="rectangle"></div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.about {
  font-size: 6rem;
}

.hero-portrait {
  width: 100%;
  border: solid 1px black;
  margin-bottom: 2rem;
}

.text {
  font-size: 16px;
  width: 50%;
  flex: 1;
  max-width: 33.3333%;
  padding-left: 2rem;
}

.about-content {
  display: flex;
  padding-bottom: 2rem;
  gap: 2rem;
}

.img-container {
  display: flex;
  flex-direction: column;
  flex: 2;
  gap: 2rem;
  width: 100%;
}

.rectangle {
  aspect-ratio: 4 / 3;
  width: 100%;
  background: #333333;
  display: block;
}

.wrapper {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

@media (max-width: 640px) {
  .about {
    font-size: 3.75rem;
  }

  .about-content {
    flex-direction: column;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .text {
    width: 100%;
    max-width: 100%;
    flex: unset;
    border-top: solid 1px black;
    border-bottom: solid 1px black;
    padding: 2rem 1rem;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
  }
}
</style>