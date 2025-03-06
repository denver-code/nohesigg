import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section className="container mx-auto px-4 py-20" id="contact">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Questions?
            <br />
            No problem,
            <br />
            we have the answers.
          </h2>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
          <h3 className="text-2xl font-bold mb-6">Contact us</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md"
                placeholder="example@mail.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                Your question
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md"
                placeholder="..."
              ></textarea>
            </div>
            <Button type="submit" className="w-full">
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

