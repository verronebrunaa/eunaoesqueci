import { patrimonio } from './data.js'

export const fmtBRL = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
const fmtShort = (v) => 'R$ ' + (v >= 1e6 ? (v / 1e6).toFixed(2).replace('.', ',') + ' mi' : Math.round(v / 1e3) + ' mil')

export function initChart(box, onSelect) {
  const max = Math.max(...patrimonio.map((p) => p.valor))
  box.innerHTML = `<div class="bars" role="group" aria-label="Patrimônio declarado por Flávio Bolsonaro ao TSE, de 2006 a 2026">${patrimonio.map((p) => `
    <button type="button" class="bar" data-ano="${p.ano}" aria-label="${p.ano}: ${fmtBRL(p.valor)}">
      <span class="stack"><span class="val">${fmtShort(p.valor)}</span><span class="col" style="--k:${(p.valor / max).toFixed(4)}"></span></span>
      <span class="yr">${p.ano}</span>
    </button>`).join('')}</div>`

  const botoes = [...box.querySelectorAll('.bar')]
  function select(ano) {
    botoes.forEach((b) => b.classList.toggle('on', Number(b.dataset.ano) === ano))
    onSelect(ano)
  }
  botoes.forEach((b) => b.addEventListener('click', () => select(Number(b.dataset.ano))))

  new IntersectionObserver((es, io) => {
    if (es[0].isIntersecting) { box.classList.add('go'); io.disconnect() }
  }, { threshold: 0.3 }).observe(box)

  select(patrimonio[patrimonio.length - 1].ano)
}
