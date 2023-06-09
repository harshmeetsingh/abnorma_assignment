import "./App.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import Dashboard from "./containers/Dashboard";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="my-App">
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    </div>
  );
}

export default App;
