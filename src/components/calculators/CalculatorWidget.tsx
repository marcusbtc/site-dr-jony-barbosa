"use client";

import React, { useMemo, useState } from 'react';
import type { CalculatorItem } from '../../types';
import {
  calculateDueDate,
  calculateFertileWindow,
  calculatePreeclampsiaRisk,
  calculatePrenatalSchedule,
  calculateWeightGain,
  formatDate,
  formatShortDate,
  summarizeContractions,
  type ContractionEvent,
} from '../../lib/calculator-utils';
import Button from '../ui/Button';

interface Props {
  calculator: CalculatorItem;
}

type FormState = Record<string, string | string[]>;

function getInitialState(calculator: CalculatorItem): FormState {
  return calculator.inputs.reduce<FormState>((state, input) => {
    if (input.type === 'checkbox-group') {
      state[input.id] = [];
      return state;
    }

    if (input.id === 'cycleLength') {
      state[input.id] = '28';
      return state;
    }

    if (input.id === 'referenceType') {
      state[input.id] = 'lmp';
      return state;
    }

    state[input.id] = '';
    return state;
  }, {});
}

function Stat({
  label,
  value,
  emphasis,
}: {
  label: string;
  value: string;
  emphasis?: boolean;
}) {
  return (
    <div className="surface-card rounded-[18px] p-5">
      <p className="font-['DM_Sans'] text-[12px] uppercase tracking-[0.1em] text-[var(--ds-color-brand-500)]">
        {label}
      </p>
      <p
        className={`mt-2 font-['EB_Garamond'] text-[30px] leading-none ${
          emphasis
            ? 'text-[var(--ds-color-brand-700)]'
            : 'text-[var(--ds-color-text-strong)]'
        }`}
      >
        {value}
      </p>
    </div>
  );
}

const CalculatorWidget: React.FC<Props> = ({ calculator }) => {
  const [formState, setFormState] = useState<FormState>(getInitialState(calculator));
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<React.ReactNode | null>(null);
  const [contractions, setContractions] = useState<ContractionEvent[]>([]);
  const [activeStart, setActiveStart] = useState<number | null>(null);

  const contractionSummary = useMemo(
    () => summarizeContractions(contractions),
    [contractions],
  );

  function updateField(id: string, value: string | string[]) {
    setFormState((current) => ({ ...current, [id]: value }));
  }

  function renderDueDate() {
    const data = calculateDueDate({
      lmpDate: String(formState.lmpDate || ''),
      cycleLength: Number(formState.cycleLength || 28),
    });

    return (
      <>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Stat label="Data provável do parto" value={formatDate(data.dueDate)} emphasis />
          <Stat
            label="Idade gestacional hoje"
            value={`${data.gestationalAgeWeeks} semanas e ${data.gestationalAgeDays} dias`}
          />
          <Stat label="Concepção estimada" value={formatShortDate(data.conceptionEstimate)} />
        </div>
        <div className="mt-8 space-y-4">
          {data.milestones.map((milestone) => (
            <div key={milestone.label} className="surface-card rounded-[18px] p-5">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="font-['Poppins'] text-lg font-medium text-[var(--ds-color-text-strong)]">
                    {milestone.label}
                  </h3>
                  <p className="mt-2 font-['Questrial'] leading-[28px] text-[var(--ds-color-text-body)]">
                    {milestone.note}
                  </p>
                </div>
                <span className="rounded-full bg-[rgba(173,189,210,0.22)] px-4 py-2 font-['DM_Sans'] text-sm uppercase tracking-[0.08em] text-[var(--ds-color-brand-700)]">
                  {formatShortDate(milestone.date)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  function renderPrenatalSchedule() {
    const data = calculatePrenatalSchedule({
      referenceType: String(formState.referenceType || 'lmp') as 'lmp' | 'dueDate',
      referenceDate: String(formState.referenceDate || ''),
    });

    return (
      <>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Stat label="Data provável do parto" value={formatDate(data.dueDate)} emphasis />
          <Stat
            label="Idade gestacional hoje"
            value={`${data.gestationalAgeWeeks} semanas e ${data.gestationalAgeDays} dias`}
          />
          <Stat label="Linha do tempo" value={`${data.timeline.length} marcos`} />
        </div>
        <div className="mt-8 space-y-4">
          {data.timeline.map((item) => (
            <div key={item.label} className="surface-card rounded-[18px] p-5">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="font-['Poppins'] text-lg font-medium text-[var(--ds-color-text-strong)]">
                    {item.label}
                  </h3>
                  <p className="mt-2 font-['Questrial'] leading-[28px] text-[var(--ds-color-text-body)]">
                    {item.note}
                  </p>
                </div>
                <span className="rounded-full bg-[rgba(173,189,210,0.22)] px-4 py-2 font-['DM_Sans'] text-sm uppercase tracking-[0.08em] text-[var(--ds-color-brand-700)]">
                  {formatShortDate(item.date)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  function renderFertileWindow() {
    const data = calculateFertileWindow({
      lmpDate: String(formState.lmpDate || ''),
      cycleLength: Number(formState.cycleLength || 28),
    });

    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Stat label="Ovulação estimada" value={formatDate(data.ovulationDate)} emphasis />
        <Stat label="Início da janela fértil" value={formatShortDate(data.fertileWindowStart)} />
        <Stat label="Fim da janela fértil" value={formatShortDate(data.fertileWindowEnd)} />
        <Stat label="Próxima menstruação" value={formatShortDate(data.nextPeriodEstimate)} />
      </div>
    );
  }

  function renderWeightGain() {
    const data = calculateWeightGain({
      prePregnancyWeight: Number(formState.prePregnancyWeight || 0),
      heightCm: Number(formState.height || 0),
      currentWeight: Number(formState.currentWeight || 0),
      gestationalWeek: Number(formState.gestationalWeek || 0),
    });

    return (
      <>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <Stat label="IMC pré-gestacional" value={data.bmi.toFixed(1)} emphasis />
          <Stat label="Faixa IMC" value={data.bmiCategory} />
          <Stat label="Ganho atual" value={`${data.currentGain.toFixed(1)} kg`} />
          <Stat label="Leitura atual" value={data.status} />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="surface-card rounded-[18px] p-5">
            <p className="font-['DM_Sans'] text-[12px] uppercase tracking-[0.1em] text-[var(--ds-color-brand-500)]">
              Faixa total de referência
            </p>
            <p className="mt-2 font-['EB_Garamond'] text-[32px] text-[var(--ds-color-text-strong)]">
              {data.totalRecommendedRange[0].toFixed(1)} a {data.totalRecommendedRange[1].toFixed(1)} kg
            </p>
          </div>
          <div className="surface-card rounded-[18px] p-5">
            <p className="font-['DM_Sans'] text-[12px] uppercase tracking-[0.1em] text-[var(--ds-color-brand-500)]">
              Faixa esperada até esta semana
            </p>
            <p className="mt-2 font-['EB_Garamond'] text-[32px] text-[var(--ds-color-text-strong)]">
              {data.expectedRangeByWeek[0].toFixed(1)} a {data.expectedRangeByWeek[1].toFixed(1)} kg
            </p>
          </div>
        </div>
      </>
    );
  }

  function renderPreeclampsiaRisk() {
    const data = calculatePreeclampsiaRisk({
      highRiskFactors: (formState.highRiskFactors as string[]) || [],
      moderateRiskFactors: (formState.moderateRiskFactors as string[]) || [],
    });

    return (
      <>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Stat label="Fatores de maior peso" value={`${data.highRiskCount}`} emphasis />
          <Stat label="Fatores moderados" value={`${data.moderateRiskCount}`} />
          <Stat label="Leitura do rastreio" value={data.category} />
        </div>
        <div className="mt-8 rounded-[24px] border border-[rgba(72,98,132,0.08)] bg-white/80 p-6">
          <p className="font-['Questrial'] text-[18px] leading-[32px] text-[var(--ds-color-text-body)]">
            {data.summary}
          </p>
        </div>
      </>
    );
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    try {
      if (calculator.calculatorType === 'due-date') {
        setResult(renderDueDate());
        return;
      }

      if (calculator.calculatorType === 'prenatal-schedule') {
        setResult(renderPrenatalSchedule());
        return;
      }

      if (calculator.calculatorType === 'fertile-window') {
        setResult(renderFertileWindow());
        return;
      }

      if (calculator.calculatorType === 'weight-gain') {
        setResult(renderWeightGain());
        return;
      }

      if (calculator.calculatorType === 'preeclampsia-risk') {
        setResult(renderPreeclampsiaRisk());
      }
    } catch (caughtError) {
      setResult(null);
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : 'Não foi possível calcular com os dados informados.',
      );
    }
  }

  function toggleCheckbox(fieldId: string, optionValue: string) {
    const currentValues = (formState[fieldId] as string[]) || [];
    const nextValues = currentValues.includes(optionValue)
      ? currentValues.filter((value) => value !== optionValue)
      : [...currentValues, optionValue];
    updateField(fieldId, nextValues);
  }

  function renderField() {
    return calculator.inputs.map((input) => {
      if (input.type === 'checkbox-group') {
        const selectedValues = (formState[input.id] as string[]) || [];

        return (
          <fieldset key={input.id} className="space-y-4">
            <legend className="font-['Poppins'] text-base font-medium text-[var(--ds-color-text-strong)]">
              {input.label}
            </legend>
            <div className="space-y-3">
              {input.options?.map((option) => (
                <label
                  key={option.value}
                  className="surface-card flex cursor-pointer items-start gap-3 rounded-[18px] p-4"
                >
                  <input
                    type="checkbox"
                    checked={selectedValues.includes(option.value)}
                    onChange={() => toggleCheckbox(input.id, option.value)}
                    className="mt-1 h-4 w-4 accent-[var(--ds-color-brand-700)]"
                  />
                  <span className="font-['Questrial'] leading-[28px] text-[var(--ds-color-text-body)]">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        );
      }

      if (input.type === 'select') {
        return (
          <label key={input.id} className="block">
            <span className="mb-2 block font-['Poppins'] text-base font-medium text-[var(--ds-color-text-strong)]">
              {input.label}
            </span>
            <select
              value={String(formState[input.id] || '')}
              onChange={(event) => updateField(input.id, event.target.value)}
              className="w-full rounded-[18px] border border-[rgba(72,98,132,0.12)] bg-white px-4 py-4 font-['Questrial'] text-[16px] text-[var(--ds-color-text-body)] outline-none transition-colors focus:border-[var(--ds-color-brand-500)]"
            >
              {input.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        );
      }

      return (
        <label key={input.id} className="block">
          <span className="mb-2 block font-['Poppins'] text-base font-medium text-[var(--ds-color-text-strong)]">
            {input.label}
          </span>
          <div className="relative">
            <input
              type={input.type}
              value={String(formState[input.id] || '')}
              placeholder={input.placeholder}
              min={input.min}
              max={input.max}
              step={input.step}
              onChange={(event) => updateField(input.id, event.target.value)}
              className="w-full rounded-[18px] border border-[rgba(72,98,132,0.12)] bg-white px-4 py-4 font-['Questrial'] text-[16px] text-[var(--ds-color-text-body)] outline-none transition-colors focus:border-[var(--ds-color-brand-500)]"
            />
            {input.suffix ? (
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-['DM_Sans'] text-sm uppercase tracking-[0.08em] text-[var(--ds-color-text-muted)]">
                {input.suffix}
              </span>
            ) : null}
          </div>
          {input.hint ? (
            <span className="mt-2 block font-['Questrial'] text-sm text-[var(--ds-color-text-muted)]">
              {input.hint}
            </span>
          ) : null}
        </label>
      );
    });
  }

  function startContraction() {
    setActiveStart(Date.now());
  }

  function endContraction() {
    if (!activeStart) return;
    setContractions((current) => [...current, { startedAt: activeStart, endedAt: Date.now() }]);
    setActiveStart(null);
  }

  function clearContractions() {
    setContractions([]);
    setActiveStart(null);
  }

  function renderContractionTimer() {
    return (
      <>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <Stat label="Contrações registradas" value={`${contractionSummary.count}`} emphasis />
          <Stat
            label="Duração média"
            value={`${Math.round(contractionSummary.averageDurationSeconds)} s`}
          />
          <Stat
            label="Intervalo médio"
            value={
              contractionSummary.averageIntervalMinutes !== null
                ? `${contractionSummary.averageIntervalMinutes.toFixed(1)} min`
                : 'Aguardando'
            }
          />
          <Stat
            label="Último intervalo"
            value={
              contractionSummary.latestIntervalMinutes !== null
                ? `${contractionSummary.latestIntervalMinutes.toFixed(1)} min`
                : 'Aguardando'
            }
          />
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button
            variant="primary"
            className="px-8 py-4"
            onClick={activeStart ? endContraction : startContraction}
            type="button"
          >
            {activeStart ? 'Encerrar contração' : 'Iniciar contração'}
          </Button>
          <Button
            variant="outline"
            className="px-8 py-4"
            onClick={clearContractions}
            type="button"
          >
            Limpar registros
          </Button>
        </div>

        {activeStart ? (
          <p className="mt-4 font-['Questrial'] text-[16px] leading-[28px] text-[var(--ds-color-brand-700)]">
            Contração em andamento. Toque em “Encerrar contração” quando ela passar.
          </p>
        ) : null}

        <div className="mt-8 rounded-[24px] border border-[rgba(72,98,132,0.08)] bg-white/80 p-6">
          <p className="font-['Questrial'] text-[18px] leading-[32px] text-[var(--ds-color-text-body)]">
            {contractionSummary.patternSummary}
          </p>
        </div>

        {contractions.length > 0 ? (
          <div className="mt-8 space-y-3">
            {contractions
              .slice()
              .reverse()
              .map((event, index) => (
                <div key={`${event.startedAt}-${event.endedAt}`} className="surface-card rounded-[18px] p-5">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <p className="font-['Poppins'] text-base font-medium text-[var(--ds-color-text-strong)]">
                      Contração {contractions.length - index}
                    </p>
                    <span className="font-['DM_Sans'] text-sm uppercase tracking-[0.08em] text-[var(--ds-color-brand-700)]">
                      {Math.round((event.endedAt - event.startedAt) / 1000)} segundos
                    </span>
                  </div>
                  <p className="mt-2 font-['Questrial'] text-sm leading-[28px] text-[var(--ds-color-text-muted)]">
                    Início: {new Date(event.startedAt).toLocaleTimeString('pt-BR')} • Fim:{' '}
                    {new Date(event.endedAt).toLocaleTimeString('pt-BR')}
                  </p>
                </div>
              ))}
          </div>
        ) : null}
      </>
    );
  }

  if (calculator.calculatorType === 'contraction-timer') {
    return (
      <section id="calculadora" className="py-16">
        <div className="page-container max-w-5xl">
          <div className="page-section p-8 md:p-10">
            <div className="mb-8">
              <p className="eyebrow-label mb-3">Ferramenta interativa</p>
              <h2 className="font-['EB_Garamond'] text-[38px] font-medium tracking-[0.4px] text-[var(--ds-color-text-strong)] md:text-[44px]">
                Registre o padrão das contrações
              </h2>
            </div>
            {renderContractionTimer()}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="calculadora" className="py-16">
      <div className="page-container max-w-5xl">
        <div className="page-section p-8 md:p-10">
          <div className="mb-8">
            <p className="eyebrow-label mb-3">Ferramenta interativa</p>
            <h2 className="font-['EB_Garamond'] text-[38px] font-medium tracking-[0.4px] text-[var(--ds-color-text-strong)] md:text-[44px]">
              Preencha os dados e veja a estimativa
            </h2>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {renderField()}

            {error ? (
              <div className="rounded-[18px] border border-[rgba(188,98,86,0.18)] bg-[rgba(244,224,218,0.55)] px-5 py-4 font-['Questrial'] text-[16px] text-[#8f4f44]">
                {error}
              </div>
            ) : null}

            <Button type="submit" variant="primary" className="px-8 py-4">
              Calcular agora
            </Button>
          </form>

          {result ? <div className="mt-10">{result}</div> : null}
        </div>
      </div>
    </section>
  );
};

export default CalculatorWidget;
