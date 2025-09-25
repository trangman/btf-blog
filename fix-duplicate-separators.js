const fs = require('fs');
const path = require('path');

const postsDir = path.join(process.cwd(), 'content/posts');

async function fixDuplicateSeparators() {
  try {
    const files = await fs.promises.readdir(postsDir);
    const mdxFiles = files.filter(file => file.endsWith('.mdx'));
    
    console.log(`Found ${mdxFiles.length} MDX files to process`);
    
    for (const file of mdxFiles) {
      const filePath = path.join(postsDir, file);
      const content = await fs.promises.readFile(filePath, 'utf8');
      
      // Fix duplicate separators - remove lines that are just "---" after the frontmatter
      const lines = content.split('\n');
      let frontmatterEnded = false;
      let newLines = [];
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.trim() === '---') {
          if (!frontmatterEnded) {
            // This is the end of frontmatter
            frontmatterEnded = true;
            newLines.push(line);
          } else if (i + 1 < lines.length && lines[i + 1].trim() === '---') {
            // Skip duplicate separator
            console.log(`Skipping duplicate separator in ${file} at line ${i + 1}`);
            continue;
          } else {
            // This is a legitimate separator (not duplicate)
            newLines.push(line);
          }
        } else {
          newLines.push(line);
        }
      }
      
      const newContent = newLines.join('\n');
      
      if (newContent !== content) {
        await fs.promises.writeFile(filePath, newContent, 'utf8');
        console.log(`Fixed duplicate separators in ${file}`);
      } else {
        console.log(`No changes needed for ${file}`);
      }
    }
    
    console.log('✅ All files processed');
  } catch (error) {
    console.error('Error:', error);
  }
}

fixDuplicateSeparators();
