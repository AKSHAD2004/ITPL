$source = "C:\Users\hp\.gemini\antigravity\brain\2976dfad-83ab-4a3b-884a-fd2a12019c47\.user_uploaded\media_1788584958268.png"
$destDir = "D:\ITPL\Infoyashonand\public\assets"
$dest1 = Join-Path $destDir "logo.png"
$dest2 = Join-Path $destDir "nav_logo.png"

Write-Output "Step 1: Checking source file..."
if (-not (Test-Path -LiteralPath $source)) {
    Write-Error "Source file does not exist: $source"
    exit 1
}
Write-Output "Source file exists: True"

Write-Output "Step 2: Checking destination directory..."
if (-not (Test-Path -LiteralPath $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    Write-Output "Created destination directory: $destDir"
} else {
    Write-Output "Destination directory already exists: $destDir"
}

Write-Output "Step 3: Copying to logo.png..."
Copy-Item -LiteralPath $source -Destination $dest1 -Force
Write-Output "Copied to: $dest1"

Write-Output "Step 4: Copying to nav_logo.png..."
Copy-Item -LiteralPath $source -Destination $dest2 -Force
Write-Output "Copied to: $dest2"

Write-Output "Step 5: Verifying copies..."
$check1 = Test-Path -LiteralPath $dest1
$check2 = Test-Path -LiteralPath $dest2

Write-Output "logo.png exists: $check1"
Write-Output "nav_logo.png exists: $check2"

if ($check1 -and $check2) {
    Write-Output "SUCCESS: Both files copied and verified successfully!"
} else {
    Write-Error "FAILED: One or both files missing after copy."
    exit 1
}
