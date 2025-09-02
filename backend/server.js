const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS configuration
const corsOptions = {
    origin: [
        'http://localhost:3000',
        'http://localhost:5000',
        'http://localhost:8080',
        'https://your-frontend-domain.vercel.app', // Replace with your actual Vercel domain
        'https://*.vercel.app',
        'https://*.onrender.com'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Serve static files from frontend directory
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Serve the main HTML file for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'debuggersclub@kkwagh.edu.in',
        pass: 'mwop bojo scik jxrw' // Gmail app password
    }
});

// Email template function
function getEmailTemplate() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>🔒 LOCKDOWN - Horror Event Invitation</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Georgia, serif; background-color: #0a0a0a; color: #e0e0e0; line-height: 1.6;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background: linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 25%, #2a0505 50%, #1a0a0a 75%, #0a0a0a 100%); min-height: 100vh;">
            <tr>
                <td align="center" style="padding: 20px 0;">
                    <!-- Email Container -->
                    <table width="700" cellpadding="0" cellspacing="0" border="0" style="max-width: 700px; background-color: #1a1a1a; border-radius: 15px; border: 3px solid #8b0000; box-shadow: 0 0 30px rgba(139, 0, 0, 0.5);">
                        
                        <!-- Header -->
                        <tr>
                            <td style="background: linear-gradient(135deg, #8b0000 0%, #4b0082 50%, #000000 100%); padding: 40px; text-align: center; position: relative;">
                                <img src="cid:debuggers-logo" alt="Debuggers Club Logo" style="width: 90px; height: 90px; border-radius: 50%; margin-bottom: 20px; border: 3px solid #8b0000; box-shadow: 0 0 20px rgba(139, 0, 0, 0.8);">
                                <h1 style="margin: 0; font-size: 48px; font-weight: 900; color: #ff0000; letter-spacing: 3px; text-shadow: 0 0 10px #ff0000, 0 0 20px #8b0000; font-family: Impact, Arial Black, sans-serif;">🔒 LOCKDOWN</h1>
                                <p style="margin: 15px 0 0; font-size: 18px; color: #e0e0e0; font-weight: 400; text-shadow: 0 0 5px rgba(139, 0, 0, 0.5);">A Spine-Chilling Interactive Game Event</p>
                            </td>
                        </tr>
                        
                        <!-- Content -->
                        <tr>
                            <td style="padding: 40px; background-color: #1a1a1a;">
                                
                                <!-- Greeting -->
                                <div style="font-size: 24px; margin-bottom: 30px; color: #ff6b6b; font-weight: 700; border-bottom: 3px solid #8b0000; padding-bottom: 15px; text-shadow: 0 0 10px rgba(255, 107, 107, 0.5); font-family: Impact, Arial Black, sans-serif;">
                                    💀 Dear Brave Participants,
                                </div>
                                
                                <!-- Intro Text -->
                                <p style="font-size: 18px; margin-bottom: 30px; color: #d0d0d0; line-height: 1.8; text-align: justify; font-style: italic;">
                                    We are thrilled to summon you to <strong style="color: #ff4444;">Lockdown</strong>, a spine-chilling interactive game event organized by <strong style="color: #ff4444;">The Debuggers Club</strong>, scheduled for <strong style="color: #ff4444;">4th September</strong>. Please review the following information carefully as it contains essential details regarding the event structure, rules, and schedule. <span style="color: #ff0000; font-weight: bold;">Enter if you dare...</span>
                                </p>
                                
                                <!-- Event Details Section -->
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 30px; background-color: #2a2a2a; border-radius: 10px; border-left: 5px solid #8b0000; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);">
                                    <tr>
                                        <td style="padding: 30px;">
                                            <h2 style="font-size: 22px; font-weight: 700; margin-bottom: 20px; color: #ff4444; text-transform: uppercase; letter-spacing: 2px; text-shadow: 0 0 10px rgba(255, 68, 68, 0.5); font-family: Impact, Arial Black, sans-serif;">🕯️ Event Details</h2>
                                            
                                            <!-- Event Details Grid -->
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                    <td width="33%" style="padding: 10px;">
                                                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #3a3a3a; border-radius: 10px; text-align: center; border: 2px solid #8b0000; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);">
                                                            <tr>
                                                                <td style="padding: 25px;">
                                                                    <div style="font-size: 32px; margin-bottom: 10px; color: #ff6b6b;">📅</div>
                                                                    <div style="font-weight: 600; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #ff4444;">Date</div>
                                                                    <div style="font-size: 18px; font-weight: 700; color: #ffffff;">4th September</div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td width="33%" style="padding: 10px;">
                                                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #3a3a3a; border-radius: 10px; text-align: center; border: 2px solid #8b0000; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);">
                                                            <tr>
                                                                <td style="padding: 25px;">
                                                                    <div style="font-size: 32px; margin-bottom: 10px; color: #ff6b6b;">🕧</div>
                                                                    <div style="font-weight: 600; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #ff4444;">Reporting Time</div>
                                                                    <div style="font-size: 18px; font-weight: 700; color: #ffffff;">12:30 PM</div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td width="33%" style="padding: 10px;">
                                                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #3a3a3a; border-radius: 10px; text-align: center; border: 2px solid #8b0000; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);">
                                                            <tr>
                                                                <td style="padding: 25px;">
                                                                    <div style="font-size: 32px; margin-bottom: 10px; color: #ff6b6b;">🕐</div>
                                                                    <div style="font-weight: 600; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #ff4444;">Event Time</div>
                                                                    <div style="font-size: 18px; font-weight: 700; color: #ffffff;">1:00 PM onwards</div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                                
                                <!-- Guidelines Section -->
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 30px; background-color: #2a1a1a; border-radius: 10px; border-left: 5px solid #ff0000; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);">
                                    <tr>
                                        <td style="padding: 30px;">
                                            <h2 style="font-size: 22px; font-weight: 700; margin-bottom: 20px; color: #ff0000; text-transform: uppercase; letter-spacing: 2px; text-shadow: 0 0 10px rgba(255, 0, 0, 0.5); font-family: Impact, Arial Black, sans-serif;">⚰️ General Guidelines</h2>
                                            
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                    <td style="padding: 15px 0; border-bottom: 1px solid rgba(139, 0, 0, 0.3);">
                                                        <span style="color: #ff0000; font-size: 20px; margin-right: 15px;">💀</span>
                                                        <span style="font-size: 16px; color: #d0d0d0;">Mobile phones are strictly prohibited at all stages of the game.</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 15px 0; border-bottom: 1px solid rgba(139, 0, 0, 0.3);">
                                                        <span style="color: #ff0000; font-size: 20px; margin-right: 15px;">💀</span>
                                                        <span style="font-size: 16px; color: #d0d0d0;">Each participant/team must carry one rough page and a pen for calculations.</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 15px 0; border-bottom: 1px solid rgba(139, 0, 0, 0.3);">
                                                        <span style="color: #ff0000; font-size: 20px; margin-right: 15px;">💀</span>
                                                        <span style="font-size: 16px; color: #d0d0d0;">A valid college ID is required and must be presented at the time of reporting.</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 15px 0;">
                                                        <span style="color: #ff0000; font-size: 20px; margin-right: 15px;">💀</span>
                                                        <span style="font-size: 16px; color: #d0d0d0;">Detailed instructions about the game will be provided on the day of the event.</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                                
                                <!-- Game Structure Section -->
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 30px; background-color: #1a1a2a; border-radius: 10px; border-left: 5px solid #4b0082; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);">
                                    <tr>
                                        <td style="padding: 30px;">
                                            <h2 style="font-size: 22px; font-weight: 700; margin-bottom: 20px; color: #9966cc; text-transform: uppercase; letter-spacing: 2px; text-shadow: 0 0 10px rgba(153, 102, 204, 0.5); font-family: Impact, Arial Black, sans-serif;">🎭 Game Structure</h2>
                                            
                                            <p style="margin-bottom: 25px; font-size: 16px; color: #d0d0d0; font-weight: 500; font-style: italic;">
                                                The event consists of three terrifying stages, each with multiple levels and elimination rounds:
                                            </p>
                                            
                                            <!-- Stage 1 -->
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 20px; background-color: #2a2a3a; border-radius: 10px; border: 2px solid #4b0082; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);">
                                                <tr>
                                                    <td style="padding: 25px;">
                                                        <h3 style="font-size: 20px; font-weight: 700; color: #bb88dd; margin-bottom: 15px; border-bottom: 2px solid rgba(75, 0, 130, 0.5); padding-bottom: 10px; text-shadow: 0 0 5px rgba(187, 136, 221, 0.5); font-family: Impact, Arial Black, sans-serif;">🌙 Stage 1</h3>
                                                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                            <tr><td style="padding: 5px 0;"><span style="color: #bb88dd; margin-right: 10px;">🕷️</span><span style="font-size: 16px; color: #d0d0d0;">Includes 4 levels</span></td></tr>
                                                            <tr><td style="padding: 5px 0;"><span style="color: #bb88dd; margin-right: 10px;">🕷️</span><span style="font-size: 16px; color: #d0d0d0;">All levels are non-technical</span></td></tr>
                                                            <tr><td style="padding: 5px 0;"><span style="color: #bb88dd; margin-right: 10px;">🕷️</span><span style="font-size: 16px; color: #d0d0d0;">Eliminations will occur after each level</span></td></tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                            <!-- Stage 2 -->
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 20px; background-color: #2a2a3a; border-radius: 10px; border: 2px solid #4b0082; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);">
                                                <tr>
                                                    <td style="padding: 25px;">
                                                        <h3 style="font-size: 20px; font-weight: 700; color: #bb88dd; margin-bottom: 15px; border-bottom: 2px solid rgba(75, 0, 130, 0.5); padding-bottom: 10px; text-shadow: 0 0 5px rgba(187, 136, 221, 0.5); font-family: Impact, Arial Black, sans-serif;">🦇 Stage 2</h3>
                                                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                            <tr><td style="padding: 5px 0;"><span style="color: #bb88dd; margin-right: 10px;">🕷️</span><span style="font-size: 16px; color: #d0d0d0;">Includes 3 levels</span></td></tr>
                                                            <tr><td style="padding: 5px 0;"><span style="color: #bb88dd; margin-right: 10px;">🕷️</span><span style="font-size: 16px; color: #d0d0d0;">Contains 1 bonus level which will be technical</span></td></tr>
                                                            <tr><td style="padding: 5px 0;"><span style="color: #bb88dd; margin-right: 10px;">🕷️</span><span style="font-size: 16px; color: #d0d0d0;">Remaining levels are non-technical</span></td></tr>
                                                            <tr><td style="padding: 5px 0;"><span style="color: #bb88dd; margin-right: 10px;">🕷️</span><span style="font-size: 16px; color: #d0d0d0;">Eliminations continue after each level</span></td></tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                            <!-- Stage 3 -->
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #2a2a3a; border-radius: 10px; border: 2px solid #4b0082; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);">
                                                <tr>
                                                    <td style="padding: 25px;">
                                                        <h3 style="font-size: 20px; font-weight: 700; color: #bb88dd; margin-bottom: 15px; border-bottom: 2px solid rgba(75, 0, 130, 0.5); padding-bottom: 10px; text-shadow: 0 0 5px rgba(187, 136, 221, 0.5); font-family: Impact, Arial Black, sans-serif;">👻 Stage 3</h3>
                                                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                            <tr><td style="padding: 5px 0;"><span style="color: #bb88dd; margin-right: 10px;">🕷️</span><span style="font-size: 16px; color: #d0d0d0;">Includes 2 final levels</span></td></tr>
                                                            <tr><td style="padding: 5px 0;"><span style="color: #bb88dd; margin-right: 10px;">🕷️</span><span style="font-size: 16px; color: #d0d0d0;">Both levels are non-technical</span></td></tr>
                                                            <tr><td style="padding: 5px 0;"><span style="color: #bb88dd; margin-right: 10px;">🕷️</span><span style="font-size: 16px; color: #d0d0d0;">The top 3 teams to successfully complete the final level will be declared the winners</span></td></tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                                
                                <!-- Warning Box -->
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 30px 0; background-color: #3a0a0a; border-radius: 10px; border: 3px solid #ff0000; box-shadow: 0 0 20px rgba(255, 0, 0, 0.3);">
                                    <tr>
                                        <td style="padding: 25px; text-align: center;">
                                            <div style="color: #ff4444; font-weight: 700; font-size: 18px; text-shadow: 0 0 10px rgba(255, 68, 68, 0.8); font-family: Impact, Arial Black, sans-serif;">
                                                ⚠️ BE ON TIME • COME PREPARED • GIVE IT YOUR BEST SHOT ⚠️
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                
                                <!-- Closing Text -->
                                <p style="margin-top: 30px; text-align: center; font-size: 18px; color: #e0e0e0; font-weight: 500; font-style: italic;">
                                    We look forward to an engaging, challenging, and spine-tingling experience at <strong style="color: #ff4444;">Lockdown</strong>. <span style="color: #ff0000; font-weight: bold;">May the bravest souls prevail...</span>
                                </p>
                            </td>
                        </tr>
                        
                        <!-- Footer -->
                        <tr>
                            <td style="background: linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 50%, #0a0a0a 100%); padding: 40px; text-align: center; border-top: 3px solid #8b0000;">
                                <div style="font-size: 20px; margin-bottom: 15px; color: #ff6b6b; font-weight: 600; text-shadow: 0 0 10px rgba(255, 107, 107, 0.5);">Best regards,</div>
                                <div style="font-weight: 700; font-size: 28px; color: #ff0000; letter-spacing: 2px; text-shadow: 0 0 15px #ff0000, 0 0 30px #8b0000; font-family: Impact, Arial Black, sans-serif;">The Debuggers Club</div>
                                <div style="margin-top: 20px; color: #888; font-size: 14px; font-style: italic;">Lockdown Event - Where Skills Meet Terror</div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
    `;
}

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
    console.log('📧 Email request received:', {
        method: req.method,
        url: req.url,
        headers: req.headers,
        body: req.body,
        timestamp: new Date().toISOString()
    });

    try {
        const { to } = req.body;
        
        if (!to) {
            console.log('❌ Missing email address');
            return res.status(400).json({ 
                success: false, 
                message: 'Recipient email is required' 
            });
        }

        console.log('📧 Sending email to:', to);

        // Email options
        const mailOptions = {
            from: 'debuggersclub@kkwagh.edu.in',
            to: to,
            subject: '🔒💀 LOCKDOWN: A Spine-Chilling Event Awaits You... - The Debuggers Club',
            html: getEmailTemplate(),
            attachments: [
                {
                    filename: 'Debuggers_png.png',
                    path: path.join(__dirname, 'Debuggers_png.png'),
                    cid: 'debuggers-logo'
                }
            ]
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        
        console.log('✅ Email sent successfully:', info.messageId);
        
        res.json({ 
            success: true, 
            message: 'Email sent successfully',
            messageId: info.messageId,
            timestamp: new Date().toISOString()
        });
        
    } catch (error) {
        console.error('❌ Error sending email:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send email: ' + error.message,
            error: error.stack,
            timestamp: new Date().toISOString()
        });
    }
});

// API root endpoint
app.get('/api', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'Debuggers Club Email Server is running',
        endpoints: {
            health: '/api/health',
            sendEmail: '/api/send-email'
        },
        timestamp: new Date().toISOString()
    });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'Debuggers Club Email Server is running',
        timestamp: new Date().toISOString()
    });
});

// Test endpoint for debugging
app.get('/api/test', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'Test endpoint working',
        cors: 'Enabled',
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use('*', (req, res) => {
    console.log('❌ 404 - Route not found:', req.method, req.originalUrl);
    res.status(404).json({
        success: false,
        message: 'Route not found',
        method: req.method,
        url: req.originalUrl,
        availableEndpoints: ['/', '/api', '/api/health', '/api/test', '/api/send-email'],
        timestamp: new Date().toISOString()
    });
});

// Error handler
app.use((error, req, res, next) => {
    console.error('❌ Server error:', error);
    res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: error.message,
        timestamp: new Date().toISOString()
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Debuggers Club Email Server running on port ${PORT}`);
    console.log(`📧 Email sender ready to send invitations!`);
    console.log(`🌐 Open http://localhost:${PORT} in your browser`);
    console.log(`🔧 Available endpoints:`);
    console.log(`   - GET  / (frontend)`);
    console.log(`   - GET  /api`);
    console.log(`   - GET  /api/health`);
    console.log(`   - GET  /api/test`);
    console.log(`   - POST /api/send-email`);
});
