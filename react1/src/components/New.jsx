import React from 'react'
import { useState } from 'react'

const New = () => {
  const [count, setCount] = useState(0)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submittedData, setSubmittedData] = useState(null)

  const like = () => setCount(count + 1)
  const dislike = () => setCount(count - 1)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedData(formData)
    setFormData({ name: '', email: '', message: '' })
  }
  return (
    <>
<div className="py-8 px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">Like/Dislike Counter</h2>
        <button onClick={like} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mr-4 transition-colors duration-300">
          Like 👍
        </button>
        <button onClick={dislike} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-300">
          Dislike 👎
        </button>
        <p className="text-xl mt-4">Count: <span className="font-semibold">{count}</span></p>
      </div>

      <div className="py-8 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">User Form</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            required
            rows="4"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors duration-300">
            Submit
          </button>
        </form>
      </div>

      {submittedData && (
        <div className="py-8 px-4 border-t border-gray-200">
          <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Submitted Form Data:</h3>
            <div className="space-y-2">
              <p><strong className="font-medium">Name:</strong> {submittedData.name}</p>
              <p><strong className="font-medium">Email:</strong> {submittedData.email}</p>
              <p><strong className="font-medium">Message:</strong> {submittedData.message}</p>
            </div>
          </div>
        </div>
      )}

    </>
  )
}

export default New
