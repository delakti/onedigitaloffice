import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';

// Core Pages (Lazy loaded for optimal code splitting & performance)
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Work = lazy(() => import('./pages/Work'));
const Insights = lazy(() => import('./pages/Insights'));
const Contact = lazy(() => import('./pages/Contact'));
const BookConsultationPage = lazy(() => import('./pages/BookConsultationPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Solutions Pages
const SolutionsHub = lazy(() => import('./pages/solutions/SolutionsHub'));
const Microsoft365Page = lazy(() => import('./pages/solutions/Microsoft365Page'));
const SharePointPage = lazy(() => import('./pages/solutions/SharePointPage'));
const CopilotPage = lazy(() => import('./pages/solutions/CopilotPage'));
const AIAgentsPage = lazy(() => import('./pages/solutions/AIAgentsPage'));
const PowerPlatformPage = lazy(() => import('./pages/solutions/PowerPlatformPage'));
const EnterpriseAppsPage = lazy(() => import('./pages/solutions/EnterpriseAppsPage'));
const AIGovernancePage = lazy(() => import('./pages/solutions/AIGovernancePage'));
const ManagedServicesPage = lazy(() => import('./pages/solutions/ManagedServicesPage'));

// Industries Pages
const IndustriesHub = lazy(() => import('./pages/industries/IndustriesHub'));
const FinancialServicesPage = lazy(() => import('./pages/industries/FinancialServicesPage'));
const EducationPage = lazy(() => import('./pages/industries/EducationPage'));
const PublicSectorPage = lazy(() => import('./pages/industries/PublicSectorPage'));
const ProfessionalServicesPage = lazy(() => import('./pages/industries/ProfessionalServicesPage'));

// Products Pages
const ProductsHub = lazy(() => import('./pages/products/ProductsHub'));
const ContractFlowAIPage = lazy(() => import('./pages/products/ContractFlowAIPage'));

const LoadingFallback = () => (
  <div 
    className="min-h-[70vh] flex flex-col items-center justify-center bg-background text-text-muted gap-3"
    role="status"
    aria-live="polite"
  >
    <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
    <span className="text-xs uppercase tracking-widest text-text-dim">Loading OneDigitalOffice...</span>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* Core Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/case-studies" element={<Navigate to="/work" replace />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-consultation" element={<BookConsultationPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

            {/* Solutions & Legacy Services Route Preservation */}
            <Route path="/solutions" element={<SolutionsHub />} />
            <Route path="/services" element={<SolutionsHub />} />
            <Route path="/solutions/microsoft-365" element={<Microsoft365Page />} />
            <Route path="/solutions/sharepoint" element={<SharePointPage />} />
            <Route path="/solutions/microsoft-copilot" element={<CopilotPage />} />
            <Route path="/solutions/ai-agents" element={<AIAgentsPage />} />
            <Route path="/solutions/power-platform" element={<PowerPlatformPage />} />
            <Route path="/solutions/enterprise-applications" element={<EnterpriseAppsPage />} />
            <Route path="/solutions/ai-governance" element={<AIGovernancePage />} />
            <Route path="/managed-services" element={<ManagedServicesPage />} />

            {/* Industries Hub & Sector Blueprints */}
            <Route path="/industries" element={<IndustriesHub />} />
            <Route path="/industries/financial-services" element={<FinancialServicesPage />} />
            <Route path="/industries/education" element={<EducationPage />} />
            <Route path="/industries/public-sector" element={<PublicSectorPage />} />
            <Route path="/industries/professional-services" element={<ProfessionalServicesPage />} />

            {/* Products Hub & Previews */}
            <Route path="/products" element={<ProductsHub />} />
            <Route path="/products/contractflow-ai" element={<ContractFlowAIPage />} />

            {/* 404 Catch-All Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
