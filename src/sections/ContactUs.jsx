function ContactUs() {
  return (
    <section id="contact" className="hero w-[100vw]">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-accent-focus">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl opacity-75">
          Ready to learn more about our services? Contact us today! Our team is
          always available to answer your questions and help you get started
          with AI solutions in radiology research.
        </p>
        <form action="#" className="space-y-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="name@gmail.com"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <input
              type="text"
              placeholder="Let us know how we can help you"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your message</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Leave a comment"
              required
            ></textarea>
          </div>
          <button className="btn btn-secondary" type="submit">
            Button
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
