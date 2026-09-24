import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroVideo from "@/assets/hero.mp4.asset.json";
import artistImg from "@/assets/artista.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adriano Felipe dos Santos | Professor de Cerâmica e Ceramista" },
      { name: "description", content: "Conheça o trabalho de Adriano Felipe dos Santos, professor de cerâmica e ceramista. Peças autorais, aulas, oficinas, encomendas e experiências artísticas com argila." },
    ],
  }),
  component: Index,
});

const images = {
  hero:"https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1800&q=85",
  artist:"https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=85",
  process1:"https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=85",
  process2:"https://images.unsplash.com/photo-1615639164213-aab04da93c7c?auto=format&fit=crop&w=1000&q=85",
  workshop:"https://images.unsplash.com/photo-1590422749897-47036da0b0ff?auto=format&fit=crop&w=1300&q=85",
  order:"https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=1200&q=85",
};
const works=[
"https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?auto=format&fit=crop&w=900&q=85",
"https://images.unsplash.com/photo-1576020799627-aeac74d58064?auto=format&fit=crop&w=900&q=85",
"https://images.unsplash.com/photo-1611486212557-88be5ff6f941?auto=format&fit=crop&w=900&q=85",
"https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=85",
"https://images.unsplash.com/photo-1577702312706-e23ff063064f?auto=format&fit=crop&w=900&q=85",
];

function Index(){
 const [menu,setMenu]=useState(false); const [lightbox,setLightbox]=useState<string|null>(null);
 useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("visible")),{threshold:.12});document.querySelectorAll(".reveal").forEach(el=>io.observe(el));return()=>io.disconnect()},[]);
 const wa="https://wa.me/5561999372096";
 return <main>
  <header className="nav"><a href="#" className="brand"><b>ADRIANO FELIPE</b><small>Cerâmica Autoral</small></a><nav>{["O artista","Processo","Obras","Aulas","Contato"].map((x,i)=><a key={x} href={"#"+["artista","processo","obras","aulas","contato"][i]}>{x}</a>)}</nav><a className="navCta" href={wa} target="_blank">SOLICITAR ENCOMENDA ↗</a><button className="hamb" onClick={()=>setMenu(!menu)}>☰</button></header>
  {menu&&<div className="mobileMenu">{["artista","processo","obras","aulas","contato"].map(x=><a href={"#"+x} onClick={()=>setMenu(false)}>{x.toUpperCase()}</a>)}</div>}
  <section className="hero"><div className="wheel"/><div className="heroText reveal"><span className="eyebrow">PORTFÓLIO · 01</span><h1>A FORMA NASCE<br/><em>DO ENCONTRO.</em></h1><p>Terra, gesto, espera e fogo. Adriano Felipe transforma a argila em peças únicas, carregadas de identidade, memória e presença.</p><div className="signature"><b>Adriano Felipe dos Santos</b><span>Professor de Cerâmica · Ceramista</span></div><div className="actions"><a href="#obras">EXPLORAR AS OBRAS</a><a href={wa}>CONVERSAR COM ADRIANO ↗</a></div></div><figure className="heroImg"><video src={heroVideo.url} autoPlay muted loop playsInline style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} aria-label="Adriano Felipe trabalhando a argila"/></figure><span className="scroll">ROLE PARA DESCOBRIR ↓</span></section>
  <section id="artista" className="artist light"><div className="sectionNo">01 / O ARTISTA</div><div className="artistGrid"><figure className="reveal"><img src={artistImg.url} alt="AV Tech Conecta"/></figure><div className="reveal"><h2>ENTRE O GESTO<br/>E A <em>MATÉRIA.</em></h2><p className="lead">Adriano Felipe dos Santos é professor de cerâmica e ceramista. Seu trabalho nasce da relação entre as mãos, a argila, o torno e o tempo.</p><p>Cada criação carrega as marcas naturais do processo manual, transformando pequenas diferenças em identidade, beleza e exclusividade.</p><p>Além de desenvolver peças autorais, Adriano compartilha seus conhecimentos por meio de aulas, oficinas e experiências com a cerâmica.</p><blockquote>“Nenhuma peça se repete. Cada forma guarda o instante em que foi criada.”</blockquote></div></div></section>
  <section className="manifesto"><span>A argila registra o toque. <i>O fogo transforma.</i> O tempo revela.</span></section>
  <section id="processo" className="process dark"><div className="sectionNo">02 / PROCESSO</div><h2 className="reveal">DA MATÉRIA BRUTA<br/>À <em>PEÇA ÚNICA.</em></h2><p className="intro">Terra, gesto, espera e fogo. Um processo em que técnica e sensibilidade caminham juntas.</p><div className="timeline"><div className="step"><b>01</b><h3>PREPARAR</h3><p>A argila é escolhida e preparada para receber forma, movimento e intenção.</p><img src={images.process1} alt="Imagem provisória do preparo da argila"/></div><div className="step"><b>02</b><h3>MODELAR</h3><p>No torno ou por meio da modelagem manual, cada peça é construída com técnica, sensibilidade e precisão.</p><img src={images.process2} alt="Imagem provisória de modelagem em cerâmica"/></div><div className="step textStep"><b>03</b><h3>TRANSFORMAR</h3><p>A secagem, o acabamento, a esmaltação e o fogo revelam novas cores, texturas e características.</p></div></div></section>
  <section id="obras" className="works light"><div className="sectionNo">03 / OBRAS</div><h2>PEÇAS QUE<br/><em>CONTAM HISTÓRIAS.</em></h2><p className="intro">Uma seleção de formas autorais, objetos utilitários e estudos em cerâmica.</p><div className="gallery">{works.map((src,i)=><figure className={"g g"+i+" reveal"} key={src} onClick={()=>setLightbox(src)}><img src={src} alt={"Imagem provisória de obra em cerâmica "+(i+1)}/><figcaption><span>0{i+1}</span> {["Cerâmica utilitária","Formas orgânicas","Vasos","Peças escultóricas","Estudos e experimentações"][i]}</figcaption></figure>)}</div></section>
  <section id="aulas" className="classes"><div className="classImage"><img src={images.workshop} alt="Imagem provisória de oficina de cerâmica"/></div><div className="classText reveal"><div className="sectionNo">04 / ENSINO E EXPERIÊNCIAS</div><h2>CERÂMICA TAMBÉM<br/>É <em>ENCONTRO.</em></h2><p>Mais do que ensinar uma técnica, Adriano cria experiências de descoberta, expressão e contato com a matéria.</p><p>Em suas aulas e oficinas, cada participante é convidado a conhecer a argila, desenvolver novas habilidades e criar respeitando seu próprio ritmo.</p><div className="tags">Aulas de cerâmica · Oficinas práticas · Iniciantes · Grupos · Vivências artísticas · Parcerias</div><a className="lineBtn" href={wa+"?text="+encodeURIComponent("Olá, Adriano! Conheci seu portfólio e gostaria de receber informações sobre suas aulas e oficinas de cerâmica.")}>QUERO CONHECER AS AULAS ↗</a></div></section>
  <section className="order light"><div className="orderText reveal"><span className="eyebrow">ENCOMENDAS · PROJETOS ESPECIAIS</span><h2>UMA PEÇA CRIADA<br/><em>ESPECIALMENTE PARA VOCÊ.</em></h2><p>Para quem busca uma criação singular, Adriano desenvolve peças autorais, encomendas personalizadas, projetos artísticos e colaborações.</p><a className="darkBtn" href={wa+"?text="+encodeURIComponent("Olá, Adriano! Conheci seu portfólio e gostaria de conversar sobre uma peça ou encomenda personalizada.")}>CONVERSAR SOBRE UMA ENCOMENDA ↗</a></div><img src={images.order} alt="Imagem provisória de peça finalizada"/></section>
  <section id="contato" className="contact dark"><div className="wheel w2"/><span className="eyebrow">ENCOMENDAS · AULAS · OFICINAS · COLABORAÇÕES</span><h2>VAMOS CRIAR ALGO<br/><em>COM SIGNIFICADO?</em></h2><p>Entre em contato para conhecer as peças disponíveis, conversar sobre encomendas, aulas, oficinas ou propor uma colaboração artística.</p><div className="contactInfo"><span>WHATSAPP<br/><b>(61) 99937-2096</b></span><span>INSTAGRAM<br/><b>@adrianolecoleco</b></span></div><div className="actions"><a href={wa}>CONVERSAR NO WHATSAPP ↗</a><a href="https://www.instagram.com/adrianolecoleco/">ACOMPANHAR NO INSTAGRAM ↗</a></div></section>
  <footer><div><b>ADRIANO FELIPE</b><small>Cerâmica Autoral</small></div><p>Professor de Cerâmica · Ceramista · Artista Manual<br/>Cerâmica autoral feita à mão.</p><div><a href="https://www.instagram.com/adrianolecoleco/">Instagram</a> · <a href={wa}>WhatsApp</a> · <a href="#">Voltar ao topo ↑</a></div><small>© 2026 Adriano Felipe dos Santos. Todos os direitos reservados.</small></footer>
  {lightbox&&<div className="lightbox" onClick={()=>setLightbox(null)}><button>×</button><img src={lightbox} alt="Obra ampliada"/></div>}
 </main>
}