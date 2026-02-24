import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ContactForm = ({ children }: { children: React.ReactNode }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSubmitted(false);
      setForm({ fullName: "", email: "", phone: "", company: "", message: "" });
    }
  };

  const inputClass =
    "w-full bg-secondary/50 border border-border rounded-sm px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-background border-border max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl font-bold text-center">
            {submitted ? "Message Sent!" : "Contact Us"}
          </DialogTitle>
        </DialogHeader>

        {submitted ? (
          <p className="text-muted-foreground font-body text-sm text-center py-6">
            Thank you for reaching out. We'll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name" required maxLength={100} className={inputClass} />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" required maxLength={255} className={inputClass} />
            <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Phone Number" maxLength={20} className={inputClass} />
            <input name="company" value={form.company} onChange={handleChange} placeholder="Company" maxLength={100} className={inputClass} />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message" required maxLength={1000} rows={4} className={inputClass} />
            <button type="submit" className="w-full bg-gold-gradient text-primary-foreground font-body font-semibold px-8 py-4 rounded-sm text-sm uppercase tracking-widest hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
