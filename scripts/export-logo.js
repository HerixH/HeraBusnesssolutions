const fs = require('fs');
const path = require('path');

async function exportLogo() {
  let resvg;
  try {
    resvg = require('@resvg/resvg-js');
  } catch {
    const { execSync } = require('child_process');
    execSync('npm install --no-save @resvg/resvg-js', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
    resvg = require('@resvg/resvg-js');
  }

  const root = path.join(__dirname, '..');
  const svgPath = path.join(root, 'public', 'images', 'hera-logo.svg');
  const pngPath = path.join(root, 'public', 'images', 'hera-logo.png');
  const svg = fs.readFileSync(svgPath, 'utf8');
  const renderer = new resvg.Resvg(svg, {
    fitTo: { mode: 'width', value: 2048 },
    background: '#F7F2EA',
  });
  const pngData = renderer.render();
  fs.writeFileSync(pngPath, pngData.asPng());
  console.log('Exported', pngPath, `(${fs.statSync(pngPath).size} bytes)`);
}

exportLogo().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
