import { Github, Instagram, Linkedin, Mail, Phone, Send, Twitch } from 'lucide-react'
import React , {useState} from 'react'
import { cn } from '@/lib/utils'
import { useToast } from '@/hook/use-toast';
import emailjs from '@emailjs/browser';


const ContactSection = () => {
    const {toast}=useToast();

    const [isSubmitting, setIsSubmitting] =useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Here is for the meail test 
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; 

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                reply_to: formData.email
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            toast({
                title: "Message Sent Successfully!",
                description: "Thank you for reaching out! I'll get back to you soon.",
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                message: ''
            });

            console.log('serviceId:', serviceId);
console.log('templateId:', templateId);
console.log('publicKey:', publicKey);

        } catch (error) {
            console.error('Email send failed:', error);
            toast({
                title: "Failed to Send Message",
                description: "There was an error sending your message. Please try again or contact me directly.",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    };


    

  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
        {/* CONTACT HEADER */}
        <div className='container mx-auto max-w-5xl '>
         <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
            Get In <span className='text-primary'> Touch</span>
         </h2>

         <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
            Have a project in mind or just want to say hello? 
            I'm always open to discussing new opportunities, 
            collaborations, or simply connecting with fellow 
            enthusiasts. Feel free to reach out!
         </p>
         
         {/*  CONTACT ITEMS */}
         <div className='grid grid-cols-1 md:grid-cols-2 gap-11 justify-center items-c'>
            <div className='space-y-8'>
                <h3 className='text-2xl font-semibold mb-6 items-start'> Contact Information </h3>

                <div className='space-y-6 justify-center'>
                    <div className='flex items-start space-x-6'>
                        <div className='p-3 rounded-full bg-primary/10'>
                        <Mail className='w-6 h-6 text-primary' />
                        </div>
                        <div className=' flex flex-col justify-center items-center'>
                            <h4 className='font-medium'> Email </h4>
                            <a href="mailto:m.zariffard1381@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>
                            m.zariffard1381@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className='flex items-start space-x-6'>
                        <div className='p-3 rounded-full bg-primary/10'>
                        <Phone className='w-6 h-6 text-primary items-start' />
                        </div>
                        <div className='flex flex-col justify-center ml-8 items-center'>
                            <h4 className='font-medium'> Phone </h4>
                            <a href="tel:+905338716780" className='text-muted-foreground hover:text-primary transition-colors'>
                            (+90) 533-871-78-80
                            </a>
                        </div>
                    </div>
                 </div>
                 <div className='pt-8 '>
                    <h4>Connect With Me </h4>
                    <div className='flex space-x-4 justify-center'>
                        <a target='_blank' href="https://www.linkedin.com/in/mzariffard/" className='text-muted-foreground hover:text-primary'>
                            <Linkedin />
                        </a>

                        <a target='_blank' href="https://github.com/mOzariffard" className='text-muted-foreground hover:text-primary'>
                            <Github />
                        </a>

                        <a target='_blank' href="#" className='text-muted-foreground hover:text-primary'>
                            <Twitch />
                        </a>

                        <a target='_blank' href="https://www.instagram.com/m.zariffard/" className='text-muted-foreground hover:text-primary'>
                            <Instagram />
                        </a>

                    </div>
                 </div>
            </div>

            <div className='bg-card p-8 rounded-lg shadow-xs'>
                <h3 className='text-2xl font-semibold mb-6'> Send <span className='text-primary'> Message </span> </h3>

                <form className='space-y-6' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className='block text-sm font-medium mb-2'> Your Name </label>
                        <input 
                        type="text"
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary ' 
                        placeholder='Mohammadreza Zariffard....'
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className='block text-sm font-medium mb-2'> Your Email </label>
                        <input 
                        type="email"
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary ' 
                        placeholder='john@email.com..'
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className='block text-sm font-medium mb-2'> Your Message </label>
                        <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary resize-none h-32'
                        placeholder="Hello, I'd like to talk about..."
                     />
                    </div>

                    <button disabled={isSubmitting} type='submit' className={cn('cosmic-button w-full flex justify-center gap-2',

                    )}>
                        {isSubmitting ? "Sending...": "Send Message"}
                        <Send size={17} />
                    </button>
                </form>
            </div>
         </div>
        </div>

    </section>
  )
}

export default ContactSection