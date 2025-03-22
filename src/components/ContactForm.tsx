
import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xldjjdqp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="glass rounded-xl p-6 md:p-8 fancy-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <Label htmlFor="name" className="block mb-2 text-sm font-medium">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-black/30 border-gray-700 focus:ring-2 focus:ring-purple focus:border-transparent"
          placeholder="Your name"
        />
      </div>
      
      <div className="mb-6">
        <Label htmlFor="email" className="block mb-2 text-sm font-medium">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-black/30 border-gray-700 focus:ring-2 focus:ring-purple focus:border-transparent"
          placeholder="your.email@example.com"
        />
      </div>
      
      <div className="mb-6">
        <Label htmlFor="message" className="block mb-2 text-sm font-medium">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-black/30 border-gray-700 focus:ring-2 focus:ring-purple focus:border-transparent"
          placeholder="Your message..."
        />
      </div>
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 text-center text-white bg-purple hover:bg-purple-light rounded-lg transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </Button>
    </motion.form>
  );
};

export default ContactForm;
