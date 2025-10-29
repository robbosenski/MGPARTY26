import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { TickerBanner } from '../components/TickerBanner';

export function PoliciesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <TickerBanner />
      <header
        className="sticky z-30 bg-black/80 backdrop-blur border-b border-white/10"
        style={{ top: '48px' }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="text-sm uppercase tracking-[0.3em] text-white/80 hover:text-white transition-colors">
            ← Back to Home
          </Link>
          <span className="text-white/70 text-xs tracking-[0.4em] uppercase">Policies &amp; Conditions</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        <section className="space-y-4 text-white/80">
          <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Policies &amp; Conditions
          </h1>
          <ul className="space-y-3 text-lg leading-relaxed">
            <li>
              Please find the PDF version of our policy{' '}
              <a href="/files/bizarro_privacy_policy.pdf" className="text-pink-300 underline hover:text-pink-200" target="_blank" rel="noreferrer">
                here
              </a>
              .
            </li>
            <li>
              Please find our cookie policy{' '}
              <a href="/files/bizarro_cookie_policy.pdf" className="text-pink-300 underline hover:text-pink-200" target="_blank" rel="noreferrer">
                here
              </a>
              .
            </li>
            <li>
              Please find our event Ticketing Terms &amp; Conditions{' '}
              <a href="/files/bizarro_ticket_terms.pdf" className="text-pink-300 underline hover:text-pink-200" target="_blank" rel="noreferrer">
                here
              </a>
              .
            </li>
          </ul>
        </section>

        <section className="space-y-6 text-white/80">
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-white tracking-tight">We commit to you</h2>
            <p className="leading-relaxed">
              You trust us with your personal information, so we strive to always be clear and honest about how and why we will use it.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-white tracking-tight">Privacy Notice</h2>
            <p className="leading-relaxed">
              Our goal is to maintain your trust and confidence by handling your personal information with respect and putting you in control.
            </p>
            <p className="leading-relaxed">
              It’s important that you know what personal information Bizarro (herein referred to as Bizarro or “us”) collects about you, and how we use it.
            </p>
            <p className="leading-relaxed">
              If you’d like further information or have any questions, please contact us using the details in the “Contact” section below.
              If we ever make any major changes to our privacy practices, we’ll let you know. If necessary, we’ll also ask for your permission.
            </p>
          </article>

          <article className="space-y-4">
            <h3 className="text-xl font-semibold text-white tracking-tight">Summary</h3>
            <ul className="space-y-3 list-disc list-inside leading-relaxed">
              <li>
                <strong>What Information We Have &amp; Where We Get It</strong> — We collect and store different types of information about you when you create an account, buy tickets for our events, attend our events, contact us, and use our websites, apps and social media.
              </li>
              <li>
                <strong>How We Use Your Information &amp; Why</strong> — We collect and use your information for many reasons such as helping you get into the shows you love, sharing news, marketing, and as otherwise required by law.
              </li>
              <li>
                <strong>Who We Share Your Information With &amp; Why</strong> — We share your information with Event Partner(s) — such as co-promoters, ticketing agents, artists or venues — as well as other third-parties associated with the service provided.
              </li>
              <li>
                <strong>Your Choices &amp; Rights</strong> — Among other rights, you can choose whether to receive marketing from us. You also have the right to access the information we have about you.
              </li>
              <li>
                <strong>Looking After Your Information</strong> — We’re always taking steps to make sure your information is protected and to delete it securely when we no longer need it.
              </li>
            </ul>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-white tracking-tight">What Information We Have &amp; Where We Get It</h2>
            <p className="leading-relaxed">
              When providing our products and services, we collect certain categories of personal information such as your contact details, purchase history, internet and electronic activity, and in some cases sensitive personal information where required or where you have provided consent.
            </p>
            <p className="leading-relaxed">
              When we collect your personal information, we store it in our customer databases, such as our customer-services platforms to manage any queries you have, and our marketing systems so we can communicate with you, subject to your choices.
            </p>
            <ul className="space-y-3 list-disc list-inside leading-relaxed">
              <li>
                <strong>When you create an account and buy from us.</strong> When you create an account, purchase a product from us (such as VIP experiences or merchandise), we will collect your contact and billing information directly from you. When you register for a presale, we collect your contact information, including name, street address, postcode, email, phone number and credit card number.
              </li>
              <li>
                <strong>When you buy tickets to our events.</strong> When you purchase tickets to one of our events, or an event for which we are a co-promoter, or have a ticket transferred to you by a friend, we will receive your information from ticket agents or e-commerce platforms used to sell tickets for our promoted and co-promoted events, or the venues we hire to put on the event. This includes your name, contact details and ticket purchase information, such as number of tickets bought and seat number(s).
              </li>
              <li>
                <strong>When you attend one of our events.</strong> When you attend one of our events, we collect your information via our free WiFi (if you register to use it) and, if available, via cashless payment wristbands which can be used onsite for access and purchases.
              </li>
              <li>
                <strong>Fan images and CCTV.</strong> When attending an event at a venue or festival we collect your image and likeness whether this is through CCTV cameras or videographers or photographers at venue or festival sites. This is primarily collected for the safety and security of our fans; however we sometimes use these images in our marketing or social media posts.
              </li>
              <li>
                <strong>When using our website and apps.</strong> When you use our websites or apps, subject to your choices, we use tracking tools like browser cookies and web beacons and technology like GPS and WiFi to collect information about you. This includes your browser and device, IP address, location, the site you came from, what you did and didn’t use our site/app for, or the site you visit when you leave us. Our site may also serve third-party content that contains their own cookies or tracking technologies. For more information on this, see our Cookies Policy.
              </li>
              <li>
                <strong>On-site safeguarding when attending an event.</strong> When you attend an event we process personal information about you to enforce appropriate access management, visitor wellbeing, and any experiences or incidents onsite.
              </li>
              <li>
                <strong>When posting ratings or reviews.</strong> When you post ratings and reviews, including uploading images or videos as part of your review, we store this information in our platform alongside information about you as the reviewer.
              </li>
              <li>
                <strong>When you request accessible tickets.</strong> If you have accessibility requirements, we want to ensure you have the best experience when attending events. To do this, we need to collect details of your requirements. When you purchase accessible tickets, we record that request. Depending on your market, we may be required to validate your accessibility needs. We will inform you about this if we do.
              </li>
              <li>
                <strong>When entering competitions.</strong> When you enter competitions we run, we’ll use your information to administer your entry and contact you if you’ve been successful. If the prize is administered by a third party, we’ll let you know who they are.
              </li>
              <li>
                <strong>When you contact our fan-experience and customer-support teams.</strong> When you contact us with a query or provide feedback, we record that interaction for evidentiary purposes and to provide support.
              </li>
              <li>
                <strong>When you use social media and online public forums.</strong> When you use a social-media feature within our website or apps, post to social-media platforms, or post on a public space or one of our websites, the social-media site will provide us with some information about you, such as your name and the posts you make mentioning us.
              </li>
              <li>
                <strong>Geodemographic information.</strong> Subject to your choices, we collect or use suppliers such as advertising and marketing partners who collate geodemographic information (including age range, gender, or information about events you like or products you buy) which assists us in better personalizing our services to you. If you’d prefer that we do not do this, see the ‘Your Rights &amp; Choices’ section below.
              </li>
              <li>
                <strong>Information used for health &amp; safety purposes.</strong> Where required, we will collect information from ticket purchasers and attendees for compliance purposes related to infectious disease, to the extent required under applicable law. This includes names, contact details, seat locations, and entry/exit times. In situations where a third-party event organizer requires collection of health information (such as test results), please refer to their privacy policy and terms to understand how your information was collected and used.
              </li>
            </ul>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-white tracking-tight">How We Use Your Information &amp; Why</h2>
            <p className="leading-relaxed">
              This section explains how we use your information and the legal grounds (or purposes) for which we use it. Some purposes are primary (necessary to provide our services), others are secondary (provide additional value and subject to your choice).
            </p>
            <ol className="space-y-4 list-decimal list-inside leading-relaxed">
              <li>
                <strong>For the performance of our contract with you</strong>
                <ul className="mt-2 space-y-3 list-disc list-inside">
                  <li>
                    <strong>When you make purchases.</strong> We use your information when transacting with us (such as VIP experiences or merchandise) so we can process your order, take payment, send you confirmations and event-related emails, provide customer support, and register you for event presales.
                  </li>
                  <li>
                    <strong>Event Partner(s).</strong> We share your information with Event Partner(s) who provide services for the event so they can run the event on our behalf, allocate seating or notify you of changes.
                  </li>
                  <li>
                    <strong>Contests, competitions and referrals.</strong> When you enter competitions we run, we use your information to confirm your registration and to communicate with you about your entry. If you provide a friend’s information via our referral service, we only use it to provide the service requested.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Subject to your choices</strong>
                <ul className="mt-2 space-y-3 list-disc list-inside">
                  <li>
                    <strong>Marketing.</strong> To contact you with information or offers regarding upcoming events, products or services. You can change your marketing preferences at any time.
                  </li>
                  <li>
                    <strong>Advertising &amp; cookies.</strong> To deliver tailored advertising and marketing communications on our websites and apps (see our Cookies Policy).
                  </li>
                  <li>
                    <strong>Market research &amp; fan feedback.</strong> To conduct research and analysis to improve our products/services, or to contact you with satisfaction surveys or user research.
                  </li>
                  <li>
                    <strong>Images.</strong> We sometimes take photos or videos at events for marketing; signage onsite will notify you and you can request removal.
                  </li>
                  <li>
                    <strong>Personalization.</strong> To ensure our messages and website are relevant to you. You can turn personalization off.
                  </li>
                  <li>
                    <strong>Location-based services.</strong> Our apps may request location permission for functions like browsing events near you.
                  </li>
                  <li>
                    <strong>Crowd-management analytics.</strong> Some of our apps use analytics to help us allocate resources and manage crowds.
                  </li>
                  <li>
                    <strong>Accessibility.</strong> To process your health/accessibility information where explicit consent is provided.
                  </li>
                  <li>
                    <strong>Commercial partners.</strong> We sometimes work with Commercial Partners to provide value-add services; we’ll ask for permission where sharing isn’t necessary to perform the contract.
                  </li>
                </ul>
              </li>
              <li>
                <strong>For our overriding legitimate business interests</strong>
                <ul className="mt-2 space-y-3 list-disc list-inside">
                  <li>To prevent or detect unlawful behaviour, protect or enforce our rights or as otherwise permitted by law.</li>
                  <li>Event security — to protect our fans and ensure the security of our operations and those of our Event Partners.</li>
                </ul>
              </li>
              <li>
                <strong>To protect your vital interests</strong>
                <ul className="mt-2 space-y-3 list-disc list-inside">
                  <li>
                    <strong>Health &amp; Safety.</strong> Any information collected in compliance with health and safety requirements will only be used to contact attendees or shared with relevant officials and is regularly deleted.
                  </li>
                </ul>
              </li>
            </ol>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-white tracking-tight">Who We Share Your Information With &amp; Why</h2>
            <ul className="space-y-3 list-disc list-inside leading-relaxed">
              <li>Entities that perform services on our behalf (third-parties) located in or outside your jurisdiction: cloud hosting providers, payment platforms, outsourced customer service teams, information-security providers.</li>
              <li>Event Partners: co-promoters, ticketing agents, venues, artists — we share your information so they can run the event and for other reasons described in their respective privacy policies.</li>
              <li>Commercial Partners: third-party data controllers we collaborate with to provide value-add services (travel, sponsors, exclusive presale deals). The specific partners vary by service.</li>
              <li>Disclosures under law: as required by court order/subpoena, government agency, investigatory body, or in fraud investigation.</li>
              <li>Successors: In event of sale of our business, we may share information with the successor to all or part of our business. The new data-controller will notify you of the change.</li>
              <li>If we need to share your information for reasons not described, we will inform you before doing so.</li>
            </ul>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-white tracking-tight">Your Choices &amp; Rights</h2>
            <p className="leading-relaxed">
              Your rights and choices may differ depending on your country of residence.
            </p>
            <h3 className="text-xl font-semibold text-white tracking-tight">Your choices</h3>
            <ul className="space-y-3 list-disc list-inside leading-relaxed">
              <li>Stop receiving marketing communications by updating preferences in your account or unsubscribing via email.</li>
              <li>Control cookies and tracking tools via our Cookies Policy and website/app settings.</li>
              <li>Opt out of location-tracking and push notifications via device settings. Stop web push notifications through browser settings.</li>
              <li>Manage personalization settings within your account or contact us for assistance.</li>
              <li>Opt out of fan-feedback communications through unsubscribe links or by contacting us.</li>
            </ul>
            <h3 className="text-xl font-semibold text-white tracking-tight">Your rights</h3>
            <p className="leading-relaxed">
              Depending on your market, specific laws regulate privacy rights (e.g., GDPR, LGPD, CCPA). You may designate an authorised agent to submit requests on your behalf. We may need identity verification before processing requests.
            </p>
            <ul className="space-y-3 list-disc list-inside leading-relaxed">
              <li>Right to request deletion or erasure of your information (except where you hold a ticket or transaction for a future event).</li>
              <li>Right to request a copy of your information (right of access).</li>
              <li>Right to correct, amend or update information you have provided.</li>
              <li>Right to contest any automated decision we make about you. If we use an automated decision, we will make it clear.</li>
            </ul>
            <p className="leading-relaxed">
              To exercise these rights, contact us using the email associated with your account. We carefully assess every request, but your rights and the time-period for action may differ according to your residence; in some cases we may not always be required to comply, but we will explain why.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-white tracking-tight">Looking After Your Information</h2>
            <p className="leading-relaxed">
              We have security measures in place to protect your information. The measures we use depend on the type of information collected. If you believe an unauthorised account has been created in your name, contact us. We are not responsible for third-party websites and apps: if you click a third-party link, you leave our domain and our policy doesn’t apply — always review the policy of other sites you visit.
            </p>
            <p className="leading-relaxed">
              We retain your information only for as long as required to provide you with our services, for the purposes outlined in this policy, and any legal purposes requiring retention. We securely delete your information when no longer required.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-white tracking-tight">Transfers of Your Personal Information</h2>
            <p className="leading-relaxed">
              As a globally-oriented company, we sometimes need to transfer your information outside your country of residence. This may occur where we rely on shared services provided by the Bizarro group of companies, when our global platforms are designed and maintained outside your market, or when world-class acts tour and your information needs to move internationally to provide a seamless experience.
            </p>
            <p className="leading-relaxed">
              When transferring information outside your local market, we ensure appropriate safeguards are in place (e.g., Standard Contractual Clauses) and the recipient complies with privacy standards of the exporting country. We will notify you of any material changes to this policy as required by law.
            </p>
            <p className="leading-relaxed">
              Last updated: <span className="whitespace-nowrap">15 April 2025</span>
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-white tracking-tight">Contact Us</h2>
            <p className="leading-relaxed">
              We have a global privacy team in information-security and privacy that ensures end-to-end protection of your personal information throughout its lifecycle. If you have any questions about the above or our approach, our dedicated Privacy Office is here to help: <a href="mailto:hello@bizarro.com.au" className="text-pink-300 underline hover:text-pink-200">hello@bizarro.com.au</a>
            </p>
          </article>
        </section>

        <section className="space-y-6 text-white/80 border-t border-white/10 pt-10">
          <h2 className="text-2xl font-semibold text-white tracking-tight">Event Ticketing Terms &amp; Conditions</h2>
          <p className="leading-relaxed">
            [Insert the full Ticketing Terms &amp; Conditions text here with identical updates: replace “Kicks Entertainment” with “Bizarro”, replace “Live Nation Entertainment” or “Live Nation” with the relevant “Bizarro group of companies” or simply “Bizarro”, update contact email, update any references to ticketing agents, websites, etc.]
          </p>

          <h2 className="text-2xl font-semibold text-white tracking-tight">Camping Terms &amp; Conditions</h2>
          <p className="leading-relaxed">
            [Insert the full Camping Terms &amp; Conditions text here, making the same replacements: “Bizarro” for “Kicks Entertainment” or “Live Nation”, update any contact or branding references accordingly.]
          </p>
        </section>
      </main>
    </div>
  );
}
