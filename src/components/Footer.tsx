import React from 'react';
import { contactInfo, businessHours, socialLinks } from '../data/site-data';

const defaultMapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.0269040169446!2d-49.26921852485097!3d-16.675537084095318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef3c3787ab911%3A0x861f2a60dd5f0deb!2sDr.%20Jony%20Rodrigues%20Barbosa%20Ginecologista%20e%20Obstetra%20Goi%C3%A2nia!5e0!3m2!1spt-BR!2sbr!4v1773170528459!5m2!1spt-BR!2sbr";

const Footer: React.FC = () => {
  const navItemClass = "transition-colors hover:text-[var(--ds-color-brand-700)]";

  return (
    <footer id="contato" className="border-t border-[rgba(72,98,132,0.08)] bg-[var(--ds-color-neutral-100)] pt-20 pb-10">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-12 text-center">
          <h2 className="font-['EB_Garamond'] text-[40px] font-medium tracking-[0.5px] text-[var(--ds-color-text-strong)]">Dr. Jony Rodrigues Barbosa Ginecologista e Obstetra em Goiânia</h2>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <h3 className="mb-4 font-['Poppins'] text-xl font-medium text-[var(--ds-color-brand-700)]">Navegação</h3>
            <ul className="space-y-2 font-['Questrial'] text-[var(--ds-color-text-muted)]">
              <li><a href="/" className={navItemClass}>Início</a></li>
              <li><a href="/sobre" className={navItemClass}>Sobre o Dr. Jony</a></li>
              <li><a href="/especialidades" className={navItemClass}>Especialidades</a></li>
              <li><a href="/exames" className={navItemClass}>Exames</a></li>
              <li><a href="/servicos" className={navItemClass}>Serviços e Cirurgias</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="mb-4 font-['Poppins'] text-xl font-medium text-[var(--ds-color-brand-700)]">Bairros Atendidos</h3>
            <ul className="space-y-2 font-['Questrial'] text-[var(--ds-color-text-muted)]">
              <li><a href="/localizacao/ginecologista-setor-bueno-goiania" className={navItemClass}>Setor Bueno</a></li>
              <li><a href="/localizacao/ginecologista-setor-marista-goiania" className={navItemClass}>Setor Marista</a></li>
              <li><a href="/localizacao/ginecologista-setor-sul-goiania" className={navItemClass}>Setor Sul</a></li>
              <li><a href="/localizacao/ginecologista-setor-oeste-goiania" className={navItemClass}>Setor Oeste</a></li>
              <li><a href="/localizacao/ginecologista-alphaville-flamboyant-goiania" className={navItemClass}>Alphaville Flamboyant</a></li>
              <li><a href="/localizacao/ginecologista-jardim-goias-goiania" className={navItemClass}>Jardim Goiás</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <div>
              <h3 className="mb-3 font-['Poppins'] text-xl font-medium text-[var(--ds-color-brand-700)]">
                Locais de atendimento do Dr. Jony
              </h3>
              <p className="text-sm leading-relaxed tracking-[0.2px] text-[var(--ds-color-text-muted)]">
                Endereços das duas unidades utilizadas para consultas, exames e acompanhamento.
              </p>
            </div>

            <div className="surface-card rounded-[18px] p-6">
              <h4 className="mb-2 font-['Poppins'] text-lg font-medium text-[var(--ds-color-brand-700)]">Dr. Jony Barbosa | Setor Aeroporto</h4>
              <div className="mb-2 flex items-center gap-2 font-medium text-[var(--ds-color-brand-700)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[var(--ds-color-brand-500)]" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <div className="flex flex-col">
                  <span>(62) 3224-5276</span>
                  <a href="https://api.whatsapp.com/send?phone=556296136640" target="_blank" rel="noopener noreferrer" className="flex items-center justify-start gap-1 underline decoration-[rgba(72,98,132,0.2)] underline-offset-2 transition-colors hover:text-[var(--ds-color-brand-500)]">
                    (62) 99613-6640 (WhatsApp)
                  </a>
                </div>
              </div>
              <p className="mb-1 text-sm leading-relaxed tracking-[0.2px] text-[var(--ds-color-text-muted)]">contato@fetalcenter.com.br</p>
              <p className="text-sm leading-relaxed tracking-[0.2px] text-[var(--ds-color-text-muted)]">Rua 3A, Policlínica São Luiz, 211 - St. Aeroporto, Goiânia - GO, 74075-090</p>
            </div>

            <div className="surface-card rounded-[18px] p-6">
              <h4 className="mb-2 font-['Poppins'] text-lg font-medium text-[var(--ds-color-brand-700)]">Dr. Jony Barbosa | Setor Bueno</h4>
              <div className="mb-2 flex items-center gap-2 font-medium text-[var(--ds-color-brand-700)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[var(--ds-color-brand-500)]" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                (62) 3070-5555
              </div>
              <p className="mb-1 text-sm leading-relaxed tracking-[0.2px] text-[var(--ds-color-text-muted)]">contato@fetalcentercentromedico.com.br</p>
              <p className="text-sm leading-relaxed tracking-[0.2px] text-[var(--ds-color-text-muted)]">Edificio Absolut Business Style - 2 Andar - Av. T-4, 1478 - St. Bueno, Goiânia - GO, 74230-030</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          <div className="surface-card lg:w-1/3 rounded-[18px] p-8">
            <h3 className="mb-4 flex items-center gap-2 font-['Poppins'] font-medium text-[var(--ds-color-brand-700)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              Horários
            </h3>
            <ul className="space-y-2 text-sm text-[var(--ds-color-text-muted)]">
              {businessHours.map((schedule) => (
                <li key={schedule.day} className={`flex justify-between ${schedule.isClosed ? 'font-medium text-[var(--ds-color-brand-500)]' : ''}`}>
                  <span>{schedule.day}:</span>
                  <span>{schedule.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card relative h-64 overflow-hidden rounded-[18px] lg:w-2/3">
            <iframe 
              src={defaultMapEmbedUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-[rgba(72,98,132,0.1)] pt-8 text-sm text-[var(--ds-color-text-muted)] md:flex-row">
          <div>
            <p className="mb-1 font-['Inter'] text-lg font-bold text-[var(--ds-color-brand-700)]">Dr. Jony Rodrigues Barbosa</p>
            <p>MÉDICO | CRM-GO 7652 | RQE 3900 (Ginecologia e Obstetrícia) | RQE 9229 (Ultrassonografia)</p>
            <p className="mt-1 text-xs">Responsável técnico pelo conteúdo médico deste site: Dr. Jony Rodrigues Barbosa (CRM-GO 7652).</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p>Copyright © 2025 Dr. Jony Rodrigues Barbosa</p>
          </div>
          <div className="mt-4 flex gap-4 md:mt-0">
            {socialLinks.map((social) => (
              <a key={social.platform} href={social.url} className="cursor-pointer hover:text-[var(--ds-color-brand-700)]" aria-label={social.platform}>
                {social.platform === 'instagram' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                )}
                {social.platform === 'facebook' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                )}
                {social.platform === 'youtube' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                    <polygon points="10 15 15 12 10 9 10 15"/>
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
