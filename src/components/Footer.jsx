import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { PiUsbBold } from 'react-icons/pi'

const Footer = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMassage] = useState('')

  const handle = (e) => {
    e.preventDefault()

    const serviceId = "service_n03mcyf"
    const templateId = "template_f4ybvj8"
    const publicId = "gOfirTW5ctBr79Mdr"

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Ashok",
      message: message,
    }

    emailjs.send(serviceId, templateId, templateParams, publicId)
      .then((response) => {
        console.log("Email sent successfully", response)

        setName('')
        setEmail('')
        setMassage('')
      })
      .catch((error) => {
        console.log("Error sending email", error)
      })
  }

  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-16 pb-8">
      <div className="max-w-screen-xl mx-auto px-6">

        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="w-full h-full overflow-hidden rounded-2xl shadow-2xl border border-slate-800">
            <img
              src="email2.webp"
              alt="Contact us"
              className="w-full h-[300px] lg:h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 shadow-xl">

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="space-y-5"
              onSubmit={handle}
            >

              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  Full Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  className="w-full pl-4 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  Email Address
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  className="w-full pl-4 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  Your Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMassage(e.target.value)}
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl"
              >
                Send Message
              </button>

            </form>

          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer