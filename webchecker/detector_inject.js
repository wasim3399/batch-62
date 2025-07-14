// detector_inject.js
(function() {
  function detectTechnologies() {
    const techs = [];
    const frontendFrameworks = [];
    const backendFrameworks = [];
    const frontendLanguages = [];
    const backendLanguages = [];
    const scripts = Array.from(document.scripts).map(s => s.src || s.textContent);
    const html = document.documentElement.outerHTML;
    const bodyText = document.body.textContent;
    const metaTags = Array.from(document.getElementsByTagName('meta'));
    const links = Array.from(document.getElementsByTagName('link'));

    // --- Frontend Languages ---
    if (html.includes('<script') || scripts.length > 0) frontendLanguages.push('JavaScript');
    if (html.includes('<style') || html.includes('class=')) frontendLanguages.push('CSS');
    if (html.includes('<html')) frontendLanguages.push('HTML');
    if (bodyText.match(/TypeScript/i) || scripts.some(s => s.includes('typescript'))) frontendLanguages.push('TypeScript');

    // --- Backend Languages (Improved Detection) ---
    // Check meta tags for backend info
    const generatorMeta = metaTags.find(m => m.name === 'generator' || m.getAttribute('name') === 'generator');
    if (generatorMeta) {
      const generator = generatorMeta.content.toLowerCase();
      if (generator.includes('wordpress')) backendLanguages.push('PHP');
      if (generator.includes('drupal')) backendLanguages.push('PHP');
      if (generator.includes('joomla')) backendLanguages.push('PHP');
      if (generator.includes('django')) backendLanguages.push('Python');
      if (generator.includes('rails')) backendLanguages.push('Ruby');
    }

    // Check for common backend patterns
    if (bodyText.match(/\b(PHP|Laravel|Symfony|CodeIgniter|WordPress|wp-content|wp-includes)\b/i) || 
        html.includes('wp-content') || 
        html.includes('wp-includes') ||
        window.location.href.includes('php') ||
        document.cookie.includes('wordpress')) {
      backendLanguages.push('PHP');
    }
    
    if (bodyText.match(/\b(Python|Django|Flask|FastAPI|Pipenv|requirements\.txt)\b/i) ||
        window.location.href.includes('python') ||
        document.cookie.includes('django')) {
      backendLanguages.push('Python');
    }
    
    if (bodyText.match(/\b(Ruby|Rails|Gemfile|Bundler)\b/i) ||
        window.location.href.includes('ruby') ||
        document.cookie.includes('rails')) {
      backendLanguages.push('Ruby');
    }
    
    if (bodyText.match(/\b(Java|Spring|Maven|Gradle|JSP|Servlet)\b/i) ||
        window.location.href.includes('java') ||
        document.cookie.includes('spring')) {
      backendLanguages.push('Java');
    }
    
    if (bodyText.match(/\b(C#|ASP\.NET|\.NET|MVC|WebForms)\b/i) ||
        window.location.href.includes('asp') ||
        window.location.href.includes('dotnet')) {
      backendLanguages.push('C#');
    }
    
    if (bodyText.match(/\b(Go|Golang|Gin|Echo|Fiber)\b/i) ||
        window.location.href.includes('go')) {
      backendLanguages.push('Go');
    }
    
    if (bodyText.match(/\b(Node\.js|Express|Koa|Hapi|NestJS|npm|yarn)\b/i) ||
        scripts.some(s => s.includes('express')) ||
        scripts.some(s => s.includes('node')) ||
        window.location.href.includes('node')) {
      backendLanguages.push('Node.js');
    }
    
    if (bodyText.match(/\b(Perl|CGI|Mason)\b/i) ||
        window.location.href.includes('perl')) {
      backendLanguages.push('Perl');
    }
    
    if (bodyText.match(/\b(Scala|Play|Akka)\b/i) ||
        window.location.href.includes('scala')) {
      backendLanguages.push('Scala');
    }
    
    if (bodyText.match(/\b(Rust|Cargo|Actix|Rocket)\b/i) ||
        window.location.href.includes('rust')) {
      backendLanguages.push('Rust');
    }
    
    if (bodyText.match(/\b(Kotlin|Spring Boot)\b/i) ||
        window.location.href.includes('kotlin')) {
      backendLanguages.push('Kotlin');
    }
    
    if (bodyText.match(/\b(Swift|Vapor|Perfect)\b/i) ||
        window.location.href.includes('swift')) {
      backendLanguages.push('Swift');
    }

    // Check server headers (if available)
    try {
      const serverHeader = document.querySelector('meta[http-equiv="Server"]');
      if (serverHeader) {
        const server = serverHeader.content.toLowerCase();
        if (server.includes('apache')) techs.push('Apache');
        if (server.includes('nginx')) techs.push('Nginx');
        if (server.includes('iis')) techs.push('IIS');
      }
    } catch (e) {}

    // --- Frontend Frameworks/Libraries ---
    if (window.React || scripts.some(s => s.includes('react'))) frontendFrameworks.push('React');
    if (window.angular || scripts.some(s => s.includes('angular'))) frontendFrameworks.push('Angular');
    if (window.Vue || scripts.some(s => s.includes('vue'))) frontendFrameworks.push('Vue.js');
    if (window.jQuery || scripts.some(s => s.includes('jquery'))) frontendFrameworks.push('jQuery');
    if (window._ || scripts.some(s => s.includes('lodash'))) frontendFrameworks.push('Lodash');
    if (window.axios || scripts.some(s => s.includes('axios'))) frontendFrameworks.push('Axios');
    if (scripts.some(s => s.includes('bootstrap'))) frontendFrameworks.push('Bootstrap');
    if (scripts.some(s => s.includes('tailwind'))) frontendFrameworks.push('Tailwind CSS');
    if (scripts.some(s => s.includes('fontawesome'))) frontendFrameworks.push('Font Awesome');
    if (scripts.some(s => s.includes('material'))) frontendFrameworks.push('Material UI');
    if (scripts.some(s => s.includes('next'))) frontendFrameworks.push('Next.js');
    if (scripts.some(s => s.includes('nuxt'))) frontendFrameworks.push('Nuxt.js');
    if (scripts.some(s => s.includes('svelte'))) frontendFrameworks.push('Svelte');
    if (scripts.some(s => s.includes('ember'))) frontendFrameworks.push('Ember.js');
    if (scripts.some(s => s.includes('backbone'))) frontendFrameworks.push('Backbone.js');
    if (scripts.some(s => s.includes('redux'))) frontendFrameworks.push('Redux');
    if (scripts.some(s => s.includes('moment'))) frontendFrameworks.push('Moment.js');
    if (scripts.some(s => s.includes('chartjs'))) frontendFrameworks.push('Chart.js');
    if (scripts.some(s => s.includes('d3'))) frontendFrameworks.push('D3.js');
    if (scripts.some(s => s.includes('three'))) frontendFrameworks.push('Three.js');
    if (scripts.some(s => s.includes('anime'))) frontendFrameworks.push('Anime.js');
    if (scripts.some(s => s.includes('gsap'))) frontendFrameworks.push('GSAP');
    if (scripts.some(s => s.includes('firebase'))) frontendFrameworks.push('Firebase');
    if (scripts.some(s => s.includes('graphql'))) frontendFrameworks.push('GraphQL');
    if (scripts.some(s => s.includes('apollo'))) frontendFrameworks.push('Apollo');
    if (scripts.some(s => s.includes('socket.io'))) frontendFrameworks.push('Socket.IO');
    if (scripts.some(s => s.includes('pusher'))) frontendFrameworks.push('Pusher');
    if (scripts.some(s => s.includes('stripe'))) frontendFrameworks.push('Stripe');
    if (scripts.some(s => s.includes('paypal'))) frontendFrameworks.push('PayPal');

    // --- Backend Frameworks (Improved Detection) ---
    if (bodyText.match(/\bLaravel\b/i) || scripts.some(s => s.includes('laravel')) || window.location.href.includes('laravel')) backendFrameworks.push('Laravel');
    if (bodyText.match(/\bDjango\b/i) || scripts.some(s => s.includes('django')) || window.location.href.includes('django')) backendFrameworks.push('Django');
    if (bodyText.match(/\bFlask\b/i) || scripts.some(s => s.includes('flask')) || window.location.href.includes('flask')) backendFrameworks.push('Flask');
    if (bodyText.match(/\bExpress\b/i) || scripts.some(s => s.includes('express')) || window.location.href.includes('express')) backendFrameworks.push('Express');
    if (bodyText.match(/\bSpring\b/i) || scripts.some(s => s.includes('spring')) || window.location.href.includes('spring')) backendFrameworks.push('Spring');
    if (bodyText.match(/\bRails\b/i) || scripts.some(s => s.includes('rails')) || window.location.href.includes('rails')) backendFrameworks.push('Ruby on Rails');
    if (bodyText.match(/\bASP\.NET\b/i) || scripts.some(s => s.includes('aspnet')) || window.location.href.includes('aspnet')) backendFrameworks.push('ASP.NET');
    if (bodyText.match(/\bSymfony\b/i) || scripts.some(s => s.includes('symfony')) || window.location.href.includes('symfony')) backendFrameworks.push('Symfony');
    if (bodyText.match(/\bCodeIgniter\b/i) || scripts.some(s => s.includes('codeigniter')) || window.location.href.includes('codeigniter')) backendFrameworks.push('CodeIgniter');
    if (bodyText.match(/\bPhoenix\b/i) || scripts.some(s => s.includes('phoenix')) || window.location.href.includes('phoenix')) backendFrameworks.push('Phoenix');
    if (bodyText.match(/\bNestJS\b/i) || scripts.some(s => s.includes('nestjs')) || window.location.href.includes('nestjs')) backendFrameworks.push('NestJS');
    if (bodyText.match(/\bFastAPI\b/i) || scripts.some(s => s.includes('fastapi')) || window.location.href.includes('fastapi')) backendFrameworks.push('FastAPI');
    if (bodyText.match(/\bKoa\b/i) || scripts.some(s => s.includes('koa')) || window.location.href.includes('koa')) backendFrameworks.push('Koa');
    if (bodyText.match(/\bHapi\b/i) || scripts.some(s => s.includes('hapi')) || window.location.href.includes('hapi')) backendFrameworks.push('Hapi');

    // --- Other Technologies ---
    // CMS/Platforms
    if (bodyText.match(/\bWordPress\b/i) || html.includes('wp-content')) techs.push('WordPress');
    if (bodyText.match(/\bShopify\b/i)) techs.push('Shopify');
    if (bodyText.match(/\bMagento\b/i)) techs.push('Magento');
    if (bodyText.match(/\bWix\b/i)) techs.push('Wix');
    if (bodyText.match(/\bSquarespace\b/i)) techs.push('Squarespace');
    if (bodyText.match(/\bBlogger\b/i)) techs.push('Blogger');
    if (bodyText.match(/\bDrupal\b/i)) techs.push('Drupal');
    if (bodyText.match(/\bJoomla\b/i)) techs.push('Joomla');
    if (bodyText.match(/\bGhost\b/i)) techs.push('Ghost');
    if (bodyText.match(/\bWeebly\b/i)) techs.push('Weebly');

    // Server/Cloud
    if (bodyText.match(/\bAWS|Amazon Web Services\b/i)) techs.push('AWS');
    if (bodyText.match(/\bAzure\b/i)) techs.push('Azure');
    if (bodyText.match(/\bGoogle Cloud\b/i)) techs.push('Google Cloud');
    if (bodyText.match(/\bHeroku\b/i)) techs.push('Heroku');
    if (bodyText.match(/\bNetlify\b/i)) techs.push('Netlify');
    if (bodyText.match(/\bVercel\b/i)) techs.push('Vercel');

    // Analytics
    if (scripts.some(s => s.includes('google-analytics') || s.includes('gtag'))) techs.push('Google Analytics');
    if (scripts.some(s => s.includes('hotjar'))) techs.push('Hotjar');
    if (scripts.some(s => s.includes('mixpanel'))) techs.push('Mixpanel');
    if (scripts.some(s => s.includes('segment'))) techs.push('Segment');
    if (scripts.some(s => s.includes('facebook'))) techs.push('Facebook Pixel');

    // SEO
    if (metaTags.some(m => m.name && m.name.toLowerCase().includes('description'))) techs.push('SEO Meta Description');
    if (metaTags.some(m => m.name && m.name.toLowerCase().includes('keywords'))) techs.push('SEO Meta Keywords');

    return {
      frontendLanguages,
      backendLanguages,
      frontendFrameworks,
      backendFrameworks,
      techs
    };
  }

  const result = detectTechnologies();
  chrome.runtime.sendMessage({ source: 'webchecker-detector', result });
})(); 