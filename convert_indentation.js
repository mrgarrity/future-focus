const fs = require('fs');

// Read the file
const content = fs.readFileSync('src/components/Presentation.tsx', 'utf8');

// Convert 2-space indentation to 4-space indentation
const lines = content.split('\n');
const convertedLines = lines.map(line => {
    // Count leading spaces
    const leadingSpaces = line.match(/^ */)[0].length;
    if (leadingSpaces > 0 && leadingSpaces % 2 === 0) {
        // Convert 2-space indentation to 4-space
        const newLeadingSpaces = (leadingSpaces / 2) * 4;
        return ' '.repeat(newLeadingSpaces) + line.trimStart();
    }
    return line;
});

// Write the converted content back
fs.writeFileSync('src/components/Presentation.tsx', convertedLines.join('\n'));

console.log('Conversion complete: 2-space indentation converted to 4-space indentation');
