"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { CheckCircle, Sparkles, FileCheck, HelpCircle, Star, Phone } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="mediumSmall"
      sizing="mediumSizeLargeTitles"
      background="circleGradient"
      cardStyle="inset"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Best Consultancy"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Documents", id: "documents" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Call Now", href: "tel:9427468797" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardTestimonial
          title="Best Consultancy Services Center"
          description="All Government & Online Work at One Place"
          tag="Trusted by 1000+ Customers"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          background={{ variant: "circleGradient" }}
          testimonials={[
            {
              name: "Rajesh Patel",              handle: "Small Business Owner",              testimonial: "Got my MSME registration done in just 2 days. Excellent service!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-using-laptop_1170-336.jpg?_wi=1",              imageAlt: "Rajesh Patel"
            },
            {
              name: "Priya Sharma",              handle: "Working Professional",              testimonial: "Very helpful with my ITR filing. Quick and hassle-free process.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-mature-businessman-with-folded-arms_23-2147955369.jpg?_wi=1",              imageAlt: "Priya Sharma"
            },
            {
              name: "Vikram Singh",              handle: "Startup Founder",              testimonial: "Best consultancy in Ahmedabad. Highly recommended for all govt work.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-successful-businesswoman-suit-cross-arms-chest-smile-look-confident-stan_1258-118782.jpg?_wi=1",              imageAlt: "Vikram Singh"
            }
          ]}
          buttons={[
            { text: "Call: 9427468797", href: "tel:9427468797" },
            { text: "WhatsApp Now", href: "https://wa.me/919427468797" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/modern-equipped-computer-lab_23-2149241264.jpg"
          imageAlt="Best Consultancy Services Center"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardMedia
          title="Our Government Services"
          description="Complete solutions for all your government and online documentation needs. Fast, reliable, and professional service delivery."
          tag="20+ Services Available"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: "pan-card",              title: "PAN Card",              description: "Apply for new PAN card or correction of existing details. Quick processing.",              tag: "Income Tax",              imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-woman-tourist-holding-passport-with-tickets-pointing-with-index-finger-them-smiling-cheerfully-isolated-blue-wall_141793-13439.jpg?_wi=1",              imageAlt: "PAN Card Service"
            },
            {
              id: "aadhaar",              title: "Aadhaar Card",              description: "New Aadhaar enrollment and updates. Biometric registration assistance.",              tag: "Identity",              imageSrc: "http://img.b2bpic.net/free-photo/happy-businessman-paper-plane_23-2147643081.jpg?_wi=1",              imageAlt: "Aadhaar Card Service"
            },
            {
              id: "voting",              title: "Voter ID (Election Card)",              description: "New voter registration and correction. Instant form submission.",              tag: "Civic",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-red-green-peppers-hot-peppers-wooden-box-red-white-checkered-tablecloth-notebook-red-pencil-woman-hand-nude-background_140725-139480.jpg?_wi=1",              imageAlt: "Voter ID Service"
            },
            {
              id: "dl-rto",              title: "Driving License & RTO",              description: "Driving license application, renewal, and RTO work. Expert guidance.",              tag: "Transportation",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-holding-map_23-2148938533.jpg?_wi=1",              imageAlt: "Driving License Service"
            },
            {
              id: "passport",              title: "Passport Services",              description: "Passport application, renewal, and related documents. Hassle-free process.",              tag: "Travel",              imageSrc: "http://img.b2bpic.net/free-photo/boots-near-tourist-supplies-suitcase_23-2147776881.jpg?_wi=1",              imageAlt: "Passport Service"
            },
            {
              id: "marriage",              title: "Marriage Certificate",              description: "Marriage registration and certificate issuance. Legal documentation.",              tag: "Legal",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-red-green-peppers-hot-peppers-wooden-box-red-white-checkered-tablecloth-notebook-red-pencil-woman-hand-nude-background_140725-139480.jpg?_wi=2",              imageAlt: "Marriage Certificate Service"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[{ type: "text", content: "Why Choose Best Consultancy?" }]}
          useInvertedBackground={false}
          buttons={[{ text: "Contact Us Today", href: "#contact" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="documents" data-section="documents">
        <ProductCardFour
          title="Documents Required"
          description="Know exactly what documents you need to bring for each service. We guide you through the entire process."
          tag="Quick Reference"
          tagIcon={FileCheck}
          tagAnimation="slide-up"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "aadhaar-docs",              name: "Aadhaar Update",              price: "Required Documents",              variant: "Identity Proof, Address Proof, Phone Number",              imageSrc: "http://img.b2bpic.net/free-photo/happy-businessman-paper-plane_23-2147643081.jpg?_wi=2",              imageAlt: "Aadhaar Documents"
            },
            {
              id: "pan-docs",              name: "PAN Card",              price: "Required Documents",              variant: "Aadhaar, Photo, Address Proof",              imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-woman-tourist-holding-passport-with-tickets-pointing-with-index-finger-them-smiling-cheerfully-isolated-blue-wall_141793-13439.jpg?_wi=2",              imageAlt: "PAN Card Documents"
            },
            {
              id: "dl-docs",              name: "Driving License",              price: "Required Documents",              variant: "Aadhaar, Address Proof, Photo, Light Bill",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-holding-map_23-2148938533.jpg?_wi=2",              imageAlt: "Driving License Documents"
            },
            {
              id: "passport-docs",              name: "Passport",              price: "Required Documents",              variant: "Aadhaar, Birth Certificate, Marriage Certificate",              imageSrc: "http://img.b2bpic.net/free-photo/boots-near-tourist-supplies-suitcase_23-2147776881.jpg?_wi=2",              imageAlt: "Passport Documents"
            },
            {
              id: "msme-docs",              name: "MSME Registration",              price: "Required Documents",              variant: "Aadhaar, PAN, Business Address Proof",              imageSrc: "http://img.b2bpic.net/free-photo/busy-client_1098-15675.jpg",              imageAlt: "MSME Documents"
            },
            {
              id: "ration-docs",              name: "Ration Card",              price: "Required Documents",              variant: "Aadhaar, Address Proof, Bank Passbook",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-red-green-peppers-hot-peppers-wooden-box-red-white-checkered-tablecloth-notebook-red-pencil-woman-hand-nude-background_140725-139480.jpg?_wi=3",              imageAlt: "Ration Card Documents"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          cardTitle="Customer Reviews"
          cardTag="Trusted & Verified"
          cardTagIcon={Star}
          cardAnimation="slide-up"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "test-1",              name: "Rajesh Patel",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-using-laptop_1170-336.jpg?_wi=2",              imageAlt: "Rajesh Patel"
            },
            {
              id: "test-2",              name: "Priya Sharma",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-mature-businessman-with-folded-arms_23-2147955369.jpg?_wi=2",              imageAlt: "Priya Sharma"
            },
            {
              id: "test-3",              name: "Vikram Singh",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-successful-businesswoman-suit-cross-arms-chest-smile-look-confident-stan_1258-118782.jpg?_wi=2",              imageAlt: "Vikram Singh"
            },
            {
              id: "test-4",              name: "Anjali Verma",              imageSrc: "http://img.b2bpic.net/free-photo/man-shirt-tie-standing_171337-10746.jpg",              imageAlt: "Anjali Verma"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers to common questions about our government services and documentation process."
          tag="Got Questions?"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "faq-1",              title: "How long does PAN card application take?",              content: "PAN card application through us takes 3-5 working days. We handle all documentation and submission, and you receive your PAN number via SMS once approved."
            },
            {
              id: "faq-2",              title: "What documents do I need for Aadhaar update?",              content: "You need your Aadhaar number, recent photo, current address proof (light bill or rent agreement), and a valid identity proof. We assist with the biometric registration and form submission."
            },
            {
              id: "faq-3",              title: "Can I apply for passport if I'm out of Ahmedabad?",              content: "Yes, we can help with postal application process. You'll need to submit documents by post and visit the PSK office for fingerprinting. We guide you through every step."
            },
            {
              id: "faq-4",              title: "How much does ITR filing cost?",              content: "ITR filing costs depend on your income category. Contact us at 9427468797 or WhatsApp for a detailed quote based on your specific requirements."
            },
            {
              id: "faq-5",              title: "What is the process for GST registration?",              content: "GST registration requires business details, PAN, bank account information, and address proof. We handle online filing and approval tracking. Typically takes 1-2 weeks."
            },
            {
              id: "faq-6",              title: "Do you offer home visit service?",              content: "Yes, for bulk document work or specific situations, we can arrange home visits. Contact us at 9427468797 for availability and charges."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Contact Best Consultancy"
          description="Reach out to us for any government services or documentation needs. We're here to help!"
          tagIcon={Phone}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/close-up-toys-accessories-tourist_23-2148232449.jpg"
          imageAlt="Ahmedabad Location"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe for Updates"
          termsText="By subscribing, you agree to our Terms and Privacy Policy."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",              items: [
                { label: "PAN Card", href: "#services" },
                { label: "Aadhaar Services", href: "#services" },
                { label: "Passport", href: "#services" },
                { label: "GST Registration", href: "#services" },
                { label: "ITR Filing", href: "#services" }
              ]
            },
            {
              title: "Contact",              items: [
                { label: "Phone: 9427468797", href: "tel:9427468797" },
                { label: "Email: bestconsultancy702@gmail.com", href: "mailto:bestconsultancy702@gmail.com" },
                { label: "WhatsApp", href: "https://wa.me/919427468797" },
                { label: "Address", href: "#contact" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "FAQ", href: "#faq" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Privacy Policy", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2024 Best Consultancy. All rights reserved. Shop No. 1, Opp Anas Park, Ibrahim Masjid Road, Fatehwadi, Sarkhej Road, Ahmedabad – 380055"
        />
      </div>
    </ThemeProvider>
  );
}
