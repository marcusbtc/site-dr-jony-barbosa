import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif text-primary mb-8 font-bold">Como funciona o atendimento com o Dr. Jony?</h2>
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-2xl overflow-hidden shadow-2xl relative aspect-video">
          <iframe 
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/ie829MJ0BC0?si=G0K90b9mKHz0O7oG" 
            title="Dr. Jony Barbosa - Institucional" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
