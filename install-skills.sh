#!/usr/bin/env bash

set -euo pipefail

BASE="$HOME/.config/opencode/skills"
BACKUP_DIR="$HOME/.config/opencode/skills_backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

echo "🚀 Instalando skills com backup + rollback automático"
echo "📁 Base: $BASE"

mkdir -p "$BASE"
mkdir -p "$BACKUP_DIR"

########################################
# 🔄 BACKUP AUTOMÁTICO
########################################

backup_skills() {
  if [[ -d "$BASE" && "$(ls -A "$BASE")" ]]; then
    local backup_path="$BACKUP_DIR/skills_$TIMESTAMP"
    cp -r "$BASE" "$backup_path"
    echo "💾 Backup criado: $backup_path"
  else
    echo "ℹ️ Nenhum backup necessário (skills vazias)"
  fi
}

########################################
# 🔙 ROLLBACK AUTOMÁTICO
########################################

rollback() {
  echo "⚠️ ROLLBACK INICIADO"

  local last_backup
  last_backup=$(ls -dt "$BACKUP_DIR"/skills_* 2>/dev/null | head -n 1 || true)

  if [[ -z "$last_backup" ]]; then
    echo "❌ Nenhum backup encontrado!"
    exit 1
  fi

  rm -rf "$BASE"
  cp -r "$last_backup" "$BASE"

  echo "🔙 Rollback concluído para: $last_backup"
  exit 0
}

########################################
# FUNÇÃO SEGURA
########################################

create_skill() {
  local CATEGORY="$1"
  local NAME="$2"
  local TITLE="$3"
  local CONTENT="$4"

  local DIR="$BASE/$CATEGORY/$NAME"
  local FILE="$DIR/SKILL.md"

  mkdir -p "$DIR"

  if [[ -f "$FILE" ]]; then
    echo "⚠️ SKIP: $CATEGORY/$NAME"
    return 0
  fi

  cat > "$FILE" <<EOF
# $TITLE

$CONTENT
EOF

  echo "✔ Criado: $CATEGORY/$NAME"
}

########################################
# 🚨 EXECUÇÃO SEGURA
########################################

backup_skills

# Se quiser ativar rollback manual:
# rollback

########################################
# FOUNDATION
########################################

create_skill foundation coding-standards "Coding Standards" "
Objetivo:
- Código limpo
- SOLID
- DRY
- KISS
"

create_skill foundation clean-code "Clean Code" "
Remover código morto e melhorar legibilidade
"

create_skill foundation documentation "Documentation" "
README + uso + estrutura do projeto
"

create_skill foundation git-workflow "Git Workflow" "
Commits pequenos + Conventional Commits
"

create_skill foundation project-bootstrap "Project Bootstrap" "
Estrutura inicial organizada
"

########################################
# ARCHITECTURE
########################################

create_skill architecture architecture-patterns "Architecture Patterns" "
Clean Architecture + separação de responsabilidades
"

create_skill architecture frontend-patterns "Frontend Patterns" "
Componentização + hooks reutilizáveis
"

create_skill architecture api-design "API Design" "
APIs consistentes e escaláveis
"

create_skill architecture component-design "Component Design" "
Componentes reutilizáveis e testáveis
"

create_skill architecture state-management "State Management" "
Context / Zustand / Redux
"

create_skill architecture refactor-plan "Refactor Plan" "
Refatoração incremental segura
"

########################################
# INSPECTION
########################################

create_skill inspection code-review "Code Review" "
Bugs, performance e segurança
"

create_skill inspection security-review "Security Review" "
XSS, CSRF, injeção, secrets
"

create_skill inspection dependency-review "Dependency Review" "
Vulnerabilidades e dependências antigas
"

create_skill inspection accessibility-review "Accessibility Review" "
WCAG + teclado + contraste
"

########################################
# DEBUGGING
########################################

create_skill debugging systematic-debugging "Systematic Debugging" "
Reproduzir → Isolar → Corrigir → Validar
"

create_skill debugging runtime-debugging "Runtime Debugging" "
Logs + stack traces
"

create_skill debugging investigate "Investigation" "
Encontrar causa raiz
"

create_skill debugging root-cause-analysis "Root Cause Analysis" "
Sintoma → Causa → Solução
"

create_skill debugging logging-analysis "Logging Analysis" "
Análise estruturada de logs
"

########################################
# QUALITY
########################################

create_skill quality qa "QA Validation" "
Validação funcional completa
"

create_skill quality tdd "TDD" "
Red → Green → Refactor
"

create_skill quality testing-patterns "Testing Patterns" "
Unit + Integration + E2E
"

create_skill quality verification-loop "Verification Loop" "
Build + Lint + Tests + TS OK
"

########################################
# REACT
########################################

create_skill react react-best-practices "React Best Practices" "
Hooks + performance + reutilização
"

create_skill react nextjs-architecture "Next.js Architecture" "
App Router + SSR + SEO
"

create_skill react typescript-patterns "TypeScript Patterns" "
Tipagem forte e segura
"

create_skill react shadcn-ui "Shadcn UI" "
UI moderna e consistente
"

create_skill react tailwindcss "TailwindCSS" "
Utility-first CSS
"

create_skill react react-query "React Query" "
Gerenciamento de dados async
"

create_skill react form-validation "Form Validation" "
Zod + React Hook Form
"

########################################
# DEVOPS
########################################

create_skill devops docker "Docker" "
Containerização de apps
"

create_skill devops github-actions "GitHub Actions" "
CI/CD automatizado
"

create_skill devops ci-cd "CI/CD" "
Pipeline de deploy seguro
"

########################################
# MCP
########################################

create_skill mcp mcp-design "MCP Design" "
Arquitetura MCP
"

create_skill mcp mcp-server-builder "MCP Server Builder" "
Criar servidores MCP
"

create_skill mcp mcp-testing "MCP Testing" "
Testes de ferramentas MCP
"

########################################
# FINAL
########################################

echo ""
echo "===================================="
echo "✅ Skills instaladas com backup automático"
echo "💾 Backup em: $BACKUP_DIR"
echo "===================================="
