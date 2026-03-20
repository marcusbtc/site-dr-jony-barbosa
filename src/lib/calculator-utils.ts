export interface DueDateInput {
  lmpDate: string;
  cycleLength: number;
}

export interface TimelineDate {
  label: string;
  date: Date;
  note: string;
}

export interface DueDateResult {
  dueDate: Date;
  gestationalAgeWeeks: number;
  gestationalAgeDays: number;
  conceptionEstimate: Date;
  milestones: TimelineDate[];
}

export interface PrenatalScheduleInput {
  referenceType: 'lmp' | 'dueDate';
  referenceDate: string;
}

export interface PrenatalScheduleResult {
  dueDate: Date;
  gestationalAgeWeeks: number;
  gestationalAgeDays: number;
  timeline: TimelineDate[];
}

export interface FertileWindowInput {
  lmpDate: string;
  cycleLength: number;
}

export interface FertileWindowResult {
  ovulationDate: Date;
  fertileWindowStart: Date;
  fertileWindowEnd: Date;
  nextPeriodEstimate: Date;
}

export interface WeightGainInput {
  prePregnancyWeight: number;
  heightCm: number;
  currentWeight: number;
  gestationalWeek: number;
}

export interface WeightGainResult {
  bmi: number;
  bmiCategory: string;
  totalRecommendedRange: [number, number];
  expectedRangeByWeek: [number, number];
  currentGain: number;
  status: 'abaixo' | 'adequado' | 'acima';
}

export interface PreeclampsiaRiskInput {
  highRiskFactors: string[];
  moderateRiskFactors: string[];
}

export interface PreeclampsiaRiskResult {
  highRiskCount: number;
  moderateRiskCount: number;
  category: 'maior vigilância' | 'atenção intermediária' | 'baixo rastreio inicial';
  summary: string;
}

export interface ContractionEvent {
  startedAt: number;
  endedAt: number;
}

export interface ContractionSummary {
  count: number;
  averageDurationSeconds: number;
  averageIntervalMinutes: number | null;
  latestDurationSeconds: number | null;
  latestIntervalMinutes: number | null;
  patternSummary: string;
}

const pregnancyLengthDays = 280;
const msPerDay = 24 * 60 * 60 * 1000;

function parseDate(value: string): Date | null {
  if (!value) return null;
  const date = new Date(`${value}T12:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function addDays(date: Date, days: number): Date {
  return new Date(date.getTime() + days * msPerDay);
}

function diffInDays(left: Date, right: Date): number {
  return Math.floor((left.getTime() - right.getTime()) / msPerDay);
}

export function formatDate(value: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(value);
}

export function formatShortDate(value: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(value);
}

export function calculateDueDate(input: DueDateInput): DueDateResult {
  const lmpDate = parseDate(input.lmpDate);
  if (!lmpDate) {
    throw new Error('Informe uma data válida para a última menstruação.');
  }

  if (input.cycleLength < 21 || input.cycleLength > 40) {
    throw new Error('Use um ciclo médio entre 21 e 40 dias.');
  }

  const dueDate = addDays(lmpDate, pregnancyLengthDays + (input.cycleLength - 28));
  const today = new Date();
  const gestationalDays = Math.max(diffInDays(today, lmpDate), 0);
  const gestationalAgeWeeks = Math.floor(gestationalDays / 7);
  const gestationalAgeDays = gestationalDays % 7;

  return {
    dueDate,
    gestationalAgeWeeks,
    gestationalAgeDays,
    conceptionEstimate: addDays(lmpDate, input.cycleLength - 14),
    milestones: [
      {
        label: '12 semanas',
        date: addDays(lmpDate, 84),
        note: 'Período que costuma concentrar avaliação inicial importante do primeiro trimestre.',
      },
      {
        label: '20 semanas',
        date: addDays(lmpDate, 140),
        note: 'Faixa em que o morfológico do segundo trimestre costuma ganhar destaque.',
      },
      {
        label: '28 semanas',
        date: addDays(lmpDate, 196),
        note: 'Marco em que o acompanhamento do terceiro trimestre costuma ficar mais próximo.',
      },
      {
        label: '37 semanas',
        date: addDays(lmpDate, 259),
        note: 'Entrada no termo inicial da gestação.',
      },
      {
        label: 'Data provável do parto',
        date: dueDate,
        note: 'Estimativa usada para organizar o acompanhamento, não uma data exata de nascimento.',
      },
    ],
  };
}

export function calculatePrenatalSchedule(
  input: PrenatalScheduleInput,
): PrenatalScheduleResult {
  const referenceDate = parseDate(input.referenceDate);
  if (!referenceDate) {
    throw new Error('Informe uma data de referência válida.');
  }

  const dueDate =
    input.referenceType === 'dueDate'
      ? referenceDate
      : calculateDueDate({ lmpDate: input.referenceDate, cycleLength: 28 }).dueDate;

  const lmpDate =
    input.referenceType === 'lmp'
      ? referenceDate
      : addDays(referenceDate, -pregnancyLengthDays);

  const today = new Date();
  const gestationalDays = Math.max(diffInDays(today, lmpDate), 0);

  return {
    dueDate,
    gestationalAgeWeeks: Math.floor(gestationalDays / 7),
    gestationalAgeDays: gestationalDays % 7,
    timeline: [
      {
        label: 'Consulta inicial do pré-natal',
        date: addDays(lmpDate, 42),
        note: 'Idealmente o quanto antes após o teste positivo ou confirmação clínica.',
      },
      {
        label: 'NIPT',
        date: addDays(lmpDate, 70),
        note: 'Pode ser discutido a partir de 10 semanas, conforme indicação clínica.',
      },
      {
        label: 'Morfológico de 1º trimestre',
        date: addDays(lmpDate, 84),
        note: 'Janela aproximada entre 11 e 13 semanas e 6 dias.',
      },
      {
        label: 'Morfológico de 2º trimestre',
        date: addDays(lmpDate, 154),
        note: 'Referência aproximada da metade da janela de 20 a 24 semanas.',
      },
      {
        label: 'Rastreamento para diabetes gestacional',
        date: addDays(lmpDate, 175),
        note: 'Costuma ser lembrado entre 24 e 28 semanas, conforme risco clínico.',
      },
      {
        label: 'Doppler / vigilância fetal',
        date: addDays(lmpDate, 210),
        note: 'Pode entrar antes ou depois conforme hipertensão, crescimento fetal e outras intercorrências.',
      },
      {
        label: 'Revisão final e planejamento do parto',
        date: addDays(lmpDate, 252),
        note: 'Na reta final, consultas e estratégia de vigilância costumam ficar mais próximas.',
      },
    ],
  };
}

export function calculateFertileWindow(
  input: FertileWindowInput,
): FertileWindowResult {
  const lmpDate = parseDate(input.lmpDate);
  if (!lmpDate) {
    throw new Error('Informe uma data válida para a última menstruação.');
  }

  if (input.cycleLength < 21 || input.cycleLength > 40) {
    throw new Error('Use um ciclo médio entre 21 e 40 dias.');
  }

  const ovulationOffset = input.cycleLength - 14;
  const ovulationDate = addDays(lmpDate, ovulationOffset);

  return {
    ovulationDate,
    fertileWindowStart: addDays(ovulationDate, -5),
    fertileWindowEnd: addDays(ovulationDate, 1),
    nextPeriodEstimate: addDays(lmpDate, input.cycleLength),
  };
}

export function calculateWeightGain(
  input: WeightGainInput,
): WeightGainResult {
  if (
    input.prePregnancyWeight <= 0 ||
    input.currentWeight <= 0 ||
    input.heightCm <= 0
  ) {
    throw new Error('Preencha peso e altura com valores válidos.');
  }

  if (input.gestationalWeek < 1 || input.gestationalWeek > 42) {
    throw new Error('Informe uma semana gestacional entre 1 e 42.');
  }

  const heightMeters = input.heightCm / 100;
  const bmi = input.prePregnancyWeight / (heightMeters * heightMeters);
  const currentGain = input.currentWeight - input.prePregnancyWeight;

  let bmiCategory = 'Peso adequado';
  let totalRecommendedRange: [number, number] = [11.5, 16];
  let weeklyGainRange: [number, number] = [0.35, 0.5];

  if (bmi < 18.5) {
    bmiCategory = 'Baixo peso';
    totalRecommendedRange = [12.5, 18];
    weeklyGainRange = [0.44, 0.58];
  } else if (bmi < 25) {
    bmiCategory = 'Peso adequado';
    totalRecommendedRange = [11.5, 16];
    weeklyGainRange = [0.35, 0.5];
  } else if (bmi < 30) {
    bmiCategory = 'Sobrepeso';
    totalRecommendedRange = [7, 11.5];
    weeklyGainRange = [0.23, 0.33];
  } else {
    bmiCategory = 'Obesidade';
    totalRecommendedRange = [5, 9];
    weeklyGainRange = [0.17, 0.27];
  }

  const firstTrimesterRange: [number, number] = [0.5, 2];
  const weeksAfterFirstTrimester = Math.max(input.gestationalWeek - 13, 0);
  const expectedRangeByWeek: [number, number] = [
    firstTrimesterRange[0] + weeklyGainRange[0] * weeksAfterFirstTrimester,
    firstTrimesterRange[1] + weeklyGainRange[1] * weeksAfterFirstTrimester,
  ];

  let status: 'abaixo' | 'adequado' | 'acima' = 'adequado';
  if (currentGain < expectedRangeByWeek[0]) {
    status = 'abaixo';
  } else if (currentGain > expectedRangeByWeek[1]) {
    status = 'acima';
  }

  return {
    bmi,
    bmiCategory,
    totalRecommendedRange,
    expectedRangeByWeek,
    currentGain,
    status,
  };
}

export function calculatePreeclampsiaRisk(
  input: PreeclampsiaRiskInput,
): PreeclampsiaRiskResult {
  const highRiskCount = input.highRiskFactors.length;
  const moderateRiskCount = input.moderateRiskFactors.length;

  if (highRiskCount >= 1) {
    return {
      highRiskCount,
      moderateRiskCount,
      category: 'maior vigilância',
      summary:
        'Você marcou pelo menos um fator de maior peso clínico. Isso não diagnostica pré-eclâmpsia, mas pode justificar conversa precoce sobre vigilância e prevenção.',
    };
  }

  if (moderateRiskCount >= 2) {
    return {
      highRiskCount,
      moderateRiskCount,
      category: 'atenção intermediária',
      summary:
        'A combinação de fatores moderados sugere que vale discutir o risco com o obstetra para individualizar o pré-natal.',
    };
  }

  return {
    highRiskCount,
    moderateRiskCount,
    category: 'baixo rastreio inicial',
    summary:
      'O rastreio inicial não destacou um conjunto forte de fatores, mas isso não substitui acompanhamento de pressão, sintomas e exames durante a gestação.',
  };
}

export function summarizeContractions(
  events: ContractionEvent[],
): ContractionSummary {
  if (events.length === 0) {
    return {
      count: 0,
      averageDurationSeconds: 0,
      averageIntervalMinutes: null,
      latestDurationSeconds: null,
      latestIntervalMinutes: null,
      patternSummary:
        'Registre algumas contrações para analisar duração média e intervalos.',
    };
  }

  const durations = events.map((event) => (event.endedAt - event.startedAt) / 1000);
  const intervals = events
    .slice(1)
    .map((event, index) => (event.startedAt - events[index].startedAt) / 60000);

  const averageDurationSeconds =
    durations.reduce((sum, value) => sum + value, 0) / durations.length;
  const averageIntervalMinutes =
    intervals.length > 0
      ? intervals.reduce((sum, value) => sum + value, 0) / intervals.length
      : null;
  const latestDurationSeconds = durations[durations.length - 1] ?? null;
  const latestIntervalMinutes = intervals[intervals.length - 1] ?? null;

  let patternSummary =
    'Ainda há poucos registros para entender o padrão das contrações.';

  if (events.length >= 3 && averageIntervalMinutes !== null) {
    if (averageIntervalMinutes <= 5) {
      patternSummary =
        'As contrações registradas estão frequentes. Se o padrão persistir ou houver sinais de alerta, vale falar com a equipe ou procurar avaliação.';
    } else if (averageIntervalMinutes <= 10) {
      patternSummary =
        'O padrão já mostra contrações mais organizadas. Observe se estão ficando mais regulares, intensas e próximas.';
    } else {
      patternSummary =
        'As contrações ainda parecem espaçadas. Continue observando o padrão e considere outros sintomas além do intervalo.';
    }
  }

  return {
    count: events.length,
    averageDurationSeconds,
    averageIntervalMinutes,
    latestDurationSeconds,
    latestIntervalMinutes,
    patternSummary,
  };
}
