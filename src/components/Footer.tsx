import React from 'react';
import { contactInfo, businessHours, socialLinks } from '../data/site-data';
import type { ClinicLocation } from '../data/neighborhoods';

interface Props {
  clinic?: ClinicLocation;
}

const Footer: React.FC<Props> = ({ clinic }) => {
  const clinicName = clinic ? clinic.name : "Dr. Jony Rodrigues Barbosa Ginecologista e Obstetra em Goiânia";
  const mapUrlToDisplay = clinic ? clinic.mapEmbedUrl : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.0269040169446!2d-49.26921852485097!3d-16.675537084095318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef3c3787ab911%3A0x861f2a60dd5f0deb!2sDr.%20Jony%20Rodrigues%20Barbosa%20Ginecologista%20e%20Obstetra%20Goi%C3%A2nia!5e0!3m2!1spt-BR!2sbr!4v1773170528459!5m2!1spt-BR!2sbr";

  return (
    <footer id="contato" className="bg-slate-100 pt-20 pb-10 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-primary font-bold">{clinicName}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <h3 className="font-bold text-primary mb-4 text-xl">Navegação</h3>
            <ul className="space-y-2 text-slate-600">
              <li><a href="/" className="hover:text-secondary">Início</a></li>
              <li><a href="/sobre" className="hover:text-secondary">Sobre o Dr. Jony</a></li>
              <li><a href="/especialidades" className="hover:text-secondary">Especialidades</a></li>
              <li><a href="/exames" className="hover:text-secondary">Exames</a></li>
              <li><a href="/servicos" className="hover:text-secondary">Serviços e Cirurgias</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-bold text-primary mb-4 text-xl">Bairros Atendidos</h3>
            <ul className="space-y-2 text-slate-600">
              <li><a href="/localizacao/ginecologista-setor-bueno-goiania" className="hover:text-secondary">Setor Bueno</a></li>
              <li><a href="/localizacao/ginecologista-setor-marista-goiania" className="hover:text-secondary">Setor Marista</a></li>
              <li><a href="/localizacao/ginecologista-setor-sul-goiania" className="hover:text-secondary">Setor Sul</a></li>
              <li><a href="/localizacao/ginecologista-setor-oeste-goiania" className="hover:text-secondary">Setor Oeste</a></li>
              <li><a href="/localizacao/ginecologista-alphaville-flamboyant-goiania" className="hover:text-secondary">Alphaville Flamboyant</a></li>
            </ul>
          </div>

          {clinic ? (
            <div className="md:col-span-2 bg-blue-200/20 p-8 rounded-xl flex flex-col justify-start h-fit">
              <h3 className="font-bold text-primary mb-4 text-xl flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                 </svg>
                 {clinic.phone}
              </h3>
              <p className="text-slate-600 mb-2 font-medium">{contactInfo.email}</p>
              <p className="text-slate-500 text-sm tracking-wide leading-relaxed">{clinic.address}</p>
            </div>
          ) : (
            <div className="md:col-span-2 flex flex-col gap-4">
              <div className="bg-blue-200/20 p-6 rounded-xl">
                <h4 className="font-bold text-primary mb-2 text-lg">FetalCenter Medicina Fetal e Ultrassonografia Goiânia</h4>
                <div className="flex items-center gap-2 font-medium text-primary mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-secondary" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <div className="flex flex-col">
                    <span>(62) 3224-5276</span>
                    <a href="https://api.whatsapp.com/send?phone=556296136640" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-2 flex justify-start items-center gap-1">
                      (62) 99613-6640 (WhatsApp)
                    </a>
                  </div>
                </div>
                <p className="text-slate-500 text-sm tracking-wide leading-relaxed mb-1">contato@fetalcenter.com.br</p>
                <p className="text-slate-500 text-sm tracking-wide leading-relaxed">Rua 3A, Policlínica São Luiz, 211 - St. Aeroporto, Goiânia - GO, 74075-090</p>
              </div>

              <div className="bg-blue-200/20 p-6 rounded-xl">
                <h4 className="font-bold text-primary mb-2 text-lg">Fetalcenter Centro Médico Goiânia</h4>
                <div className="flex items-center gap-2 font-medium text-primary mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-secondary" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  (62) 3070-5555
                </div>
                <p className="text-slate-500 text-sm tracking-wide leading-relaxed mb-1">contato@fetalcentercentromedico.com.br</p>
                <p className="text-slate-500 text-sm tracking-wide leading-relaxed">Edificio Absolut Business Style - 2 Andar - Av. T-4, 1478 - St. Bueno, Goiânia - GO, 74230-030</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          <div className="lg:w-1/3 bg-slate-200/50 p-8 rounded-xl">
            <h3 className="flex items-center gap-2 font-bold text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              Horas:
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {businessHours.map((schedule) => (
                <li key={schedule.day} className={`flex justify-between ${schedule.isClosed ? 'font-bold text-slate-400' : ''}`}>
                  <span>{schedule.day}:</span>
                  <span>{schedule.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-2/3 h-64 bg-slate-300 rounded-xl overflow-hidden relative">
            <iframe 
              src={mapUrlToDisplay} 
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

        <div className="border-t border-slate-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <div>
            <p className="font-bold text-primary text-lg mb-1">Dr. Jony Rodrigues Barbosa</p>
            <p>MÉDICO | CRM-GO 7652 | RQE 3900 (Ginecologia e Obstetrícia) | RQE 9229 (Ultrassonografia)</p>
            <p className="mt-1 text-xs">Responsável técnico pelo conteúdo médico deste site: Dr. Jony Rodrigues Barbosa (CRM-GO 7652).</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p>Copyright © 2025 Dr. Jony Rodrigues Barbosa</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            {socialLinks.map((social) => (
              <a key={social.platform} href={social.url} className="hover:text-accent cursor-pointer" aria-label={social.platform}>
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
