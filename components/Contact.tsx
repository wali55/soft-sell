import { FormEvent } from "react";

type FormDataType = {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
};

type ErrorsType = {
  name?: string;
  email?: string;
  company?: string;
  licenseType?: string;
  message?: string;
};

const Contact = ({handleSubmit, formData, setFormData, errors}: {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    formData: FormDataType;
    setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
    errors: ErrorsType;
}) => {
    return (
        <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>
        <form
          className="max-w-2xl mx-auto space-y-4 flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] py-2 px-4 rounded-lg focus:outline-neutral-300 dark:bg-neutral-900"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] py-2 px-4 rounded-lg focus:outline-neutral-300 dark:bg-neutral-900"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Company"
              className="w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] py-2 px-4 rounded-lg focus:outline-neutral-300 dark:bg-neutral-900"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />
            {errors.company && (
              <p className="text-red-500 text-sm">{errors.company}</p>
            )}
          </div>
          <div>
            <select
              className="w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] py-2 px-4 rounded-lg focus:outline-neutral-300 text-neutral-600 dark:text-neutral-400 dark:bg-neutral-900"
              value={formData.licenseType}
              onChange={(e) =>
                setFormData({ ...formData, licenseType: e.target.value })
              }
            >
              <option value="">Select License Type</option>
              <option value="SaaS">SaaS</option>
              <option value="Desktop">Desktop</option>
              <option value="Enterprise">Enterprise</option>
            </select>
            {errors.licenseType && (
              <p className="text-red-500 text-sm">{errors.licenseType}</p>
            )}
          </div>
          <div>
            <textarea
              placeholder="Message"
              className="w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] py-2 px-4 rounded-lg focus:outline-neutral-300 dark:bg-neutral-900"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
          <button className="bg-neutral-800 dark:bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-neutral-900 dark:hover:bg-emerald-600 transition cursor-pointer font-semibold">
            Submit
          </button>
        </form>
      </section>
    )
}

export default Contact;