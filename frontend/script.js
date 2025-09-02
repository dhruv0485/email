document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('emailInput');
    const statusDiv = document.getElementById('status');
    const sendBtn = document.querySelector('.send-btn');

    emailForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        if (!email) {
            showStatus('Please enter a valid email address', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showStatus('Please enter a valid email format', 'error');
            return;
        }

        // Show loading state
        showStatus('Sending invitation email...', 'loading');
        sendBtn.disabled = true;
        sendBtn.classList.add('loading');

        try {
            const response = await sendEmail(email);
            
            if (response.success) {
                showStatus('✅ Invitation email sent successfully!', 'success');
                emailInput.value = '';
            } else {
                showStatus('❌ Failed to send email: ' + response.message, 'error');
            }
        } catch (error) {
            showStatus('❌ Error sending email: ' + error.message, 'error');
        } finally {
            sendBtn.disabled = false;
            sendBtn.classList.remove('loading');
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showStatus(message, type) {
        statusDiv.textContent = message;
        statusDiv.className = `status ${type}`;
        
        // Auto-hide success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                statusDiv.style.opacity = '0';
            }, 5000);
        }
    }

    async function sendEmail(recipientEmail) {
        const emailData = {
            to: recipientEmail,
            subject: '🔒 Lockdown Event Invitation - The Debuggers Club',
            html: getEmailTemplate()
        };

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emailData)
            });

            const result = await response.json();
            return result;
        } catch (error) {
            throw new Error('Network error: ' + error.message);
        }
    }

    function getEmailTemplate() {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>🔒💀 LOCKDOWN - Horror Event Invitation</title>
            <link href="https://fonts.googleapis.com/css2?family=Creepster&family=Nosifer&family=Butcherman&display=swap" rel="stylesheet">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Nosifer&family=Butcherman&display=swap');
                
                body {
                    margin: 0;
                    padding: 0;
                    font-family: 'Georgia', serif;
                    background: linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 25%, #2a0505 50%, #1a0a0a 75%, #0a0a0a 100%);
                    color: #e0e0e0;
                    line-height: 1.6;
                    padding: 20px 0;
                    min-height: 100vh;
                    position: relative;
                    overflow-x: hidden;
                }
                
                body::before {
                    content: '';
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: 
                        radial-gradient(circle at 20% 20%, rgba(139, 0, 0, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(75, 0, 130, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 40% 60%, rgba(0, 0, 0, 0.8) 0%, transparent 50%);
                    pointer-events: none;
                    z-index: -1;
                }
                
                .email-container {
                    max-width: 700px;
                    margin: 0 auto;
                    background: linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%);
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 
                        0 0 50px rgba(139, 0, 0, 0.3),
                        inset 0 0 50px rgba(0, 0, 0, 0.5),
                        0 0 100px rgba(75, 0, 130, 0.2);
                    border: 2px solid #8b0000;
                    position: relative;
                }
                
                .email-container::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: 
                        repeating-linear-gradient(
                            90deg,
                            transparent,
                            transparent 98px,
                            rgba(139, 0, 0, 0.03) 100px
                        );
                    pointer-events: none;
                    z-index: 1;
                }
                
                .header {
                    background: linear-gradient(135deg, #8b0000 0%, #4b0082 50%, #000000 100%);
                    padding: 3rem 2.5rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                
                .header::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
                    animation: ghostlyGlow 4s ease-in-out infinite;
                }
                
                @keyframes ghostlyGlow {
                    0%, 100% { left: -100%; opacity: 0; }
                    50% { left: 100%; opacity: 1; }
                }
                
                .header::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: 
                        radial-gradient(circle at 30% 30%, rgba(139, 0, 0, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 70% 70%, rgba(75, 0, 130, 0.3) 0%, transparent 50%);
                    animation: pulseHorror 3s ease-in-out infinite alternate;
                }
                
                @keyframes pulseHorror {
                    0% { opacity: 0.3; }
                    100% { opacity: 0.7; }
                }
                
                .logo {
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    margin: 0 auto 1.5rem;
                    display: block;
                    box-shadow: 
                        0 0 30px rgba(139, 0, 0, 0.8),
                        0 0 60px rgba(75, 0, 130, 0.4),
                        inset 0 0 20px rgba(0, 0, 0, 0.5);
                    border: 3px solid #8b0000;
                    filter: contrast(1.2) brightness(0.9);
                    position: relative;
                    z-index: 2;
                    animation: logoFloat 4s ease-in-out infinite;
                }
                
                @keyframes logoFloat {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(2deg); }
                }
                
                .title {
                    font-size: 3.5rem;
                    font-weight: 900;
                    margin: 0;
                    color: #ff0000;
                    font-family: 'Creepster', cursive;
                    letter-spacing: 3px;
                    text-shadow: 
                        0 0 10px #ff0000,
                        0 0 20px #8b0000,
                        0 0 30px #4b0082,
                        2px 2px 4px rgba(0, 0, 0, 0.8);
                    position: relative;
                    z-index: 2;
                    animation: titleFlicker 2s ease-in-out infinite alternate;
                }
                
                @keyframes titleFlicker {
                    0%, 100% { 
                        text-shadow: 
                            0 0 10px #ff0000,
                            0 0 20px #8b0000,
                            0 0 30px #4b0082,
                            2px 2px 4px rgba(0, 0, 0, 0.8);
                    }
                    50% { 
                        text-shadow: 
                            0 0 5px #ff0000,
                            0 0 10px #8b0000,
                            0 0 15px #4b0082,
                            2px 2px 4px rgba(0, 0, 0, 0.8);
                    }
                }
                
                .subtitle {
                    font-size: 1.4rem;
                    margin: 1rem 0 0;
                    color: #e0e0e0;
                    font-weight: 400;
                    font-family: 'Butcherman', cursive;
                    text-shadow: 0 0 10px rgba(139, 0, 0, 0.5);
                    position: relative;
                    z-index: 2;
                }
                
                .content {
                    padding: 3rem 2.5rem;
                    background: linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%);
                    position: relative;
                    z-index: 2;
                }
                
                .content::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: 
                        radial-gradient(circle at 25% 25%, rgba(139, 0, 0, 0.05) 0%, transparent 50%),
                        radial-gradient(circle at 75% 75%, rgba(75, 0, 130, 0.05) 0%, transparent 50%);
                    pointer-events: none;
                }
                
                .greeting {
                    font-size: 1.6rem;
                    margin-bottom: 2rem;
                    color: #ff6b6b;
                    font-weight: 700;
                    border-bottom: 3px solid #8b0000;
                    padding-bottom: 1rem;
                    font-family: 'Nosifer', cursive;
                    text-shadow: 0 0 10px rgba(255, 107, 107, 0.5);
                    animation: greetingGlow 3s ease-in-out infinite alternate;
                }
                
                @keyframes greetingGlow {
                    0% { text-shadow: 0 0 10px rgba(255, 107, 107, 0.5); }
                    100% { text-shadow: 0 0 20px rgba(255, 107, 107, 0.8); }
                }
                
                .intro-text {
                    font-size: 1.2rem;
                    margin-bottom: 2.5rem;
                    color: #d0d0d0;
                    line-height: 1.8;
                    text-align: justify;
                    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
                    font-style: italic;
                }
                
                .section {
                    margin-bottom: 2.5rem;
                    padding: 2.5rem;
                    background: linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 100%);
                    border-radius: 10px;
                    border-left: 5px solid #8b0000;
                    box-shadow: 
                        0 10px 30px rgba(0, 0, 0, 0.5),
                        inset 0 0 20px rgba(139, 0, 0, 0.1);
                    position: relative;
                    overflow: hidden;
                }
                
                .section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: 
                        repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 20px,
                            rgba(139, 0, 0, 0.02) 22px
                        );
                    pointer-events: none;
                }
                
                .section-title {
                    font-size: 1.6rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    color: #ff4444;
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    font-family: 'Butcherman', cursive;
                    text-shadow: 0 0 10px rgba(255, 68, 68, 0.5);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }
                
                .event-details {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 1rem;
                }
                
                .detail-item {
                    background: linear-gradient(145deg, #3a3a3a 0%, #2a2a2a 100%);
                    padding: 2rem;
                    border-radius: 10px;
                    text-align: center;
                    color: #e0e0e0;
                    border: 2px solid #8b0000;
                    box-shadow: 
                        0 5px 15px rgba(0, 0, 0, 0.3),
                        inset 0 0 15px rgba(139, 0, 0, 0.1);
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }
                
                .detail-item::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: radial-gradient(circle at center, rgba(139, 0, 0, 0.1) 0%, transparent 70%);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                
                .detail-item:hover::before {
                    opacity: 1;
                }
                
                .detail-icon {
                    font-size: 2.2rem;
                    margin-bottom: 1rem;
                    display: block;
                    color: #ff6b6b;
                    text-shadow: 0 0 10px rgba(255, 107, 107, 0.5);
                    animation: iconPulse 2s ease-in-out infinite;
                }
                
                @keyframes iconPulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
                
                .detail-label {
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    font-size: 1rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: #ff4444;
                    font-family: 'Butcherman', cursive;
                }
                
                .detail-value {
                    font-size: 1.3rem;
                    font-weight: 700;
                    color: #ffffff;
                    text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
                }
                
                .guidelines {
                    background: linear-gradient(145deg, #2a1a1a 0%, #1a0a0a 100%);
                    border-left-color: #ff0000;
                }
                
                .guidelines .section-title {
                    color: #ff0000;
                }
                
                .guidelines ul {
                    list-style: none;
                    padding: 0;
                }
                
                .guidelines li {
                    padding: 1rem 0;
                    border-bottom: 1px solid rgba(139, 0, 0, 0.3);
                    position: relative;
                    padding-left: 2.5rem;
                    font-size: 1.1rem;
                    color: #d0d0d0;
                    font-weight: 400;
                    transition: all 0.3s ease;
                }
                
                .guidelines li:hover {
                    color: #ff6b6b;
                    padding-left: 3rem;
                }
                
                .guidelines li::before {
                    content: '💀';
                    position: absolute;
                    left: 0;
                    font-size: 1.4rem;
                    animation: skullBob 2s ease-in-out infinite;
                }
                
                @keyframes skullBob {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-3px); }
                }
                
                .guidelines li:last-child {
                    border-bottom: none;
                }
                
                .game-structure {
                    background: linear-gradient(145deg, #1a1a2a 0%, #0a0a1a 100%);
                    border-left-color: #4b0082;
                }
                
                .game-structure .section-title {
                    color: #9966cc;
                }
                
                .stage {
                    margin-bottom: 2rem;
                    padding: 2rem;
                    background: linear-gradient(145deg, #2a2a3a 0%, #1a1a2a 100%);
                    border-radius: 10px;
                    border: 2px solid #4b0082;
                    box-shadow: 
                        0 5px 15px rgba(0, 0, 0, 0.3),
                        inset 0 0 15px rgba(75, 0, 130, 0.1);
                    position: relative;
                    overflow: hidden;
                }
                
                .stage::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: radial-gradient(circle at 20% 20%, rgba(75, 0, 130, 0.1) 0%, transparent 60%);
                    pointer-events: none;
                }
                
                .stage-title {
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: #bb88dd;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    padding-bottom: 0.8rem;
                    border-bottom: 2px solid rgba(75, 0, 130, 0.5);
                    font-family: 'Nosifer', cursive;
                    text-shadow: 0 0 10px rgba(187, 136, 221, 0.5);
                }
                
                .stage-details {
                    margin-left: 1rem;
                }
                
                .stage-details p {
                    margin: 0.8rem 0;
                    padding-left: 1.5rem;
                    position: relative;
                    font-size: 1.1rem;
                    color: #d0d0d0;
                    font-weight: 400;
                    transition: all 0.3s ease;
                }
                
                .stage-details p:hover {
                    color: #bb88dd;
                    padding-left: 2rem;
                }
                
                .stage-details p::before {
                    content: '🕷️';
                    position: absolute;
                    left: 0;
                    font-size: 1.2rem;
                    animation: spiderCrawl 3s ease-in-out infinite;
                }
                
                @keyframes spiderCrawl {
                    0%, 100% { transform: translateX(0px) rotate(0deg); }
                    50% { transform: translateX(5px) rotate(10deg); }
                }
                
                .warning {
                    background: linear-gradient(145deg, #3a0a0a 0%, #2a0505 100%);
                    border: 3px solid #ff0000;
                    border-radius: 10px;
                    padding: 2rem;
                    margin: 2rem 0;
                    text-align: center;
                    color: #ff4444;
                    font-weight: 700;
                    font-size: 1.3rem;
                    font-family: 'Creepster', cursive;
                    text-shadow: 0 0 15px rgba(255, 68, 68, 0.8);
                    box-shadow: 
                        0 0 30px rgba(255, 0, 0, 0.3),
                        inset 0 0 20px rgba(255, 0, 0, 0.1);
                    animation: warningPulse 2s ease-in-out infinite;
                    position: relative;
                    overflow: hidden;
                }
                
                .warning::before {
                    content: '⚠️ ⚠️ ⚠️';
                    position: absolute;
                    top: 10px;
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: 1.5rem;
                    animation: warningBlink 1s ease-in-out infinite;
                }
                
                @keyframes warningPulse {
                    0%, 100% { 
                        box-shadow: 
                            0 0 30px rgba(255, 0, 0, 0.3),
                            inset 0 0 20px rgba(255, 0, 0, 0.1);
                    }
                    50% { 
                        box-shadow: 
                            0 0 50px rgba(255, 0, 0, 0.5),
                            inset 0 0 30px rgba(255, 0, 0, 0.2);
                    }
                }
                
                @keyframes warningBlink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                
                .closing-text {
                    margin-top: 2rem;
                    text-align: center;
                    font-size: 1.2rem;
                    color: #e0e0e0;
                    font-weight: 500;
                    font-style: italic;
                    text-shadow: 0 0 10px rgba(224, 224, 224, 0.3);
                }
                
                .footer {
                    background: linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 50%, #0a0a0a 100%);
                    padding: 3rem 2rem;
                    text-align: center;
                    border-top: 3px solid #8b0000;
                    position: relative;
                    overflow: hidden;
                }
                
                .footer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: 
                        radial-gradient(circle at 30% 30%, rgba(139, 0, 0, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 70% 70%, rgba(75, 0, 130, 0.1) 0%, transparent 50%);
                    pointer-events: none;
                }
                
                .closing {
                    font-size: 1.4rem;
                    margin-bottom: 1rem;
                    color: #ff6b6b;
                    font-weight: 600;
                    font-family: 'Butcherman', cursive;
                    text-shadow: 0 0 10px rgba(255, 107, 107, 0.5);
                }
                
                .signature {
                    font-weight: 700;
                    font-size: 1.8rem;
                    color: #ff0000;
                    letter-spacing: 2px;
                    font-family: 'Creepster', cursive;
                    text-shadow: 
                        0 0 15px #ff0000,
                        0 0 30px #8b0000;
                    animation: signatureGlow 3s ease-in-out infinite alternate;
                }
                
                @keyframes signatureGlow {
                    0% { 
                        text-shadow: 
                            0 0 15px #ff0000,
                            0 0 30px #8b0000;
                    }
                    100% { 
                        text-shadow: 
                            0 0 25px #ff0000,
                            0 0 50px #8b0000,
                            0 0 75px #4b0082;
                    }
                }
                
                .footer-note {
                    margin-top: 1.5rem;
                    color: #888;
                    font-size: 1rem;
                    font-style: italic;
                    text-shadow: 0 0 5px rgba(136, 136, 136, 0.3);
                }
                
                @media (max-width: 600px) {
                    .email-container {
                        margin: 0 10px;
                        border-radius: 10px;
                    }
                    
                    .title {
                        font-size: 2.5rem;
                    }
                    
                    .content {
                        padding: 2rem 1.5rem;
                    }
                    
                    .event-details {
                        grid-template-columns: 1fr;
                    }
                    
                    .section {
                        padding: 1.5rem;
                    }
                    
                    .warning {
                        font-size: 1.1rem;
                        padding: 1.5rem;
                    }
                }
            </style>
        </head>
        <body>
            <div class="email-container">
                <div class="header">
                    <img src="cid:debuggers-logo" alt="Debuggers Club Logo" class="logo">
                    <h1 class="title">🔒 LOCKDOWN</h1>
                    <p class="subtitle">A Spine-Chilling Interactive Game Event</p>
                </div>
                
                <div class="content">
                    <div class="greeting">
                        💀 Dear Brave Participants,
                    </div>
                    
                    <p class="intro-text">
                        We are thrilled to summon you to <strong>Lockdown</strong>, a spine-chilling interactive game event organized by <strong>The Debuggers Club</strong>, scheduled for <strong>4th September</strong>. Please review the following information carefully as it contains essential details regarding the event structure, rules, and schedule. <span style="color: #ff0000; font-weight: bold;">Enter if you dare...</span>
                    </p>
                    
                    <div class="section">
                        <div class="section-title">🕯️ Event Details</div>
                        <div class="event-details">
                            <div class="detail-item">
                                <div class="detail-icon">📅</div>
                                <div class="detail-label">Date</div>
                                <div class="detail-value">4th September</div>
                            </div>
                            <div class="detail-item">
                                <div class="detail-icon">🕧</div>
                                <div class="detail-label">Reporting Time</div>
                                <div class="detail-value">12:30 PM</div>
                            </div>
                            <div class="detail-item">
                                <div class="detail-icon">🕐</div>
                                <div class="detail-label">Event Time</div>
                                <div class="detail-value">1:00 PM onwards</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="section guidelines">
                        <div class="section-title">⚰️ General Guidelines</div>
                        <ul>
                            <li>Mobile phones are strictly prohibited at all stages of the game.</li>
                            <li>Each participant/team must carry one rough page and a pen for calculations.</li>
                            <li>A valid college ID is required and must be presented at the time of reporting.</li>
                            <li>Detailed instructions about the game will be provided on the day of the event.</li>
                        </ul>
                    </div>
                    
                    <div class="section game-structure">
                        <div class="section-title">🎭 Game Structure</div>
                        <p style="margin-bottom: 1.5rem; font-size: 1.1rem; color: #d0d0d0; font-weight: 500; font-style: italic;">
                            The event consists of three terrifying stages, each with multiple levels and elimination rounds:
                        </p>
                        
                        <div class="stage">
                            <div class="stage-title">
                                🌙 Stage 1
                            </div>
                            <div class="stage-details">
                                <p>Includes 4 levels</p>
                                <p>All levels are non-technical</p>
                                <p>Eliminations will occur after each level</p>
                            </div>
                        </div>
                        
                        <div class="stage">
                            <div class="stage-title">
                                🦇 Stage 2
                            </div>
                            <div class="stage-details">
                                <p>Includes 3 levels</p>
                                <p>Contains 1 bonus level which will be technical</p>
                                <p>Remaining levels are non-technical</p>
                                <p>Eliminations continue after each level</p>
                            </div>
                        </div>
                        
                        <div class="stage">
                            <div class="stage-title">
                                👻 Stage 3
                            </div>
                            <div class="stage-details">
                                <p>Includes 2 final levels</p>
                                <p>Both levels are non-technical</p>
                                <p>The top 3 teams to successfully complete the final level will be declared the winners</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="warning">
                        BE ON TIME • COME PREPARED • GIVE IT YOUR BEST SHOT
                    </div>
                    
                    <p class="closing-text">
                        We look forward to an engaging, challenging, and spine-tingling experience at <strong>Lockdown</strong>. <span style="color: #ff0000; font-weight: bold;">May the bravest souls prevail...</span>
                    </p>
                </div>
                
                <div class="footer">
                    <div class="closing">Best regards,</div>
                    <div class="signature">The Debuggers Club</div>
                    <div class="footer-note">Lockdown Event - Where Skills Meet Terror</div>
                </div>
            </div>
        </body>
        </html>
        `;
    }
});
