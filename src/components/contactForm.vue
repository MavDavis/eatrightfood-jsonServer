<template>
  <section id="contact">
    <div class="contact-box">
      <div class="contact-links">
        <div class="links">
          <div class="link">
            <a href="#"><i class="fab fa-facebook"></i></a>
          </div>
          <div class="link">
            <a href="#"><i class="fab fa-github"></i></a>
          </div>
          <div class="link">
            <a href="#"><i class="fab fa-twitter"></i></a>
          </div>
          <div class="link">
            <a href="#"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div class="contact-form-wrapper">
        <form>
          <div class="form-item">
            <input type="text" name="sender" required />
            <label>Name:</label>
          </div>
          <div class="form-item">
            <input type="text" name="email" required />
            <label>Email:</label>
          </div>
          <div class="form-item">
            <textarea class="" name="message" required></textarea>
            <label>Message:</label>
          </div>
          <button class="submit-btn">Send</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");

* {
  margin: 0;
  box-sizing: border-box;
}

body {
}

#contact {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-box {
        border: 1px solid var(--primary);

  width: clamp(100px, 90%, 1000px);
  margin: 80px 50px;
  display: flex;
  flex-wrap: wrap;
}

.contact-links,
.contact-form-wrapper {
  width: 50%;
  padding: 8% 5% 10% 5%;
}

.contact-links {
  background-color: #fff;
  background: radial-gradient(circle at 55% 0 12%, transparent 12.2%),
    radial-gradient(circle at 94% 72%, var(--primary) 0 10%, transparent 10.2%),
    radial-gradient(circle at 20% max(78%, 350px), #fff 0 7%, transparent 7.2%),
    radial-gradient(circle at 0% 0%, #fff 0 40%, transparent 40.2%), #1f2e43;
  border-radius: 10px 0 0 10px;
}

.contact-form-wrapper {
  background-color: #ffffff8f;
  border-radius: 10px;
}

@media only screen and (max-width: 800px) {
  .contact-links,
  .contact-form-wrapper {
    width: 100%;
  }

  .contact-links {
    border-radius: 10px ;
  }

  .contact-form-wrapper {
    border-radius: 0 0 10px 10px;
  }
}

@media only screen and (max-width: 400px) {
  .contact-box {
    width: 95%;
    margin: 8% 5%;
  }
}

.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
}

.link {
  margin: 10px;
  cursor: pointer;


}

i {
  width: 45px;
  color:var(--primary);
  height: 45px;
  font-size: 2rem;
  transition: 0.2s;
  user-select: none;
}

i:hover {
  transform: scale(1.1, 1.1);
}

img:active {
  transform: scale(1.1, 1.1);
  filter: hue-rotate(220deg) drop-shadow(2px 4px 4px #222) sepia(0.3);
}

.form-item {
  position: relative;
}

label,
input,
textarea {
  font-family: "Poppins", sans-serif;
}

label {
  position: absolute;
  top: 10px;
  left: 2%;
  color: #999;
  font-size: clamp(14px, 1.5vw, 18px);
  pointer-events: none;
  user-select: none;
}

input,
textarea {
  width: 100%;
  outline: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 12px;
  font-size: clamp(15px, 1.5vw, 18px);
}

input:focus + label,
input:valid + label,
textarea:focus + label,
textarea:valid + label {
  font-size: clamp(13px, 1.3vw, 16px);
  color: #777;
  top: -20px;
  transition: all 0.225s ease;
}

.submit-btn {
  color: #fff;
  display: block;
  margin: 25px auto;
  border: none;
  font-size: 0.6em;
  display: flex;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  padding: 10px 1rem;
  background: var(--dark);
  transition: 0.3s ease-out;
  border-radius: 0 8px;

  width: 80%;
  justify-content: center;
  transition: 0.2s;
}

.submit-btn:hover {
  transform: scale(1.1, 1.1);
}

.submit-btn:active {
  transform: scale(1.1, 1.1);
  filter: sepia(0.5);
}

@media only screen and (max-width: 400px) {
  .links {
    padding-top: 30px;
  }

  i {
    font-size: 1.6rem;;
    width: 38px;
    height: 38px;
  }
}
</style>
