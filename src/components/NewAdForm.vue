<template>
  <main>
      <form  @submit.prevent="submitInfo">
          <h2>Submit ad info</h2>
          <div class="columns">
            <div class="image-upload-container">
                <svg width="90%" height="80%">
                    <image v-if="imageBase64" v-bind:href="`${imageBase64}`"  width="100%" height="100%"/>
                </svg>
               <input type="file" accept="image/svg+xml"  @change="onFileChange" required/>
            </div>
            <div class="input-group">
                <input type="text" placeholder="Product name" v-model="ad.name" required/>
                <input type="number" placeholder="Price" min="0" step="0.01" v-model="ad.price" required/>
                <input type="text" placeholder="City" v-model="ad.city" required/>
                <textarea maxlength="100" placeholder="Description" v-model="ad.description" required/>
                <fieldset>
                    <legend>Expiration date</legend>
                    <input id="date" type="date" v-model="ad.expirationDate" required/>
                </fieldset>
            </div>
          </div>
            <button type="submit">Post ad</button>
      </form>
  </main>
</template>

<script>
import { baseURL } from '../baseConfig'

export default {

    data() {
        return {
            ad: {
                name: "",
                price: "",
                description: "",
                city: "",
                expirationDate: "",
                image: ""
            },
            username: "",
            headers : {
                'Content-Type' : 'application/json'
            },
            
            imageBase64: ""
        }
    },
    
    methods: {
        async onFileChange(e) {
            const file = e.target.files[0];
            this.ad.image = await this.getBase64(file);
            this.imageBase64 = this.ad.image;
        },

        getBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            });
        },

        submitInfo(){
            this.$http.post(`${baseURL}/post-ad/${this.username}`, this.ad, {headers:this.headers}).then(() => {
                this.$router.push('/seller');
            }, response => {
                if(response.status === 400){
                    alert('Ad with this name already exists!');
                }
            })
        }
    },

    beforeCreate(){
        if (!this.$session.exists()) {
            this.$router.push('/');
        }
    },

    created(){
        this.$http.get(`${baseURL}/data/${this.$session.get('accessToken')}`).then(response => {
            this.username = response.body.username;
        }, () => {

        })
    }
}
</script>

<style scoped>
    main {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        text-align: center;
        width: auto;
        border: 1px solid #e9e9e9;
        border-radius: 5px;
        padding: 10px 15px 40px 15px;
    } 

    h2 {
       color: #999;  
    }

    .input-group {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 5px;
        width: 50%;
    }

    input, textarea {
        padding: 10px;
        color: #999;
        margin: 5px;
        width: 75%;
    }

    svg, input, textarea {
        border: 1px solid #e9e9e9;
        border-radius: 3px;
    }

    label {
        padding: 10px;
        color: #999;
        margin: 5px;
        font-size: 0.875rem;
        margin-left: 17%;
    }

    fieldset {
        margin-top: 20px;
        border: none;  
    }

    legend {
        text-align: left;
        font-size: 0.8rem;
        color: #999;
    }

    input:focus, textarea:focus{
        outline: none;
        border-color: orangered;
    }

    ::placeholder {
        color: #999
    }


    .columns {
        display: flex;
    }


    button {
        border: none;
        outline: none;
        width: 25%;  
        margin-top: 20px;
        padding: 10px;
        color: #999;
        background-color: #f8f8f8;
        cursor: pointer;
        border-radius: 3px;
    }

    button:hover{
          color: orangered;
        background-color: #f2f2f2;
    }

    input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance:textfield; /* Firefox */
    }
    
</style>