'use client'

export default function LearnMoreForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name') || ''
    const email = formData.get('email') || ''
    const role = formData.get('role') || ''
    const subject = encodeURIComponent('Request an online presentation of Better-than-Freehold™')
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nRole: ${role}\n\nPlease contact me to arrange an online presentation.`
    )
    window.location.href = `mailto:info@betterthanfreehold.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-btf-accent focus:border-btf-accent transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-btf-accent focus:border-btf-accent transition-colors"
            placeholder="your@email.com"
            required
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
            Role
          </label>
          <select
            id="role"
            name="role"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-btf-accent focus:border-btf-accent transition-colors"
          >
            <option value="">Select your role</option>
            <option value="buyer">Buyer</option>
            <option value="owner">Foreign Property Owner</option>
            <option value="developer">Property Developer</option>
            <option value="lawyer">Legal Professional</option>
            <option value="investor">Investor</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-btf-accent text-btf-dark px-8 py-3 rounded-lg text-lg font-semibold hover:bg-btf-dark hover:text-btf-accent transition-colors border-2 border-btf-accent"
          >
            Request Presentation
          </button>
        </div>
      </form>
    </div>
  )
}


