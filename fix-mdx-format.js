const fs = require('fs');
const path = require('path');

// Function to clean and update MDX files
function cleanAndUpdateMDX(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Split frontmatter and content
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  
  if (frontmatterMatch) {
    const frontmatterYaml = frontmatterMatch[1];
    const bodyContent = frontmatterMatch[2];
    
    // Parse frontmatter
    const frontmatter = {};
    frontmatterYaml.split('\n').forEach(line => {
      const match = line.match(/^(\w+):\s*(.+)$/);
      if (match) {
        const key = match[1];
        let value = match[2];
        
        // Remove quotes
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        }
        
        frontmatter[key] = value;
      }
    });
    
    // Clean up frontmatter
    const cleanedFrontmatter = {
      title: frontmatter.title,
      description: frontmatter.description,
      pubDate: frontmatter.pubDate,
      heroImage: frontmatter.heroImage === 'undefined' ? '' : frontmatter.heroImage,
      categories: frontmatter.categories,
      audience: 'GENERAL' // Add default audience
    };
    
    // Clean up body content (remove extra empty lines)
    const cleanedBody = bodyContent.replace(/^\s*\n/gm, '').trim();
    
    // Rebuild the file
    const newContent = `---
${Object.entries(cleanedFrontmatter).map(([key, value]) => {
  if (value === '') {
    return `${key}: ""`;
  }
  return `${key}: "${value}"`;
}).join('\n')}
---

${cleanedBody}`;
    
    // Write back to file
    fs.writeFileSync(filePath, newContent);
    console.log(`Cleaned: ${path.basename(filePath)}`);
  }
}

// Process all MDX files
const postsDir = path.join(__dirname, 'content', 'posts');
const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.mdx'));

files.forEach(file => {
  const filePath = path.join(postsDir, file);
  cleanAndUpdateMDX(filePath);
});

console.log('All MDX files cleaned and updated!');
