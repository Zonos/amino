#!/usr/bin/env bash
# check-migration.sh — per-phase gate checker for CSS Modules → Tailwind migration
# Usage: ./scripts/check-migration.sh [phase]
#   phase 0 — infrastructure in place
#   phase 1 — shadcn primitives installed
#   phase 2 — simple leaf components migrated
#   phase 3 — form components migrated
#   phase 4 — complex/composite components migrated
#   phase 5 — MUI components replaced
#   phase 6 — layout/animation components migrated
#   phase 7 — final cleanup (no .module.scss files remain)

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

PASS=0
FAIL=0
WARN=0

pass() { ((PASS++)); echo -e "  ${GREEN}✓${NC} $1"; }
fail() { ((FAIL++)); echo -e "  ${RED}✗${NC} $1"; }
warn() { ((WARN++)); echo -e "  ${YELLOW}⚠${NC} $1"; }

phase=${1:-0}

echo "═══════════════════════════════════════════"
echo " Migration Gate Check — Phase $phase"
echo "═══════════════════════════════════════════"
echo ""

# ── Phase 0: Infrastructure ──
if [ "$phase" -ge 0 ]; then
  echo "Phase 0: Infrastructure"

  [ -f "tailwind.config.ts" ] && pass "tailwind.config.ts exists" || fail "tailwind.config.ts missing"
  [ -f "src/styles/tailwind.css" ] && pass "src/styles/tailwind.css exists" || fail "src/styles/tailwind.css missing"
  [ -f "src/utils/cn.ts" ] && pass "src/utils/cn.ts exists" || fail "src/utils/cn.ts missing"
  [ -f "components.json" ] && pass "components.json exists" || fail "components.json missing"

  grep -q "@tailwindcss/postcss" postcss.config.mts 2>/dev/null && pass "PostCSS config includes @tailwindcss/postcss" || fail "PostCSS config missing @tailwindcss/postcss"
  grep -q "tailwindcss" package.json 2>/dev/null && pass "tailwindcss in package.json" || fail "tailwindcss not in package.json"
  grep -q "tailwind-merge" package.json 2>/dev/null && pass "tailwind-merge in package.json" || fail "tailwind-merge not in package.json"
  grep -q "class-variance-authority" package.json 2>/dev/null && pass "class-variance-authority in package.json" || fail "class-variance-authority not in package.json"
  grep -q "tailwind.css" .storybook/preview.tsx 2>/dev/null && pass "Storybook imports tailwind.css" || fail "Storybook missing tailwind.css import"

  echo ""
fi

# ── Phase 1: shadcn primitives ──
if [ "$phase" -ge 1 ]; then
  echo "Phase 1: shadcn Primitives"

  [ -d "src/components/ui" ] && pass "src/components/ui directory exists" || fail "src/components/ui directory missing"

  for component in button dialog badge; do
    [ -f "src/components/ui/${component}.tsx" ] && pass "ui/${component}.tsx exists" || fail "ui/${component}.tsx missing"
  done

  echo ""
fi

# ── Phase 2-6: Component migration progress ──
if [ "$phase" -ge 2 ]; then
  echo "Phase 2-6: Component Migration Progress"

  TOTAL_SCSS=$(find src -name "*.module.scss" -not -path "*/node_modules/*" | wc -l | tr -d ' ')
  echo "  Remaining .module.scss files: $TOTAL_SCSS"

  if [ "$TOTAL_SCSS" -eq 0 ]; then
    pass "All .module.scss files removed"
  elif [ "$phase" -ge 7 ]; then
    fail "$TOTAL_SCSS .module.scss files still remain"
  else
    warn "$TOTAL_SCSS .module.scss files still to migrate"
  fi

  # Check for cn() adoption
  CN_USAGES=$(grep -r "from.*cn" src/components --include="*.tsx" -l 2>/dev/null | wc -l | tr -d ' ')
  echo "  Components using cn(): $CN_USAGES"

  echo ""
fi

# ── Phase 5: MUI removal ──
if [ "$phase" -ge 5 ]; then
  echo "Phase 5: MUI Removal"

  MUI_IMPORTS=$(grep -r "@mui/material" src --include="*.tsx" --include="*.ts" -l 2>/dev/null | wc -l | tr -d ' ')
  if [ "$MUI_IMPORTS" -eq 0 ]; then
    pass "No @mui/material imports in src/"
  else
    fail "$MUI_IMPORTS files still import @mui/material"
  fi

  EMOTION_IMPORTS=$(grep -r "@emotion/" src --include="*.tsx" --include="*.ts" -l 2>/dev/null | wc -l | tr -d ' ')
  if [ "$EMOTION_IMPORTS" -eq 0 ]; then
    pass "No @emotion imports in src/"
  else
    fail "$EMOTION_IMPORTS files still import @emotion"
  fi

  echo ""
fi

# ── Phase 7: Final cleanup ──
if [ "$phase" -ge 7 ]; then
  echo "Phase 7: Final Cleanup"

  SCSS_DTS=$(find src -name "*.module.scss.d.ts" -not -path "*/node_modules/*" | wc -l | tr -d ' ')
  if [ "$SCSS_DTS" -eq 0 ]; then
    pass "All .module.scss.d.ts files removed"
  else
    fail "$SCSS_DTS .module.scss.d.ts files still remain"
  fi

  # Check deprecated deps are removed
  for dep in typed-scss-modules sass-loader css-loader style-loader eslint-plugin-css-modules; do
    if grep -q "\"$dep\"" package.json 2>/dev/null; then
      fail "$dep still in package.json"
    else
      pass "$dep removed from package.json"
    fi
  done

  echo ""
fi

# ── Summary ──
echo "═══════════════════════════════════════════"
echo -e " Results: ${GREEN}$PASS passed${NC}, ${RED}$FAIL failed${NC}, ${YELLOW}$WARN warnings${NC}"
echo "═══════════════════════════════════════════"

if [ "$FAIL" -gt 0 ]; then
  exit 1
fi
