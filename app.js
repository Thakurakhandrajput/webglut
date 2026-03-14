const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');

// IMPORT DATABASE (Make sure siteData.js file exists in same folder)
const { servicePages, projects, samplesData } = require('./siteData');

// 1. CONFIGURATION
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// 2. MAIN ROUTES
app.get('/', (req, res) => res.render('pages/home', { title: 'Webglut | Digital Reality', page: 'home' }));
app.get('/services', (req, res) => res.render('pages/services', { title: 'Our Expertise', page: 'services' }));
app.get('/portfolio', (req, res) => res.render('pages/portfolio', { title: 'Case Studies', page: 'portfolio' }));
app.get('/contact', (req, res) => res.render('pages/contact', { title: 'Start Project', page: 'contact' }));
app.get('/success', (req, res) => res.render('pages/success', { title: 'Message Sent', page: 'success' }));

// 3. DYNAMIC SERVICE PAGES
servicePages.forEach(service => {
    app.get('/' + service, (req, res) => {
        const pageTitle = service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        res.render('pages/service-detail', { title: pageTitle, page: 'services', slug: service });
    });
});

app.get('/privacy-policy', (req, res) => res.render('pages/privacy', { title: 'Privacy Policy', page: 'privacy' }));
app.get('/terms', (req, res) => res.render('pages/terms', { title: 'Terms & Conditions', page: 'terms' }));

// COST CALCULATOR ROUTE
app.get('/cost-estimator', (req, res) => {
    res.render('pages/calculator', { 
        title: 'Project Cost Estimator', 
        page: 'calculator' 
    });
});

// 4. SAMPLES PAGE
app.get('/samples', (req, res) => {
    res.render('pages/samples', { title: 'Project Samples | WebGlut', page: 'samples', samples: samplesData });
});

// 5. SAMPLE DETAIL PAGE
app.get('/samples/:id', (req, res) => {
    const sample = samplesData.find(s => s.id === req.params.id);
    if (!sample) return res.status(404).render('pages/404', { title: 'Sample Not Found', page: '404' });
    res.render('pages/sample-detail', { title: sample.title, page: 'samples', sample: sample }); 
});

// 6. PROJECT CASE STUDY PAGE
app.get('/project/:slug', (req, res) => {
    const project = projects[req.params.slug];
    if (project) {
        res.render('pages/project-detail', { title: project.title, page: 'project', p: project });
    } else {
        res.status(404).render('pages/404', { title: 'Project Not Found', page: '404' });
    }
});

// 7. FORM SUBMIT HANDLER (ONLY ONE - FIXED)
app.post('/contact-submit', async (req, res) => {
    // 1. Data Receive
    const { name, phone, email, message, service, project_interest } = req.body;
    
    console.log('Inquiry Received:', req.body); 

    // 2. SMTP Transporter
    const transporter = nodemailer.createTransport({
        host: 'mail.webglut.in',
        port: 465,
        secure: true,
        auth: {
            user: 'Contact@webglut.in',
            pass: process.env.EMAIL_PASS // Password ab safe hai
        }
    });

    // 3. Email Template
    const mailOptions = {
        from: '"Webglut Website" <Contact@webglut.in>',
        to: 'Contact@webglut.in',
        subject: `🔥 New Lead: ${name || 'User'} - ${service || project_interest || 'General Inquiry'}`,
        html: `
            <div style="background-color:#050505; padding:30px; font-family:Arial, sans-serif;">
                <div style="max-width:600px; margin:auto; background:#111; padding:30px; border-radius:15px; border: 1px solid #333; color: #fff;">
                    
                    <h2 style="color:#00f3ff; margin-top:0;">New Project Inquiry</h2>
                    <hr style="border:0; border-top:1px solid #333; margin:20px 0;">

                    <p style="font-size:16px;"><strong>👤 Name:</strong> <span style="color:#bbb;">${name || 'Not Provided'}</span></p>
                    <p style="font-size:16px;"><strong>📞 Phone:</strong> <span style="color:#bbb;"><a href="tel:${phone}" style="color:#00f3ff; text-decoration:none;">${phone || 'Not Provided'}</a></span></p>
                    <p style="font-size:16px;"><strong>✉️ Email:</strong> <span style="color:#bbb;">${email || 'Not Provided'}</span></p>
                    <p style="font-size:16px;"><strong>🛠 Interest:</strong> <span style="color:#00f3ff;">${service || project_interest || 'General Contact'}</span></p>
                    
                    <div style="background:#222; padding:15px; border-radius:10px; margin-top:20px;">
                        <p style="margin:0; font-size:14px; color:#888; text-transform:uppercase; font-weight:bold;">📝 Client Message:</p>
                        <p style="margin-top:10px; font-size:15px; line-height:1.5; color:#fff;">
                            ${message ? message.replace(/\n/g, '<br>') : 'No message written.'}
                        </p>
                    </div>

                    <br>
                    <a href="https://wa.me/91${phone}" style="background:#25D366; color:#fff; padding:10px 20px; text-decoration:none; border-radius:5px; font-weight:bold; display:inline-block;">Chat on WhatsApp</a>
                </div>
            </div>
        `
    };

    // 4. Send Mail Logic
    try {
        await transporter.sendMail(mailOptions);
        console.log('✅ Email Sent Successfully');
        res.redirect('/success');
    } catch (error) {
        console.error('❌ Email Error:', error);
        res.redirect('/success');
    }
});

// 404 Handler
app.use((req, res) => res.status(404).render('pages/404', { title: 'Page Not Found', page: '404' }));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Webglut Engine Running on Port ${PORT}`));
