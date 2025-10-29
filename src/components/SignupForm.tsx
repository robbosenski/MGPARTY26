import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSupabaseClient } from '../lib/supabaseClient';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

export function SignupForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneCountry: '+61',
    phoneNumber: '',
    updates: false,
    smsOptIn: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setSubmitted(false);

    try {
      const supabase = getSupabaseClient();
      const tableName = import.meta.env.VITE_SUPABASE_TABLE || 'signups';

      const { error } = await supabase.from(tableName).insert([
        {
          first_name: formData.firstName.trim(),
          last_name: formData.lastName.trim(),
          email: formData.email.toLowerCase().trim(),
          phone_country: formData.phoneCountry,
          phone_number: formData.phoneNumber.trim() || null,
          email_opt_in: formData.updates,
          sms_opt_in: formData.smsOptIn,
          submitted_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        throw error;
      }

      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneCountry: '+61',
        phoneNumber: '',
        updates: false,
        smsOptIn: false,
      });

      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error('Failed to submit form', err);
      setErrorMessage('Something went wrong saving your details. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={ref}
      id="signup"
      className="relative py-32 px-6"
    >
      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-6">
            Be the first to know.
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto">
            Sign up for updates, pre-sale access and behind-the-scenes news as we prepare for the next era of Mardi Gras PARTY.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
        >
          {errorMessage && (
            <div className="rounded-xl border border-pink-500/40 bg-pink-500/10 px-4 py-3 text-sm text-pink-100">
              {errorMessage}
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name" className="text-white/90">
                First name <span className="text-pink-300">*</span>
              </Label>
              <Input
                id="first-name"
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-pink-500 focus:ring-pink-500/20"
                placeholder="Your first name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name" className="text-white/90">
                Last name <span className="text-pink-300">*</span>
              </Label>
              <Input
                id="last-name"
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-pink-500 focus:ring-pink-500/20"
                placeholder="Your last name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white/90">
              Email<span className="text-pink-300">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-pink-500 focus:ring-pink-500/20"
              placeholder="your@email.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white/90">
              Mobile (optional)
            </Label>
            <div className="grid grid-cols-[110px_1fr] gap-3 items-center">
              <div>
                <Label htmlFor="phone-country" className="sr-only">Country code</Label>
                <select
                  id="phone-country"
                  value={formData.phoneCountry}
                  onChange={(e) => setFormData({ ...formData, phoneCountry: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 text-white rounded-md px-3 h-11 focus:border-pink-500 focus:ring-pink-500/20 text-sm"
                >
                  <option value="+61">+61 (AU)</option>
                  <option value="+64">+64 (NZ)</option>
                  <option value="+65">+65 (SG)</option>
                  <option value="+1">+1 (US)</option>
                  <option value="+44">+44 (UK)</option>
                </select>
              </div>
              <Input
                id="phone"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-pink-500 focus:ring-pink-500/20 h-11 text-sm"
                pattern="^[0-9\s()+-]{6,}$"
                inputMode="tel"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-2">
            <div className="flex items-start gap-2">
              <Checkbox
                id="updates"
                checked={formData.updates}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, updates: checked as boolean })
                }
                className="border-white/30 data-[state=checked]:bg-pink-600 data-[state=checked]:border-pink-600 mt-1"
                required
              />
              <span className="text-pink-300 mt-1" aria-hidden="true">*</span>
              <Label
                htmlFor="updates"
                className="text-white/70 cursor-pointer leading-relaxed"
              >
                By signing up to hear more from Mardi Gras Party, I acknowledge I've read the{' '}
                <Link to="/policies" className="underline text-pink-300 hover:text-pink-200">
                  Privacy Policy
                </Link>{' '}
                and am happy to be contacted by Bizarro, Sydney Gay &amp; Lesbian Mardi Gras &amp; their affiliates about their events via email
              </Label>
            </div>
            <div className="flex items-start space-x-3">
              <Checkbox
                id="sms-opt-in"
                checked={formData.smsOptIn}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, smsOptIn: checked as boolean })
                }
                className="border-white/30 data-[state=checked]:bg-pink-600 data-[state=checked]:border-pink-600 mt-1"
              />
              <Label
                htmlFor="sms-opt-in"
                className="text-white/70 cursor-pointer leading-relaxed"
              >
                I am happy to receive exciting texts about Mardi Gras Party from Bizarro via SMS
              </Label>
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-[#d900ed] hover:bg-[#e238ff] text-white py-6 text-lg transition-all duration-300 transform hover:scale-[1.02]"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending…' : submitted ? '✓ You\'re in!' : 'Count me in'}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
