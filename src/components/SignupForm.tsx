import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
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
            <div className="grid grid-cols-[110px_1fr] gap-3">
              <div className="space-y-1">
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
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-pink-500 focus:ring-pink-500/20 h-11"
                pattern="^[0-9\s()+-]{6,}$"
                inputMode="tel"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-2">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="updates"
                checked={formData.updates}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, updates: checked as boolean })
                }
                className="border-white/30 data-[state=checked]:bg-pink-600 data-[state=checked]:border-pink-600 mt-1"
                required
              />
              <Label
                htmlFor="updates"
                className="text-white/70 cursor-pointer leading-relaxed"
              >
                By signing up to hear more from Mardi Gras Party, I acknowledge I've read the Privacy Policy and am happy to be contacted by Bizarro, Sydney Gay & Lesbian Mardi Gras & their affiliates about their events via email <span className="text-pink-300">*</span> <span className="text-pink-300">*</span>
              </Label>
              <span className="text-pink-300" aria-hidden="true">*</span>
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
          >
            {submitted ? '✓ You\'re in!' : 'Count me in'}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
