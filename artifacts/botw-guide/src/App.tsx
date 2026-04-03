import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Nav from "@/components/Nav";
import Home from "@/pages/Home";
import MainQuest from "@/pages/MainQuest";
import Shrines from "@/pages/Shrines";
import DivineBeasts from "@/pages/DivineBeasts";
import KorokSeeds from "@/pages/KorokSeeds";
import Cooking from "@/pages/Cooking";
import Gear from "@/pages/Gear";
import Tips from "@/pages/Tips";
import InteractiveMap from "@/pages/Map";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/main-quest" component={MainQuest} />
          <Route path="/shrines" component={Shrines} />
          <Route path="/divine-beasts" component={DivineBeasts} />
          <Route path="/korok-seeds" component={KorokSeeds} />
          <Route path="/cooking" component={Cooking} />
          <Route path="/gear" component={Gear} />
          <Route path="/tips" component={Tips} />
          <Route path="/map" component={InteractiveMap} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, "") || ""}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
