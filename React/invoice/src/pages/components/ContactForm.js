
const ContactForm = () => {


  return (
    <>
      <div className="py-10 lg:px-20 xl:max-w-7xl xl:mx-auto">
        <div>
          <form
            method="post"
            className="contact__form flex flex-col items-center justify-center mt-6"

          >
            <input type="hidden" name="form-name" value="contact" />
            <article>
              <div className="flex items-center justify-between gap-2 flex-wrap">
           
              </div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name..."
                className="py-2 px-4 mb-3 rounded-lg"
                required
                
              />
            </article>

            <article>
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <label htmlFor="email">Enter your email address</label>
               
              </div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address..."
                className="py-2 px-4 mb-3 rounded-lg"
              />
            </article>

            <article>
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <label htmlFor="textarea">Enter your message</label>
            
              </div>
              <textarea
                name="message"
                id="textarea"
                cols="30"
                rows="10"
                placeholder="Please add or change..."
                className="py-2 px-4 mb-3 rounded-lg"
                required
              ></textarea>
            </article>

            <button
              type="submit"
              className="bg-blue-500 mb-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400"
            >
              Submit
            </button>
          </form>

          
        </div>
      </div>
    </>
  );
};

export default ContactForm;
