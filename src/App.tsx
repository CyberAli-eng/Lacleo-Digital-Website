import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import CRM from "./pages/services/CRM";
import DataCenter from "./pages/services/DataCenter";
import DataEnrichment from "./pages/services/DataEnrichment";
import ECommerce from "./pages/services/ECommerce";
import EmailCampaign from "./pages/services/EmailCampaign";
import Enterprise from "./pages/services/Enterprise";
import ERP from "./pages/services/ERP";
import Financial from "./pages/services/Financial";
import ITSolutions from "./pages/services/ITSolutions";
import LogisticsSupply from "./pages/services/LogisticsSupply";
import ManufacturingDistribution from "./pages/services/ManufacturingDistribution";
import PaidAdvertising from "./pages/services/PaidAdvertising";
import PrePackedLists from "./pages/services/PrePackedLists";
import SDR from "./pages/services/SDR";
import SEO from "./pages/services/SEO";
import VirtualAssistance from "./pages/services/VirtualAssistance";
import AccountBasedMarketing from "./pages/services/AccountBasedMarketing";
import SaaS from "./pages/solutions/SaaS";
import SMB from "./pages/solutions/SMB";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          
          {/* Service Routes */}
          <Route path="/services/crm" element={<CRM />} />
          <Route path="/services/data-center" element={<DataCenter />} />
          <Route path="/services/data-enrichment" element={<DataEnrichment />} />
          <Route path="/services/ecommerce" element={<ECommerce />} />
          <Route path="/services/email-campaign" element={<EmailCampaign />} />
          <Route path="/services/enterprise" element={<Enterprise />} />
          <Route path="/services/erp" element={<ERP />} />
          <Route path="/services/financial" element={<Financial />} />
          <Route path="/services/it-solutions" element={<ITSolutions />} />
          <Route path="/services/logistics-supply" element={<LogisticsSupply />} />
          <Route path="/services/manufacturing-distribution" element={<ManufacturingDistribution />} />
          <Route path="/services/paid-advertising" element={<PaidAdvertising />} />
          <Route path="/services/pre-packed-lists" element={<PrePackedLists />} />
          <Route path="/services/sdr" element={<SDR />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/virtual-assistance" element={<VirtualAssistance />} />
          <Route path="/services/account-based-marketing" element={<AccountBasedMarketing />} />
          
          {/* Solution Routes */}
          <Route path="/solutions/saas" element={<SaaS />} />
          <Route path="/solutions/smb" element={<SMB />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
