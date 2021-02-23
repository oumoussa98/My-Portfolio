<template>
  <div class="contact">
    <form name="contact" method="post" @submit.prevent="handleSubmit">
      <div class="sender-info">
        <div>
          <label for="name" class="label">Name</label>
          <input
            placeholder="Your name..."
            type="text"
            name="name"
            v-model="formData.name"
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input
            placeholder="Your email"
            type="email"
            name="email"
            v-model="formData.email"
          />
        </div>
      </div>

      <div class="message-wrapper">
        <label for="message">Message</label>
        <textarea
          rows="4"
          placeholder="Your Message..."
          name="message"
          v-model="formData.message"
        ></textarea>
      </div>

      <button :disabled="pending" type="submit">
        <span v-if="!pending">Send Message</span>
        <ClientOnly v-else>
          <VIcon name="ri-loader-fill" animation="spin" />
        </ClientOnly>
      </button>
    </form>
    <Modal>
      <div v-if="errorMessage" class="error">
        Something went wrong ☹️ please try again
      </div>
      <div v-if="success" class="success">
        <h2>Message Sent Successfully ✅</h2>
        <p>I will get back to you as soon as i can</p>
        <p>Have a good day 🙂</p>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data: () => ({
    formData: {},
    errorMessage: false,
    success: false,
    pending: false,
  }),
  methods: {
    displayModal() {
      const el = document.querySelector('.modal')
      el.setAttribute('data-hide', 'false')
    },
    async handleSubmit() {
      if (!this.formData.email || !this.formData.message) {
        this.errorMessages = 'Email and Message fields are required'
        return
      }

      this.pending = true

      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        body: JSON.stringify(this.formData),
      })
      if (res.status === 200) {
        console.log(res)
        this.success = true
        this.displayModal()
      } else {
        this.errorMessage = true
        this.displayModal()
      }
      this.pending = false
    },
  },
}
</script>

<style lang="scss">
.contact {
  margin: 20px auto 0 auto;
  max-width: 800px;
  padding: 20px;
}
.error {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  padding: 15px;
  background: rgb(255, 105, 105);
  border-radius: 10px;
  color: black;
}
.success {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px auto;
  padding: 10px;
  h2 {
    margin: 5px 0;
    font-size: 24px;
    padding: 0 15px;
    color: rgb(8, 202, 83);
  }
  h3 {
    margin: 5px 0;
    font-size: 18px;
    padding: 0 15px;
  }
}
input[type='text'],
[type='email'] {
  width: 100%;
  padding: 14px;
  border: 1px solid var(--bg-secondary);
  margin-top: 5px;
  margin-bottom: 25px;
  resize: vertical;
  outline: none;
  font-size: 15px;
  background: var(--bg-secondary);
  color: var(--body-color);
  transition: all 0.3s;
  &:focus {
    border: 1px solid #07a147;
  }
}
textarea {
  display: block;
  width: 100%;
  font-size: 15px;
  resize: both;
  min-height: 40px;
  line-height: 20px;
  border: 1px solid var(--bg-secondary);
  padding: 10px;
  margin: 5px 0 15px 0;
  outline: none;
  background: var(--bg-secondary);
  color: var(--color);
  transition: all 0.3s;

  &:focus {
    border: 1px solid #07a147;
  }
}
::placeholder {
  color: var(--color);
}
button[type='submit'] {
  margin: 10px 0 0 0;
  padding: 12px 20px;
  min-width: 120px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  background: rgb(2, 155, 109);
  background: linear-gradient(to right, rgb(3, 185, 109), rgb(4, 153, 153));
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  color: white;
  transition: all 0.4s;
}
button[type='submit']:hover {
  background: rgb(5, 119, 85);
  background: linear-gradient(to right, rgb(7, 150, 90), rgb(7, 121, 121));
}
</style>