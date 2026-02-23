import { Activity, Heart, Zap, Dumbbell, Waves, Brain } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  forWhom: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    slug: 'terapia-fisica',
    title: 'Terapia Física',
    description: 'Evaluación y tratamiento de condiciones musculoesqueléticas mediante técnicas manuales, ejercicio terapéutico y modalidades físicas.',
    fullDescription: 'La terapia física es la base de nuestra práctica clínica. Nuestros terapeutas aplican técnicas especializadas como movilización articular, terapia manual, ultrasonido, electroterapia y ejercicio terapéutico progresivo.',
    benefits: ['Reducción del dolor agudo y crónico','Restauración del rango de movimiento','Fortalecimiento muscular progresivo','Mejora del equilibrio y coordinación','Prevención de lesiones recurrentes','Retorno a actividades diarias y deportivas'],
    forWhom: 'Ideal para personas con lesiones musculoesqueléticas, post-operatorios, dolor crónico, artritis, hernias discales y cualquier condición que afecte el movimiento.',
    icon: Activity
  },
  {
    slug: 'rehabilitacion-cardiaca',
    title: 'Rehabilitación Cardiaca',
    description: 'Programa integral de ejercicio supervisado y educación para pacientes con enfermedades cardiovasculares.',
    fullDescription: 'Programa diseñado para pacientes que han sufrido un evento cardiovascular o tienen enfermedad cardiaca crónica. Incluye ejercicio aeróbico progresivo supervisado, monitoreo continuo y educación en estilo de vida.',
    benefits: ['Mejora de la capacidad cardiovascular','Reducción del riesgo de nuevos eventos','Control de factores de riesgo','Aumento de la calidad de vida','Mayor confianza y autonomía','Retorno seguro a actividades cotidianas'],
    forWhom: 'Para pacientes post-infarto, post-cirugía cardiaca, con insuficiencia cardiaca controlada, arritmias o angina estable.',
    icon: Heart
  },
  {
    slug: 'acupuntura',
    title: 'Acupuntura Médica',
    description: 'Técnica milenaria aplicada con criterio clínico moderno para el manejo del dolor y otras condiciones.',
    fullDescription: 'La acupuntura médica en Kineo-UMF es realizada por médicos con formación especializada, integrando los principios tradicionales con la evidencia científica contemporánea.',
    benefits: ['Control efectivo del dolor crónico','Sin efectos secundarios significativos','Reducción de la inflamación','Mejora del sueño y el bienestar','Complemento ideal a otros tratamientos','Resultados duraderos'],
    forWhom: 'Para personas con dolor crónico, cefaleas, dolor lumbar, cervicalgia, fibromialgia o quienes buscan alternativas complementarias.',
    icon: Zap
  },
  {
    slug: 'pilates',
    title: 'Pilates Clínico',
    description: 'Método de ejercicio terapéutico que fortalece el núcleo, mejora la postura y aumenta la conciencia corporal.',
    fullDescription: 'El Pilates Clínico en Kineo-UMF es supervisado por fisioterapeutas certificados y adaptado a las condiciones y objetivos específicos de cada paciente.',
    benefits: ['Fortalecimiento del core y estabilidad postural','Mejora de la flexibilidad y movilidad','Corrección de desequilibrios musculares','Rehabilitación de lesiones deportivas','Prevención de lesiones futuras','Mejora del rendimiento atlético'],
    forWhom: 'Para personas con dolor lumbar crónico, malas posturas, embarazadas, adultos mayores y deportistas en recuperación.',
    icon: Dumbbell
  },
  {
    slug: 'terapia-leduc',
    title: 'Terapia Descongestiva LEDUC',
    description: 'Drenaje linfático manual especializado para el tratamiento del linfedema y edemas complejos.',
    fullDescription: 'La Terapia Descongestiva de LEDUC es un método avanzado de drenaje linfático manual reconocido mundialmente por su eficacia en el tratamiento del linfedema.',
    benefits: ['Reducción efectiva del linfedema','Alivio de la pesadez y tensión','Mejora de la circulación linfática','Prevención de complicaciones','Mejor calidad de vida','Protocolo basado en evidencia'],
    forWhom: 'Para pacientes con linfedema primario o secundario, edemas crónicos e insuficiencia venosa crónica.',
    icon: Waves
  },
  {
    slug: 'terapia-psicocorporal',
    title: 'Terapia Psicocorporal',
    description: 'Enfoque integrador que conecta la mente y el cuerpo para tratar condiciones donde el componente emocional impacta la salud física.',
    fullDescription: 'La Terapia Psicocorporal aborda la conexión entre el estado emocional y la función física a través de técnicas de respiración, movimiento terapéutico y trabajo somático.',
    benefits: ['Integración mente-cuerpo','Manejo del estrés y la ansiedad','Mejora de la conciencia corporal','Procesamiento de traumas físicos','Apoyo emocional durante la rehabilitación','Técnicas de autorregulación'],
    forWhom: 'Para personas con dolor crónico psicosomático, fibromialgia, estrés postraumático o quienes enfrentan dificultades emocionales en su rehabilitación.',
    icon: Brain
  }
];
