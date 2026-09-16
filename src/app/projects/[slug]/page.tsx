import ProjectSidebar from '@/components/sections/ProjectSidebar';
...
export default async function ProjectDeepDive({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await prisma.project.findUnique({
    where: { slug },
  });

  if (!project || !project.published) {
    notFound();
  }

  // Cast JSON fields
  const highlights = (project.highlights as string[])?.filter(h => h && h.trim() !== '') || [];
  const specs = (project.specs as {label: string, value: string}[])?.filter(s => s.label && s.label.trim() !== '') || [];

  const hasBrief = !isContentEmpty(project.brief);
  const hasChallenge = !isContentEmpty(project.challenge);
  const hasSolution = !isContentEmpty(project.solution);

  return (
    <div className="pt-24 md:pt-32 font-inter bg-white">
      {/* 1. PROJECT HERO - Compact & Professional */}
      <section className="relative py-12 md:py-20 bg-slate-950 text-white overflow-hidden uppercase tracking-tighter">
        {project.heroImage && (
          <div className="absolute inset-0 z-0 opacity-40">
            <Image src={project.heroImage} alt={project.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-slate-950/90" />
          </div>
        )}

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 mb-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
             <Link href="/projects" className="hover:text-brand-400 transition-colors">Project Portfolio</Link>
             <span className="opacity-30">/</span>
             <span className="text-brand-500">{project.location}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
                {project.service && (
                  <span className="bg-brand-600 text-white text-[9px] font-black px-4 py-1.5 rounded-full tracking-widest shadow-lg shadow-brand-600/20">
                      {project.service}
                  </span>
                )}
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.05]">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="text-brand-500 text-xs md:text-sm font-black tracking-[0.2em] bg-brand-500/10 px-4 py-2 rounded-xl inline-block border border-brand-500/20">
                {project.subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 2. PROJECT CONTENT GRID */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

            {/* Left Content Column */}
            <div className="flex-grow lg:w-2/3 min-w-0">
              <div className="space-y-16 md:space-y-24">

                {/* Brief Section */}
                {hasBrief && (
                  <div className="space-y-8 animate-on-scroll is-visible">
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-3">
                           <div className="w-1.5 h-8 bg-brand-600 rounded-full" />
                           Project <span className="text-brand-600">Brief</span>
                        </h2>
                    </div>
                    <div className="article-content-shell">
                      <div
                        className="prose prose-content prose-slate prose-sm md:prose-base max-w-none text-left"
                        dangerouslySetInnerHTML={{ __html: normalizeRichText(project.brief) }}
                      />
                    </div>
                  </div>
                )}

                {/* Challenge & Solution Section */}
                {(hasChallenge || hasSolution) && (
                  <div className="grid md:grid-cols-2 gap-8">
                     {hasChallenge && (
                       <div className="space-y-6 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                          <h3 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-3">
                              <Zap className="w-5 h-5 text-brand-600" /> The Challenge
                          </h3>
                          <div
                            className="prose prose-content prose-slate prose-sm text-slate-600 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: normalizeRichText(project.challenge) }}
                          />
                       </div>
                     )}
                     {hasSolution && (
                       <div className="space-y-6 bg-green-50/30 p-8 rounded-3xl border border-green-100 shadow-sm">
                          <h3 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-3">
                              <ShieldCheck className="w-5 h-5 text-green-600" /> Our Solution
                          </h3>
                          <div
                            className="prose prose-content prose-slate prose-sm text-slate-600 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: normalizeRichText(project.solution) }}
                          />
                       </div>
                     )}
                  </div>
                )}

                {/* Highlights Section */}
                {highlights.length > 0 && (
                  <div className="bg-slate-950 p-10 md:p-16 rounded-[2.5rem] border border-white/5 space-y-10 shadow-2xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-80 h-80 bg-brand-600 rounded-full blur-[120px] opacity-10 -mr-20 -mt-20 group-hover:opacity-20 transition-opacity" />
                     <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter relative z-10">Technical <span className="text-brand-500">Highlights</span></h3>
                     <div className="grid sm:grid-cols-2 gap-4 md:gap-6 relative z-10">
                        {highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-500/30 transition-all">
                                <div className="w-5 h-5 bg-brand-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                    <CheckCircle className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-slate-300 font-bold uppercase tracking-tight text-[10px] md:text-xs leading-snug">{h}</span>
                            </div>
                        ))}
                     </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="w-full lg:w-1/3">
              <ProjectSidebar
                specs={specs}
                location={project.location || undefined}
                service={project.service || undefined}
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
