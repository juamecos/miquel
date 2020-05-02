import React from "react"
import Title from "../Title"


const Contact = () => {
  return (
    <section className="contact">
      <Title title="Contacta" subtitle="amb mi" />
      <div className="contact__center">
        <form
          action="https://formspree.io/xeqrqjzo"
          method="POST"
          className="contact__form"
        >
          <div>
            <label htmlFor="name">nom</label>
            <input
              type="text"
              name="name"
              id="name"
              className="contact__form__control"
              placeholder="Juan García"
            />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="contact__form__control"
              placeholder="email@email.com"
            />
          </div>
          <div>
            <label htmlFor="message">missatge</label>
            <textarea
              name="message"
              id="message"
              className="contact__form__control"
              rows="10"
              placeholder="hola templat"
            ></textarea>
          </div>
          <div>
            <input type="submit" value="submit" className="contact__submit" />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact