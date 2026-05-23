param(
  [int]$Port = 3000,
  [string]$OutDir = "C:\Users\gunna\Documents\Codex\2026-05-22\i-had-a-conversation-with-my\exports",
  [int]$TimeoutSec = 120
)

$ErrorActionPreference = "Stop"
$root = "C:\Users\gunna\Documents\Codex\2026-05-22\i-had-a-conversation-with-my"

function Find-Browser {
  $candidates = @(
    "C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    "C:\Program Files\Google\Chrome\Application\chrome.exe",
    "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
  )
  foreach ($path in $candidates) {
    if (Test-Path $path) { return $path }
  }
  throw "Could not find Edge/Chrome. Please install one browser first."
}

function Wait-HttpReady {
  param([string]$Url, [int]$Seconds)
  $deadline = (Get-Date).AddSeconds($Seconds)
  while ((Get-Date) -lt $deadline) {
    try {
      $r = Invoke-WebRequest -Uri $Url -UseBasicParsing -TimeoutSec 2
      if ($r.StatusCode -ge 200 -and $r.StatusCode -lt 500) { return $true }
    } catch {}
    Start-Sleep -Milliseconds 700
  }
  return $false
}

New-Item -ItemType Directory -Force $OutDir | Out-Null

$env:npm_config_cache = Join-Path $root ".npm-cache"

$dev = Start-Process -FilePath "powershell.exe" -ArgumentList "-NoProfile","-Command","cd '$root'; npm run dev -- -p $Port" -PassThru -WindowStyle Hidden

try {
  if (-not (Wait-HttpReady -Url "http://localhost:$Port" -Seconds $TimeoutSec)) {
    throw "Dev server not ready on http://localhost:$Port within $TimeoutSec seconds"
  }

  $browser = Find-Browser

  $routes = @(
    @{ path = "/"; name = "home" },
    @{ path = "/services"; name = "services" },
    @{ path = "/process"; name = "process" },
    @{ path = "/work"; name = "work" },
    @{ path = "/clients"; name = "clients" },
    @{ path = "/contact"; name = "contact" }
  )

  foreach ($r in $routes) {
    $url = "http://localhost:$Port$($r.path)"
    $out = Join-Path $OutDir "$($r.name).png"

    # Big viewport to capture long editorial sections in one shot.
    & $browser --headless --disable-gpu --hide-scrollbars --window-size=1440,5200 --screenshot="$out" "$url" | Out-Null

    if (-not (Test-Path $out)) {
      throw "Failed screenshot for $url"
    }
  }

  Write-Host "Done. Screenshots saved to: $OutDir"
  Write-Host "Files: home.png, services.png, process.png, work.png, clients.png, contact.png"
} finally {
  if ($dev -and -not $dev.HasExited) {
    Stop-Process -Id $dev.Id -Force -ErrorAction SilentlyContinue
  }
}
