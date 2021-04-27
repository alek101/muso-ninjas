<template>
  <form @submit.prevent="handleSubmit">
      <h3>Signup Form</h3>
      <input type="text" placeholder="Display Name" v-model="displayName">
      <input type="email" placeholder="Email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <div class="error" v-if="error">{{error}}</div>
      <button v-if="!isPending">Sign Up</button>
      <button v-else disabled>Loading</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../../composables/useSignup'

export default {
    setup(){
        const {error, signup, isPending} = useSignup()
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () =>{
            const res = signup(email.value,password.value,displayName.value)
            if(!error.value){
                console.log('User signed up')
            }
        }

        return {displayName,email,password,error,isPending,handleSubmit}
    }
}
</script>

<style>

</style>