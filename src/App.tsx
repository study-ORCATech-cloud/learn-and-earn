
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";
import LearningPathsPage from "./pages/LearningPathsPage";
import CoursesPage from "./pages/CoursesPage";
import LearningPathPage from "./pages/LearningPathPage";
import LearningPathDetailPage from "./pages/LearningPathDetailPage";
import CoursePage from "./pages/CoursePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import { UserProgressProvider } from "./context/UserProgressContext";
import { SearchProvider } from "./context/SearchContext";
import { useScrollToTop } from "./hooks/useScrollToTop";

const queryClient = new QueryClient();

const ScrollToTopWrapper = ({ children }: { children: React.ReactNode }) => {
  useScrollToTop();
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <UserProgressProvider>
        <SearchProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Router basename={import.meta.env.BASE_URL}>
              <ScrollToTopWrapper>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/learning-paths" element={<LearningPathsPage />} />
                  <Route path="/courses" element={<CoursesPage />} />
                  <Route path="/learning-path/:pathId" element={<LearningPathDetailPage />} />
                  <Route path="/course/:courseId" element={<CoursePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </ScrollToTopWrapper>
            </Router>
          </TooltipProvider>
        </SearchProvider>
      </UserProgressProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
