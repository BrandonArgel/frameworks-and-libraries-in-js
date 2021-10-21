<!-- Template is written in the vue-template-compiler and is compiled into HTML -->
<template>
  <div>
    <h2>Películas: Vue</h2>
    <Form :movies="movies" />
  </div>
</template>

<!-- Script is written in the vue-template-compiler and is compiled into JavaScript -->
<script>
    // We can import and export components, directives, filters, etc.
    import Form from "./components/Form";
    export default {
        name: "App",
        components: {
          Form
        },

        // data() is the initial state of the component and is the responsible of update the state
        data () {
          return {
            movies: this.options
          }
        },

        // beforeCreate is called before the component is created
        beforeCreate() {
          this.options = [
            {
              title: "Alita: Battle Angel",
              ticketsAvailable: 10,
              quantity: 0,
              img: "https://lh3.googleusercontent.com/proxy/-cTzmMPB5N5OJDCd60zdbNG5_DVhFLbZ0ZtheACFx0kxZ7s-pdM3yalhCwgvaGrhNBIiWIoLOtODfzPlZqzTTgBcYDC34OIZjSU4CzySwuKdEa5fJM8xFik",
            },
            {
              title: "Inside Out",
              ticketsAvailable: 5,
              quantity: 0,
              img: "https://lumiere-a.akamaihd.net/v1/images/hero_mobile_insideout_oscarwinner_aja_a345b279.jpeg?region=0,0,480,750",
            },
            {
              title: "Avengers: End Game",
              ticketsAvailable: 3,
              quantity: 0,
              img: "https://64.media.tumblr.com/03b8c85b958fe6323177f98b3f2e2286/tumblr_pqxkehniVf1s0nfmz_540.jpg",
            },
          ];
        },
    }
</script>

<style>
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  html {
      font-size: 62.5%;
  }

  body {
      background: #121212;
      color: #f3f3f3;
      font-family: 'Open Sans', sans-serif;
      text-align: center;
  }

  h2 {
        background-color: #42b883 ;
        font-size: 4rem;
        padding: 10px;
        width: 100%;
    }
</style>