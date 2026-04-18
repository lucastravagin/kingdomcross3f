# Plano de Implementação — Redesign Visual Kingdom Cross 3F

## Diagnóstico dos Problemas Atuais

### Problema 1 — Textura de madeira invisível
`background-blend-mode: multiply` com `rgba(10,5,0,0.88)` resulta em preto sólido.
A textura some completamente. O usuário vê apenas preto.

### Problema 2 — Seções douradas ilegíveis
`section-gold-glow` usa `linear-gradient(rgba(255,215,0,0.08) → #FFB700)`.
Texto escuro `#1a0800` sobre fundo que começa quase transparente = ilegível no topo.

### Problema 3 — Transições sem sentido visual
Gradientes como `rgba(180,120,0,0.9) → #FFB700` com blend mode de madeira
criam cores de laranja/marrom sem identidade. Não é madeira, não é dourado, não é nada.

### Problema 4 — Contraste insuficiente
`playfair-body` usa `color: #e8dcc8` sobre fundo escuro com textura — ok.
Mas sobre seções douradas (`section-gold-glow`) o mesmo texto fica invisível.

### Problema 5 — Muitas variações de fundo sem sistema
Existem 8+ variações de fundo diferentes sem lógica clara:
section-wood, section-wood-light, section-black, section-gold-glow,
section-gold-solid, section-transition-gold, section-transition-fade, section-white
+ inline styles com gradientes únicos em cada seção.

---

## Sistema de Design Proposto

### Paleta de Cores (3 tons, não 8)

```
ESCURO  → #0d0a07  (quase preto, tom de madeira queimada)
MÉDIO   → #1c1208  (marrom escuro, madeira envelhecida)
CLARO   → #f5efe3  (creme, papel antigo)
DOURADO → #C8960C  (ouro envelhecido, não brilhante)
DOURADO BRILHANTE → #E6B61D (apenas para títulos hero)
```

### Regra de Uso
- Fundo escuro (#0d0a07) → texto creme (#f0e6cc) + dourado (#C8960C)
- Fundo médio (#1c1208) → texto creme (#f0e6cc) + dourado (#C8960C)
- Fundo creme (#f5efe3) → texto escuro (#1c0a00) + dourado escuro (#8B6914)
- NUNCA misturar texto claro em fundo claro
- NUNCA misturar texto escuro em fundo escuro

### Textura de Madeira — Como Fazer Funcionar
Em vez de `background-blend-mode: multiply` (que escurece demais),
usar a imagem como `::before` pseudo-elemento com `opacity: 0.06`:

```css
.section-wood {
  background: #0d0a07;
  position: relative;
}
.section-wood::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/uploads/2025/10/lumber-84678_1920-1-rotated.jpg');
  background-size: cover;
  opacity: 0.06;
  pointer-events: none;
}
.section-wood > * { position: relative; z-index: 1; }
```

Isso mantém o fundo escuro legível MAS com textura sutil visível.

---

## Plano de Implementação — 4 Fases

---

### FASE 1 — Sistema de Cores e CSS Base
**Arquivo:** `src/index.css`
**Tempo estimado:** 1 sessão

#### O que mudar:
1. Reduzir para 3 classes de seção:
   - `.section-dark` → fundo `#0d0a07` + textura sutil
   - `.section-mid` → fundo `#1c1208` + textura sutil
   - `.section-cream` → fundo `#f5efe3` (sem textura, para contraste)

2. Remover todas as classes problemáticas:
   - ~~section-wood~~, ~~section-wood-light~~, ~~section-gold-glow~~
   - ~~section-gold-solid~~, ~~section-transition-gold~~, ~~section-transition-fade~~

3. Textura via `::before` com `opacity: 0.06` (não blend-mode)

4. Separadores entre seções via borda dourada fina:
   ```css
   .section-dark + .section-cream,
   .section-cream + .section-dark {
     border-top: 1px solid rgba(200,150,12,0.3);
   }
   ```

5. Seções douradas → usar `.section-cream` com borda dourada,
   NÃO fundo amarelo sólido que cega o usuário.

---

### FASE 2 — TheCarpenter.jsx
**Arquivo:** `src/pages/TheCarpenter.jsx`
**Tempo estimado:** 1 sessão

#### Estrutura de seções proposta:

```
HERO          → hero-section (imagem + overlay 55%)
DOORS TITLE   → section-dark
DOOR CARDS    → doors-row (sem mudança)
MESSAGE       → section-dark
PURPOSE       → section-mid (alternância visual)
FAITH TITLE   → section-dark
FAITH CONTENT → section-mid
TESTIMONY     → section-cream (contraste máximo, texto escuro)
HISTORY       → section-dark
KC 3F         → section-dark
GLOW BUTTON   → glow-section (sem mudança)
CTA           → section-dark
```

#### Regras de texto por seção:
- section-dark/mid → `.playfair-body` (creme `#e8dcc8`)
- section-cream → texto `#1c0a00`, dourado `#8B6914`

#### Remover inline styles problemáticos:
- Todos os `background: 'linear-gradient(180deg,rgba(180,120,0,0.9)...'`
- Todos os `backgroundBlendMode: 'multiply'` inline
- Substituir por classes simples

---

### FASE 3 — Series.jsx, KingdomCross3F.jsx, Testimony.jsx
**Arquivos:** 3 páginas
**Tempo estimado:** 1 sessão

#### Series.jsx — Estrutura proposta:
```
HERO          → hero-section
DOORS TITLE   → section-dark
DOOR CARDS    → doors-row
RULES         → section-dark (cards com borda dourada)
THEMES        → section-cream (fundo claro para contraste)
FIRST CROSSES → section-dark
SERIES TABLE  → section-mid
CTA           → section-dark
```

#### KingdomCross3F.jsx — Estrutura proposta:
```
HERO          → hero-section
DOORS TITLE   → section-dark
DOOR CARDS    → doors-row
CRAFTED       → section-dark
TOUCHED       → section-cream (texto escuro, legível)
SEED          → section-dark
FINAL WORD    → section-mid
GAL 3:26      → section-dark
CTA           → section-dark
```

#### Testimony.jsx — Estrutura proposta:
```
HERO          → hero-section
CHAPTER I     → section-dark
CHAPTER II    → section-mid (alternância)
CHAPTER III   → section-dark
CHAPTER IV    → section-mid
PICK UP CROSS → hero-section (full-width, máximo impacto)
NAVIGATION    → section-dark
```

---

### FASE 4 — Formulario.jsx
**Arquivo:** `src/pages/Formulario.jsx`
**Tempo estimado:** 1 sessão

#### Estrutura proposta:
```
HERO          → hero-section (menor, 50vh)
CAPACITY      → section-cream (legível, fundo claro)
CLOSED INFO   → section-dark
FORM          → section-dark (campos com borda dourada)
```

#### Campos do formulário:
- Fundo dos inputs: `rgba(255,255,255,0.06)` — levemente visível
- Borda: `1px solid rgba(200,150,12,0.4)`
- Focus: `border-color: #C8960C`
- Label: Cinzel dourado `#C8960C`
- Texto digitado: `#f0e6cc`

---

## CSS Final Proposto (index.css simplificado)

```css
/* ── SEÇÕES BASE ── */
.section-dark {
  background: #0d0a07;
  padding: 4em 2em;
  position: relative;
}
.section-dark::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/uploads/2025/10/lumber-84678_1920-1-rotated.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.06;
  pointer-events: none;
}
.section-dark > * { position: relative; z-index: 1; }

.section-mid {
  background: #1c1208;
  padding: 4em 2em;
  position: relative;
}
.section-mid::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/uploads/2025/10/lumber-84678_1920-1-rotated.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.08;
  pointer-events: none;
}
.section-mid > * { position: relative; z-index: 1; }

.section-cream {
  background: #f5efe3;
  padding: 4em 2em;
}

/* ── SEPARADORES ── */
.section-dark + .section-cream,
.section-mid + .section-cream,
.section-cream + .section-dark,
.section-cream + .section-mid {
  border-top: 1px solid rgba(200,150,12,0.25);
}

/* ── TEXTO POR CONTEXTO ── */
.section-dark .body-text,
.section-mid .body-text {
  color: #e8dcc8;
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  line-height: 1.8em;
}

.section-cream .body-text {
  color: #1c0a00;
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  line-height: 1.8em;
}

.section-cream .gold-title-dark {
  color: #8B6914;
  text-shadow: none;
}

.section-cream .bible-verse {
  color: #6B4F0A;
  border-left-color: #8B6914;
}

.section-cream .pull-quote {
  color: #6B4F0A;
}
```

---

## Resumo Visual por Página

### The Carpenter
| Seção | Fundo | Texto |
|---|---|---|
| Hero | Imagem + overlay | Branco/Dourado |
| Doors Title | section-dark | Dourado |
| Door Cards | Imagens | Branco |
| Message | section-dark | Creme |
| Purpose | section-mid | Creme |
| Faith | section-dark | Creme |
| Testimony Link | section-cream | Escuro |
| History | section-dark | Creme |
| KC 3F | section-mid | Creme |
| Glow Button | Imagem KC | — |
| CTA | section-dark | Dourado |

### Series
| Seção | Fundo | Texto |
|---|---|---|
| Hero | Imagem + overlay | Branco/Dourado |
| Doors | section-dark | Dourado |
| Rules | section-dark | Creme (cards) |
| Themes | section-cream | Escuro |
| First Crosses | section-dark | Creme |
| Table | section-mid | Creme |
| CTA | section-dark | Dourado |

### KC 3F
| Seção | Fundo | Texto |
|---|---|---|
| Hero | Imagem lanterna | Dourado |
| Doors | section-dark | Dourado |
| Crafted | section-dark | Creme |
| Touched | section-cream | Escuro |
| Seed | section-dark | Creme |
| Final Word | section-mid | Creme |
| Gal 3:26 | section-dark | Dourado |
| CTA | section-dark | Dourado |

### Formulário
| Seção | Fundo | Texto |
|---|---|---|
| Hero | Imagem cruz | Dourado |
| Capacity | section-cream | Escuro |
| Closed Info | section-dark | Creme |
| Form | section-dark | Creme/Dourado |

### Testimony
| Seção | Fundo | Texto |
|---|---|---|
| Hero | Imagem + overlay | Branco/Dourado |
| Chapter I | section-dark | Creme |
| Chapter II | section-mid | Creme |
| Chapter III | section-dark | Creme |
| Chapter IV | section-mid | Creme |
| Pick Up Cross | Imagem full | Branco/Dourado |
| Navigation | section-dark | Dourado |

---

## Ordem de Implementação Recomendada

1. `src/index.css` — Substituir sistema de classes (30 min)
2. `src/pages/TheCarpenter.jsx` — Aplicar novas classes (20 min)
3. `src/pages/Series.jsx` — Aplicar novas classes (20 min)
4. `src/pages/KingdomCross3F.jsx` — Aplicar novas classes (15 min)
5. `src/pages/Testimony.jsx` — Aplicar novas classes (15 min)
6. `src/pages/Formulario.jsx` — Aplicar novas classes (15 min)
7. Teste visual em todas as páginas (20 min)

**Total estimado: ~2 horas**

---

## Princípios que guiam esse redesign

1. **Legibilidade acima de tudo** — Se o texto não é lido, a mensagem não chega.
2. **Contraste alternado** — Escuro → Claro → Escuro cria ritmo visual e descanso.
3. **Textura sutil, não dominante** — A madeira deve ser sentida, não vista.
4. **Dourado com propósito** — Apenas em títulos, versículos e elementos de destaque.
5. **Consistência** — 3 tipos de seção, não 8. Menos é mais.
