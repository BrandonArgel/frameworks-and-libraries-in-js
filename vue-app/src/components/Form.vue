<template>
    <form>
        <div v-for="movie in movies" :key="movie.index">
            <img :src="movie.img" :alt="movie.title">
            <div>
                <h3>{{ movie.title }}</h3>
                <button type="button" @click="removeMovieQuantity(movie.title)" :disabled="movie.quantity <= 0">-</button>
                {{ movie.quantity }}
                <button type="button" @click="addMovieQuantity(movie.title)" :disabled="movie.quantity >= movie.ticketsAvailable">+</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: "Form",
    props: ["movies"],

    // We can also create methods in the component
    methods: {
        addMovieQuantity(movieName) {
            this.movies.forEach(movie => {
                if (movie.title === movieName) {
                movie.quantity += 1;
                }
            });
        },

        removeMovieQuantity(movieName) {
            this.movies.forEach(movie => {
                if (movie.title === movieName) {
                    movie.quantity -= 1;
                }
            });
        }
    }
}

</script>

<style scoped>
    form > div {
        background-color: #333333;
        border-radius: 20px;
        display: grid;
        font-size: clamp(1.5rem, 2vw, 2.5rem);
        grid-template-columns: 40% 60%;
        grid-gap: 10px;
        margin: 20px auto;
        max-width: 800px;
        overflow: hidden;
        place-items: center center;
    }

    h3 {
        margin-bottom: 10px;
        font-size: clamp(2rem, 4vw, 3rem);
    }

    img {
        object-fit: cover;
        width: 100%;
    }

    button {
        background-color: #42b883 ;
        border: none;
        color: #fff;
        font-size: clamp(1.5rem, 4vw, 2rem);
        transition: all 0.2s ease-in-out;
        padding: 10px 20px;
    }

    button:hover {
        transform: scale(1.1);
    }

    button:active {
        transform: scale(0.9) translateY(2px);
    }

    button:disabled {
        opacity: 0.5;
        pointer-events: none;
    }
</style>