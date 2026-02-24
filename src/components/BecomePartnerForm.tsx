import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const BecomePartnerForm = ({ children }: { children: React.ReactNode }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    type: "" as "" | "Investor" | "Venture Capital" | "Bank",
    position: "",
    city: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSubmitted(false);
      setForm({ fullName: "", email: "", phone: "", company: "", type: "", position: "", city: "", message: "" });
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
            {submitted ? "Thank You!" : "Become a Partner"}
          </DialogTitle>
        </DialogHeader>

        {submitted ? (
          <p className="text-muted-foreground font-body text-sm text-center py-6">
            Your partnership inquiry has been received. Our team will contact you shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name" required maxLength={100} className={inputClass} />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" required maxLength={255} className={inputClass} />
            <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Phone Number" required maxLength={20} className={inputClass} />
            <input name="company" value={form.company} onChange={handleChange} placeholder="Company" required maxLength={100} className={inputClass} />
            <div className="flex gap-6 py-2 flex-wrap">
              {(["Investor", "Venture Capital", "Bank"] as const).map((t) => (
                <label key={t} className="flex items-center gap-2 cursor-pointer font-body text-sm text-foreground">
                  <input type="radio" name="type" checked={form.type === t} onChange={() => setForm({ ...form, type: t })} className="accent-primary" required />
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
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message" required maxLength={1000} rows={4} className={inputClass} />
            <button type="submit" className="w-full bg-gold-gradient text-primary-foreground font-body font-semibold px-8 py-4 rounded-sm text-sm uppercase tracking-widest hover:opacity-90 transition-opacity">
              Submit Partnership Inquiry
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BecomePartnerForm;
