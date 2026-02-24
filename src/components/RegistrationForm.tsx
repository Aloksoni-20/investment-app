import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const registrationTiers = [
  { label: "Early Bird Registration", period: "01/03/2026 – 31/03/2026", price: "R 5,000" },
  { label: "Standard Registration", period: "01/04/2026 – 15/04/2026", price: "R 6,000" },
  { label: "Late Registration", period: "16/04/2026 – 30/04/2026", price: "R 7,000" },
];

const RegistrationForm = ({ children }: { children: React.ReactNode }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    type: "" as "" | "Startup" | "Investor",
    position: "",
    city: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTypeChange = (type: "Startup" | "Investor") => {
    setForm({ ...form, type });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSubmitted(false);
      setForm({ fullName: "", email: "", phone: "", company: "", type: "", position: "", city: "" });
    }
  };

  const inputClass =
    "w-full bg-secondary/50 border border-border rounded-sm px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";
  const selectClass =
    "w-full bg-secondary/50 border border-border rounded-sm px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors appearance-none";

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-background border-border max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl font-bold text-center">
            {submitted ? "Registration Received!" : "Register Now"}
          </DialogTitle>
        </DialogHeader>

        {submitted ? (
          <div className="space-y-6">
            <p className="text-muted-foreground font-body text-sm text-center">
              Please select your registration tier below to complete payment.
            </p>
            <div className="grid gap-4">
              {registrationTiers.map((tier) => (
                <div key={tier.label} className="gold-border rounded-sm p-4 text-center">
                  <h3 className="font-heading text-base font-bold mb-1">{tier.label}</h3>
                  <p className="text-muted-foreground font-body text-xs mb-2">{tier.period}</p>
                  <p className="text-primary font-heading text-xl font-bold mb-2">{tier.price}</p>
                  <p className="text-muted-foreground font-body text-xs">Accepts Visa, MasterCard & PayPal</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground font-body text-xs text-center">
              Payment integration coming soon. Contact{" "}
              <a href="mailto:info@investconnectpitch.com" className="text-primary hover:underline">
                info@investconnectpitch.com
              </a>{" "}
              for assistance.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name" required maxLength={100} className={inputClass} />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" required maxLength={255} className={inputClass} />
            <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Phone Number" required maxLength={20} className={inputClass} />
            <input name="company" value={form.company} onChange={handleChange} placeholder="Company" maxLength={100} className={inputClass} />
            <div className="flex gap-6 py-2">
              {(["Startup", "Investor"] as const).map((t) => (
                <label key={t} className="flex items-center gap-2 cursor-pointer font-body text-sm text-foreground">
                  <input type="radio" name="type" checked={form.type === t} onChange={() => handleTypeChange(t)} className="accent-primary" required />
                  {t}
                </label>
              ))}
            </div>
            <input name="position" value={form.position} onChange={handleChange} placeholder="Position" maxLength={100} className={inputClass} />
            <select name="city" value={form.city} onChange={handleChange} required className={selectClass}>
              <option value="" disabled>City of Attendance</option>
              <option value="Johannesburg">Johannesburg – 13 May 2026</option>
              <option value="Cape Town">Cape Town – 20 May 2026</option>
            </select>
            <button type="submit" className="w-full bg-gold-gradient text-primary-foreground font-body font-semibold px-8 py-4 rounded-sm text-sm uppercase tracking-widest hover:opacity-90 transition-opacity">
              Register Now
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationForm;
