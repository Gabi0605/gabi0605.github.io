const Autocomplete = {
    name: "autocomplete",
    template: "#autocomplete",
    props: {
      items: {
        type: Array,
        required: false,
        default: () => []
      },
      isAsync: {
        type: Boolean,
        required: false,
        default: false
      }
    },
  
    data() {
      return {
        isOpen: false,
        results: [],
        search: "",
        isLoading: false,
        arrowCounter: 0
      };
    },
  
    methods: {
      onChange() {
        this.$emit("input", this.search);
  
        if (this.isAsync) {
          this.isLoading = true;
        } else {
          this.filterResults();
          this.isOpen = true;
        }
      },
  
      filterResults() {
        this.results = this.items.filter(item => {
          return item.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
        });
      },
      setResult(result) {
        this.search = result;
        this.isOpen = false;
      },
      onArrowDown(evt) {
        if (this.arrowCounter < this.results.length) {
          this.arrowCounter = this.arrowCounter + 1;
        }
      },
      onArrowUp() {
        if (this.arrowCounter > 0) {
          this.arrowCounter = this.arrowCounter - 1;
        }
      },
      onEnter() {
        this.search = this.results[this.arrowCounter];
        this.isOpen = false;
        this.arrowCounter = -1;
      },
      handleClickOutside(evt) {
        if (!this.$el.contains(evt.target)) {
          this.isOpen = false;
          this.arrowCounter = -1;
        }
      }
    },
    watch: {
      items: function(val, oldValue) {
        if (val.length !== oldValue.length) {
          this.results = val;
          this.isLoading = false;
        }
      }
    },
    mounted() {
      document.addEventListener("click", this.handleClickOutside);
    },
    destroyed() {
      document.removeEventListener("click", this.handleClickOutside);
    }
  };
  
  new Vue({
    el: "#app",
    name: "app",
    components: {
      autocomplete: Autocomplete
    }
  });
  