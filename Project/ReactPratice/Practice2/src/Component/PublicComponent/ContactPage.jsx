

const ContactPage=()=>{

    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Header Section */}
      <header className="w-full flex flex-col items-center justify-center bg-blue-500 text-white py-16">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="mt-4 text-lg">
          We'd love to hear from you. Send us a message!
        </p>
      </header>

      {/* Contact Form Section */}
      <section className="w-full py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>
        <form className="w-full max-w-lg mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-left text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-left text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-left text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

    </div>
    )


}


export default ContactPage