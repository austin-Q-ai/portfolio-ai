import { useState, useEffect } from "react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  owner: string;
}

const ContactGate = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    owner: process.env.NEXT_PUBLIC_FIRST_NAME || "Chai",
  });

  useEffect(() => {
    // Check if user already submitted the form
    const hasSubmitted = localStorage.getItem("contactFormSubmitted");
    if (hasSubmitted) {
      setIsOpen(false);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Store in localStorage for local state management
        localStorage.setItem("contactFormData", JSON.stringify(formData));
        localStorage.setItem("contactFormSubmitted", "true");
      }
      
      // Close the modal
      setIsOpen(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      // You might want to show an error message to the user here
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-lg border border-tertiary bg-secondary p-6 shadow-xl">
        <h2 className="mb-6 text-2xl font-bold">Welcome to My Portfolio!</h2>
        <p className="mb-6 text-gray-300">Please share your contact information to continue:</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name *
            </label>
            <input
              type="text"
              id="name"
              required
              className="mt-1 block w-full rounded-md border border-tertiary bg-secondary px-3 py-2 text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email *
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full rounded-md border border-tertiary bg-secondary px-3 py-2 text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="mt-1 block w-full rounded-md border border-tertiary bg-secondary px-3 py-2 text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Continue to Portfolio
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactGate;