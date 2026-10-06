import os
import glob
import re

html_files = glob.glob("*.html")

header_pattern_1 = re.compile(
    r'<a href="index\.html" class="flex items-center gap-3[^"]*">\s*<div class="w-12 h-12[^"]*">.*?</div>\s*<div>\s*<span class="block font-extrabold text-2xl[^"]*">APG RECYCLING</span>\s*<span class="block text-\[11px\][^"]*">Pte Ltd • Pioneer Centre Singapore</span>\s*</div>\s*</a>',
    re.DOTALL
)

header_pattern_2 = re.compile(
    r'<!-- Logo -->\s*<a href="index\.html" class="flex items-center gap-3[^"]*">\s*<div class="w-12 h-12[^"]*">.*?</div>\s*<div>\s*<span class="block font-extrabold text-2xl[^"]*">APG RECYCLING</span>\s*<span class="block text-\[11px\][^"]*">Pte Ltd • Pioneer Centre Singapore</span>\s*</div>\s*</a>',
    re.DOTALL
)

footer_pattern_1 = re.compile(
    r'<div class="flex items-center gap-2 font-extrabold text-lg text-slate-900">\s*<i data-lucide="recycle"[^>]*></i> APG RECYCLING PTE LTD\s*</div>',
    re.DOTALL
)

footer_pattern_2 = re.compile(
    r'<div class="flex items-center gap-2">\s*<div class="w-9 h-9 rounded-lg bg-brand-700 text-white flex items-center justify-center font-bold text-lg">\s*<i data-lucide="recycle" class="w-5 h-5"></i>\s*</div>\s*<span class="font-extrabold text-slate-900 text-lg tracking-tight">APG RECYCLING</span>\s*</div>',
    re.DOTALL
)

new_header_logo = '''<a href="index.html" class="flex items-center gap-3 py-1">
            <img src="images/logo.png" alt="APG Recycling Pte Ltd Logo" class="h-12 sm:h-14 w-auto object-contain">
          </a>'''

new_footer_logo = '''<div class="flex items-center gap-2">
            <img src="images/logo.png" alt="APG Recycling Pte Ltd Logo" class="h-10 w-auto object-contain">
          </div>'''

updated_count = 0

for file_path in html_files:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    new_content = header_pattern_2.sub(new_header_logo, content)
    new_content = header_pattern_1.sub(new_header_logo, new_content)
    new_content = footer_pattern_1.sub(new_footer_logo, new_content)
    new_content = footer_pattern_2.sub(new_footer_logo, new_content)

    if new_content != content:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        updated_count += 1
        print(f"Updated logo in {file_path}")
    else:
        print(f"No match in {file_path}")

print(f"Finished updating {updated_count} files.")
