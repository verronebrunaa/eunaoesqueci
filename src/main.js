import * as THREE from 'three'
import { timeline, STATUS, comparativo, PLANOS, semMencaoFlavio, midias } from './data.js'

// "Dark Horse" sempre em vermelho com contorno
const hl = (s) => s.replace(/Dark Horse/g, '<i class="dh">Dark Horse</i>')
import { initChart, fmtBRL } from './chart.js'
import { patrimonio, patrimonioFonte, detalhes, variacao2026 } from './data.js'

// Painel com o detalhe do ano clicado: só o que está em data.js (com fonte)
function mostrarAno(ano) {
  const i = patrimonio.findIndex((p) => p.ano === ano)
  const atual = patrimonio[i]
  const prev = patrimonio[i - 1]
  const d = detalhes[ano]
  const variacao = prev
    ? `<p class="var">Em relação a ${prev.ano} (${fmtBRL(prev.valor)}): <b>${atual.valor > prev.valor ? '+' : ''}${(((atual.valor - prev.valor) / prev.valor) * 100).toFixed(0)}%</b> nominal${ano === 2026 ? ` (${variacao2026.real}, segundo o Poder360)` : ''}.</p>`
    : '<p class="var">Primeira declaração da série.</p>'
  const bens = d
    ? `<ul class="bens">${d.bens.map((b) => `<li><span>${b.nome}${b.nota ? `<small>${b.nota}</small>` : ''}</span><b>${fmtBRL(b.valor)}</b></li>`).join('')}</ul>
       <p class="obs">${d.obs} Fonte: <a href="${d.fonte.url}" target="_blank" rel="noopener">${d.fonte.rotulo} ↗</a></p>`
    : `<p class="obs">As fontes que usamos não detalham os bens de ${ano}. A lista completa está na declaração dele no
       <a href="https://divulgacandcontas.tse.jus.br/" target="_blank" rel="noopener">DivulgaCandContas (TSE) ↗</a>.</p>`
  document.getElementById('detalhe').innerHTML = `
    <h3>${ano}: ${fmtBRL(atual.valor)}</h3>${variacao}${bens}
    <p class="obs">Total declarado: <a href="${patrimonioFonte.url}" target="_blank" rel="noopener">${patrimonioFonte.rotulo} ↗</a></p>`
}

// Linha do tempo e legenda saem de data.js (todo item tem fonte e selo de status)
document.getElementById('legend').innerHTML = Object.entries(STATUS)
  .map(([k, v]) => `<span class="badge ${k}">${v}</span>`).join('')
// {1:texto} e {2:texto} viram links para t.fonte e t.fonte2, dentro da própria frase
const linkar = (t) => hl(t.texto).replace(/\{([12]):([^}]+)\}/g, (_, n, txt) =>
  `<a href="${n === '2' ? t.fonte2 : t.fonte}" target="_blank" rel="noopener">${txt}<span aria-hidden="true"> ↗</span></a>`)
document.getElementById('timeline').innerHTML = timeline.map((t) => `
  <li>
    <time>${t.data}</time>
    <div class="box">
      <span class="badge ${t.status}">${STATUS[t.status]}</span>
      <h3>${hl(t.titulo)}</h3>
      <p>${linkar(t)}</p>
    </div>
  </li>`).join('')

// Áudios e mensagens: links para a publicação original (sem hospedar arquivos)
// Grade em mosaico, na ordem do tempo: a posição de cada card vem da classe b1, b2... (ver style.css)
const cardMidia = (m) => `
    <span class="mtag">${m.tipo}</span><time>${m.data}</time>
    <h4>${hl(m.titulo)}</h4>`
document.getElementById('media').innerHTML = midias.map((m, i) => m.destaque ? `
  <article class="mcard feat b${i + 1}">
    <div class="vid">
      <iframe src="https://www.youtube-nocookie.com/embed/${m.video.id}" title="${m.video.titulo}"
              loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div class="ftxt">${cardMidia(m)}
      ${m.textos.map((t) => `<p>${hl(t)}</p>`).join('')}
      <div class="links">${m.links.map((l) => `<a class="${l.principal ? 'go' : 'alt'}" href="${l.url}" target="_blank" rel="noopener">${l.rotulo} ↗</a>`).join('')}</div>
    </div>
  </article>` : `
  <article class="mcard b${i + 1}">${cardMidia(m)}
    <p>${hl(m.texto)}</p>
    <a class="go" href="${m.fonte}" target="_blank" rel="noopener">${m.rotulo} ↗</a>
    ${m.apoio ? `<a class="alt" href="${m.apoio.url}" target="_blank" rel="noopener">${m.apoio.rotulo} ↗</a>` : ''}
  </article>`).join('')

initChart(document.getElementById('bars'), mostrarAno)

// Comparativo dos planos de governo (src/data.js)
const side = (x, nome, extra = '', cls = '') => x
  ? `<div class="side ${cls}"><span class="who">${nome}</span><p>${x.t}</p><small>PDF, p. ${x.p}</small>${extra}</div>`
  : `<div class="side none ${cls}"><span class="who">${nome}</span><p>Não consta no plano.</p>${extra}</div>`
// Botão que abre/fecha os números oficiais (só nas linhas que têm `dados`)
const abrir = '<span class="ver" role="button" tabindex="0" aria-expanded="false">Ver os números oficiais <i>▾</i></span>'
document.getElementById('pdfs').innerHTML = Object.values(PLANOS)
  .map((p) => `<a href="${p.pdf}" target="_blank" rel="noopener">${p.nome}: ${p.titulo} ↗</a>`).join('')
document.getElementById('cmp').innerHTML = comparativo.map((r) => `
  <article class="row${r.dados ? ' has-dados' : ''}">
    <h3>${r.tema}${r.dados ? ' <i class="seta">▾</i>' : ''}</h3>
    ${side(r.f, 'Flávio')}${side(r.l, 'Lula', r.dados ? abrir : '', r.dados ? 'lula' : '')}
    ${r.dados ? `
    <div class="dados">
      <h4>${r.dados.titulo}</h4>
      <div class="dgrid">${r.dados.itens.map((i) => `
        <div class="dcard"><b class="dn">${i.n}</b><span class="dl">${i.rotulo}</span><p>${i.t}</p></div>`).join('')}
      </div>
      <p class="dnota">${r.dados.nota}</p>
      <p class="dfonte">Fonte: <a href="${r.dados.fonte.url}" target="_blank" rel="noopener">${r.dados.fonte.rotulo} ↗</a>. ${r.dados.fonte.detalhe}</p>
    </div>` : ''}
  </article>`).join('')
// Clicar no título da linha ou no lado do Lula abre/fecha os números oficiais
function alternar(row) {
  const aberto = row.classList.toggle('open')
  row.querySelector('.ver')?.setAttribute('aria-expanded', aberto)
  row.querySelector('.ver i') && (row.querySelector('.ver i').textContent = aberto ? '▴' : '▾')
  row.querySelector('.seta') && (row.querySelector('.seta').textContent = aberto ? '▴' : '▾')
  const txt = row.querySelector('.ver')
  if (txt) txt.firstChild.textContent = aberto ? 'Esconder os números oficiais ' : 'Ver os números oficiais '
}
const cmp = document.getElementById('cmp')
cmp.addEventListener('click', (e) => {
  const row = e.target.closest('.row.has-dados')
  if (row && e.target.closest('h3, .lula') && !e.target.closest('a')) alternar(row)
})
cmp.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.ver')) { e.preventDefault(); alternar(e.target.closest('.row')) }
})
document.getElementById('nomention').innerHTML = `
  <h4>O que NÃO aparece em nenhuma página do plano do Flávio</h4>
  ${semMencaoFlavio.map((g) => `<div class="grupo"><span class="gtit">${g.grupo}</span><div class="chips">${g.termos.map((t) => `<span class="chip">${t}</span>`).join('')}</div>${g.nota ? `<p class="gn">${g.nota}</p>` : ''}</div>`).join('')}
  <p class="gnota">Termos buscados no texto completo do PDF; nenhum aparece. O plano tem um capítulo de meio ambiente (p. 57–59).</p>`

// Fundo: plano fullscreen com shader de halftone duotone (vermelho sobre papel),
// um "rosto" abstrato feito de blobs que reage ao mouse e ao scroll.
const canvas = document.getElementById('bg')
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false })
renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
const scene = new THREE.Scene()
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

const uniforms = {
  uTime: { value: 0 },
  uRes: { value: new THREE.Vector2() },
  uMouse: { value: new THREE.Vector2(0.5, 0.5) },
  uScroll: { value: 0 },
}

const mat = new THREE.ShaderMaterial({
  uniforms,
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy,0.,1.); }`,
  fragmentShader: `
    precision highp float;
    varying vec2 vUv;
    uniform float uTime, uScroll; uniform vec2 uRes, uMouse;
    const vec3 PAPER = vec3(0.965,0.914,0.902);
    const vec3 RED   = vec3(0.910,0.196,0.235);
    const vec3 NAVY  = vec3(0.055,0.165,0.290);

    float blob(vec2 p, vec2 c, float r){ return smoothstep(r, 0., length(p-c)); }

    float field(vec2 p){
      float t = uTime*.15;
      float f = 0.;
      f += blob(p, vec2(.62+.05*sin(t), .55+.04*cos(t*1.3)), .42);
      f += blob(p, vec2(.78, .30+.03*sin(t*1.7)), .30);
      f += blob(p, uMouse, .28);
      f += .35*sin(p.x*6.+t*2.)*sin(p.y*5.-t);
      f += uScroll*.9*blob(p, vec2(.3,.7), .5);
      return f;
    }

    void main(){
      vec2 uv = vUv;
      float aspect = uRes.x/uRes.y;
      vec2 p = vec2(uv.x*aspect, uv.y);
      // grade rotacionada de pontos
      float cell = 9.0 * (uRes.y/800.);
      vec2 px = uv*uRes;
      float ang = .785;
      mat2 R = mat2(cos(ang),-sin(ang),sin(ang),cos(ang));
      vec2 g = R*px/cell;
      vec2 gc = fract(g)-.5;
      vec2 gid = floor(g)+.5;
      vec2 sampleUv = (transpose(R)*(gid*cell))/uRes;
      float f = field(vec2(sampleUv.x, sampleUv.y)*vec2(1.,1.));
      f = clamp(f,0.,1.4);
      float r = sqrt(f)*.62;
      float dot_ = smoothstep(r, r-.12, length(gc));
      vec3 ink = mix(RED, NAVY, smoothstep(.9,1.4,f));
      vec3 col = mix(PAPER, ink, dot_ * step(.04,f));
      // véu suave de rosa atrás do texto
      col = mix(col, PAPER, .18);
      gl_FragColor = vec4(col,1.);
    }`,
})
scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat))

function resize() {
  renderer.setSize(innerWidth, innerHeight, false)
  uniforms.uRes.value.set(innerWidth * renderer.getPixelRatio(), innerHeight * renderer.getPixelRatio())
}
addEventListener('resize', resize)
resize()

const target = new THREE.Vector2(0.5, 0.5)
addEventListener('pointermove', (e) => target.set(e.clientX / innerWidth, 1 - e.clientY / innerHeight))
addEventListener('scroll', () => {
  uniforms.uScroll.value = Math.min(scrollY / innerHeight, 1)
}, { passive: true })

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
const clock = new THREE.Clock()
renderer.setAnimationLoop(() => {
  uniforms.uMouse.value.lerp(target, 0.06)
  if (!reduce) uniforms.uTime.value = clock.getElapsedTime()
  renderer.render(scene, camera)
})

document.getElementById('share').addEventListener('click', async () => {
  const data = { title: '#EuNãoEsqueci', text: 'Quem não apoia corrupção não vota no Flávio. Confira as fontes:', url: location.href }
  try {
    if (navigator.share) await navigator.share(data)
    else { await navigator.clipboard.writeText(`${data.text} ${data.url}`); alert('Link copiado!') }
  } catch {}
})
