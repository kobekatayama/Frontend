import { useState, useEffect } from "react"
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

const Newsletter = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })
  const [message, setMessage] = useState("")
  const [csrfToken, setCsrfToken] = useState("")

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const res = await fetch(`${apiBaseUrl}/csrf-token`, {
          credentials: "include",
        })
        const data = await res.json()
        setCsrfToken(data.csrfToken)
      } catch (error) {
        console.error("Error fetching CSRF token:", error)
      }
    }

    fetchCsrfToken()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    const response = await fetch(`${apiBaseUrl}/api/journal-signup`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "CSRF-Token": csrfToken,
      },
      body: JSON.stringify(formData),
    })
    const data = await response.json()
    setMessage(data.message)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    })
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Newsletter Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
      {message && <p className="mt-4 text-center text-green-500">{message}</p>}
    </div>
  )
}

export default Newsletter
