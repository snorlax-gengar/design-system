import { useState, useEffect } from 'react';
import { LDSHeader } from './components/layout/LDSHeader';
import { LDSSidebar } from './components/layout/LDSSidebar';
import { LDSPageHeader } from './components/docs/LDSPageHeader';
import { LDSDownloadGrid } from './components/docs/LDSDownloadGrid';
import { LDSTabMenu, type LDSTabKey } from './components/docs/LDSTabMenu';
import { BrandStorySection } from './components/docs/BrandStorySection';
import { BrandAssetSection } from './components/docs/BrandAssetSection';
import { ColorSection } from './components/docs/ColorSection';
import { TypographySection } from './components/docs/TypographySection';
import { ElevationSpacingSection } from './components/docs/ElevationSpacingSection';
import { ButtonPlayground } from './components/docs/ButtonPlayground';
import { ComponentShowcaseSection } from './components/docs/ComponentShowcaseSection';
import { ShowcaseSection } from './components/docs/ShowcaseSection';
import { ExportGuideSection } from './components/docs/ExportGuideSection';
import { Footer } from './components/docs/Footer';
import { ExportModal } from './components/docs/ExportModal';
import { Check } from 'lucide-react';

export function App() {
  const [activeSection, setActiveSection] = useState('page-header');
  const [activeTab, setActiveTab] = useState<LDSTabKey>('all');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const handleNavigate = (id: string) => {
    setActiveSection(id);
    setMobileSidebarOpen(false);

    if (id === 'page-header') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Scrollspy to detect currently active section
  useEffect(() => {
    const sectionIds = [
      'page-header',
      'brand-story',
      'download-center',
      'brand-asset',
      'favicon-system',
      'colors',
      'typography',
      'elevation-spacing',
      'buttons',
      'form-controls',
      'toggles-checkboxes',
      'calendar-component',
      'badge-status',
      'quickstart',
      'showcase',
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const counts: Record<LDSTabKey, number> = {
    all: 9,
    components: 3,
    tokens: 3,
    code: 2,
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans selection:bg-[#E9D5FF] selection:text-[#581C87] flex flex-col">
      
      {/* 1. LDS Global Navigation Bar (Top Header) */}
      <LDSHeader 
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenExportModal={() => setIsExportModalOpen(true)}
        onToggleSidebarMobile={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        onSearchQuery={setSearchFilter}
      />

      {/* 2. Main Layout Shell (LNB Sidebar + Doc Canvas) */}
      <div className="flex-1 flex relative">
        
        {/* Left Navigation Bar (LNB - 270px) */}
        <LDSSidebar 
          activeSection={activeSection}
          onNavigate={handleNavigate}
          mobileOpen={mobileSidebarOpen}
          onCloseMobile={() => setMobileSidebarOpen(false)}
          searchFilter={searchFilter}
        />

        {/* Right Main Documentation Container */}
        <main className="flex-1 w-full lg:ml-[270px] min-h-[calc(100vh-84px)] bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-10 space-y-12">
            
            {/* LDS Signature: Page Header & System Spec Table */}
            <LDSPageHeader 
              onOpenExportModal={() => setIsExportModalOpen(true)}
              onExploreComponents={() => handleNavigate('buttons')}
            />

            {/* LDS Signature: 3-Column Asset Download Cards */}
            <LDSDownloadGrid onCopySuccess={showToast} />

            {/* LDS Signature: Underline Tab Menu */}
            <LDSTabMenu 
              activeTab={activeTab} 
              onTabChange={setActiveTab}
              counts={counts}
            />

            {/* Section Views based on activeTab */}
            <div className="space-y-14">
              
              {/* Tab: All or Tokens */}
              {(activeTab === 'all') && (
                <>
                  {/* Brand Story & Philosophy */}
                  <BrandStorySection />
                  
                  {/* Brand Vector Identity & Favicon */}
                  <BrandAssetSection onCopySuccess={showToast} />
                </>
              )}

              {/* Foundations (Colors, Typography, Elevation) */}
              {(activeTab === 'all' || activeTab === 'tokens') && (
                <>
                  <ColorSection onCopySuccess={showToast} />
                  <TypographySection />
                  <ElevationSpacingSection />
                </>
              )}

              {/* Components (Buttons, Controls, Apps) */}
              {(activeTab === 'all' || activeTab === 'components') && (
                <>
                  <ButtonPlayground onCopySuccess={showToast} />
                  <ComponentShowcaseSection onCopySuccess={showToast} />
                  <ShowcaseSection />
                </>
              )}

              {/* Developer Integration & Code */}
              {(activeTab === 'all' || activeTab === 'code') && (
                <ExportGuideSection onCopySuccess={showToast} />
              )}

            </div>

            {/* Footer */}
            <Footer />

          </div>
        </main>

      </div>

      {/* Full Export Modal */}
      <ExportModal 
        isOpen={isExportModalOpen} 
        onClose={() => setIsExportModalOpen(false)}
        onCopySuccess={showToast}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-[#0F172A] text-white rounded-xl shadow-2xl border border-[#334155] animate-bounce-in text-xs font-semibold">
          <Check className="w-4 h-4 text-[#10B981]" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}

export default App;
