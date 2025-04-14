const fs = require('fs');
const path = require('path');

const images = [
  {
    name: 'ai-development.jpg',
    width: 800,
    height: 600,
    text: 'AI-Powered Development'
  },
  {
    name: 'multi-chain.jpg',
    width: 800,
    height: 600,
    text: 'Multi-Chain Support'
  },
  {
    name: 'security.jpg',
    width: 800,
    height: 600,
    text: 'Security Analysis'
  },
  {
    name: 'transaction.jpg',
    width: 800,
    height: 600,
    text: 'Transaction Builder'
  },
  {
    name: 'explorer.jpg',
    width: 800,
    height: 600,
    text: 'Chain Explorer'
  },
  {
    name: 'ide-preview.jpg',
    width: 1200,
    height: 800,
    text: 'Cortex IDE Preview'
  }
];

// Create the images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate SVG placeholder for each image
images.forEach(({ name, width, height, text }) => {
  const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#1a1a1a"/>
  <text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">
    ${text}
  </text>
</svg>`;

  const filePath = path.join(imagesDir, name);
  fs.writeFileSync(filePath.replace('.jpg', '.svg'), svg);
  console.log(`Generated ${name.replace('.jpg', '.svg')}`);
}); 