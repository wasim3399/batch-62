// popup.js

document.addEventListener('DOMContentLoaded', () => {
  detectTechnologies();
});

function detectTechnologies() {
  chrome.runtime.onMessage.addListener(function handler(message, sender, sendResponse) {
    if (message && message.source === 'webchecker-detector') {
      chrome.runtime.onMessage.removeListener(handler);
      showResults(message.result);
    }
  });

  chrome.tabs && chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if (tabs[0]) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        files: ['detector_inject.js']
      });
    }
  });
}

function getTechIcon(tech) {
  const icons = {
    // Languages
    'HTML': '🌐',
    'CSS': '🎨',
    'JavaScript': '⚡',
    'TypeScript': '📘',
    'PHP': '🐘',
    'Python': '🐍',
    'Ruby': '💎',
    'Java': '☕',
    'C#': '🔷',
    'Go': '🐹',
    'Node.js': '🟢',
    'Perl': '🐪',
    'Scala': '🔴',
    'Rust': '🦀',
    'Kotlin': '🔶',
    'Swift': '🍎',
    
    // Frontend Frameworks
    'React': '⚛️',
    'Angular': '🅰️',
    'Vue.js': '💚',
    'jQuery': '💫',
    'Lodash': '📚',
    'Axios': '🔗',
    'Bootstrap': '🎯',
    'Tailwind CSS': '🎨',
    'Font Awesome': '✨',
    'Material UI': '🎨',
    'Next.js': '⚡',
    'Nuxt.js': '🟢',
    'Svelte': '🔥',
    'Ember.js': '🟠',
    'Backbone.js': '🦴',
    'Redux': '🔄',
    'Moment.js': '⏰',
    'Chart.js': '📊',
    'D3.js': '📈',
    'Three.js': '🎲',
    'Anime.js': '🎬',
    'GSAP': '🎭',
    'Firebase': '🔥',
    'GraphQL': '🔷',
    'Apollo': '🚀',
    'Socket.IO': '🔌',
    'Pusher': '📡',
    'Stripe': '💳',
    'PayPal': '💰',
    
    // Backend Frameworks
    'Laravel': '🔥',
    'Django': '🐍',
    'Flask': '🍶',
    'Express': '🚂',
    'Spring': '🌱',
    'Ruby on Rails': '🛤️',
    'ASP.NET': '🟣',
    'Symfony': '🎭',
    'CodeIgniter': '🔥',
    'Phoenix': '🔥',
    'NestJS': '🪺',
    'FastAPI': '⚡',
    'Koa': '🌲',
    'Hapi': '🎭',
    
    // Other Technologies
    'WordPress': '📝',
    'Shopify': '🛒',
    'Magento': '🛍️',
    'Wix': '🔧',
    'Squarespace': '⬜',
    'Blogger': '📝',
    'Drupal': '💧',
    'Joomla': '🎯',
    'Ghost': '👻',
    'Weebly': '🔧',
    'AWS': '☁️',
    'Azure': '☁️',
    'Google Cloud': '☁️',
    'Heroku': '🟣',
    'Netlify': '🟢',
    'Vercel': '⚡',
    'Google Analytics': '📊',
    'Hotjar': '🔥',
    'Mixpanel': '📈',
    'Segment': '📊',
    'Facebook Pixel': '📘',
    'SEO Meta Description': '🔍',
    'SEO Meta Keywords': '🔍',
    'Apache': '🦅',
    'Nginx': '🟢',
    'IIS': '🟦'
  };
  
  return icons[tech] || '🔧';
}

function createTechTable(techs, sectionClass = '') {
  if (!techs || techs.length === 0) {
    return '<div class="no-tech">None detected</div>';
  }
  
  let table = '<table class="tech-table">';
  techs.forEach(tech => {
    const icon = getTechIcon(tech);
    const iconClass = `tech-${tech.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
    table += `
      <tr>
        <td><span class="tech-icon ${iconClass}">${icon}</span></td>
        <td>${tech}</td>
      </tr>
    `;
  });
  table += '</table>';
  return table;
}

function showResults(result) {
  const resultsDiv = document.getElementById('results');
  if (!result) {
    resultsDiv.innerHTML = '<div class="loading">Could not detect technologies.</div>';
    return;
  }
  
  let html = '';

  // --- Languages ---
  html += '<div class="tech-section">';
  html += '<h4>Languages</h4>';
  
  html += '<div class="tech-subsection">';
  html += '<div class="tech-subsection-title">Frontend</div>';
  html += createTechTable(result.frontendLanguages);
  html += '</div>';
  
  html += '<div class="tech-subsection">';
  html += '<div class="tech-subsection-title">Backend</div>';
  html += createTechTable(result.backendLanguages);
  html += '</div>';
  html += '</div>';

  // --- Frameworks/Libraries ---
  html += '<div class="tech-section">';
  html += '<h4>Frameworks & Libraries</h4>';
  
  html += '<div class="tech-subsection">';
  html += '<div class="tech-subsection-title">Frontend</div>';
  html += createTechTable(result.frontendFrameworks);
  html += '</div>';
  
  html += '<div class="tech-subsection">';
  html += '<div class="tech-subsection-title">Backend</div>';
  html += createTechTable(result.backendFrameworks);
  html += '</div>';
  html += '</div>';

  // --- Other Technologies ---
  html += '<div class="tech-section">';
  html += '<h4>Other Technologies</h4>';
  html += createTechTable(result.techs);
  html += '</div>';

  resultsDiv.innerHTML = html;
} 