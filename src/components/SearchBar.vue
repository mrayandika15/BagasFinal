<template >
    <div class="search-bar_container">
        <div class="search-bar">
            <input type="text" 
            name="fname" 
            placeholder="Search here.." 
            v-model="query" 
            @keydown.up.prevent="highlightPrevious"
            @keydown.down.prevent="highlightNext"
            @keydown.enter="gotoLink"
            >
            <v-icon color="white">mdi-magnify</v-icon>
        </div>

        <div 
        class="postContainer"
        v-if="query.length > 0"
        >
            <div
            v-for="(post, index) in filteredPost"
            :key="index"
            ref="results"
            >
            <v-card
                class="CardPost"
                outlined
                elevation="12"
                tile
                :href="post.link"
                :to="post.link"
                >
                <v-list 
                three-line
                class="ListItem"
                :class="{ ActiveList : index === highlightedIndex }"
                >
                    <v-list-item
                    ripple
                    >
                    <v-img
                        :src="post.image"
                        class="mr-4"
                        max-width="64"
                        min-width="64"
                    ></v-img>

                    <v-list-item-content>
                        <span
                        class="text-uppercase font-weight-regular caption"
                        v-text="post.title"
                        ></span>

                        <div v-text="post.category"></div>
                    </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
            
        </div>
        </div>

     
      
    </div>
</template>
<script>
  
import axios from 'axios'
export default {
    components:{
      
    },
    data() {
        return {
            query:'',
            searchResultsVisible: false,
            posts: [],
            searchResults: [],
            highlightedIndex: 0,
        }
    },
    created() {
        axios.get('/index.json')
      .then(response => {
        this.posts = response.data
      })
    },
    methods: {
            highlightPrevious() {
        if (this.highlightedIndex > 0) {
            this.highlightedIndex = this.highlightedIndex - 1
            this.scrollIntoView()
        }
        },
        highlightNext() {
        if (this.highlightedIndex < this.filteredPost.length - 1) {
            this.highlightedIndex = this.highlightedIndex + 1
            this.scrollIntoView()
        }
        },
        scrollIntoView() {
         this.$refs.results.children[this.highlightedIndex].scrollIntoView({ block: 'nearest' })
    },
        gotoLink() {
        if (this.filteredPost[this.highlightedIndex]) {
            this.$router.push(this.filteredPost[this.highlightedIndex].link) 
        }
        }
    },
    computed:{
        filteredPost(){
            return this.posts.filter(post => post.title.toLowerCase().includes(this.query.toLowerCase()))
        }
    },
}
</script>
<style scope >
       .search-bar {
        padding: 0 30px;
        margin-right: 52px;
    }

    input {
        border-bottom: 1px #fff solid;
        color: #fff;
        width: 120px;
        transition: all 0.5s ease;
    }

    input:focus {
        outline: none;
        width: 160px;
    }

    input::placeholder {
        color: #787474;

    }
  
    .postContainer{
        position: absolute;
        color: #fff;
    }
    .CardPost{
        color: rgb(226, 220, 220) !important;
        display: flex;
        font-size: 20;
        
        border-radius: 10px; 
        cursor: pointer;
    }
    .CardPost:hover{
        background-color: rgb(71, 70, 70) !important ;
        transition: all 0.5s ease;
    }
    .ListItem:hover{
        background-color: rgb(230, 230, 230) !important ;
        transition: all 0.5s ease;
    }

    .ListItem.ActiveList{
        background-color: rgb(230, 230, 230) !important ;
    }
   

</style>