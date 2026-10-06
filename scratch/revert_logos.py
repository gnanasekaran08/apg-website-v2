import glob
import re

html_files = glob.glob("*.html")

logo_header_pattern = re.compile(
    r'<a href="index\.html" class="flex items-center gap-3 py-1">\s*<img src="images/logo\.png"[^>]*>\s*</a>',
    re.DOTALL
)

logo_footer_pattern = re.compile(
    r'<div class="flex items-center gap-2">\s*<img src="images/logo\.png"[^>]*>\s*</div>',
    re.DOTALL
)

original_header = '''<a href="index.html" class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-700 to-brand-800 text-white flex items-center justify-center font-bold text-xl shadow-md">
              <i data-lucide="recycle" class="w-7 h-7 text-emerald-300"></i>
            </div>
            <div>
              <span class="block font-extrabold text-2xl tracking-tight text-slate-900">APG RECYCLING</span>
              <span class="block text-[11px] font-bold uppercase tracking-wider text-brand-700">Pte Ltd • Pioneer Centre Singapore</span>
            </div>
          </a>'''

original_footer = '''<div class="flex items-center gap-2">
            <div class="w-9 h-9 rounded-lg bg-brand-700 text-white flex items-center justify-center font-bold text-lg">
              <i data-lucide="recycle" class="w-5 h-5"></i>
            </div>
            <span class="font-extrabold text-slate-900 text-lg tracking-tight">APG RECYCLING</span>
          </div>'''

reverted_count = 0

for file_path in html_files:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    new_content = logo_header_pattern.sub(original_header, content)
    new_content = logo_footer_pattern.sub(original_footer, new_content)

    if new_content != content:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        reverted_count += 1
        print(f"Reverted logo in {file_path}")
    else:
        print(f"No match in {file_path}")

print(f"Finished reverting {reverted_count} files.")
