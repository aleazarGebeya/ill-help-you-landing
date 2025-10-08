import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id='contact' className='py-16'>
      <div className='container mx-auto px-4 max-w-2xl text-center'>
        <h2 className='text-3xl font-bold mb-4'>Get In Touch</h2>
        <p className='text-gray-400 mb-8'>Have a project in mind? I would love to hear from you. Fill out the form below or send me an email.</p>
        <form className='space-y-4 text-left'>
          <Input type='text' placeholder='Your Name' className='bg-gray-800 border-gray-700' />
          <Input type='email' placeholder='Your Email' className='bg-gray-800 border-gray-700' />
          <Textarea placeholder='Your Message' className='bg-gray-800 border-gray-700' />
          <Button type='submit' className='w-full bg-purple-600 hover:bg-purple-700'>Send Message</Button>
        </form>
      </div>
    </section>
  );
}