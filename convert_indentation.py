import re

with open('src/components/Presentation.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Convert 2-space indentation to 4-space indentation
lines = content.split('\n')
converted_lines = []
for line in lines:
    # Count leading spaces
    leading_spaces = len(line) - len(line.lstrip(' '))
    if leading_spaces > 0 and leading_spaces % 2 == 0:
        # Convert 2-space indentation to 4-space
        new_leading_spaces = (leading_spaces // 2) * 4
        converted_line = ' ' * new_leading_spaces + line.lstrip(' ')
        converted_lines.append(converted_line)
    else:
        converted_lines.append(line)

with open('src/components/Presentation.tsx', 'w', encoding='utf-8') as f:
    f.write('\n'.join(converted_lines))

print("Conversion complete: 2-space indentation converted to 4-space indentation")
