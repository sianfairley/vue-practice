// Get the create object. Create an object to store data, functions, template
const app = Vue.createApp({
  data() {
    return {
      word: "Change me",
      number: 0,
      showInfo: true,
      url: "https://vuejs.org/guide/essentials/class-and-style.html",
      x: 0,
      y: 0,
      places: [
        {
          name: "Istanbul",
          country: "Turkey",
          img: "assets/istanbul.jpg",
          isFav: false,
        },
        {
          name: "Paris",
          country: "France",
          img: "assets/paris.jpg",
          isFav: false,
        },
        {
          name: "Berlin",
          country: "Germany",
          img: "assets/berlin.jpg",
          isFav: true,
        },
      ],
    };
  },

  methods: {
    changeTitle(word) {
      this.word = word;
    },
    toggleShowInfo() {
      this.showInfo = !this.showInfo;
    },
    // Access the event object- this must be the first argument.
    handleEvent(e, data) {
      //Log the event and the event type
      console.log(e, e.type);
      // Log any additional data passed in
      if (data) {
        console.log(data);
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFav(place) {
      place.isFav = !place.isFav;
    },
  },
});

// Mount it to the element in the DOM
app.mount("#app");
