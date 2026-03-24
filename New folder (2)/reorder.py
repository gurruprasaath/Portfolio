import re

file_path = 'd:/New folder (2)/index.astro'

with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

sections_config = {
    'Work': r'<!-- Work Section -->.*?</section>',
    'Experience': r'<!-- Experience Section.*?-->.*?</section>',
    'Education': r'<!-- Education Section -->.*?</section>',
    'Certifications': r'<!-- Certifications.*?-->.*?</section>',
    'About': r'<!-- About Section -->.*?</section>',
    'Contact': r'<!-- Contact Section -->.*?</section>'
}

extracted = {}
for name, pattern in sections_config.items():
    match = re.search(pattern, text, re.DOTALL | re.IGNORECASE)
    if not match:
        raise Exception(f"Missing section: {name}")
    extracted[name] = match.group(0)

def fix_section_tag(sec_text, bg_class):
    tag_match = re.search(r'<section class="(.*?)" id="(.*?)">', sec_text)
    if not tag_match:
        return sec_text
    
    id_name = tag_match.group(2)
    # Filter out any old background/gradient styling from the outer section tag
    classes = [c for c in tag_match.group(1).split() if c not in ['bg-muted', 'bg-muted/50', 'bg-muted/20', 'bg-muted/30', 'bg-gradient-to-b', 'from-background', 'to-muted/20', 'to-background', 'from-muted/20']]
    
    # Ensure standard classes for padding and scroll animations remain
    if 'py-24' not in classes: classes.insert(0, 'py-24')
    if 'scroll-section' not in classes: classes.insert(1, 'scroll-section')
    
    # Re-apply perfectly alternating background
    if bg_class: classes.append(bg_class)
    
    new_tag = f'<section class="{" ".join(classes)}" id="{id_name}">'
    return sec_text.replace(tag_match.group(0), new_tag)

extracted['About'] = fix_section_tag(extracted['About'], 'bg-muted/30')
extracted['Experience'] = fix_section_tag(extracted['Experience'], 'bg-background')
extracted['Work'] = fix_section_tag(extracted['Work'], 'bg-muted/30')
extracted['Education'] = fix_section_tag(extracted['Education'], 'bg-background')
extracted['Certifications'] = fix_section_tag(extracted['Certifications'], 'bg-muted/30')
extracted['Contact'] = fix_section_tag(extracted['Contact'], 'bg-background')

# Extract top part (up to first section) and footer part (from footer comment)
work_idx = text.find('<!-- Work Section -->')
footer_idx = text.find('<!-- Footer -->')

if work_idx == -1 or footer_idx == -1:
    raise Exception("Missing work or footer sections")

start_block = text[:work_idx].rstrip()
end_block = text[footer_idx:]

ordered = [
    start_block,
    extracted['About'],
    extracted['Experience'],
    extracted['Work'],
    extracted['Education'],
    extracted['Certifications'],
    extracted['Contact'],
    "    " + end_block
]

new_text = "\n\n    ".join(ordered) + "\n"

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_text)

print("Reordering successful")
