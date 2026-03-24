import sys
try:
    import pypdf
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf"])
    import pypdf

reader = pypdf.PdfReader(r"d:\New folder (2)\resume_gurru.pdf (1).pdf")
text = ""
for page in reader.pages:
    text += page.extract_text() + "\n"
print(text)
