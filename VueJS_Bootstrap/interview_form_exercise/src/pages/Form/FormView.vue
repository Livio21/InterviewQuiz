<template>
  <form class="container d-flex flex-column justify-content-center my-3 gap-3" @submit.prevent="submitForm">
    <div class="border-1" v-if="showResult">
      <p>Name: {{ dataObj.name }}</p>
      <p>Surname: {{ dataObj.surname }}</p>
      <p>Email: {{ dataObj.email }}</p>
      <p>Phone: {{ dataObj.phone }}</p>
      <p>Time: {{ dataObj.time }}</p>
      <p>Checked: {{ dataObj.checked }}</p>
    </div>
    <div class="container d-flex flex-column align-items-center gap-3" v-if="!nextForm">
      <h1 class="fw-bold">What Is The Best Time To Reach You?</h1>
      <select v-model="dataObj.time" class=" form-control  p-3 text-muted" name="time_cst">
        <option value="Choose Your Time">Choose Your Time</option>
        <option v-for="time in timeArray" :key="time" :value="time">{{ time }}</option>
      </select>
      <span class="">(All times are in CST)</span>
      <button type="button" id="continue-btn" class="btn btn-primary btn-lg fw-semibold" data-bs-toggle="button"
        @click="nextForm = !nextForm">CONTINUE ></button>
    </div>
    <div class="container d-flex flex-column align-items-center gap-3" v-if="nextForm">
      <h1 class="fw-bold">Add Your Personal Details</h1>
      <input v-model="dataObj.name" type="text" name="name" class="form-control  p-3 text-muted bg-light shadow-sm"
        placeholder="First name" />
      <input v-model="dataObj.surname" type="text" name="surname"
        class="form-control  p-3 text-muted bg-light shadow-sm" placeholder="Last name" />
      <input v-model="dataObj.email" type="text" name="email" class="form-control  p-3 text-muted bg-light shadow-sm"
        placeholder="Email" />
      <input v-model="dataObj.phone" type="text" name="phone" class="form-control  p-3 text-muted bg-light shadow-sm"
        placeholder="Phone Number" />
      <div id="checkbox" class="d-flex gap-2 p-4 small bg-light rounded-3">
        <input v-model="dataObj.checked" type="checkbox" name="checkbox" class="form-check-input" />
        <label for="checkbox" class="form-check-label small">
          By clicking the button above, you acknowledge, consent and agree to
          the following: a) Our Privacy Policy and consent to receive notices
          and other communications electronically; b) We take your privacy
          seriously. You are providing express written consent for to share
          your information with up to four (4) of its and for, parties calling
          on behalf of, or authorized third parties on their behalf to contact
          you (including through automated means; e.g. autodialing, text and
          pre-recorded messaging) about legal services or other Mass Tort
          related offers via telephone, mobile device (including SMS and MMS)
          and/or email, even if your telephone number is currently listed on
          any state, federal, local or corporate Do Not Call list; c) Consent
          to be contacted is not required in order to purchase goods or
          services from or the that contact you. You may choose to speak with
          an individual service provider by dialing (888) 888-8888.</label>
      </div>
      <button type="submit" class="btn btn-primary btn-lg fw-semibold">SUBMIT YOUR DETAILS ></button>
    </div>
    <div class="text-center ">
      <a href="">Terms and Conditions</a> | <a href="">Privacy Policy</a> |
      <a href="">California Privacy</a>
    </div>

  </form>
</template>

<script setup>

import { ref } from 'vue'

const nextForm = ref(false)
const showResult = ref(false)
const timeArray = [
  "8 AM CST",
  "9 AM CST",
  "10 AM CST",
  "11 AM CST",
  "12 PM CST",
  "1 PM CST",
  "2 PM CST",
  "3 PM CST",
  "4 PM CST",
  "5 PM CST",
];

const dataObj = ref({
  time: "",
  name: "",
  surname: "",
  email: "",
  phone: "",
  checked: false,
});

function submitForm() {
  showResult.value = true
  console.log(dataObj.value)
}

</script>
<style scoped>
select {
  width: 400px;

}

button {
  width: 400px;
}

form {
  width: 700px;
}

a {
  text-decoration: none;
  color: rgb(85, 85, 85);
}
</style>
