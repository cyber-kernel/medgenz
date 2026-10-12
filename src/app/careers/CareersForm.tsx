"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

const workSegments = [
  "Hospital Equipments",
  "Medical Gas Pipeline",
  "Modular Operation Theatre",
  "Cleanroom Equipments",
];

const contributions = [
  "Marketing",
  "Designing",
  "Product Development",
  "Want to give advice",
  "Others",
];

interface CareersFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  segment: string;
  contribution: string;
  description: string;
}

const initialFormData: CareersFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  segment: "",
  contribution: "",
  description: "",
};

export default function CareersForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [autoReplySent, setAutoReplySent] = useState(true);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const message = [
      `Work segment: ${formData.segment}`,
      `Contribution: ${formData.contribution || "Not specified"}`,
      "",
      "Description:",
      formData.description.trim() || "Not provided",
    ].join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
          email: formData.email,
          phone: formData.phone,
          subject: "Career Application",
          designation: "Personal",
          message,
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error || "Failed to send your application. Please try again.");
        setStatus("error");
        return;
      }

      setAutoReplySent(result.autoReplyStatus === "sent");
      setStatus("success");
      setFormData(initialFormData);
    } catch {
      setErrorMessage("An unexpected error occurred. Please try again.");
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-600 focus:ring-4 focus:ring-brand-600/10";
  const labelClass = "mb-2 block text-sm font-semibold text-slate-800";

  return (
    <div className="min-h-screen bg-slate-50 px-4 pb-20 pt-32 md:pt-40">
      <section className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.25em] text-brand-600">
            Build your future with us
          </p>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            Careers at <span className="text-brand-600">MedGenz</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Tell us about yourself and how you would like to contribute to our team.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
          {status === "success" ? (
            <div className="py-10 text-center" role="status">
              <CheckCircle2 className="mx-auto mb-5 h-14 w-14 text-green-600" />
              <h2 className="text-2xl font-bold text-slate-900">Application received</h2>
              <p className="mx-auto mt-3 max-w-lg text-slate-600">
                {autoReplySent
                  ? "Thank you for your interest in MedGenz. A confirmation email has been sent, and our team will review your application."
                  : "Thank you for your interest in MedGenz. Your application has been received, but we could not send the confirmation email."}
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-brand-600"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <fieldset>
                <legend className={labelClass}>Name <span className="text-red-600">*</span></legend>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label>
                    <span className="sr-only">First name</span>
                    <input
                      required
                      autoComplete="given-name"
                      maxLength={59}
                      value={formData.firstName}
                      onChange={(event) =>
                        setFormData({ ...formData, firstName: event.target.value })
                      }
                      placeholder="First"
                      className={inputClass}
                    />
                    <span className="mt-1 block text-xs text-slate-500">First</span>
                  </label>
                  <label>
                    <span className="sr-only">Last name</span>
                    <input
                      required
                      autoComplete="family-name"
                      maxLength={59}
                      value={formData.lastName}
                      onChange={(event) =>
                        setFormData({ ...formData, lastName: event.target.value })
                      }
                      placeholder="Last"
                      className={inputClass}
                    />
                    <span className="mt-1 block text-xs text-slate-500">Last</span>
                  </label>
                </div>
              </fieldset>

              <div>
                <label htmlFor="career-email" className={labelClass}>
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  id="career-email"
                  required
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="career-phone" className={labelClass}>
                  Contact No. <span className="text-red-600">*</span>
                </label>
                <input
                  id="career-phone"
                  required
                  type="tel"
                  autoComplete="tel"
                  maxLength={40}
                  value={formData.phone}
                  onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                  className={inputClass}
                />
              </div>

              <fieldset>
                <legend className={labelClass}>
                  Which segment you want to work <span className="text-red-600">*</span>
                </legend>
                <div className="space-y-2">
                  {workSegments.map((segment) => (
                    <label key={segment} className="flex cursor-pointer items-center gap-3 text-sm text-slate-700">
                      <input
                        required
                        type="radio"
                        name="segment"
                        value={segment}
                        checked={formData.segment === segment}
                        onChange={(event) =>
                          setFormData({ ...formData, segment: event.target.value })
                        }
                        className="h-4 w-4 accent-brand-600"
                      />
                      {segment}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className={labelClass}>What you can do for us?</legend>
                <div className="space-y-2">
                  {contributions.map((contribution) => (
                    <label key={contribution} className="flex cursor-pointer items-center gap-3 text-sm text-slate-700">
                      <input
                        type="radio"
                        name="contribution"
                        value={contribution}
                        checked={formData.contribution === contribution}
                        onChange={(event) =>
                          setFormData({ ...formData, contribution: event.target.value })
                        }
                        className="h-4 w-4 accent-brand-600"
                      />
                      {contribution}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="career-description" className={labelClass}>
                  Description
                </label>
                <textarea
                  id="career-description"
                  rows={5}
                  maxLength={4000}
                  value={formData.description}
                  onChange={(event) =>
                    setFormData({ ...formData, description: event.target.value })
                  }
                  placeholder="Enter your details and description"
                  className={`${inputClass} resize-y`}
                />
              </div>

              {status === "error" && (
                <div
                  className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
                  role="alert"
                >
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  <p>{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-4 font-bold uppercase tracking-wide text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
