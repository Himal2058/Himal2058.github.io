# Run LibreCrawl to crawl the live site and output CSV
# Ensure PowerShell execution policy allows this script (run with Bypass if needed)

$ErrorActionPreference = "Stop"

# Path to LibreCrawl repository (installed via Antigravity scratch)
$repoPath = "C:\\Users\\HP\\.gemini\\antigravity\\scratch\\LibreCrawl\\LibreCrawl-main"
Set-Location $repoPath

# Activate the virtual environment
& ".\\.venv\\Scripts\\Activate.ps1"

# Ensure the package is installed in editable mode (no-op if already installed)
python -m pip install -e .

# Define output CSV path (project root)
$projectRoot = "C:\\Users\\HP\\Desktop\\himal-electronics"
$outputCsv = Join-Path $projectRoot "librecrawl_latest.csv"

# Run the crawler (adjust arguments as needed)
python main.py crawl --url https://himalelectronics.vercel.app --output $outputCsv --format csv

Write-Host "LibreCrawl completed. CSV saved to $outputCsv"
