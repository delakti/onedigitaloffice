import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Work = lazy(() => import('./pages/Work'));
const About = lazy(() => import('./pages/About'));
const Insights = lazy(() => import('./pages/Insights'));
const Contact = lazy(() => import('./pages/Contact'));

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-background text-white">
    Loading...
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
