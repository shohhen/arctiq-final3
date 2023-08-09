import React from 'react'
import { NavLink } from 'react-router-dom';
import { Modal, ModalOpenButton, ModalContents} from '../../components/Modal';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContactForm from '../../components/Contact/Contact';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './main.css'



export const Main = () => {
    function importAll(r) {
        let images = {};
         r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
       }
       const images = importAll(require.context('../../img', false, /\.(png|jpe?g|svg)$/))


        const [expanded, setExpanded] = React.useState(false);

        const handleChange = (panel) => (event, isExpanded) => {
          setExpanded(isExpanded ? panel : false);
          
        };

        
    return (
        <main>

            {/* HERO SECTION */}
            <section className="container hero_section" id='hero'>
                
                <div className="d-flex hero_block justify-content-between align-items-center">
                    <div className="d-flex col-6 text-start flex-column hero_text">
                        <h3>Navigating the digital landscape for success</h3>
                        <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                        <button ><AnchorLink className='callus' href='#contact'>Book a consultation</AnchorLink></button>
                    </div>
                    <div className="d-flex col-6 hero_img">
                        <img src={images['Illustration1.svg']} alt="" />
                    </div>
                </div>
            </section>
            {/* HERO SECTION END */}

            {/* LOGOS SECTION */}
            <section className="container logos_section">
                <div className="d-flex logos_block align-items-center justify-content-around"> 
                    <NavLink to={'https://hiltontrade.uz/index.html'} target='_blank'><img className='col-6' src={images ['logo.svg']} alt="" /></NavLink>                
                    <NavLink to={'https://maximauzb.uz'} target='_blank'><img className='col-6' src={images ['logo2.png']} alt=""/></NavLink>
                </div>
               
            </section>
            {/* LOGOS SECTION END */}

            {/* SERVICES SECTION */}
            <section className="container" id="services">
                <div className="d-flex flex-column services_block">
                    <div className="heading_text ">
                        <h2>Services</h2>
                        <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
                    </div>
                    <div className="d-flex flex-wrap col-12 services_cards">
                        <Modal>
                            <ModalOpenButton>
                                <div className="card d-flex justify-content-between flex-row">
                                <div className="card_text d-flex flex-column">
                                    <h3 className='d-flex flex-column'><span>Web</span><span>Development</span></h3>
                                    <NavLink>{<img src={images['Icon.svg']} alt="" />} Learn More </NavLink>
                                </div>{
                                <div className='card_img'>
                                    <img  src={images['bwink_edu_01_single_02.jpg']} alt="" />
                                </div>}
                                </div>
                            </ModalOpenButton>
                            <ModalContents className="modal_contents" title='Web Development'>
                            Explore our range of cutting-edge web applications designed to streamline your workflow and enhance productivity. From intuitive user interfaces to robust security features, our applications are tailored to meet your needs. Try them today with our risk-free demo or free trial. Join thousands of satisfied users who have already transformed their online experience with web applications. Experience the difference now!
                            </ModalContents>
                        </Modal>
                        
                        <Modal>
                            <ModalOpenButton>
                                <div className="card d-flex justify-content-between flex-row">
                                <div className="card_text d-flex flex-column">
                                    <h3 className='d-flex flex-column'><span>IT</span><span>Consulting</span></h3>
                                    <NavLink>{<img src={images['Icon.svg']} alt="" />} Learn More </NavLink>
                                </div>{
                                <div className='card_img'>
                                    <img  src={images['bwink_edu_01_single_02.jpg']} alt="" />
                                </div>}
                                </div>
                            </ModalOpenButton>
                            <ModalContents className="modal_contents" title='IT Consulting'>
                            Our IT consulting services offer expert guidance and solutions tailored to your business needs. We assess, plan, and implement strategies to optimize your IT infrastructure, boost security, and drive digital transformation.
                            </ModalContents>
                        </Modal>
                        <Modal>
                            <ModalOpenButton>
                                <div className="card d-flex justify-content-between flex-row">
                                <div className="card_text d-flex flex-column">
                                    <h3 className='d-flex flex-column'><span>Logo &</span><span>Branding</span></h3>
                                    <NavLink>{<img src={images['Icon.svg']} alt="" />} Learn More </NavLink>
                                </div>{
                                <div className='card_img'>
                                    <img  src={images['bwink_edu_01_single_02.jpg']} alt="" />
                                </div>}
                                </div>
                            </ModalOpenButton>
                            <ModalContents className="modal_contents" title='Logo & Branding'>
                            We specialize in crafting unique and impactful logos that represent your brand's identity. Our creative team ensures your logo stands out and leaves a lasting impression on your audience. Let us create a logo that truly reflects your vision and sets your business apart.
                            </ModalContents>
                        </Modal>
                        <Modal>
                            <ModalOpenButton>
                                <div className="card d-flex justify-content-between flex-row">
                                <div className="card_text d-flex flex-column">
                                    <h3 className='d-flex flex-column'><span>SEO</span><span>Optimization</span></h3>
                                    <NavLink>{<img src={images['Icon.svg']} alt="" />} Learn More </NavLink>
                                </div>{
                                <div className='card_img'>
                                    <img  src={images['bwink_edu_01_single_02.jpg']} alt="" />
                                </div>}
                                </div>
                            </ModalOpenButton>
                            <ModalContents className="modal_contents" title='SEO Optimization'>
                            Optimize your website for search engines by using relevant keywords, creating high-quality content, improving site speed, earning backlinks, and ensuring mobile-friendliness. Implementing SEO best practices will increase your web applications' visibility and attract organic traffic to your site.
                            </ModalContents>
                        </Modal>
                        <Modal>
                            <ModalOpenButton>
                                <div className="card d-flex justify-content-between flex-row">
                                <div className="card_text d-flex flex-column">
                                    <h3 className='d-flex flex-column'><span>Telegram</span><span>Bots</span></h3>
                                    <NavLink>{<img src={images['Icon.svg']} alt="" />} Learn More </NavLink>
                                </div>{
                                <div className='card_img'>
                                    <img  src={images['bwink_edu_01_single_02.jpg']} alt="" />
                                </div>}
                                </div>
                            </ModalOpenButton>
                            <ModalContents className="modal_contents" title='Telegram Bots'>
                            Discover our custom Telegram bots designed to streamline tasks, deliver valuable content, and enhance your messaging experience. Explore various functionalities and enjoy the convenience of automation with our user-friendly Telegram bots.
                            </ModalContents>
                        </Modal>
                        <Modal>
                            <ModalOpenButton>
                                <div className="card d-flex justify-content-between flex-row">
                                <div className="card_text d-flex flex-column">
                                    <h3 className='d-flex flex-column'><span>AI</span><span>Implementation (soon)</span></h3>
                                    <NavLink>{<img src={images['Icon.svg']} alt="" />} Learn More </NavLink>
                                </div>{
                                <div className='card_img'>
                                    <img  src={images['bwink_edu_01_single_02.jpg']} alt="" />
                                </div>}
                                </div>
                            </ModalOpenButton>
                            <ModalContents className="modal_contents" title='AI implementation'>
                            Implementing AI in the business section can lead to improved efficiency, personalized customer experiences, data-driven decision-making, automation of repetitive tasks, enhanced predictive capabilities, and competitive advantages in the market.
                            </ModalContents>
                        </Modal>
                    </div>
                </div>
            </section>
            {/* SERVICES SECTION END */}

            {/* WORKING PROCESS SECTION */}
            <section className="container" id='process'>
                <div className="d-flex flex-column process_block">
                    <div className="heading_text ">
                        <h2>Our Working Process </h2>
                        <p>Step-by-Step Guide to Achieving Your Business Goals</p>
                    </div>
                
                <div className='process_cards'>
                    <Accordion className='accordion' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        className='accordion_card'
                        >
                        <Typography className='d-flex align-items-center' sx={{ width: 'object-fit', flexShrink: 0, marginRight: '25px' }}>
                            <h3 className='process_number'>01</h3>
                        </Typography>
                        <Typography className='d-flex align-items-center'>
                            <p className='process_heading'> Research and strategy development</p>
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails className='details'>
                        <Typography>
                            <p className='process_text'>Conducting thorough research to understand client needs and target audience, devising a strategic plan to meet objectives and align with business goals.</p>
                           
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='accordion' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                        className='accordion_card'
                        >
                        <Typography className='d-flex align-items-center' sx={{ width: 'object-fit', flexShrink: 0, marginRight: '25px' }}> 
                        <h3 className='process_number'>02</h3></Typography>
                        <Typography className='d-flex align-items-center'>
                            <p className='process_heading'> Implementation</p>
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails className='details'>
                        <Typography>
                            <p className='process_text'>Executing the web development process, including coding, designing, and content creation, to build the website or web application.</p>
                           
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='accordion' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        className='accordion_card'
                        >
                        <Typography className='d-flex align-items-center' sx={{ width: 'object-fit', flexShrink: 0, marginRight: '25px' }}>
                            <h3 className='process_number'>03</h3>
                        </Typography>
                        <Typography className='d-flex align-items-center'>
                            <p className='process_heading'> Monitoring and optimization</p>
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails className='details'>
                        <Typography>
                            <p className='process_text'>Constantly analyzing website performance, user behavior, and key metrics to identify areas for improvement and optimization.</p>
                           
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='accordion' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        className='accordion_card'
                        >
                        <Typography className='d-flex align-items-center' sx={{ width: 'object-fit', flexShrink: 0, marginRight: '25px' }}>
                            <h3 className='process_number'>04</h3>
                        </Typography>
                        <Typography className='d-flex align-items-center'>
                            <p className='process_heading'> Reporting and communication</p>
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails className='details'> 
                        <Typography>
                            <p className='process_text'>Regularly providing detailed reports to stakeholders, communicating progress, results, and suggesting adjustments as needed.</p>
                           
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='accordion' expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        className='accordion_card'
                        >
                        <Typography className='d-flex align-items-center' sx={{ width: 'object-fit', flexShrink: 0, marginRight: '25px' }}>
                            <h3 className='process_number' >05</h3>
                        </Typography>
                        <Typography className='d-flex align-items-center'>
                            <p className='process_heading'> Continual improvement</p>
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails className='details'>
                        <Typography>
                            <p className='process_text'>Emphasizing ongoing enhancements and updates to keep the website or web application relevant, user-friendly, and aligned with the latest trends and technologies.</p>
                           
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    </div>
                </div>
            </section>
            {/* WORKING PROCESS SECTION END */}

            {/* TEAM SECTION */}
            {/* <section className="container">
                <div className="d-flex flex-column team_block">
                    <div className="heading_text d-flex align-items-center">
                        <h2>Our Team </h2>
                        <p>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
                    </div>
                </div>
            </section> */}
            {/* TEAM SECTION END */}
            {/* CONTACT US SECTION */}
                    <section className="container" id="contact">
                    <div className="d-flex flex-column team_block">
                        <div className="heading_text ">
                            <h2>Contact Us </h2>
                            <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
                        </div>
                        <div className="contact_block">
                            <div className='contact_form d-flex justify-content-start align-items-center'>
                                {<ContactForm />}
                            </div>
                        </div>
                    </div>
                    </section>
            {/* CONTACT US SECTION END */}
        </main>
    )
}