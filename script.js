const materias = [
  { nombre: "cálculo de una variable", creditos: 4, requisitos: [] },
  { nombre: "matemáticas discretas I", creditos: 4, requisitos: [] },
  { nombre: "programación I", creditos: 4, requisitos: [] },
  { nombre: "introducción a ciencia de datos", creditos: 2, requisitos: [] },
  { nombre: "laboratorio de comunicación I", creditos: 3, requisitos: [] },
  { nombre: "proyectos interdisciplinarios I", creditos: 3, requisitos: [] },

  { nombre: "álgebra lineal", creditos: 2, requisitos: ["cálculo de una variable"] },
  { nombre: "cálculo vectorial", creditos: 3, requisitos: ["cálculo de una variable"] },
  { nombre: "óptica y ondas", creditos: 4, requisitos: ["cálculo de una variable"] },
  { nombre: "matemáticas discretas II", creditos: 4, requisitos: ["matemáticas discretas I"] },
  { nombre: "programación II", creditos: 4, requisitos: ["programación I"] },
  { nombre: "laboratorio de comunicación II", creditos: 3, requisitos: ["laboratorio de comunicación I"] },

  { nombre: "estadística y probabilidades I", creditos: 4, requisitos: ["cálculo de una variable", "programación I"] },
  { nombre: "ecuaciones diferenciales", creditos: 3, requisitos: ["cálculo vectorial"] },
  { nombre: "programación III", creditos: 4, requisitos: ["programación II"] },
  { nombre: "desarrollo basado en plataformas", creditos: 4, requisitos: ["programación II"] },
  { nombre: "base de datos I", creditos: 4, requisitos: ["programación II"] },
  { nombre: "proyectos interdisciplinarios II", creditos: 3, requisitos: ["proyectos interdisciplinarios I"] },

  { nombre: "estadística y probabilidades II", creditos: 4, requisitos: ["estadística y probabilidades I"] },
  { nombre: "métodos numéricos", creditos: 3, requisitos: ["programación I", "álgebra lineal", "ecuaciones diferenciales"] },
  { nombre: "algoritmos y estructuras de datos", creditos: 4, requisitos: ["programación III"] },
  { nombre: "cloud computing", creditos: 3, requisitos: ["desarrollo basado en plataformas"] },
  { nombre: "optimización", creditos: 4, requisitos: ["programación II", "cálculo vectorial"] },
  { nombre: "empresa y consumidor", creditos: 3, requisitos: [] },

  { nombre: "base de datos II", creditos: 3, requisitos: ["algoritmos y estructuras de datos", "base de datos I"] },
  { nombre: "análisis y diseño de algoritmos", creditos: 4, requisitos: ["algoritmos y estructuras de datos"] },
  { nombre: "procesos estocásticos", creditos: 4, requisitos: ["matemáticas discretas II", "estadística y probabilidades II"] },
  { nombre: "análisis computacional de datos", creditos: 4, requisitos: ["programación II", "estadística y probabilidades I"] },
  { nombre: "perú: temas de la sociedad contemporánea", creditos: 3, requisitos: [] },
  { nombre: "proyectos interdisciplinarios III", creditos: 3, requisitos: ["proyectos interdisciplinarios II"] },

  { nombre: "machine learning", creditos: 4, requisitos: ["programación II", "estadística y probabilidades I"] },
  { nombre: "computación paralela y distribuida", creditos: 4, requisitos: ["análisis y diseño de algoritmos"] },
  { nombre: "desarrollo de productos de datos", creditos: 4, requisitos: ["análisis computacional de datos", "cloud computing"] },
  { nombre: "ética y seguridad de los datos", creditos: 4, requisitos: ["base de datos II"] },
  { nombre: "finanzas empresariales", creditos: 3, requisitos: ["empresa y consumidor"] },
  { nombre: "economía, gobernanza y relaciones de poder", creditos: 3, requisitos: [] },

  { nombre: "deep learning", creditos: 4, requisitos: ["machine learning"] },
  { nombre: "gobernanza de datos", creditos: 3, requisitos: ["ética y seguridad de los datos"] },
  { nombre: "storytelling con datos", creditos: 4, requisitos: ["desarrollo de productos de datos"] },
  { nombre: "big data", creditos: 4, requisitos: ["base de datos I", "estadística y probabilidades I"] },

  { nombre: "investigación en computación", creditos: 3, requisitos: ["análisis y diseño de algoritmos"] },
  { nombre: "arte y tecnología", creditos: 3, requisitos: [] },
  { nombre: "proyecto preprofesional", creditos: 8, requisitos: [], minCreditos: 100 },

  { nombre: "análisis de series de tiempo", creditos: 4, requisitos: ["deep learning"] },
  { nombre: "proyecto final de ciencia de datos I", creditos: 4, requisitos: ["investigación en computación"], minCreditos: 130 },
  { nombre: "visualización de datos", creditos: 4, requisitos: ["big data"] },
  { nombre: "evaluación financiera de proyectos", creditos: 3, requisitos: ["finanzas empresariales"] },
  { nombre: "ética y tecnología", creditos: 3, requisitos: [] },

  { nombre: "proyecto final de ciencia de datos II", creditos: 4, requisitos: ["proyecto final de ciencia de datos I"] },
  { nombre: "ciencia de datos computacionales", creditos: 4, requisitos: ["deep learning"] },
  { nombre: "data mining", creditos: 4, requisitos: ["visualización de datos"] },
  { nombre: "estrategia y organizaciones", creditos: 3, requisitos: ["evaluación financiera de proyectos"] }
];

const ciclos = {
  "ciclo 1": [
    "cálculo de una variable", "matemáticas discretas I", "programación I",
    "introducción a ciencia de datos", "laboratorio de comunicación I", "proyectos interdisciplinarios I"
  ],
  "ciclo 2": [
    "álgebra lineal", "cálculo vectorial", "óptica y ondas",
    "matemáticas discretas II", "programación II", "laboratorio de comunicación II"
  ],
  "ciclo 3": [
    "estadística y probabilidades I", "ecuaciones diferenciales", "programación III",
    "desarrollo basado en plataformas", "base de datos I", "proyectos interdisciplinarios II"
  ],
  "ciclo 4": [
    "estadística y probabilidades II", "métodos numéricos", "algoritmos y estructuras de datos",
    "cloud computing", "optimización", "empresa y consumidor"
  ],
  "ciclo 5": [
    "base de datos II", "análisis y diseño de algoritmos", "procesos estocásticos",
    "análisis computacional de datos", "perú: temas de la sociedad contemporánea", "proyectos interdisciplinarios III"
  ],
  "ciclo 6": [
    "machine learning", "computación paralela y distribuida", "desarrollo de productos de datos",
    "ética y seguridad de los datos", "finanzas empresariales", "economía, gobernanza y relaciones de poder"
  ],
  "ciclo 7": [
    "deep learning", "gobernanza de datos", "storytelling con datos", "big data"
  ],
  "ciclo 8": [
    "investigación en computación", "arte y tecnología", "proyecto preprofesional"
  ],
  "ciclo 9": [
    "análisis de series de tiempo", "proyecto final de ciencia de datos I",
    "visualización de datos", "evaluación financiera de proyectos", "ética y tecnología"
  ],
  "ciclo 10": [
    "proyecto final de ciencia de datos II", "ciencia de datos computacionales",
    "data mining", "estrategia y organizaciones"
  ]
};

const aprobadas = new Set(JSON.parse(localStorage.getItem("aprobadas") || "[]"));

function totalCreditosAprobados() {
  return materias.reduce((acc, m) => aprobadas.has(m.nombre) ? acc + m.creditos : acc, 0);
}

function estadoMateria(m) {
  if (aprobadas.has(m.nombre)) return "aprobado";
  if (m.minCreditos && totalCreditosAprobados() < m.minCreditos) return "bloqueado";
  if (m.requisitos.some(req => !aprobadas.has(req))) return "bloqueado";
  return "desbloqueado";
}

function render() {
  const cont = document.getElementById("malla");
  cont.innerHTML = "";

  const totalCreditos = materias.reduce((acc, m) => acc + m.creditos, 0);
  const aprobados = totalCreditosAprobados();

  document.getElementById("creditos-info").textContent = `${aprobados} / ${totalCreditos} créditos`;
  document.getElementById("progress-fill").style.width = `${(aprobados / totalCreditos) * 100}%`;

  for (const [ciclo, nombres] of Object.entries(ciclos)) {
    const divCiclo = document.createElement("div");
    divCiclo.className = "ciclo";
    const h2 = document.createElement("h2");
    h2.textContent = ciclo;
    const grid = document.createElement("div");
    grid.className = "cursos-grid";

    nombres.forEach(nombre => {
      const m = materias.find(mm => mm.nombre === nombre);
      const estado = estadoMateria(m);
      const div = document.createElement("div");
      div.className = `curso ${estado}`;
      div.innerHTML = `<span>${m.nombre}</span>${m.creditos} créditos`;

      if (estado === "desbloqueado" || estado === "aprobado") {
        div.onclick = () => {
          if (aprobadas.has(m.nombre)) {
            aprobadas.delete(m.nombre);
          } else {
            aprobadas.add(m.nombre);
          }
          localStorage.setItem("aprobadas", JSON.stringify([...aprobadas]));
          render();
        };
      }
      grid.appendChild(div);
    });

    divCiclo.appendChild(h2);
    divCiclo.appendChild(grid);
    cont.appendChild(divCiclo);
  }
}

document.getElementById("reset").onclick = () => {
  localStorage.removeItem("aprobadas");
  aprobadas.clear();
  render();
};

render();