/**
 * ============================================================================
 * 1. SISTEMA DE PALETAS DE CORES (Para alterar ou criar novas com facilidade)
 * ============================================================================
 */
const PALETTES = {
  // Paleta da imagem enviada (#FAFAF8, #1F2622, #E3D5C9, #4A6B5B)
  "sua-paleta": {
    bgPrimary: "#FAFAF8",      // Fundo principal (Off-white suave)
    bgSecondary: "#E3D5C9",    // Fundo de destaque / seções alternadas (Areia/Nude)
    bgCard: "#FFFFFF",         // Fundo dos cards
    textPrimary: "#1F2622",    // Texto principal e títulos (Verde quase preto profundo)
    textSecondary: "#45524B",  // Subtítulos e parágrafos
    accentPrimary: "#4A6B5B",  // Botões e destaques (Verde Sálvia Escuro)
    accentHover: "#365244",    // Hover dos botões
    borderSubtle: "rgba(31, 38, 34, 0.14)",
    blob1: "rgba(227, 213, 201, 0.7)",
    blob2: "rgba(74, 107, 91, 0.25)"
  },

  // Opção 2: Nude Clássico & Dourado
  "nude-gold": {
    bgPrimary: "#F7F3EC",
    bgSecondary: "#E6DBC8",
    bgCard: "#FBF9F5",
    textPrimary: "#2A221E",
    textSecondary: "#655850",
    accentPrimary: "#B08549",
    accentHover: "#936B35",
    borderSubtle: "rgba(42, 34, 30, 0.14)",
    blob1: "rgba(197, 160, 89, 0.3)",
    blob2: "rgba(214, 184, 156, 0.45)"
  },

  // Opção 3: Versão Invertida usando a sua paleta (Fundo Escuro #1F2622 com letras Areia #E3D5C9)
  "dark-emerald": {
    bgPrimary: "#1F2622",
    bgSecondary: "#28312C",
    bgCard: "#242C27",
    textPrimary: "#FAFAF8",
    textSecondary: "#E3D5C9",
    accentPrimary: "#4A6B5B",
    accentHover: "#5B826F",
    borderSubtle: "rgba(227, 213, 201, 0.18)",
    blob1: "rgba(74, 107, 91, 0.35)",
    blob2: "rgba(227, 213, 201, 0.12)"
  }
};

// Função que aplica a paleta escolhida injetando direto nas variáveis do navegador
function applyPalette(paletteKey) {
  const p = PALETTES[paletteKey];
  if (!p) return;

  const root = document.documentElement;
  root.style.setProperty("--bg-primary", p.bgPrimary);
  root.style.setProperty("--bg-secondary", p.bgSecondary);
  root.style.setProperty("--bg-card", p.bgCard);
  root.style.setProperty("--text-primary", p.textPrimary);
  root.style.setProperty("--text-secondary", p.textSecondary);
  root.style.setProperty("--accent-primary", p.accentPrimary);
  root.style.setProperty("--accent-hover", p.accentHover);
  root.style.setProperty("--border-subtle", p.borderSubtle);
  root.style.setProperty("--blob-1", p.blob1);
  root.style.setProperty("--blob-2", p.blob2);
}

/**
 * ============================================================================
 * 2. CONTEÚDO DO CLIENTE (Troque apenas este objeto para replicar para outros)
 * ============================================================================
 */
const CLIENT_CONFIG = {
  paletaInicial: "sua-paleta", // Define qual paleta abre por padrão
  doutora: {
    nome: "Dra. Bruna Santana",
    credenciais: "Cirurgiã-Dentista • CRO-PB 0000 | Harmonização Orofacial",
    cidade: "Patos, PB",
    endereco: "Edifício Empresarial Premium, Sala 402 — Centro, Patos - PB",
    whatsappNumero: "5583996343411",
    whatsappMensagem: "Olá, Dra. Bruna! Vim pelo site e gostaria de agendar uma avaliação de Harmonização Facial.",
    instagramUrl: "https://instagram.com/"
  },
  hero: {
    badge: "Harmonização Orofacial de Alta Precisão",
    titulo: "A arte de realçar a sua beleza sem apagar a sua essência.",
    subtitulo: "Protocolos individualizados que respeitam a anatomia, a naturalidade dos movimentos e o gerenciamento elegante do envelhecimento.",
    imagem: "imagens/dra-bruna.png" // <-- Substitua pelo caminho da sua imagem local
  },
  filosofia: "A verdadeira elegância mora na sutileza. Cada rosto carrega uma história única, e o nosso compromisso é devolver frescor, contorno e harmonia — para que você se reconheça no espelho em sua melhor versão, com leveza e naturalidade.",
  procedimentos: [
    {
      ordem: "01",
      nome: "Toxina Botulínica",
      subtitulo: "Prevenção & Suavidade",
      descricao: "Relaxamento muscular estratégico para suavizar linhas de expressão mantendo a naturalidade do olhar e do sorriso, sem aspecto congelado."
    },
    {
      ordem: "02",
      nome: "Preenchimento com Ácido Hialurônico",
      subtitulo: "Estruturação & Contorno",
      descricao: "Reposição de volume em pontos de sustentação (lábios, malar, mento e olheiras) para devolver proporção e equilíbrio facial."
    },
    {
      ordem: "03",
      nome: "Bioestimuladores de Colágeno",
      subtitulo: "Firmeza & Qualidade de Pele",
      descricao: "Estímulo biológico profundo para recuperar a espessura dérmica, tratar a flacidez e construir uma poupança de colágeno duradoura."
    },
    {
      ordem: "04",
      nome: "Fios de Sustentação & Tecnologias",
      subtitulo: "Reposicionamento Tecidual",
      descricao: "Protocolos combinados para efeito lifting não cirúrgico, definindo o contorno mandibular e tratando a delicada região das pálpebras."
    }
  ],
  experiencia: [
    {
      passo: "Etapa 01",
      titulo: "Consulta & Diagnóstico Anatômico",
      descricao: "Uma conversa tranquila para ouvir seus desejos, seguida por uma análise detalhada das proporções faciais, qualidade da pele e dinâmica muscular."
    },
    {
      passo: "Etapa 02",
      titulo: "Planejamento Individualizado",
      descricao: "Desenhamos um plano de tratamento exclusivo e cronológico, priorizando sempre os procedimentos que trarão o resultado mais elegante e seguro."
    },
    {
      passo: "Etapa 03",
      titulo: "Procedimento com Conforto Absoluto",
      descricao: "Realizado em ambiente preparado para acolher você com calma, protocolos rigorosos de biossegurança, anestesia cuidadosa e produtos de excelência mundial."
    },
    {
      passo: "Etapa 04",
      titulo: "Acompanhamento Próximo",
      descricao: "Estaremos ao seu lado em todas as fases do pós-procedimento até o retorno de revisão, garantindo sua tranquilidade e evolução ideal."
    }
  ],
  sobre: {
    bio: "Especialista em Harmonização Orofacial, dedica sua prática clínica a resultados que unem rigor anatômico e sensibilidade estética. Acredita que procedimentos estéticos de alto padrão não devem transformar quem você é, mas devolver o descanso e a confiança à sua expressão.",
    foto: "imagens/dra-bruna.png", // <-- Substitua pelo caminho da sua imagem local
    destaques: [
      "Graduada em Odontologia pela UFCG e Pós-Graduada em Harmonização Orofacial pela UNIFIP",
      "Atualização contínua em anatomia avançada e gerenciamento do envelhecimento",
      "Atendimento exclusivo com tempo dedicado a cada paciente"
    ]
  },
  depoimentos: [
    {
      texto: "Meu maior receio era ficar com o rosto artificial. A Dra. Bruna teve uma delicadeza ímpar, explicou cada detalhe e o resultado ficou tão natural que todos dizem que pareço mais descansada.",
      autora: "Mariana A.",
      procedimento: "Paciente de Bioestimulador e Botox"
    },
    {
      texto: "Desde a recepção até o pós-procedimento, a experiência transmite uma paz enorme. Mão super leve, ambiente impecável e um cuidado humano que faz toda a diferença.",
      autora: "Fernanda L.",
      procedimento: "Paciente de Preenchimento Labial"
    },
    {
      texto: "Planejamento honesto e ético. Ela me orientou exatamente sobre o que eu precisava e o que não era necessário fazer. Confio de olhos fechados.",
      autora: "Camila R.",
      procedimento: "Paciente de Gerenciamento de Pele"
    }
  ]
};

/**
 * ============================================================================
 * 3. RENDERIZAÇÃO DINÂMICA DOS COMPONENTES NO HTML
 * ============================================================================
 */
function renderPageContent() {
  const { paletaInicial, doutora, hero, filosofia, procedimentos, experiencia, sobre, depoimentos } = CLIENT_CONFIG;
  
  // Aplica a paleta padrão configurada
  applyPalette(paletaInicial);

  const waLink = `https://wa.me/${doutora.whatsappNumero}?text=${encodeURIComponent(doutora.whatsappMensagem)}`;

  // SEO & Header
  document.getElementById("page-title").textContent = `${doutora.nome} | Harmonização Facial em ${doutora.cidade}`;
  document.getElementById("nav-name").textContent = doutora.nome;
  document.getElementById("nav-credentials").textContent = doutora.credenciais;
  document.getElementById("nav-cta").href = waLink;

  // Hero
  document.getElementById("hero-badge").textContent = hero.badge;
  document.getElementById("hero-title").textContent = hero.titulo;
  document.getElementById("hero-subtitle").textContent = hero.subtitulo;
  document.getElementById("hero-cta").href = waLink;
  document.getElementById("hero-image").src = hero.imagem;

  // Filosofia
  const philosophyContainer = document.getElementById("philosophy-text");
  philosophyContainer.innerHTML = filosofia
    .split(" ")
    .map(word => `<span class="word-reveal">${word}</span>`)
    .join("");

  // Procedimentos
  const procGrid = document.getElementById("procedures-grid");
  procGrid.innerHTML = procedimentos.map(proc => `
    <article class="procedure-card theme-card group p-8 sm:p-10 rounded-3xl flex flex-col justify-between shadow-sm">
      <div class="space-y-4">
        <div class="flex justify-between items-center">
          <span class="text-xs font-semibold tracking-widest uppercase theme-text-accent">${proc.subtitulo}</span>
          <span class="font-heading text-2xl italic theme-text-secondary opacity-60">${proc.ordem}</span>
        </div>
        <h3 class="font-heading text-2xl sm:text-3xl theme-text-primary font-normal">${proc.nome}</h3>
        <p class="text-sm sm:text-base font-light theme-text-secondary leading-relaxed">${proc.descricao}</p>
      </div>
      <div class="pt-6 mt-6 theme-footer flex justify-between items-center">
        <a href="${waLink}" target="_blank" rel="noopener" class="text-xs uppercase tracking-widest font-semibold theme-text-accent hover:opacity-80 transition flex items-center gap-2">
          <span>Saber mais na avaliação</span>
          <span class="transform group-hover:translate-x-1 transition">→</span>
        </a>
      </div>
    </article>
  `).join("");

  // Experiência (Timeline)
  const timelineContainer = document.getElementById("timeline-steps");
  timelineContainer.innerHTML = experiencia.map(item => `
    <div class="timeline-item relative">
      <span class="timeline-dot w-3.5 h-3.5 rounded-full absolute -left-[30px] sm:-left-[38px] top-1.5 z-10"></span>
      <span class="text-[11px] uppercase tracking-widest theme-text-accent font-semibold block">${item.passo}</span>
      <h3 class="font-heading text-2xl sm:text-3xl theme-text-primary font-normal mt-1 mb-2">${item.titulo}</h3>
      <p class="text-sm sm:text-base font-light theme-text-secondary leading-relaxed">${item.descricao}</p>
    </div>
  `).join("");

  // Sobre a Doutora
  document.getElementById("about-image").src = sobre.foto;
  document.getElementById("about-name").textContent = doutora.nome;
  document.getElementById("about-credentials").textContent = doutora.credenciais;
  document.getElementById("about-bio").textContent = sobre.bio;
  document.getElementById("about-cta").href = waLink;
  document.getElementById("about-highlights").innerHTML = sobre.destaques.map(d => `
    <li class="flex items-start gap-3">
      <span class="theme-text-accent mt-1">✦</span>
      <span>${d}</span>
    </li>
  `).join("");

  // Depoimentos
  document.getElementById("testimonials-grid").innerHTML = depoimentos.map(dep => `
    <div class="testimonial-card theme-card p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
      <p class="font-heading italic text-xl sm:text-2xl theme-text-primary leading-relaxed">“${dep.texto}”</p>
      <div>
        <p class="text-xs uppercase tracking-widest font-semibold theme-text-primary">${dep.autora}</p>
        <p class="text-[11px] theme-text-secondary font-light mt-0.5">${dep.procedimento}</p>
      </div>
    </div>
  `).join("");

  // Rodapé e Botões Finais
  document.getElementById("footer-address").textContent = doutora.endereco;
  document.getElementById("final-cta").href = waLink;
  document.getElementById("final-instagram").href = doutora.instagramUrl;
  document.getElementById("floating-cta-link").href = waLink;
  document.getElementById("footer-legal").textContent = `Responsável Técnica: ${doutora.nome} — ${doutora.credenciais}`;
  document.getElementById("current-year").textContent = new Date().getFullYear();
}

/**
 * ============================================================================
 * 4. ANIMAÇÕES DE SCROLL (Lenis + GSAP + ScrollTrigger)
 * ============================================================================
 */
function initAnimations() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  gsap.registerPlugin(ScrollTrigger);

  // 4.1. Lenis Smooth Scroll
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    syncTouch: false
  });

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // 4.2. Revelação suave
  gsap.utils.toArray(".reveal-up").forEach((elem) => {
    gsap.fromTo(elem, 
      { y: 36, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elem,
          start: "top 88%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  // 4.3. Abertura de Máscara das Imagens + Parallax
  gsap.utils.toArray(".image-mask-reveal").forEach((mask) => {
    ScrollTrigger.create({
      trigger: mask,
      start: "top 85%",
      onEnter: () => mask.classList.add("is-revealed")
    });

    const img = mask.querySelector(".parallax-img");
    if (img) {
      gsap.to(img, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: mask,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }
  });

  // 4.4. Revelação palavra por palavra na seção Filosofia
  const words = gsap.utils.toArray(".word-reveal");
  gsap.to(words, {
    opacity: 1,
    stagger: 0.08,
    ease: "none",
    scrollTrigger: {
      trigger: "#filosofia",
      start: "top 75%",
      end: "bottom 55%",
      scrub: true
    }
  });

  // 4.5. Entrada escalonada dos Cards de Procedimentos
  gsap.fromTo(".procedure-card",
    { y: 45, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#procedures-grid",
        start: "top 82%"
      }
    }
  );

  // 4.6. Linha do Tempo desenhada ao rolar
  gsap.to("#timeline-progress", {
    height: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: "#timeline-steps",
      start: "top 70%",
      end: "bottom 65%",
      scrub: true
    }
  });

  gsap.utils.toArray(".timeline-item").forEach((item) => {
    gsap.fromTo(item,
      { x: -20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 82%"
        }
      }
    );
  });

  // 4.7. Botão Flutuante de WhatsApp
  const floatingBtn = document.getElementById("floating-whatsapp");
  ScrollTrigger.create({
    trigger: "#filosofia",
    start: "top 85%",
    onEnter: () => {
      floatingBtn.classList.remove("translate-y-28", "opacity-0", "pointer-events-none");
    },
    onLeaveBack: () => {
      floatingBtn.classList.add("translate-y-28", "opacity-0", "pointer-events-none");
    }
  });

  // 4.8. Microinteração Magnética (Desktop)
  if (window.innerWidth > 1024) {
    document.querySelectorAll(".magnetic-btn").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.22;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.22;
        gsap.to(btn, { x, y, duration: 0.3, ease: "power2.out" });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderPageContent();
  initAnimations();
});